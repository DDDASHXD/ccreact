import React, { useState, useeffect } from "react";
import {
  Title,
  TextInput,
  PasswordInput,
  NumberInput,
  Textarea,
  Loader,
  Tooltip,
} from "@mantine/core";
import {
  Forms,
  At,
  Hash,
  Lock,
  Message,
  QuestionMark,
} from "tabler-icons-react";
import "../../style/bestilling/info.scss";

const Info = (props) => {
  const [user, setUser] = useState(false);
  return (
    <section className="info section">
      <Title order={3}>Information</Title>
      <form className="infoForm">
        {user ? (
          <></>
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
              onChange={(event) =>
                props.setPhoneValue(event.currentTarget.value)
              }
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
          required
          className="input"
          size="md"
        />
      </form>
    </section>
  );
};

export default Info;