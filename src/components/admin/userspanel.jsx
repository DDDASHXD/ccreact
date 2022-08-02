import React, { useState, useEffect } from "react";
import { Title, Table, ActionIcon, Tooltip } from "@mantine/core";
import { Pencil, Trash } from "tabler-icons-react";
import axios from "axios";

import "../../style/admin/userspanel.scss";

const UsersPanel = (props) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await axios
            .get("https://ckapi.justdiv.studio/login/getAllUsers")
            .then((res) => {
                setUsers(res.data.users);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (email) => {
        try {
            await axios.delete(
                `https://ckapi.justdiv.studio/login/delete?email=${email}`
            );
            console.log("deleted");
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="userspanel">
            <Title className="admin-title" order={1}>
                Brugere
            </Title>
            <Table striped horizontalSpacing={"xl"}>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Efternavn</th>
                        <th>Email</th>
                        <th>Telefon nummer</th>
                        <th>Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td className="actions">
                                <Tooltip withArrow label="Rediger">
                                    <ActionIcon color="green">
                                        <Pencil />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip withArrow label="Slet">
                                    <ActionIcon
                                        variant="filled"
                                        color="red"
                                        onClick={() => deleteUser(user.email)}
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

export default UsersPanel;
