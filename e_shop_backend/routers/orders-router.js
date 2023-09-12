const express = require('express');
const router =  express.Router();

const { saveOrder, getOrders, updateOrders,deleteOrders} = require('../controller/orders-controllers')

router.get("/", getOrders);
router.post("/",saveOrder);
router.put("/", updateOrders);
router.delete("/:id", deleteOrders);

module.exports = router;