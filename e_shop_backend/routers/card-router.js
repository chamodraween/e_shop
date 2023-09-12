const express = require('express');
const router =  express.Router();

const { saveCard, getCard, updateCard,deleteCard} = require('../controller/card-controller')

router.get("/", getCard);
router.post("/",saveCard);
router.put("/", updateCard);
router.delete("/:id", deleteCard);

module.exports = router;