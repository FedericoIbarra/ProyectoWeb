import { Component, OnInit, Input } from '@angular/core';
import { Porcion } from '../../../data-models/Porcion';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css']
})
export class CardElementComponent implements OnInit {

  cantidad = 0;
  @Input() porcion: Porcion;

  constructor() { }

  ngOnInit() {
  }

  res() {
    if (this.cantidad > 0) {
      this.cantidad--;
    }
  }

  add() {
    this.cantidad++;
  }

}
