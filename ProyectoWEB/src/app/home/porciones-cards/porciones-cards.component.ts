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
  public newPor = [];


  constructor(private _porcionesService: PorcionesService) { }

  ngOnInit() {
    this.porciones = this._porcionesService.getPorciones();
  }

  /*
    Resta las porciones añadidas en cada Card a la lista de porcioens diarias.
    Envia el nuevo arreglo al servicio para ser guardado.
  */
  addPor() {

  }

}
