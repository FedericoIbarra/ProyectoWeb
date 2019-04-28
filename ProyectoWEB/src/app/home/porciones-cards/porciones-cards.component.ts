import { Component, OnInit } from '@angular/core';
import { PorcionesService } from '../porciones.service';


@Component({
  selector: 'app-porciones-cards',
  templateUrl: './porciones-cards.component.html',
  styleUrls: ['./porciones-cards.component.css']
})
export class PorcionesCardsComponent implements OnInit {

  //Arreglo de Porciones
  public porciones = [];

  //Arreglo de enteros con la cantidad ingerida de cada porcion;
  public newPor;


  constructor(private _porcionesService: PorcionesService) { }

  ngOnInit() {

    this.porciones = this._porcionesService.getPorciones();
    this.newPor = [this.porciones.length];
    this.porciones.forEach(i => this.newPor[i.id] = 0);

  }

  /*
    Resta las porciones añadidas en cada Card a la lista de porcioens diarias.
    Envia el nuevo arreglo al servicio para ser guardado.
  */
  addPor() {
    this._porcionesService.modPor(this.newPor);
    this.porciones.forEach(i => this.newPor[i.id] = 0);
  }

  /*
    Incrementa en 1 la cantidad de la porcion.
  */
  res(id: number) {
    if (this.newPor[id] > 0) {
      this.newPor[id]--;
    }
  }

  add(id: number) {
    this.newPor[id]++;
  }

  //<app-card-element	*ngFor="let porcion of porciones"[porcion] = porcion></app-card-element>

}
