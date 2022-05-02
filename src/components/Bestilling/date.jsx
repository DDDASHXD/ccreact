import React, { useState, useeffect } from "react";
import { Title, NativeSelect, Text } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "../../style/bestilling/date.scss";

let datesTaken = [
  { date: 4, month: 4, year: 2022 },
  { date: 26, month: 5, year: 2022 },
  { date: 26, month: 5, year: 2023 },
];

const getAvaliableTimes = () => {
  let times = [];
  times.push("Vælg en tid");
  for (let i = 9; i < 17; i++) {
    times.push(`${i}:00`);
  }
  return times;
};

const Date = (props) => {
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);

  return (
    <section className="date section">
      <Title order={3}>Dato</Title>
      {/* <Calendar
        value={value}
        onChange={setValue}
        excludeDate={(date) => {
          date.getDay() === 0 || date.getDay() === 6;
          datesTaken.find(
            (item) =>
              item.date === date.getDate() && item.month === date.getMonth()
          );
        }}
      /> */}
      <div className="dateSelect">
        <Text>Vælg dag på måneden</Text>
        <Calendar
          value={value}
          onChange={setValue}
          excludeDate={(date) =>
            date.getDay() === 0 ||
            date.getDay() === 6 ||
            datesTaken.find(
              (item) =>
                item.date === date.getDate() &&
                item.month === date.getMonth() &&
                item.year === date.getFullYear()
            )
          }
          dayStyle={{ backgroundColor: "red", color: "white" }}
          className="calendar"
        />
      </div>

      <NativeSelect
        data={getAvaliableTimes()}
        placeholder="Vælg tid"
        label="Hvornår vil du have behandlingen?"
        description="Vælg en tid"
        onChange={(event) => setTimeValue(event.currentTarget.value)}
        required
      />
      <button onClick={() => console.log(value.getFullYear())}>aaa</button>
      <button onClick={() => console.log(timeValue)}>bbb</button>
    </section>
  );
};

export default Date;
