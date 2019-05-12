import { Injectable } from '@angular/core';
import { Ingredientes } from '../data-models/ingredientes';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  lastIDS = 0;

  readonly ROOT_URL = 'http://127.0.0.1:3000';


  


  // carnesBajoContenidoGrasas: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Filete de Res", cantidad: 30, porcion: "gr"},
  //   {id: this.lastIDS++, nombre: "Lomo de Ternera", cantidad: 30, porcion: "gr"}
  // ];

  // carnesMedioContenidoGrasas: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Chuleta de Res", cantidad: 30, porcion: "gr"},
  //   {id: this.lastIDS++, nombre: "Lomo de Cerdo", cantidad: 30, porcion: "gr"}
  // ];

  // carnesAltoContenidoGrasas: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Costilla de Res", cantidad: 30, porcion: "gr"},
  //   {id: this.lastIDS++, nombre: "Chuleta de Cerdo", cantidad: 30, porcion: "gr"}
  // ];

  // cereales: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Tortilla de Maíz", cantidad: 1, porcion: "pza"},
  //   {id: this.lastIDS++, nombre: "Bolillo Integral", cantidad: 0.5, porcion: "pza"}
  // ];

  // jugos: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Ciruela", cantidad: 0.25, porcion: "tz"},
  //   {id: this.lastIDS++, nombre: "Manzana", cantidad: 0.33, porcion: "tz"}
  // ];

  // frutasBajoContenidoFibra: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Dátil", cantidad: 2, porcion: "pza"},
  //   {id: this.lastIDS++, nombre: "Jícama", cantidad: 0.75, porcion: "tz"}
  // ];

  // frutasMedioContenidoFibra: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Ciruela", cantidad: 3, porcion: "pza"},
  //   {id: this.lastIDS++, nombre: "Durazno", cantidad: 2, porcion: "pza"}
  // ];

  // frutasAltoContenidoFibra: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Fresa", cantidad: 1, porcion: "tz"},
  //   {id: this.lastIDS++, nombre: "Frambuesa", cantidad: 0.5, porcion: "tz"}
  // ];

  // verdurasGrupoA: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Cilantro", cantidad: 0, porcion: "tz"},
  //   {id: this.lastIDS++, nombre: "Acelgas", cantidad: 0, porcion: "tz"}
  // ];
  
  // verdurasGrupoB: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Betabel", cantidad: 0.5, porcion: "tz"},
  //   {id: this.lastIDS++, nombre: "Calabaza", cantidad: 0.5, porcion: "tz"}
  // ];

  // lacteos: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Leche entera", cantidad: 0.5, porcion: "tz"},
  //   {id: this.lastIDS++, nombre: "Leche descremada", cantidad: 1, porcion: "tz"}
  // ];

  // leguminosas: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Frijol", cantidad: 1, porcion: "cdita"},
  //   {id: this.lastIDS++, nombre: "Haba", cantidad: 1, porcion: "cdita"}
  // ];

  // grasas: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Aceite de Maíz", cantidad: 1, porcion: "cdita"},
  //   {id: this.lastIDS++, nombre: "Aceitunas de Oliva", cantidad: 1, porcion: "cdita"}
  // ];

  // azucares: Ingredientes[] = [
  //   {id: this.lastIDS++, nombre: "Azúcar", cantidad: 1, porcion: "cda"},
  //   {id: this.lastIDS++, nombre: "Horchata", cantidad: 0.5, porcion: "tza"}

  // ];

  // libres: Ingredientes[] = [  
  //   {id: this.lastIDS++, nombre: "Agua", cantidad: 0, porcion: "lts"},
  //   {id: this.lastIDS++, nombre: "Mostaza", cantidad: 0, porcion: "cda"}    
  // ];


  constructor(private http: HttpClient) { }

  getAzucares(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/azucares');    
  }
  getCarnesAltoContenidoGrasas(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/carnesACG');    
  }
  getCarnesMedioContenidoGrasas(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/carnesMCG');    
  }
  getCarnesBajoContenidoGrasas(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/carnesBCG');    
  }
  getCereales(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/cereales');    
  }
  getFrutasAltoContenidoFibra(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/frutasACF');    
  }
  getFrutasMedioContenidoFibra(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/frutasMCF');    
  }
  getFrutasBajoContenidoFibra(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/frutasBCF');    
  }
  getGrasas(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/grasas');    
  }
  getJugos(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/jugos');    
  }
  getLacteos(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/lacteos');    
  }
  getLeguminosas(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/leguminosas');    
  }
  getLibres(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/libres');    
  }
  getVerdurasGrupoA(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/verdurasGA');    
  }
  getVerdurasGrupoB(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(this.ROOT_URL + '/api/verdurasGB');    
  }

}
