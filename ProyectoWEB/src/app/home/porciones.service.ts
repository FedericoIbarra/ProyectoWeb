import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorcionesService {
  porciones = [
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
    }
  ];
  constructor() { }

  /*
    Devuelve la lsita de porciones del dia.
  */
  getPorciones() {
    return this.porciones;
  }

  /*
    Resta la cantidad de porciones ingeridas a la lista diaria.
  */
  modPor(newPor) {
    //this.porciones = newPor;
  }
}
