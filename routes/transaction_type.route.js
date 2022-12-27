const express = require('express')
const router = express.Router()
const transaction_typeController = require('../controllers/transaction_type.controller')
// const timeout = require('connect-timeout')

// Create a new transaction_type by transaction_type CreateBy
// router.post('/', transaction_typeController.create);

// update transaction_type by condition
// router.patch("/", transaction_typeController.update);

// Get transaction_type by condition
router.get("/", transaction_typeController.get);

// router.post("/problemByTag", transaction_typeController.getProblemByTag);


module.exports = router