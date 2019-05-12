'use-strict'

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const port = 3000;


let jsonParser = bodyParser.json();


app.listen(port, () => console.log("App running on port {{port}}"));

app.use(jsonParser);
app.use(cors());

app.route('/').get((req, res) => res.send("Hola mundo"));
app.route('/home').get((req, res) => console.log("Hola Mundo"));
app.route('/portions').get((req, res) => console.log("Hola Mundo"));
app.route('/plans').get((req, res) => console.log("Hola Mundo"));
app.route('/info').get((req, res) => console.log("Hola Mundo"));
app.route('/aboutUs').get((req, res) => console.log("Hola Mundo"));
app.route('/').get((req, res) => console.log("Hola Mundo"));



