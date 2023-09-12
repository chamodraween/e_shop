import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Alert from '@mui/material/Alert';
import {shippingCost} from "../../constants.js";


function BuyerInfoForm({item}) {
    /*const [id, setId] = useState([]);*/
    const [uname, setUname] = useState('');
    const [uaddress, setUaddress] = useState('');
    const [ucity, setUcity] = useState('');
    const [uzip, setUzip] = useState('');
    const {title, price,id} = item;

    const postData = () => {

        axios
            .post('http://192.168.8.100:8006/api/v1/orders', {

                uname: uname,
                uaddress: uaddress,
                ucity: ucity,
                uzip: uzip,
                item_id: id,
                title : title,
                price: parseFloat(price) + shippingCost

            })
            .then(function (response) {
                console.log(response);
                // You may want to handle the response or reset the form here
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    const [buyerInfo, setBuyerInfo] = useState({
        name: "",
        address: "",
        city: "",
        zipCode: "",
    });

   /* const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo({ ...buyerInfo, [name]: value });
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSubmit(buyerInfo);
        setBuyerInfo({
            name: "",
            address: "",
            city: "",
            zipCode: "",
        });
    };


    const [showAlert, setShowAlert] = React.useState(false);

    const handleButtonClick = () => {
        setShowAlert(true);

        // Optionally, you can set a timer to hide the alert after a certain time
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); // Hide the alert after 5 seconds (adjust as needed)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ship to</h1>
            <TextField
                onChange={(event) => { setUname(event.target.value) }}
                sx={{ marginY: 1, width: '100%' }}
                label="Full Name"
                placeholder="Enter You Full Name"
                variant="outlined" />
            <TextField
                onChange={(event) => { setUaddress(event.target.value) }}
                sx={{ marginY: 1, width: '100%' }}
                label="Address"
                placeholder="Enter You Address"
                variant="outlined" />
            <TextField
                onChange={(event) => { setUcity(event.target.value) }}
                sx={{ marginY: 1, width: '100%' }}
                label="City"
                placeholder="Enter You Ctiy"
                variant="outlined" />
            <TextField
                onChange={(event) => { setUzip(event.target.value) }}
                sx={{ marginY: 1, width: '100%' }}
                label="Zip"
                placeholder="Enter You Zip"
                variant="outlined" />
            <div>
                <Button
                    onClick={() => {
                        handleButtonClick();
                        postData();
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "16px" }}
                >
                    Order Now
                </Button>
                {showAlert && (
                    <Alert sx={{ marginY: 3}} severity="success" color="info">
                        Your order has been successfully completed !
                    </Alert>
                )}
            </div>

        </form>
    );
}

export default BuyerInfoForm;
