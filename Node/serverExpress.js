'use-strict'

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const port = 3000;

let azucares = JSON.parse(fs.readFileSync('./JSON_Files/azucares.json'));
let carnesACG = JSON.parse(fs.readFileSync('./JSON_Files/carnesAltoContenidoGrasas.json'));
let carnesMCG = JSON.parse(fs.readFileSync('./JSON_Files/carnesMedioContenidoGrasas.json'));
let carnesBCG = JSON.parse(fs.readFileSync('./JSON_Files/carnesBajoContenidoGrasas.json'));
let cereales = JSON.parse(fs.readFileSync('./JSON_Files/cereales.json'));
let frutasACF = JSON.parse(fs.readFileSync('./JSON_Files/frutasAltoContenidoFibra.json'));
let frutasMCF = JSON.parse(fs.readFileSync('./JSON_Files/frutasMedioContenidoFibra.json'));
let frutasBCF = JSON.parse(fs.readFileSync('./JSON_Files/frutasBajoContenidoFibra.json'));
let grasas = JSON.parse(fs.readFileSync('./JSON_Files/grasas.json'));
let jugos = JSON.parse(fs.readFileSync('./JSON_Files/jugos.json'));
let lacteos = JSON.parse(fs.readFileSync('./JSON_Files/lacteos.json'));
let leguminosas = JSON.parse(fs.readFileSync('./JSON_Files/leguminosas.json'));
let libres = JSON.parse(fs.readFileSync('./JSON_Files/libres.json'));
let verdurasGA = JSON.parse(fs.readFileSync('./JSON_Files/verdurasGrupoA.json'));
let verdurasGB = JSON.parse(fs.readFileSync('./JSON_Files/verdurasGrupoB.json'));


let jsonParser = bodyParser.json();




app.listen(port, () => console.log(`App running on port 127.0.0.1:${port}`));

app.use(jsonParser);
app.use(cors());

app.route('/').get((req, res) => res.send("Hola mundo"));
app.route('/home').get((req, res) => console.log("Hola Mundo"));
app.route('/portions').get((req, res) => console.log("Hola Mundo"));
app.route('/plans').get((req, res) => console.log("Hola Mundo"));
app.route('/info').get((req, res) => console.log("Hola Mundo"));
app.route('/aboutUs').get((req, res) => console.log("Hola Mundo"));

app.route('/api/azucares').get((req, res) => res.json(azucares));
app.route('/api/carnesACG').get((req, res) => res.json(carnesACG));
app.route('/api/carnesMCG').get((req, res) => res.json(carnesMCG));
app.route('/api/carnesBCG').get((req, res) => res.json(carnesBCG));
app.route('/api/cereales').get((req, res) => res.json(cereales));
app.route('/api/frutasACF').get((req, res) => res.json(frutasACF));
app.route('/api/frutasMCF').get((req, res) => res.json(frutasMCF));
app.route('/api/frutasBCF').get((req, res) => res.json(frutasBCF));
app.route('/api/grasas').get((req, res) => res.json(grasas));
app.route('/api/jugos').get((req, res) => res.json(jugos));
app.route('/api/lacteos').get((req, res) => res.json(lacteos));
app.route('/api/leguminosas').get((req, res) => res.json(leguminosas));
app.route('/api/libres').get((req, res) => res.json(libres));
app.route('/api/verdurasGA').get((req, res) => res.json(verdurasGA));
app.route('/api/verdurasGB').get((req, res) => res.json(verdurasGB));



