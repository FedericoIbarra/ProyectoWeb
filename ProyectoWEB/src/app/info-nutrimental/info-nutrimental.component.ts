import { Component, OnInit } from '@angular/core';
import { Ingredientes } from '../data-models/ingredientes';
import { IngredientesService} from '../info-nutrimental/ingredientes.service'

@Component({
  selector: 'app-info-nutrimental',
  templateUrl: './info-nutrimental.component.html',
  styleUrls: ['./info-nutrimental.component.css']
})
export class InfoNutrimentalComponent implements OnInit {

  public azucares: Ingredientes[] = [];
  public libres: Ingredientes[] = [];
  

  constructor(private ingredientesService: IngredientesService) { }

  ngOnInit() {
    this.azucares = this.ingredientesService.getAzucares();
    this.libres = this.ingredientesService.getLibres();
  }

}
