import React, { useState, useEffect } from "react";
import {
  Title,
  Table,
  Skeleton,
  ActionIcon,
  Tooltip,
  TextInput,
  Button,
  Select,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Pencil, Tool, Trash, ArrowLeft, Clock } from "tabler-icons-react";
import axios from "axios";
import { getLocalUser } from "./localstorage";
import data from "../../assets/text.json";

import "../../style/bestilling/appointments.scss";

const lmao = 2;

const Appointments = (props) => {
  const [appointments, setAppointments] = useState({ userAppointments: [] });
  const [doneLoading, setDoneLoading] = useState(false);
  const [editing, setEditing] = useState({ editing: false });

  const [newOwner, setNewOwner] = useState(null);
  const [newTime, setNewTime] = useState(null);
  const [fullDate, setFullDate] = useState(null);
  const [newFullDate, setNewFullDate] = useState(null);

  const [takenTimes, setTakenTimes] = useState({ timesTaken: [] });

  const deleteAppointment = async (owner, date, month, year, time) => {
    try {
      await axios.delete(
        `http://localhost:8080/appointments/delete?owner=${owner}&date=${date}&month=${month}&year=${year}&time=${time}`
      );
      setDoneLoading(false);
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const getAvaliableTimes = (date, month, year) => {
    let times = [];
    for (let i = 9; i < 17; i++) {
      let disabled = false;
      if (takenTimes.timesTaken.includes(i) && i != editing.time) {
        times.push({ value: i, label: `${i}:00`, disabled: true });
      } else if (takenTimes.timesTaken.includes(i) && i == editing.time) {
        times.push({ value: i, label: `Valgt nu: ${i}:00`, disabled: false });
      } else {
        times.push({ value: i, label: `${i}:00`, disabled: false });
      }
    }
    return times;
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
    props.setAppointmentSize("md");
  };

  const saveChanges = () => {
    const { owner, date, month, year, time } = editing;
    const newDate = newFullDate.getDate();
    const newMonth = newFullDate.getMonth();
    const newYear = newFullDate.getFullYear();
    axios
      .post(
        `http://localhost:8080/appointments/update?qowner=${owner}&qdate=${date}&qmonth=${month}&qyear=${year}&qtime=${time}`,
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
        setDoneLoading(false);
      });
  };

  useEffect(() => {
    if (!doneLoading) {
      const getData = async () => {
        try {
          const response = await axios
            .get(
              `http://localhost:8080/appointments/user?owner=${
                getLocalUser().email
              }`
            )
            .then((data) => {
              setAppointments(data.data.userAppointments);
              setDoneLoading(true);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (e) {
          console.log(e);
        }
      };
      getData();
    } else {
      const getTimes = async () => {
        const response = await axios.get(
          `http://localhost:8080/appointments?date=${newFullDate.getDate()}&month=${newFullDate.getMonth()}&year=${newFullDate.getFullYear()}`
        );
        console.log(response.data.timesTaken);
        setTakenTimes(response.data);
      };
      getTimes();
    }
  }, [props.viewAppointments, doneLoading, newFullDate]);

  return (
    <div className="appointments">
      {!editing.editing ? (
        <>
          <Title order={2}>Overblik</Title>
          <Table>
            <thead>
              <tr>
                <th>Behandling</th>
                <th>Dato</th>
                <th>Tidspunkt</th>
                <th>Handlinger</th>
              </tr>
            </thead>
            <tbody>
              {doneLoading ? (
                <>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{data.Behandlinger[appointment.treatment].name}</td>
                      <td>
                        {appointment.date} / {appointment.month + 1} /{" "}
                        {appointment.year}
                      </td>
                      <td>{appointment.time}:00</td>
                      <td class="actions">
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
                </>
              ) : (
                <>
                  <tr>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                    <td>
                      <Skeleton height={15} mt={6} width="100%" radius="xl" />
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <div className="edit">
            <Title order={2} className="centerHoriz">
              <Tooltip label="Gå tilbage">
                <ActionIcon
                  onClick={() => {
                    setEditing((editing.editing = false));
                    props.setAppointmentSize("xl");
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
        </>
      )}
    </div>
  );
};

export default Appointments;
