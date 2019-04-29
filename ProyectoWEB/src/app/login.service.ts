import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = 'User';
  password = 'Password';

  constructor() { }

  validate(usr: string, pas: string) {
    if (this.user == usr && this.password == pas) {
      return true;
    } else {
      return false;
    }
  }
}
