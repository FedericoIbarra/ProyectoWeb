import { Injectable } from '@angular/core';
import { Ingredientes } from '../data-models/ingredientes';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  readonly ROOT_URL = 'http://3.92.180.155:3000';

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
