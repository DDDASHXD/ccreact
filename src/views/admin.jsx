import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Title, Button, TextInput, PasswordInput, Table } from "@mantine/core";
import axios from "axios";
import { Users, CalendarEvent, Settings } from "tabler-icons-react";
import "../style/admin/admin.main.scss";

import UsersPanel from "../components/admin/userspanel";
import AppointmentsPanel from "../components/admin/appointmentspanel";

const Login = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const clickLogin = async (e) => {
        e.preventDefault();
        const res = await axios
            .get(
                `https://ckapi.justdiv.studio/login?email=${emailValue}&password=${passwordValue}`
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
    const [activePage, setActivePage] = useState("Brugere");

    const links = [
        { icon: <Users />, name: "Brugere" },
        { icon: <CalendarEvent />, name: "Bestilte tider" },
        { icon: <Settings />, name: "Indstillinger" },
    ];

    return (
        <div className="admin">
            <div className="nav">
                <div className="nav-header">
                    <Title order={2}>Administrator</Title>
                </div>
                <ul className="nav-links">
                    {links.map((link, index) => (
                        <div
                            className={`nav-links-item ${
                                activePage === link.name ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => setActivePage(link.name)}
                        >
                            {link.icon} {link.name}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="content">
                {activePage === "Brugere" ? (
                    <UsersPanel />
                ) : activePage === "Bestilte tider" ? (
                    <AppointmentsPanel />
                ) : activePage === "Indstillinger" ? (
                    <UsersPanel />
                ) : null}
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
