import React, { useState, useeffect, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getLocalUser, setLocalUser } from "./localstorage";
import {
  Title,
  TextInput,
  PasswordInput,
  NumberInput,
  Textarea,
  Tooltip,
  Modal,
  Button,
  Loader,
} from "@mantine/core";
import {
  Forms,
  At,
  Hash,
  Lock,
  Message,
  QuestionMark,
  Disabled,
  Check,
  AlertCircle,
} from "tabler-icons-react";
import "../../style/bestilling/info.scss";
import Appointments from "./appointments";

const Info = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [infoFilled, setInfoFilled] = useState(true);
  const [completeModal, setCompleteModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [viewAppointments, setViewAppointments] = useState(false);
  const [appointmentSize, setAppointmentSize] = useState("xl");

  useEffect(() => {
    if (!props.loggedIn) {
      if (
        props.formDate == null ||
        props.formTime == null ||
        props.nameValue === "" ||
        props.lastNameValue === "" ||
        props.emailValue === "" ||
        props.phoneValue === "" ||
        props.passValue === ""
      ) {
        setInfoFilled(false);
      } else {
        console.log(infoFilled);
        setInfoFilled(true);
      }
    } else {
      setInfoFilled(true);
    }
  }, [
    props.formDate,
    props.formTime,
    props.nameValue,
    props.lastNameValue,
    props.emailValue,
    props.phoneValue,
    props.passValue,
  ]);

  const clickSubmit = async () => {
    if (!props.loggedIn) {
      try {
        await axios.post("http://localhost:8080/login", {
          name: props.nameValue,
          surname: props.lastNameValue,
          email: props.emailValue,
          phone: props.phoneValue.toString(),
          password: props.passValue,
        });
        setCompleteModal(true);
        console.log("Successfully created user.");
        try {
          await axios
            .post("http://localhost:8080/appointments", {
              owner: props.emailValue,
              date: props.formDate.getDate(),
              month: props.formDate.getMonth(),
              year: props.formDate.getFullYear(),
              time: props.formTime,
              comment: props.commentValue,
              treatment: props.treatment,
            })
            .then(() => {
              setTimeout(() => setSuccess(true), 1000);
            });
        } catch (error) {
          console.log(error);
          setTimeout(() => setError(true), 1000);
        }
      } catch (error) {
        console.log("Something went wrong. " + error);
        setCompleteModal(true);
        setTimeout(() => setError(true), 1000);
      }
    } else {
      setCompleteModal(true);
      try {
        console.log(getLocalUser().email);
        await axios
          .post("http://localhost:8080/appointments", {
            owner: getLocalUser().email,
            date: props.formDate.getDate(),
            month: props.formDate.getMonth(),
            year: props.formDate.getFullYear(),
            time: props.formTime,
            comment: props.commentValue,
            treatment: props.treatment,
          })
          .then(() => {
            setTimeout(() => setSuccess(true), 1000);
          });
      } catch (error) {
        console.log(error);
        setTimeout(() => setError(true), 1000);
      }
    }
  };

  const clickLogin = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const res = await axios.get(
        `http://localhost:8080/login?email=${emailValue}&password=${passwordValue}`
      );
      console.log("Logged in!");
      const user = res.data.user;
      setLocalUser(user);
      props.setUser(getLocalUser());
      props.setLoginModal(false);
    } catch {
      console.log("Email or password incorrect");
    }
  };

  return (
    <section className="info section">
      <Modal
        centered
        opened={props.loginModal}
        onClose={() => props.setLoginModal(false)}
        title="Log ind"
        overlayBlur={3}
        overlayOpacity={0.2}
        className="login-modal"
      >
        <form onSubmit={(e) => clickLogin(e)}>
          <div className="login-wrapper">
            <TextInput
              placeholder="john@doe.com"
              onChange={(event) => setEmailValue(event.target.value)}
              label="Email addresse"
            />
            <PasswordInput
              placeholder="*********"
              onChange={(event) => setPasswordValue(event.target.value)}
              label="Adgangskode"
            />
            <Button type="submit" className="bestilling-button">
              Log ind
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        centered
        opened={completeModal}
        onClose={() => document.location.reload()}
        title="Bestilling"
        overlayBlur={3}
        overlayOpacity={0.2}
        className="login-modal"
      >
        <div className="login-wrapper">
          {success == true ? (
            <Title order={2} className="bestillingSuccess">
              <Check size={30} />
              Din bestilling er sendt!
            </Title>
          ) : error == true ? (
            <>
              <Title order={2} className="bestillingSuccess">
                <AlertCircle size={30} />
                Noget gik galt!
              </Title>
              <Title order={3}>Prøv igen senere...</Title>
              <Button
                onClick={() => document.location.reload()}
                style={{ color: "white!important" }}
              >
                Genindlæs
              </Button>
            </>
          ) : (
            <>
              <Title order={2} className="bestillingSuccess">
                <Loader /> Sender din bestilling...
              </Title>
            </>
          )}
        </div>
      </Modal>

      <Modal
        centered
        opened={viewAppointments}
        onClose={() => setViewAppointments(false)}
        title="Dine tider"
        overlayBlur={3}
        overlayOpacity={0.2}
        className="login-modal"
        size={appointmentSize}
      >
        <Appointments
          viewAppointments={viewAppointments}
          appointmentSize={appointmentSize}
          setAppointmentSize={(size) => setAppointmentSize(size)}
        />
      </Modal>

      <Title order={3}>Information</Title>
      <form className="infoForm">
        {props.loggedIn ? (
          <div className="loggedIn">
            <p className="username">Hej {props.user.name}!</p>
            <p>
              Er det ikke dig? så{" "}
              <span className="formLink" onClick={() => props.signOut()}>
                log ud
              </span>
            </p>
            <p>
              <span
                className="formLink"
                onClick={() => setViewAppointments(true)}
              >
                Se dine tider
              </span>
            </p>
          </div>
        ) : (
          <>
            <TextInput
              onChange={(event) =>
                props.setNameValue(event.currentTarget.value)
              }
              placeholder="John"
              label="Fornavn"
              description="Hvad er dit navn?"
              icon={<Forms size={13} />}
              required
              className="input"
              size="md"
            />
            <TextInput
              onChange={(event) =>
                props.setLastNameValue(event.currentTarget.value)
              }
              placeholder="Smith"
              label="Efternavn"
              description="Hvad er dit efternavn?"
              icon={<Forms size={13} />}
              required
              className="input"
              size="md"
            />
            <TextInput
              onChange={(event) =>
                props.setEmailValue(event.currentTarget.value)
              }
              placeholder="johnsmith@domæne.dk"
              label="Email"
              description="Email adresse bruger vi til, at du senere kan logge ind"
              icon={<At size={13} />}
              required
              className="input"
              size="md"
              rightSection={
                <Tooltip withArrow label="Vi sender ikke spam">
                  <QuestionMark size={15} />
                </Tooltip>
              }
            />
            <NumberInput
              onChange={(val) => props.setPhoneValue(val)}
              placeholder="12 34 56 78"
              label="Telefonnummer"
              description="Hvordan kommer jeg i kontakt med dig?"
              hideControls
              icon={<Hash size={13} />}
              required
              className="input"
              size="md"
            />
            <PasswordInput
              onChange={(event) =>
                props.setPassValue(event.currentTarget.value)
              }
              placeholder="********"
              label="Adgangskode"
              description="Husk din adgangskode, så du senere kan se dine tider"
              icon={<Lock size={13} />}
              required
              className="input"
              size="md"
              rightSection={
                <Tooltip
                  withArrow
                  label="Vi laver en konto til dig, så du senere kan se dine tider"
                >
                  <QuestionMark size={15} />
                </Tooltip>
              }
            />
          </>
        )}
        <Textarea
          onChange={(event) => props.setCommentValue(event.currentTarget.value)}
          placeholder="Din kommentar"
          label="Kommentar"
          description="Er der noget ekstra, jeg skal vide?"
          icon={<Message size={13} />}
          // required
          className="input"
          size="md"
        />
        <Button
          className="bestilling-button"
          onClick={() => clickSubmit()}
          disabled={infoFilled ? false : true}
        >
          {" "}
          Send bestilling
        </Button>
        {!props.loggedIn ? (
          <p className="preUser">
            Har du allerede en konto?{" "}
            <span
              className="formLink"
              onClick={() => props.setLoginModal(true)}
            >
              Så log ind her
            </span>
          </p>
        ) : (
          <></>
        )}
      </form>
    </section>
  );
};

export default Info;
