import React, { useState, useEffect } from "react";
import { ScrollArea, Title, MantineProvider } from "@mantine/core";
import "../style/bestilling/main.scss";

import Date from "../components/Bestilling/date";
import Info from "../components/Bestilling/info";
import Treatment from "../components/Bestilling/treatment";

const Bestilling = () => {
  const [formTreatment, setFormTreatment] = useState(null);
  const [formDate, setFormDate] = useState(null);
  const [formTime, setFormTime] = useState(null);

  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {}, []);
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
          </div>
          <div className="grid">
            <Treatment
              setFormDate={(date) => setFormDate(date)}
              setFormTime={(date) => setFormTime(date)}
              formDate={formDate}
            />
            <Date
              setFormDate={(date) => setFormDate(date)}
              setFormTime={(date) => setFormTime(date)}
              formDate={formDate}
            />
            <Info
              setNameValue={(value) => setNameValue(value)}
              setLastNameValue={(value) => setLastNameValue(value)}
              setEmailValue={(value) => setEmailValue(value)}
              setPhoneValue={(value) => setPhoneValue(value)}
              setPassValue={(value) => setPassValue(value)}
              setCommentValue={(value) => setCommentValue(value)}
              loginModal={loginModal}
              setLoginModal={(value) => setLoginModal(value)}
            />
          </div>
        </div>
      </ScrollArea>
    </MantineProvider>
  );
};

export default Bestilling;
