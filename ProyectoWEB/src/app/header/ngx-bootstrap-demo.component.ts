import { Component, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'demo-modal-service-static',
  templateUrl: './service-template.html'
})
export class DemoModalServiceStaticComponent {

  @Output() sendLog = new EventEmitter();

  modalRef: BsModalRef;

  usr: string;
  pas: string;

  constructor(private modalService: BsModalService, private _login: LoginService,
              private router: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  sendData() {
    console.log(this.usr + " " + this.pas);
    //console.log(this._login.validate(this.usr, this.pas));

    if (this._login.validate(this.usr, this.pas)) {
      this.sendLog.emit(null);
      this.modalRef.hide();
      this.router.navigate(['/about']);
    } else {
      //Aqui no entra
      window.alert('El usuario no existe o las credenciales son incorrectas');
    }

  }

}
