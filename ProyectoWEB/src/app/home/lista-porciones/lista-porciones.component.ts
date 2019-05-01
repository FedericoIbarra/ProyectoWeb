import { Component, OnInit } from '@angular/core';
import { PorcionesService } from '../porciones.service';

@Component({
  selector: 'app-lista-porciones',
  templateUrl: './lista-porciones.component.html',
  styleUrls: ['./lista-porciones.component.css']
})
export class ListaPorcionesComponent implements OnInit {

  public porciones = [];


  constructor(private _porcionesService: PorcionesService) { }

  ngOnInit() {
    this.porciones = this._porcionesService.getPorciones();
    console.log(this.porciones.length)
  }

}
