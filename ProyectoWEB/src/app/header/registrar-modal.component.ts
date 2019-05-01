import { Component, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from '../login.service';
import { User } from '../data-models/User';

@Component({
  selector: 'registrar-modal',
  templateUrl: './registrar-modal.html'
})
export class RegistrarModal {

  @Output() sendLog = new EventEmitter();

  modalRef: BsModalRef;

	user: User = new User(0, '', '', 0, false, '', '', 0, 
  [], 1);

  constructor(private modalService: BsModalService, private _login: LoginService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

	pushData() {
		this.user.id = this._login.getNewId();
		this._login.pushUser(this.user);
		this.modalRef.hide();
	}

}
