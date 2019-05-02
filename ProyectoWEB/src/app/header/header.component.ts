import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../data-models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  usr: User;

  constructor(private _login: LoginService) {}

  ngOnInit() {
  }

  public setSession($event) {
    this.usr = this._login.getUser();
    if (this.usr) {
    this.isLogged = true;
    }

  }



}
