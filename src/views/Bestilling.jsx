import React, { useState, useEffect } from "react";
import { ScrollArea, Title, MantineProvider } from "@mantine/core";
import "../style/bestilling/main.scss";
import {
    getLocalUser,
    setLocalUser,
    removeLocalUser,
} from "../components/Bestilling/localstorage";

import Date from "../components/Bestilling/date";
import Info from "../components/Bestilling/info";
import Treatment from "../components/Bestilling/treatment";

// const response = await axios.get(
//   `https://ckapi.justdiv.studio/appointments?date=12&month=4&year=2022`
// );

const Bestilling = () => {
    const [treatment, setTreatment] = useState(0);

    const [formDate, setFormDate] = useState(null);
    const [formTime, setFormTime] = useState(null);

    const [nameValue, setNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [commentValue, setCommentValue] = useState("");

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const [loginModal, setLoginModal] = useState(false);

    useEffect(() => {
        const isUser = getLocalUser();
        if (isUser) {
            setUser(isUser);
            setLoggedIn(true);
        }
        console.log("a");
    }, [loggedIn, loginModal]);

    const signOut = () => {
        setUser(null);
        setLoggedIn(false);
        removeLocalUser();
    };

    return (
        <MantineProvider
            theme={{
                colors: {
                    brand: [
                        "#ebf7e9",
                        "#d1e2cd",
                        "#b7ceb0",
                        "#9ab892",
                        "#7fa474",
                        "#658b5b",
                        "#4e6c46",
                        "#374d30",
                        "#202f1b",
                        "#041101",
                    ],
                },
                primaryColor: "brand",
            }}
        >
            <ScrollArea>
                <div className="bestilling-wrapper">
                    <div className="header">
                        <Title>Bestilling</Title>
                        {loggedIn ? (
                            <button onClick={() => signOut()}>Log ud</button>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="grid">
                        <Treatment
                            setTreatment={(treatment) =>
                                setTreatment(treatment)
                            }
                            treatment={treatment}
                        />
                        <Date
                            setFormDate={(date) => setFormDate(date)}
                            setFormTime={(date) => setFormTime(date)}
                            formDate={formDate}
                        />
                        <Info
                            setNameValue={(value) => setNameValue(value)}
                            nameValue={nameValue}
                            setLastNameValue={(value) =>
                                setLastNameValue(value)
                            }
                            lastNameValue={lastNameValue}
                            setEmailValue={(value) => setEmailValue(value)}
                            emailValue={emailValue}
                            setPhoneValue={(value) => setPhoneValue(value)}
                            phoneValue={phoneValue}
                            setPassValue={(value) => setPassValue(value)}
                            passValue={passValue}
                            setCommentValue={(value) => setCommentValue(value)}
                            commentValue={commentValue}
                            loginModal={loginModal}
                            setLoginModal={(value) => setLoginModal(value)}
                            setUser={(user) => setUser(user)}
                            user={user}
                            loggedIn={loggedIn}
                            setLoggedIn={(value) => setLoggedIn(value)}
                            signOut={signOut}
                            formDate={formDate}
                            formTime={formTime}
                            treatment={treatment}
                        />
                    </div>
                </div>
            </ScrollArea>
        </MantineProvider>
    );
};

export default Bestilling;
