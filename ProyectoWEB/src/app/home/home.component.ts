import { Component, OnInit } from '@angular/core';
import { PorcionesService } from './porciones.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _porcionesService: PorcionesService, private _login: LoginService) { }

  ngOnInit() {
    let user = this._login.getUser();
    this._porcionesService.setPorciones(user.planElegido.porciones);
  }

}
