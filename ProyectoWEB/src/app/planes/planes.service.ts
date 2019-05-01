import { Injectable } from '@angular/core';
import { Plan } from '../data-models/plan';
import { Porcion } from '../data-models/Porcion';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  cambiaPlanSugerido = new Subject<Plan[]>();
  
  private lastIDS = 0;
  // private lastIDP = 0;

  planesSugeridos: Plan[] = [
    new Plan(this.lastIDS++, false,  'Crecer Músculo',
    'Con este plan podrás iniciar una dieta alta en carbohidtatos que te permitira crecer los músculos, acompañada de buen ejercicio y podrás ganar y seguir luchando dia a dia en una constante batalla para poder generar ese musculo que siempre has querido',
    [new Porcion(0, 'Verdura', 3), new Porcion(1, 'Cereales', 5), new Porcion(2, 'Leguminosas', 4),
      new Porcion(3, 'Lacteos', 8), new Porcion(0, 'Grasas', 3), new Porcion(0, 'Frutas', 3), new Porcion(0, 'Azucares', 0),
      new Porcion(0, 'Carnes', 3)]),
    new Plan(this.lastIDS++, false,  'Bajar de Peso',
      'En esta dieta alta en frutas y verduras obtendras lo necesario para bajar hasta 20 kilos',
      [new Porcion(0, 'Verdura', 7), new Porcion(1, 'Cereales', 3), new Porcion(2, 'Leguminosas', 4),
      new Porcion(3, 'Lacteos', 1), new Porcion(0, 'Grasas', 0), new Porcion(0, 'Frutas', 6), new Porcion(0, 'Azucares', 0),
      new Porcion(0, 'Carnes', 3)]),
    new Plan(this.lastIDS++,  false, 'Vegana',
      'Aqui tenemos una dieta sin productos animales, especial para los veganos.'
      ,
      [new Porcion(0, 'Verdura', 10), new Porcion(1, 'Cereales', 5), new Porcion(2, 'Leguminosas', 4),
      new Porcion(3, 'Lacteos', 0), new Porcion(0, 'Grasas', 2), new Porcion(0, 'Frutas', 3), new Porcion(0, 'Azucares', 0),
      new Porcion(0, 'Carnes', 0)]),
    new Plan(this.lastIDS++, false,  'Balanceado',
      'Balanceado'
      ,
      [new Porcion(0, 'Verdura', 4), new Porcion(1, 'Cereales', 4), new Porcion(2, 'Leguminosas', 4),
      new Porcion(3, 'Lacteos', 3), new Porcion(0, 'Grasas', 3), new Porcion(0, 'Frutas', 5), new Porcion(0, 'Azucares', 1),
      new Porcion(0, 'Carnes', 3)])
  ];

  /* planesPersonales: Plan[] = [
     new Plan(this.lastIDP++, 'Mi plan 1',
       'Este plan va a ser suficiente para mí',
       [new Porcion(0, 'Verdura', 3), new Porcion(1, 'Cereales', 5), new Porcion(2, 'Leguminosas', 4),
       new Porcion(3, 'Lacteos', 8), new Porcion(0, 'Grasas', 3), new Porcion(0, 'Frutas', 3), new Porcion(0, 'Azucares', 0),
       new Porcion(0, 'Carnes', 3)]),
     new Plan(this.lastIDP++, 'Plan de la abuela',
       'En esta dieta alta en frutas y verduras obtendras lo necesario para bajar hasta 20 kilos',
       [new Porcion(0, 'Verdura', 7), new Porcion(1, 'Cereales', 3), new Porcion(2, 'Leguminosas', 4),
       new Porcion(3, 'Lacteos', 1), new Porcion(0, 'Grasas', 0), new Porcion(0, 'Frutas', 6), new Porcion(0, 'Azucares', 0),
       new Porcion(0, 'Carnes', 3)])
   ];*/
  constructor() { }

  /*getPlanesPersonales(): Plan[] {
    return this.planesPersonales.slice();
  }*/
 
  /* notificarCambioPersonal() {
     this.cambiaPlanPersonal.next(this.planesPersonales.slice());
 
   }*/

  getPlanesSugeridos(): Plan[] {
    return this.planesSugeridos.slice();
  }
  notificarCambioSugerido() {
    this.cambiaPlanSugerido.next(this.planesSugeridos.slice());
  }
  getPlan(id: number): Plan {

    const pos = this.planesSugeridos.findIndex(p => p.id === id);
    return Object.assign({}, this.planesSugeridos[pos]);

  }

  borrarPlan(id: number): boolean {
    const pos = this.planesSugeridos.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.planesSugeridos.splice(pos, 1);
      this.notificarCambioSugerido();
      return true;

    }
    return false;
  }



  getNextID(): number {
    return this.lastIDS++;

  }

  addPlan(plan: Plan): boolean {
    plan.id = this.getNextID();
    const p = this.planesSugeridos.find((p) => p.nombre.toUpperCase() === plan.nombre.toUpperCase());
    if (p) { // Hay un Plan con el mismo nombre
      this.lastIDS--;
      return false;

    }
    this.planesSugeridos.push(Object.assign({}, plan));
    this.notificarCambioSugerido();
    return true;


  }
  // NO SE SI ESTE CORRECTA LA MANERA DE CHECAR POR NOMBRE Y ID
  editPlan(plan: Plan): boolean{
    const pos = this.planesSugeridos.findIndex(p => p.id === plan.id);
    if (pos >= 0) {
      Object.assign(this.planesSugeridos[pos], plan);
      this.notificarCambioSugerido();
      return true;
    }
    return false;

  }

  delete(plan: Plan): boolean {
    const pos = this.planesSugeridos.findIndex(p => p.id === plan.id);
    if (pos >= 0) {
      this.planesSugeridos.splice(pos,1);
      this.notificarCambioSugerido();
      return true;
    }
    return false;

  }








}
