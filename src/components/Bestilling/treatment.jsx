import React, { useState, useeffect } from "react";
import { Title, ScrollArea } from "@mantine/core";
import "../../style/bestilling/treatment.scss";
import data from "../../assets/text.json";

const Treatment = (props) => {
  const [treatment, setTreatment] = useState(0);
  return (
    <>
      <ScrollArea className="treatment section">
        <Title order={3}>Behandling</Title>
        <div className="treatment-grid">
          {data.Behandlinger.map((item, index) => (
            <div
              className={`treatment-card ${
                treatment === item.behandlingId ? "active" : ""
              }`}
              onClick={() => setTreatment(item.behandlingId)}
              key={item.name}
            >
              <div className="treatment-card__header">
                <Title order={3}>{item.name}</Title>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default Treatment;
