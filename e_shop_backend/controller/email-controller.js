const connection = require("../db/db-connection")

const nodemailer = require('nodemailer');
const dotenv = require('dotenv'); 
dotenv.config(); 


const transporter = nodemailer.createTransport({
  service: 'smtp.gmail.com', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD, 
  },
});

const sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: email,
    subject: 'Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Email not sent.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: 'Email sent successfully.' });
    }
  });
};

module.exports = { sendEmail };