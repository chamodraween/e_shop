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
import Form from 'react-bootstrap/Form';


function createData(id, item_id, title, price, uname, email, uaddress, ucity, uzip, deletionDate, status) {
    return { id, uname, email, uaddress, ucity, uzip, deletionDate, title, item_id, price, status };
}

function DenseTable() {
    const [editedRows, setEditedRows] = useState({});
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://192.168.8.100:8006/api/v1/orders')
            .then(function (response) {
                console.log("order data: ", response.data);
                const initialEditedRows = {};
                setRows(response.data.map((item) => {
                    const status = item.deletionDate ? 'Delivered' : 'Not delivered yet';
                    initialEditedRows[item.id] = { status };
                    return createData(item.id, item.item_id, item.title, item.price, item.uname, item.email, item.uaddress, item.ucity, item.uzip, item.order_date,item.status);
                }));
                setEditedRows(initialEditedRows);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(()=> {
        console.log(rows)},[rows])

    const handleStatusChange = (id, newStatus) => {
        console.log(id, id, newStatus)
        axios
            .put(`http://192.168.8.100:8006/api/v1/orders/${id}`, { status: newStatus })
            .then(function (response) {
                // Update the status for the edited row
                setEditedRows((prevEditedRows) => ({
                    ...prevEditedRows,
                    [id]: { status: newStatus },
                }));
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
                        <TableCell>Order Id</TableCell>
                        <TableCell>Item Id</TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Zip</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell>#{index + 1}</TableCell>
                            <TableCell>{row.item_id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.uname}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.uaddress}</TableCell>
                            <TableCell>{row.ucity}</TableCell>
                            <TableCell>{row.uzip}</TableCell>
                            <TableCell>
                                {row.status === "Delivered" ? (
                                    'Delivered'
                                ) : (
                                    <Form.Select
                                        size="lg"
                                        value={editedRows[row.id]?.status || 'Not delivered yet'}
                                        onChange={(e) => {
                                            const newStatus = e.target.value;
                                            setEditedRows((prevEditedRows) => ({
                                                ...prevEditedRows,
                                                [row.id]: { status: newStatus },
                                            }));
                                            handleStatusChange(row.id, newStatus);
                                        }}
                                    >
                                        <option value="Delivered">Delivered</option>
                                        <option value="Not delivered yet">Not delivered yet</option>
                                    </Form.Select>
                                )}
                            </TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="delete"
                                    disabled={row.status === "Delivered"}
                                    color={row.status === "Delivered" ? 'primary' : 'default'}
                                    onClick={() => {
                                        console.log(row.status === 'Delivered' ? 'Item is delivered' : 'Item is not delivered');
                                        handleDelete(row.id);
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DenseTable;
