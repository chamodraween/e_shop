const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 8006;

app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false }))


const card =require("./routers/card-router");
const orders =require("./routers/orders-router");

app.use('/api/v1/card', card)
app.use('/api/v1/orders', orders)
app.use('/api/v1/email', orders)


// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
