import { Injectable } from '@angular/core';
import { User } from './data-models/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private users = [];
  private user: User;

  /*
  private user = 'User';
  private password = 'Password';
  */

  constructor() { }

  validate(usr: string, pas: string) {
    let res = false;

    if (this.users.length > 0) {
      let us = this.users.find(u => {
        return u.nombre == usr && u.password == pas;
      });

      this.user = us;
      console.log(us);
      res = true;
    }
    /*
    if (this.user == usr && this.password == pas) {
      return true;
    } else {
      return false;
    }*/

    return res;
  }

  getUser() {
    return this.user.username;
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


}
