const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction.controller')
// const timeout = require('connect-timeout')

// Create a new transaction by transactionCreateBy
// router.post('/', transactionController.create);

// update transaction by condition
// router.patch("/", transactionController.update);

// Get transaction by condition
router.get("/", transactionController.get);

// router.post("/problemByTag", transactionController.getProblemByTag);


module.exports = router