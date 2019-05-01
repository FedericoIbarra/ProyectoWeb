import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorcionesService {
  porcionesDiarias = [
    {
      id: 0,
      nombre: 'Leguminosas',
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


  constructor() { }

  /*
    Devuelve la lsita de porcionesDiarias del dia.
  */
  getPorciones() {
    return this.porcionesDiarias;
  }

  /*
    Resta la cantidad de porcionesDiarias ingeridas a la lista diaria.
  */
  modPor(newPor: number[]) {
    this.porcionesDiarias.forEach(por => por.cantidad -= newPor[por.id]);
    //this.porcionesDiarias = newPor;
  }
}
