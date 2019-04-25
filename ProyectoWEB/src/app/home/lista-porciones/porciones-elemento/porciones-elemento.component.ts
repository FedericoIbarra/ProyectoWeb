import { Component, OnInit, Input } from '@angular/core';
import { Porcion } from '../../../data-models/Porcion';

@Component({
  selector: 'app-porciones-elemento',
  templateUrl: './porciones-elemento.component.html',
  styleUrls: ['./porciones-elemento.component.css']
})
export class PorcionesElementoComponent implements OnInit {

  @Input() porcion: Porcion;

  constructor() {}

  ngOnInit() {
  }

}
