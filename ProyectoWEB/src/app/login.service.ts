import { Injectable } from '@angular/core';
import { User } from './data-models/User';
import { Plan } from './data-models/plan';
import { Subject } from 'rxjs';
import { Porcion } from './data-models/Porcion';
import { allResolved } from 'q';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  cambiaPlanPersonal = new Subject<Plan[]>();
  private users = [
    new User(this.getNewId(), 'admin', 'admin', 22, true, 'Eduardo', 'Lafaire', 56, 
    [ new Plan(0, false,  'Crecer Músculo',
    'Plan para poder ejercitarse',
    [new Porcion(0, 'Verdura', 3), new Porcion(1, 'Cereales', 5), new Porcion(2, 'Leguminosas', 4),
      new Porcion(3, 'Lacteos', 8), new Porcion(0, 'Grasas', 3), new Porcion(0, 'Frutas', 3), new Porcion(0, 'Azucares', 0),
      new Porcion(0, 'Carnes', 3)]),
    new Plan(1, false,  'Bajar de Peso',
      'En esta dieta alta en frutas y verduras obtendras lo necesario para bajar hasta 20 kilos',
      [new Porcion(0, 'Verdura', 7), new Porcion(1, 'Cereales', 3), new Porcion(2, 'Leguminosas', 4),
      new Porcion(3, 'Lacteos', 1), new Porcion(0, 'Grasas', 0), new Porcion(0, 'Frutas', 6), new Porcion(0, 'Azucares', 0),
      new Porcion(0, 'Carnes', 3)])], 1)

  ];
  private user: User;
  /*
  private user = 'User';
  private password = 'Password';
  */

  constructor() { }

  validate(usr: string, pas: string) {
    let res = false;

    if (this.users.length > 0) {
      const us = this.users.find(u => u.username === usr && u.password === pas);
      if (us) {
      this.user = us;
      console.log(us);
      res = true;
    }
    }
    /*
    if (this.user == usr && this.password == pas) {
      return true;
    } else {
      return false;
    }*/

    return res;
  }

  getUser(): User {

    return this.user;
  }

  pushUser(usr: User) {
    this.users.push(usr);
    console.log(this.users);
  }

  getNewId(){
    if (this.users == undefined) {
      return 0;
    } else {
      return this.users.length;
    }
  }

  // Planes Personales
  getPlanesSugeridos(id: number): Plan[] {
    const pos = this.users.findIndex(u => u.id === id);
    return this.users[pos].planesPersonales.slice();
  }
  notificarCambioPersonal(id: number) {
    const pos = this.users.findIndex(u => u.id === id);
    this.cambiaPlanPersonal.next(this.users[pos].planesPersonales.slice());
  }
  getPlan(idusr: number, id: number): Plan {
    const posUsr = this.users.findIndex(u => u.id === idusr);
    const pos = this.users[posUsr].planesPersonales.findIndex(p => p.id === id);
    return Object.assign({}, this.users[posUsr].planesPersonales[pos]);

  }

  borrarPlan(idusr: number, id: number): boolean {
    const posUsr = this.users.findIndex(u => u.id === idusr);
    const pos = this.users[posUsr].planesPersonales.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.users[posUsr].planesPersonales.splice(pos, 1);
      this.notificarCambioPersonal(idusr);
      return true;

    }
    return false;
  }



  getNextID(idusr: number): number {
    const posUsr = this.users.findIndex(u => u.id === idusr);
    return this.users[posUsr].lastIDP++;

  }

  addPlan(idusr: number, plan: Plan): boolean {

    plan.id = this.getNextID(idusr);
    const posUsr = this.users.findIndex(u => u.id === idusr);
    /*const p = this.planesSugeridos.find((p) => p.nombre.toUpperCase() === plan.nombre.toUpperCase());
    if (p) { // Hay un Plan con el mismo nombre
      this.lastIDS--;
      return false;

    }*/
    this.users[posUsr].planesPersonales.push(Object.assign({}, plan));
    this.notificarCambioPersonal(idusr);
    return true;


  }
  editPlan(idusr: number, plan: Plan): boolean {
    const posUsr = this.users.findIndex(u => u.id === idusr);
    const pos = this.users[posUsr].planesPersonales.findIndex(p => p.id === plan.id);
    if (pos >= 0) {
      Object.assign(this.users[posUsr].planesPersonales[pos], plan);
      this.notificarCambioPersonal(idusr);
      return true;
    }
    return false;

  }

  delete(idusr: number, plan: Plan): boolean {
    const posUsr = this.users.findIndex(u => u.id === idusr);
    const pos = this.users[posUsr].planesPersonales.findIndex(p => p.id === plan.id);
    if (pos >= 0) {
      this.users[posUsr].planesPersonales.splice(pos, 1);
      this.notificarCambioPersonal(idusr);
      return true;
    }
    return false;

  }



}
