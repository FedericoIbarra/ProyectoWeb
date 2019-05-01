import { Component, OnInit } from '@angular/core';
import { PorcionesService } from '../porciones.service';
import { ComidasService } from '../comidas.service';


@Component({
  selector: 'app-comidas-cards',
  templateUrl: './comidas-cards.component.html',
  styleUrls: ['./comidas-cards.component.css']
})
export class ComidasCardsComponent implements OnInit {

  public comidas = [];
  public porciones = [];
  public newPor = [];

  constructor(private _porcionesService: PorcionesService, private _comidasService: ComidasService) { }

  ngOnInit() {
    this.comidas = this._comidasService.getComidas();
    this.porciones = this._porcionesService.getPorciones();
    this.newPor = [this.porciones.length];
    this.porciones.forEach(i => this.newPor[i.id] = 0);
  }

  /*
    Resta las porciones añadidas en cada Card a la lista de porcioens diarias.
    Envia el nuevo arreglo al servicio para ser guardado.
  */
  addPor() {
    this.comidas.forEach(c => {
      c.porciones.forEach(p => {
        //console.log(p.cantidad * c.cantidad);
        this.newPor[p.id] += c.cantidad * p.cantidad;
      });
    });

    this._porcionesService.modPor(this.newPor);

    this.comidas.forEach(c => {
      c.cantidad = 0;
      this.newPor[c.id] = 0;
    });
  }

  /*
    Incrementa en 1 la cantidad de la porcion.
  */

  res(id: number) {
    if (this.comidas[id].cantidad > 0) {
      this.comidas[id].cantidad--;
    }
  }

  add(id: number) {
    this.comidas[id].cantidad++;
  }


}
