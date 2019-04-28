import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  porcionesDiarias = [
    {
      id: 0,
      nombre: "Leguminosas",
      cantidad: 2
    },
    {
      id: 1,
      nombre: "Carbs",
      cantidad: 1
    },
    {
      id: 2,
      nombre: "Frutas",
      cantidad: 0
    },
    {
      id: 3,
      nombre: "Agua",
      cantidad: 10
    }
  ];

  comidas = [
    {
      id: 0,
      nombre: "Burger",
      cantidad: 0,
      porciones: this.porcionesDiarias
    },
    {
      id: 1,
      nombre: "Tacos",
      cantidad: 0,
      porciones: this.porcionesDiarias
    },
    {
      id: 2,
      nombre: "Pizza",
      cantidad: 0,
      porciones: this.porcionesDiarias
    },
    {
      id: 3,
      nombre: "Salad",
      cantidad: 0,
      porciones: this.porcionesDiarias
    },
  ]

  getComidas(){
    return this.comidas;
  }

  constructor() { }
}
