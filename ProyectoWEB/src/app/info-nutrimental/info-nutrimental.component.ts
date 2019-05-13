import { Component, OnInit } from '@angular/core';
import { Ingredientes} from '../data-models/ingredientes'
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
  
  constructor(private ingredientesService: IngredientesService) {}

  ngOnInit() {
    this.ingredientesService.getCarnesBajoContenidoGrasas().subscribe(data => this.carneBajoContenidoGrasas = data);
    this.ingredientesService.getCarnesMedioContenidoGrasas().subscribe(data => this.carneMedioContenidoGrasas = data);
    this.ingredientesService.getCarnesAltoContenidoGrasas().subscribe(data => this.carneAltoContenidoGrasas = data);
    this.ingredientesService.getCereales().subscribe(data => this.cereales = data);
    this.ingredientesService.getJugos().subscribe(data => this.jugos = data);
    this.ingredientesService.getFrutasBajoContenidoFibra().subscribe(data => this.frutasBajoContenidoFibra = data);
    this.ingredientesService.getFrutasMedioContenidoFibra().subscribe(data => this.frutasMedioContenidoFibra = data);
    this.ingredientesService.getFrutasAltoContenidoFibra().subscribe(data => this.frutasAltoContenidoFibra = data);
    this.ingredientesService.getVerdurasGrupoA().subscribe(data => this.verdurasGrupoA = data);
    this.ingredientesService.getVerdurasGrupoB().subscribe(data => this.verdurasGrupoB = data);
    this.ingredientesService.getLacteos().subscribe(data => this.lacteos = data);
    this.ingredientesService.getLeguminosas().subscribe(data => this.leguminosas = data);
    this.ingredientesService.getGrasas().subscribe(data => this.grasas = data);
    this.ingredientesService.getAzucares().subscribe(data => this.azucares = data);
    this.ingredientesService.getLibres().subscribe(data => this.libres = data);
  }
 

}
