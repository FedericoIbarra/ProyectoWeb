import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredientes} from '../data-models/ingredientes'
import { IngredientesService} from '../info-nutrimental/ingredientes.service'
import { MatTableModule, MatTableDataSource} from '@angular/material/table'
import { MatSort, MatPaginator } from '@angular/material';

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

  displayedColumns: string[] = ['alimento'];
  displayedColumns2: string[] = ['alimento', 'porcion'];

  carnesBajoContenidoGrasasSource: MatTableDataSource<Ingredientes>;
  carnesMedioContenidoGrasasSource: MatTableDataSource<Ingredientes>;
  carnesAltoContenidoGrasasSource: MatTableDataSource<Ingredientes>;
  cerealesSource: MatTableDataSource<Ingredientes>;
  jugosSource: MatTableDataSource<Ingredientes>;
  frutasBajoContenidoFibraSource: MatTableDataSource<Ingredientes>;
  frutasMedioContenidoFibraSource: MatTableDataSource<Ingredientes>;
  frutasAltoContenidoFibraSource: MatTableDataSource<Ingredientes>;
  verdurasGrupoASource: MatTableDataSource<Ingredientes>;
  verdurasGrupoBSource: MatTableDataSource<Ingredientes>;
  lacteosSource: MatTableDataSource<Ingredientes>;
  leguminosasSource: MatTableDataSource<Ingredientes>;
  grasasSource: MatTableDataSource<Ingredientes>;
  azucaresSource: MatTableDataSource<Ingredientes>;
  libresSource: MatTableDataSource<Ingredientes>;
  
  carnesBajoContenidoGrasasFilter(filterValue: string) {
    this.carnesBajoContenidoGrasasSource.filter = filterValue.trim().toLowerCase();
  }

  carnesMedioContenidoGrasasFilter(filterValue: string) {
    this.carnesMedioContenidoGrasasSource.filter = filterValue.trim().toLowerCase();
  }

  carnesAltoContenidoGrasasFilter(filterValue: string) {
    this.carnesAltoContenidoGrasasSource.filter = filterValue.trim().toLowerCase();
  }

  cerealesFilter(filterValue: string) {
    this.cerealesSource.filter = filterValue.trim().toLowerCase();
  }

  jugosFilter(filterValue: string) {
    this.jugosSource.filter = filterValue.trim().toLowerCase();
  }

  frutasBajoContenidoFibraFilter(filterValue: string) {
    this.frutasBajoContenidoFibraSource.filter = filterValue.trim().toLowerCase();
  }

  frutasMedioContenidoFibraFilter(filterValue: string) {
    this.frutasMedioContenidoFibraSource.filter = filterValue.trim().toLowerCase();
  }

  frutasAltoContenidoFibraFilter(filterValue: string) {
    this.frutasAltoContenidoFibraSource.filter = filterValue.trim().toLowerCase();
  }

  verdurasGrupoAFilter(filterValue: string) {
    this.verdurasGrupoASource.filter = filterValue.trim().toLowerCase();
  }

  verdurasGrupoBFilter(filterValue: string) {
    this.verdurasGrupoBSource.filter = filterValue.trim().toLowerCase();
  }

  lacteosFilter(filterValue: string) {
    this.lacteosSource.filter = filterValue.trim().toLowerCase();
  }

  leguminosasFilter(filterValue: string) {
    this.leguminosasSource.filter = filterValue.trim().toLowerCase();
  }

  grasasFilter(filterValue: string) {
    this.grasasSource.filter = filterValue.trim().toLowerCase();
  }

  azucaresFilter(filterValue: string) {
    this.azucaresSource.filter = filterValue.trim().toLowerCase();
  }

  libresFilter(filterValue: string) {
    this.libresSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.ingredientesService.getCarnesBajoContenidoGrasas().subscribe(data => this.carneBajoContenidoGrasas = data);
    this.ingredientesService.getCarnesMedioContenidoGrasas().subscribe(data => this.carneMedioContenidoGrasas = data);
    this.ingredientesService.getCarnesAltoContenidoGrasas().subscribe(data => this.carneAltoContenidoGrasas = data);
    this.ingredientesService.getCereales().subscribe(
      data => {
        this.cereales = data
        this.cerealesSource = new MatTableDataSource(data);
        this.cerealesSource.paginator = this.paginator;
      });
    this.ingredientesService.getJugos().subscribe(data => this.jugos = data);
    this.ingredientesService.getFrutasBajoContenidoFibra().subscribe(data => this.frutasBajoContenidoFibra = data);
    this.ingredientesService.getFrutasMedioContenidoFibra().subscribe(data => this.frutasMedioContenidoFibra = data);
    this.ingredientesService.getFrutasAltoContenidoFibra().subscribe(data => this.frutasAltoContenidoFibra = data);
    this.ingredientesService.getVerdurasGrupoA().subscribe(data => this.verdurasGrupoA = data);
    this.ingredientesService.getVerdurasGrupoB().subscribe(data => this.verdurasGrupoB = data);
    this.ingredientesService.getLacteos().subscribe(
      data => {
        this.lacteos = data
        this.lacteosSource = new MatTableDataSource(data);

      });
    this.ingredientesService.getLeguminosas().subscribe(
      data => {
        this.leguminosas = data;
        this.leguminosasSource = new MatTableDataSource(data);
      });
    this.ingredientesService.getGrasas().subscribe(
      data => {
        this.grasas = data;
        this.grasasSource = new MatTableDataSource(data);
      });
    this.ingredientesService.getAzucares().subscribe(
      data => {
        this.azucares = data;
        this.azucaresSource = new MatTableDataSource(data);
      });
    this.ingredientesService.getLibres().subscribe(
      data => {
        this.libres = data;
        this.libresSource = new MatTableDataSource(data);
        this.libresSource.paginator = this.paginator;
      });
  }

}
