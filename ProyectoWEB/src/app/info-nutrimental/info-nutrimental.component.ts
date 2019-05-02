import { Component, OnInit } from '@angular/core';
import { Ingredientes } from '../data-models/ingredientes';
import { IngredientesService} from '../info-nutrimental/ingredientes.service'

@Component({
  selector: 'app-info-nutrimental',
  templateUrl: './info-nutrimental.component.html',
  styleUrls: ['./info-nutrimental.component.css']
})
export class InfoNutrimentalComponent implements OnInit {

  public carneBajoContenidoGrasas: Ingredientes[] = [];
  public carneMedioContenidoGrasas: Ingredientes[] = [];
  public carneAltoContenidoGrasas: Ingredientes[] = [];
  public cereales: Ingredientes[] = [];
  public jugos: Ingredientes[] = [];
  public frutasBajoContenidoFibra: Ingredientes[] = [];
  public frutasMedioContenidoFibra: Ingredientes[] = [];
  public frutasAltoContenidoFibra: Ingredientes[] = [];
  public verdurasGrupoA: Ingredientes[] = [];
  public verdurasGrupoB: Ingredientes[] = [];
  public lacteos: Ingredientes[] = [];
  public leguminosas: Ingredientes[] = [];
  public grasas: Ingredientes[] = [];
  public azucares: Ingredientes[] = [];
  public libres: Ingredientes[] = [];  
  

  constructor(private ingredientesService: IngredientesService) { }

  ngOnInit() {
    this.carneBajoContenidoGrasas = this.ingredientesService.getCarnesBajoContenidoGrasas();
    this.carneMedioContenidoGrasas = this.ingredientesService.getCarnesMedioContenidoGrasas();
    this.carneAltoContenidoGrasas = this.ingredientesService.getCarnesAltoContenidoGrasas();
    this.cereales = this.ingredientesService.getCereales();
    this.jugos = this.ingredientesService.getJugos();
    this.frutasBajoContenidoFibra = this.ingredientesService.getFrutasBajoContenidoFibra();
    this.frutasMedioContenidoFibra = this.ingredientesService.getFrutasMedioContenidoFibra();
    this.frutasAltoContenidoFibra = this.ingredientesService.getFrutasAltoContenidoFibra();
    this.verdurasGrupoA = this.ingredientesService.getVerdurasGrupoA();
    this.verdurasGrupoB = this.ingredientesService.getVerdurasGrupoB();
    this.lacteos = this.ingredientesService.getLacteos();
    this.leguminosas = this.ingredientesService.getLeguminosas();
    this.grasas = this.ingredientesService.getGrasas();
    this.azucares = this.ingredientesService.getAzucares();
    this.libres = this.ingredientesService.getLibres();
  }

}
