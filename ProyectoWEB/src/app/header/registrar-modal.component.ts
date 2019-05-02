import { Component, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from '../login.service';
import { User } from '../data-models/user';
import { Plan } from '../data-models/plan';
import { Porcion } from '../data-models/Porcion';

@Component({
  selector: 'registrar-modal',
  templateUrl: './registrar-modal.html'
})
export class RegistrarModal {

  @Output() sendLog = new EventEmitter();

  modalRef: BsModalRef;

	user: User = new User(0, '', '', 0, false, '', '', 0,
  [], 1, new Plan(1, false,  '',
  '',
  [new Porcion(0, 'Verdura', 0), new Porcion(1, 'Cereales', 0), new Porcion(2, 'Leguminosas', 0),
  new Porcion(3, 'Lacteos', 1), new Porcion(0, 'Grasas', 0), new Porcion(0, 'Frutas', 6), new Porcion(0, 'Azucares', 0),
  new Porcion(0, 'Carnes', 0)]));

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
