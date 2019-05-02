import { Injectable } from '@angular/core';
import { Ingredientes } from '../data-models/ingredientes';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  lastIDS = 0;

  azucares: Ingredientes[] = [
    {id: this.lastIDS++, nombre: "Azúcar", cantidad: 3, porcion: "cda"},
    {id: this.lastIDS++, nombre: "Horchata", cantidad: 0.5, porcion: "tza"}

  ];

  libres: Ingredientes[] = [  
    {id: this.lastIDS++, nombre: "Agua", cantidad: 0, porcion: "lts"},
    {id: this.lastIDS++, nombre: "Mostaza", cantidad: 0, porcion: "cda"}    
  ];

  
  constructor() { }

  getAzucares(): Ingredientes[] {
    return this.azucares.slice();
  }

  getLibres(): Ingredientes[] {
    return this.libres.slice();
  }
}
