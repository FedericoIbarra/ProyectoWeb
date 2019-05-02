import { Injectable } from '@angular/core';
import { Ingredientes } from '../data-models/ingredientes';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  lastIDS = 0;


  carnesBajoContenidoGrasas: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Filete de Res", cantidad: 30, porcion: "gr"},
    {id: this.lastIDS++, nombre: "Lomo de Ternera", cantidad: 30, porcion: "gr"}
  ];

  carnesMedioContenidoGrasas: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Chuleta de Res", cantidad: 30, porcion: "gr"},
    {id: this.lastIDS++, nombre: "Lomo de Cerdo", cantidad: 30, porcion: "gr"}
  ];

  carnesAltoContenidoGrasas: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Costilla de Res", cantidad: 30, porcion: "gr"},
    {id: this.lastIDS++, nombre: "Chuleta de Cerdo", cantidad: 30, porcion: "gr"}
  ];

  cereales: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Tortilla de Maíz", cantidad: 1, porcion: "pza"},
    {id: this.lastIDS++, nombre: "Bolillo Integral", cantidad: 0.5, porcion: "pza"}
  ];

  jugos: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Ciruela", cantidad: 0.25, porcion: "tz"},
    {id: this.lastIDS++, nombre: "Manzana", cantidad: 0.33, porcion: "tz"}
  ];

  frutasBajoContenidoFibra: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Dátil", cantidad: 2, porcion: "pza"},
    {id: this.lastIDS++, nombre: "Jícama", cantidad: 0.75, porcion: "tz"}
  ];

  frutasMedioContenidoFibra: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Ciruela", cantidad: 3, porcion: "pza"},
    {id: this.lastIDS++, nombre: "Durazno", cantidad: 2, porcion: "pza"}
  ];

  frutasAltoContenidoFibra: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Fresa", cantidad: 1, porcion: "tz"},
    {id: this.lastIDS++, nombre: "Frambuesa", cantidad: 0.5, porcion: "tz"}
  ];

  verdurasGrupoA: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Cilantro", cantidad: 0, porcion: "tz"},
    {id: this.lastIDS++, nombre: "Acelgas", cantidad: 0, porcion: "tz"}
  ];
  
  verdurasGrupoB: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Betabel", cantidad: 0.5, porcion: "tz"},
    {id: this.lastIDS++, nombre: "Calabaza", cantidad: 0.5, porcion: "tz"}
  ];

  lacteos: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Leche entera", cantidad: 0.5, porcion: "tz"},
    {id: this.lastIDS++, nombre: "Leche descremada", cantidad: 1, porcion: "tz"}
  ];

  leguminosas: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Frijol", cantidad: 1, porcion: "cdita"},
    {id: this.lastIDS++, nombre: "Haba", cantidad: 1, porcion: "cdita"}
  ];

  grasas: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Aceite de Maíz", cantidad: 1, porcion: "cdita"},
    {id: this.lastIDS++, nombre: "Aceitunas de Oliva", cantidad: 1, porcion: "cdita"}
  ];

  azucares: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Azúcar", cantidad: 1, porcion: "cda"},
    {id: this.lastIDS++, nombre: "Horchata", cantidad: 0.5, porcion: "tza"}

  ];

  libres: Ingredientes[] = [  
    {id: this.lastIDS++, nombre: "Agua", cantidad: 0, porcion: "lts"},
    {id: this.lastIDS++, nombre: "Mostaza", cantidad: 0, porcion: "cda"}    
  ];


  constructor() { }
  getCarnesBajoContenidoGrasas(): Ingredientes[] {
    return this.carnesBajoContenidoGrasas.slice();
  }

  getCarnesMedioContenidoGrasas(): Ingredientes[] {
    return this.carnesMedioContenidoGrasas.slice();
  }

  getCarnesAltoContenidoGrasas(): Ingredientes[] {
    return this.carnesAltoContenidoGrasas.slice();
  }

  getCereales(): Ingredientes[] {
    return this.cereales.slice();
  }

  getJugos(): Ingredientes []{
    return this.jugos.slice();
  }

  getFrutasBajoContenidoFibra(): Ingredientes[] {
    return this.frutasBajoContenidoFibra.slice();
  }

  getFrutasMedioContenidoFibra(): Ingredientes[] {
    return this.frutasMedioContenidoFibra.slice();
  }

  getFrutasAltoContenidoFibra(): Ingredientes[] {
    return this.frutasAltoContenidoFibra.slice();
  }

  getVerdurasGrupoA(): Ingredientes[] {
    return this.verdurasGrupoA.slice();
  }

  getVerdurasGrupoB(): Ingredientes[] {
    return this.verdurasGrupoB.slice();
  }

  getLacteos(): Ingredientes[] {
    return this.lacteos.slice();
  }

  getLeguminosas(): Ingredientes[]{
    return this.leguminosas.slice();
  }

  getGrasas(): Ingredientes[] {
    return this.grasas.slice();
  }

  getAzucares(): Ingredientes[] {
    return this.azucares.slice();
  }

  getLibres(): Ingredientes[] {
    return this.libres.slice();
  }
}
