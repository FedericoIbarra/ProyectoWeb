import { Component, OnInit, TemplateRef, ViewChild, Output } from '@angular/core';
import { Plan } from '../data-models/plan';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Porcion } from '../data-models/Porcion';
import { LoginService } from '../login.service';
import { User } from '../data-models/User';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  modalRefEdit: BsModalRef;
  //@Output() notificar = new EventEmitter();
  planmodal: Plan;
  num: number;
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
    this.num = 1;

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
    this.num++;
  }
  }
  resetPlanModal(){
    this.planmodal =  new Plan(0, true, '', '',
    [new Porcion(0, 'Verdura', 0), new Porcion(1, 'Cereales', 0), new Porcion(2, 'Leguminosas', 0),
    new Porcion(3, 'Lacteos', 0), new Porcion(4, 'Grasas', 0), new Porcion(5, 'Frutas', 0), new Porcion(6, 'Azucares', 0),
    new Porcion(7, 'Carnes', 0)]);
  }

}
