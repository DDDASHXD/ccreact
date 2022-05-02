import React, { useState, useEffect } from "react";
import { ScrollArea, Title } from "@mantine/core";
import "../style/bestilling/main.scss";

import Date from "../components/Bestilling/date";
import Info from "../components/Bestilling/info";
import Treatment from "../components/Bestilling/treatment";

const Bestilling = () => {
  useEffect(() => {
    console.log("kms");
  }, []);
  return (
    <ScrollArea>
      <div className="bestilling-wrapper">
        <div className="header">
          <Title>Bestilling</Title>
        </div>
        <div className="grid">
          <Treatment />
          <Date />
          <Info />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Bestilling;
