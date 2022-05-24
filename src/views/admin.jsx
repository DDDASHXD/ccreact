import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Title, Button, TextInput, PasswordInput } from "@mantine/core";
import axios from "axios";
import "../style/admin/admin.main.scss";

const Login = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const clickLogin = async (e) => {
    e.preventDefault();
    const res = await axios
      .get(
        `http://localhost:8080/login?email=${emailValue}&password=${passwordValue}`
      )
      .then((res) => {
        if (res.data.user.admin) {
          console.log("You are admin!");
          props.setAdmin(true);
        } else {
          console.log("You are not admin!");
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <Title order={2}>Administrator</Title>
        <form onSubmit={(e) => clickLogin(e)} className="login-form">
          <TextInput
            type="text"
            label="Brugernavn"
            placeholder="John Doe"
            order={1}
            required
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <PasswordInput
            label="Adgangskode"
            placeholder="••••••••••••"
            order={1}
            required
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Button className="adminView-btn" type="submit">
            Log ind
          </Button>
        </form>
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-wrapper">
        <Title order={2}>Administrator</Title>
      </div>
    </div>
  );
};

const AdminView = () => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="adminView">
      {admin ? (
        <>
          <Admin />
        </>
      ) : (
        <>
          <Login setAdmin={(bool) => setAdmin(bool)} />
        </>
      )}
    </div>
  );
};

export default AdminView;
