import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import AxiosInstance from "../../server/axiosInstance/axiosInstance.js";

function createData(id, uname, email, uaddress, ucity, uzip,) {
    return { id, uname, email, uaddress, ucity, uzip,};
}


function UserTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
        AxiosInstance.get('/api/v1/orders')
            .then(function (response) {
                setRows(response.data.map((item) => createData(item.id, item.uname, item.email, item.uaddress, item.ucity, item.uzip)));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
/*
    const handleDelete = (id) => {
        axios
        AxiosInstance.delete(`/api/v1/orders/${id}`)
            .then(function (response) {
                // Update the deletionDate for the deleted row
                setRows((prevRows) =>
                    prevRows.map((row) =>
                        row.id === id ? { ...row, deletionDate: new Date() } : row
                    )
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };*/

    return (
        <TableContainer component={Paper}>
            <div style={{ maxHeight: 483.5, overflow: 'auto' }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Zip</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell>#{index + 1}</TableCell>
                                <TableCell>{row.uname}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.uaddress}</TableCell>
                                <TableCell>{row.ucity}</TableCell>
                                <TableCell>{row.uzip}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </TableContainer>

    );
}

export default UserTable;
