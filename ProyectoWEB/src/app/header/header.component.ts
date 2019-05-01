import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  usr: string;
  pas: string;

  constructor(private _login: LoginService) {}

  ngOnInit() {
  }

  public setSession ($event) {
    this.usr = this._login.getUser();
    this.pas = this._login.getPassword();
    this.isLogged = true;
  }



}
