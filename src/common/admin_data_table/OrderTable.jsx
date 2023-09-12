import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(id, uname, uaddress, ucity, uzip, deletionDate) {
    return { id, uname, uaddress, ucity, uzip, deletionDate };
}


function OrderTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://192.168.8.100:8006/api/v1/orders')
            .then(function (response) {
                setRows(response.data.map((item) => createData(item.id, item.uname, item.uaddress, item.ucity, item.uzip)));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://192.168.8.100:8006/api/v1/orders/${id}`)
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
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Zip</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.uname}</TableCell>
                            <TableCell>{row.uaddress}</TableCell>
                            <TableCell>{row.ucity}</TableCell>
                            <TableCell>{row.uzip}</TableCell>
                            <TableCell>
                                {row.deletionDate ? (
                                    new Date(row.deletionDate).toLocaleString()
                                ) : (
                                    <IconButton
                                        color="#0f75bc"
                                        onClick={() => handleDelete(row.id)}
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrderTable;
