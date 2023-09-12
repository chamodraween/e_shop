const express = require('express');
const router =  express.Router();

const {sendEmail} = require('../controller/email-controller')

router.post("/", sendEmail);

module.exports = router;