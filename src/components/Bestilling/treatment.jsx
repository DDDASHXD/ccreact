import React, { useState, useeffect } from "react";
import { Title } from "@mantine/core";
import "../../style/bestilling/treatment.scss";
import data from "../../assets/text.json";

const Treatment = (props) => {
  return (
    <section className="treatment section">
      <Title order={3}>Behandling</Title>
      <div className="content">
        {data.Behandlinger.map((item, index) => (
          <p>{item.name}</p>
        ))}
      </div>
    </section>
  );
};

export default Treatment;
