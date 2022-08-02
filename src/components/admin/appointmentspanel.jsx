import React, { useState, useEffect } from "react";
import {
    Title,
    Table,
    ActionIcon,
    Tooltip,
    LoadingOverlay,
    Modal,
    Button,
    Select,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Pencil, Trash, ArrowLeft, Clock } from "tabler-icons-react";
import axios from "axios";
import data from "../../assets/text.json";

import "../../style/admin/userspanel.scss";

const AppointmentsPanel = (props) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState({ editing: false });

    const [newOwner, setNewOwner] = useState(null);
    const [newTime, setNewTime] = useState(null);
    const [fullDate, setFullDate] = useState(null);
    const [newFullDate, setNewFullDate] = useState(new Date());

    const [takenTimes, setTakenTimes] = useState({ timesTaken: [] });

    const getUsers = async () => {
        await axios
            .get("https://ckapi.justdiv.studio/appointments/getAll")
            .then((res) => {
                setAppointments(res.data.allAppointments);
            });
    };

    useEffect(() => {
        getUsers();
        // setNewFullDate(new Date());
    }, []);

    const deleteAppointment = async (owner, date, month, year, time) => {
        try {
            await axios.delete(
                `https://ckapi.justdiv.studio/appointments/delete?owner=${owner}&date=${date}&month=${month}&year=${year}&time=${time}`
            );
            console.log("deleted");
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    const editAppointment = async (owner, date, month, year, time) => {
        setEditing({
            editing: true,
            owner: owner,
            date: date,
            month: month,
            year: year,
            time: time,
        });
        setNewOwner(owner);
        setNewTime(time);
        const newDate = new Date(year, month, date);
        setNewFullDate(newDate);
        // props.setAppointmentSize("md");
    };

    const getAvaliableTimes = (date, month, year) => {
        let times = [];
        for (let i = 9; i < 17; i++) {
            let disabled = false;
            if (takenTimes.timesTaken.includes(i) && i != editing.time) {
                times.push({ value: i, label: `${i}:00`, disabled: true });
            } else if (takenTimes.timesTaken.includes(i) && i == editing.time) {
                times.push({
                    value: i,
                    label: `Valgt nu: ${i}:00`,
                    disabled: false,
                });
            } else {
                times.push({ value: i, label: `${i}:00`, disabled: false });
            }
        }
        return times;
    };

    const saveChanges = () => {
        const { owner, date, month, year, time } = editing;
        const newDate = newFullDate.getDate();
        const newMonth = newFullDate.getMonth();
        const newYear = newFullDate.getFullYear();
        axios
            .post(
                `https://ckapi.justdiv.studio/appointments/update?qowner=${owner}&qdate=${date}&qmonth=${month}&qyear=${year}&qtime=${time}`,
                {
                    owner: newOwner,
                    date: newDate,
                    month: newMonth,
                    year: newYear,
                    time: newTime,
                }
            )
            .then(() => {
                setEditing({ editing: false });
                getUsers();
            });

        // props.setAppointmentSize("xl");
    };

    const refresh = () => {
        getUsers();
    };

    return (
        <div className="appointmentspanel">
            <Modal
                opened={editing.editing}
                onClose={() => setEditing({ editing: false })}
                withCloseButton={false}
            >
                <div className="edit">
                    <Title order={2} className="centerHoriz">
                        <Tooltip label="Gå tilbage">
                            <ActionIcon
                                onClick={() => {
                                    setEditing((editing.editing = false));
                                }}
                            >
                                <ArrowLeft />
                            </ActionIcon>
                        </Tooltip>
                        Redigering
                    </Title>
                    <DatePicker
                        label="Vælg ny dato"
                        placeholder={`Nuværende: ${editing.date} / ${editing.month} / ${editing.year}`}
                        value={newFullDate}
                        onChange={setNewFullDate}
                    />
                    <Select
                        label="Vælg nyt tidspunkt"
                        placeholder="Vælg en tid"
                        data={getAvaliableTimes(
                            newFullDate.getDate(),
                            newFullDate.getMonth(),
                            newFullDate.getFullYear()
                        )}
                        style={{ width: "100%" }}
                        className="timeSelect"
                        icon={<Clock size={16} />}
                        onChange={setNewTime}
                        defaultValue={editing.time}
                    />
                    <Button onClick={() => saveChanges()} className="button">
                        Save
                    </Button>
                </div>
            </Modal>

            <Title className="admin-title" order={1}>
                Bestilte tider
            </Title>
            <Table striped horizontalSpacing={"xl"}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Behandling</th>
                        <th>Dato</th>
                        <th>Tid</th>
                        <th>Kommentar</th>
                        <th>Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.owner}</td>
                            <td>{appointment.treatment}</td>
                            <td>
                                {appointment.date} / {appointment.month} /{" "}
                                {appointment.year}
                            </td>
                            <td>{appointment.time}:00</td>
                            <td>{appointment.comment}</td>
                            <td className="actions">
                                <Tooltip label="Rediger tid">
                                    <ActionIcon
                                        onClick={() =>
                                            editAppointment(
                                                appointment.owner,
                                                appointment.date,
                                                appointment.month,
                                                appointment.year,
                                                appointment.time
                                            )
                                        }
                                    >
                                        <Pencil />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Slet tid">
                                    <ActionIcon
                                        variant="filled"
                                        style={{ background: "#FA5252" }}
                                        onClick={() =>
                                            deleteAppointment(
                                                appointment.owner,
                                                appointment.date,
                                                appointment.month,
                                                appointment.year,
                                                appointment.time
                                            )
                                        }
                                    >
                                        <Trash color="white" />
                                    </ActionIcon>
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AppointmentsPanel;
