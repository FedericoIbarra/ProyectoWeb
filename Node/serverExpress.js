'use-strict'

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const port = 3000;

let azucares = JSON.parse(fs.readFileSync('azucares.json'));
let carnesACG = JSON.parse(fs.readFileSync('carnesAltoContenidoGrasas.json'));
let carnesMCG = JSON.parse(fs.readFileSync('carnesMedioContenidoGrasas.json'));
let carnesBCG = JSON.parse(fs.readFileSync('carnesBajoContenidoGrasas.json'));
let cereales = JSON.parse(fs.readFileSync('cereales.json'));
let frutasACF = JSON.parse(fs.readFileSync('frutasAltoContenidoFibra.json'));
let frutasMCF = JSON.parse(fs.readFileSync('frutasMedioContenidoFibra.json'));
let frutasBCF = JSON.parse(fs.readFileSync('frutasBajoContenidoFibra.json'));
let grasas = JSON.parse(fs.readFileSync('grasas.json'));
let jugos = JSON.parse(fs.readFileSync('jugos.json'));
let lacteos = JSON.parse(fs.readFileSync('lacteos.json'));
let leguminosas = JSON.parse(fs.readFileSync('leguminosas.json'));
let libres = JSON.parse(fs.readFileSync('libres.json'));
let verdurasGA = JSON.parse(fs.readFileSync('verdurasGrupoA.json'));
let verdurasGB = JSON.parse(fs.readFileSync('verdugarGrupoB.json'));


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



