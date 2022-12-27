const express = require('express')
const router = express.Router()
const accountController = require('../controllers/account.controller')
// const timeout = require('connect-timeout')

// Create a new account by accountCreateBy
// router.post('/', accountController.create);

// update account by condition
// router.patch("/", accountController.update);

// Get account by condition
router.get("/", accountController.get);

// router.post("/problemByTag", accountController.getProblemByTag);


module.exports = router