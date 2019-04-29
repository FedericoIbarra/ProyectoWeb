import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from '../login.service';

@Component({
  selector: 'demo-modal-service-static',
  templateUrl: './service-template.html'
})
export class DemoModalServiceStaticComponent {
  modalRef: BsModalRef;

	usr = '';
	pas = '';

  constructor(private modalService: BsModalService, private _login: LoginService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

	sendData() {
		console.log(this.usr + " " + this.pas);
		console.log(this._login.validate(this.usr, this.pas));
	}
}
