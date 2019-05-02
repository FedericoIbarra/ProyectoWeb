import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Plan } from '../data-models/plan';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Porcion } from '../data-models/Porcion';
import { LoginService } from '../login.service';
import { User } from '../data-models/user';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  modalRefEdit: BsModalRef;
  planmodal: Plan;
  usuario: User;
  isLogged: boolean;
  @ViewChild('modalEdit') modalTemplateEdit: TemplateRef<any>;
  constructor(private usuarioService: LoginService /** Este debe ser el de planes personales */ ,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.resetPlanModal();
    this.usuario = this.usuarioService.getUser();
    if (this.usuario) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  openCreator() {

    this.modalRefEdit = this.modalService.show(this.modalTemplateEdit);
  }

  submit() {
    if (!this.planmodal) {
        window.alert('No existe');
    } else {
    window.alert(this.planmodal.nombre);
    this.usuarioService.addPlan(this.usuario.id, this.planmodal);
  }
  }
  resetPlanModal(){
    this.planmodal =  new Plan(0, true, '', '',
    [new Porcion(0, 'Verdura', 0), new Porcion(1, 'Cereales', 0), new Porcion(2, 'Leguminosas', 0),
    new Porcion(3, 'Lacteos', 0), new Porcion(0, 'Grasas', 0), new Porcion(0, 'Frutas', 0), new Porcion(0, 'Azucares', 0),
    new Porcion(0, 'Carnes', 0)]);
  }

}
