import React, { useState, useEffect } from "react";
import { Title, NativeSelect, Text, Select, Indicator } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { Clock } from "tabler-icons-react";
import axios from "axios";
import "dayjs/locale/da";
import "../../style/bestilling/date.scss";

let datesTaken = [
    { date: 4, month: 4, year: 2022, timesTaken: [12, 15, 10] },
    { date: 26, month: 5, year: 2022, timesTaken: [12, 15, 10] },
    { date: 26, month: 5, year: 2023, timesTaken: [12, 15, 10] },
    { date: 25, month: 4, year: 2022, timesTaken: [12, 15, 10] },
    { date: 13, month: 4, year: 2022, timesTaken: [12, 10] },
];

const Date = (props) => {
    const [value, setValue] = useState(null);
    const [timeValue, setTimeValue] = useState(null);
    const [takenTimes, setTakenTimes] = useState({ timesTaken: [] });

    useEffect(() => {
        if (props.formDate != null) {
            const getTimes = async () => {
                const response = await axios.get(
                    `https://ckapi.justdiv.studio/appointments?date=${props.formDate.getDate()}&month=${props.formDate.getMonth()}&year=${props.formDate.getFullYear()}`
                );
                setTakenTimes(response.data);
            };
            getTimes();
        }
    }, [props.formDate]);

    const getAvaliableTimes = (date, month, year, lol) => {
        let times = [];
        for (let i = 9; i < 17; i++) {
            let disabled = false;
            // datesTaken.forEach((item) => {
            //   if (item.date === date && item.month === month && item.year === year) {
            //     if (item.timesTaken.includes(i)) {
            //       disabled = true;
            //     }
            //   }
            // });'
            if (takenTimes.timesTaken.includes(i)) {
                disabled = true;
            }
            times.push({ value: i, label: `${i}:00`, disabled: disabled });
        }
        return times;
    };

    return (
        <section className="date section">
            <Title order={3}>Dato</Title>
            <div className="dateSelect">
                <Text>Vælg dag på måneden</Text>
                <Calendar
                    size="lg"
                    value={props.formDate}
                    onChange={props.setFormDate}
                    hideOutsideDates={true}
                    className="calendar"
                    locale="da"
                />
            </div>
            <Select
                label="Hilken tid vil du have behandlingen?"
                description="De grå tider, er allerede optaget."
                placeholder="Vælg en tid"
                data={
                    props.formDate === null
                        ? []
                        : getAvaliableTimes(
                              props.formDate.getDate(),
                              props.formDate.getMonth(),
                              props.formDate.getFullYear(),
                              props.formDate
                          )
                }
                size="md"
                className="timeSelect"
                icon={<Clock size={16} />}
                onChange={props.setFormTime}
                error={
                    props.formDate == null ? (true, "Vælg dato først") : false
                }
                disabled={props.formDate == null ? true : false}
            />
        </section>
    );
};

export default Date;
