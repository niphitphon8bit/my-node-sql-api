require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.get('/', (req, res) => res.send('Try: /status, /warehouses, or /warehouses/2'));

app.get('/status', (req, res) => res.send('Success.'));

// app.get('/', (req, res) => res.send('Hello world.'));
app.get('/account', (req, res) => {
    connection.query(
        "SELECT * FROM `wally-money-20`.`wm_account`",
        (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        }
    );
});

app.route('/account/:ac_id')
    .get((req, res, next) => {
        connection.query(
            "SELECT * FROM `wally-money-20`.`wm_account` WHERE ac_id = ?", req.params.ac_id,
            (error, results, fields) => {
                if (error) throw error;
                res.json(results);
            }
        );
    });

app.listen(8080, () => console.log('App is running at: http://localhost:8080'));