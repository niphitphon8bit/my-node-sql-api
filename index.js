require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createError = require("http-errors");
const connection = require('./database');

const accountRoute = require("./routes/account.route");
const transactionRoute = require("./routes/transaction.route");
const transactionTypeRoute = require("./routes/transaction_type.route");

app.use("/account", accountRoute);
app.use("/transaction", transactionRoute);
app.use("/transactionType", transactionTypeRoute);


// app.get('/', (req, res) => res.send('Try: /status, /warehouses, or /warehouses/2'));

// app.get('/status', (req, res) => res.send('Success.'));


app.listen(8080, () => console.log('App is running at: http://localhost:8080'));