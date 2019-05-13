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

//Información Nutrimental
app.route('/api/azucares')
                        .get((req, res) => res.json(azucares))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                azucares.push(req.body);
                                fs.writeFileSync('./JSON_Files/azucares.json', JSON.stringify(azucares))
                                console.log(azucares);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/carnesACG')
                        .get((req, res) => res.json(carnesACG))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                carnesACG.push(req.body);
                                fs.writeFileSync('./JSON_Files/carnesAltoContenidoGrasas.json', JSON.stringify(carnesACG))
                                console.log(carnesACG);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/carnesMCG')
                        .get((req, res) => res.json(carnesMCG))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                carnesMCG.push(req.body);
                                fs.writeFileSync('./JSON_Files/carnesMedioContenidoGrasas.json', JSON.stringify(carnesMCG))
                                console.log(carnesMCG);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/carnesBCG')
                        .get((req, res) => res.json(carnesBCG))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                carnesBCG.push(req.body);
                                fs.writeFileSync('./JSON_Files/carnesBajoContenidoGrasas.json', JSON.stringify(carnesBCG))
                                console.log(carnesBCG);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/cereales')
                        .get((req, res) => res.json(cereales))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                cereales.push(req.body);
                                fs.writeFileSync('./JSON_Files/cereales.json', JSON.stringify(cereales))
                                console.log(cereales);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/frutasACF')
                        .get((req, res) => res.json(frutasACF))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                frutasACF.push(req.body);
                                fs.writeFileSync('./JSON_Files/frutasAltoContenidoFibra.json', JSON.stringify(frutasACF))
                                console.log(frutasACF);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/frutasMCF')
                        .get((req, res) => res.json(frutasMCF))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                frutasMCF.push(req.body);
                                fs.writeFileSync('./JSON_Files/frutasMedioContenidoFibra.json', JSON.stringify(frutasMCF))
                                console.log(frutasMCF);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/frutasBCF')
                        .get((req, res) => res.json(frutasBCF))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                frutasBCF.push(req.body);
                                fs.writeFileSync('./JSON_Files/frutasBajoContenidoFibra.json', JSON.stringify(frutasBCF))
                                console.log(frutasBCF);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/grasas')
                        .get((req, res) => res.json(grasas))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                grasas.push(req.body);
                                fs.writeFileSync('./JSON_Files/grasas.json', JSON.stringify(grasas))
                                console.log(grasas);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/jugos')
                        .get((req, res) => res.json(jugos))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                jugos.push(req.body);
                                fs.writeFileSync('./JSON_Files/jugos.json', JSON.stringify(jugos))
                                console.log(jugos);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/lacteos')
                        .get((req, res) => res.json(lacteos))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                lacteos.push(req.body);
                                fs.writeFileSync('./JSON_Files/lacteos.json', JSON.stringify(lacteos))
                                console.log(lacteos);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/leguminosas')
                        .get((req, res) => res.json(leguminosas))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                leguminosas.push(req.body);
                                fs.writeFileSync('./JSON_Files/leguminosas.json', JSON.stringify(leguminosas))
                                console.log(leguminosas);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/libres')
                        .get((req, res) => res.json(libres))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                libres.push(req.body);
                                fs.writeFileSync('./JSON_Files/libres.json', JSON.stringify(libres))
                                console.log(libres);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/verdurasGA')
                        .get((req, res) => res.json(verdurasGA))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                verdurasGA.push(req.body);
                                fs.writeFileSync('./JSON_Files/verdurasGrupoA.json', JSON.stringify(verdurasGA))
                                console.log(verdurasGA);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });
app.route('/api/verdurasGB')
                        .get((req, res) => res.json(verdurasGB))
                        .post((req,res)=>{
                            console.log(req.body)
                            console.log(chalk.blue(JSON.stringify(req.body)));
                            console.log(chalk.blue(req.body.id));
    
                            if(req.body.id && req.body.nombre && req.body.cantidad && req.body.porcion){
                                verdurasGB.push(req.body);
                                fs.writeFileSync('./JSON_Files/verdurasGrupoB.json', JSON.stringify(verdurasGB))
                                console.log(verdurasGB);
                                res.status(201).send();
                                return;
                            }
    
                            res.status(400).send({error: "Faltan atributos"});
    
                        });



