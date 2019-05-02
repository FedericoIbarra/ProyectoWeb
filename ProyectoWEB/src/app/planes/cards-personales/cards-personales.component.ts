import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Plan } from 'src/app/data-models/plan';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/data-models/user';
@Component({
  selector: 'app-cards-personales',
  templateUrl: './cards-personales.component.html',
  styleUrls: ['./cards-personales.component.css']
})
export class CardsPersonalesComponent implements OnInit {
  planmodal: Plan;
  usuario: User;
  public plan: Plan[] = [];
  modalRefInfo: BsModalRef;
  modalRefEdit: BsModalRef;
  modalRefWarning: BsModalRef;
  @ViewChild('modalInfo') modalTemplateInfo: TemplateRef<any>;
  @ViewChild('modalEdit') modalTemplateEdit: TemplateRef<any>;
  @ViewChild('modalWarning') modalTemplateWarning: TemplateRef<any>;
  constructor(private usuarioService: LoginService , /***** TIENEN QUE SER DEL SERVICE DE PERSONALES */
              private modalService: BsModalService) { }



  ngOnInit() {
    this.usuario = this.usuarioService.getUser();
    if (this.usuario) {
       this.plan = this.usuarioService.getPlanesSugeridos(this.usuario.id);
      }

  }

  reload(){
    this.usuario = this.usuarioService.getUser();
    if (this.usuario) {
       this.plan = this.usuarioService.getPlanesSugeridos(this.usuario.id);
      }
  }

  infoSugerido(id: number) {
    this.planmodal = this.usuarioService.getPlan(this.usuario.id, id);
    this.modalRefInfo = this.modalService.show(this.modalTemplateInfo);
  }

  edit(id: number) {

    this.planmodal = this.usuarioService.getPlan(this.usuario.id, id);
    this.modalRefEdit = this.modalService.show(this.modalTemplateEdit);
  }

  submit() {

    // window.alert('Cambios se han guardado con éxito');
    this.usuarioService.editPlan(this.usuario.id, this.planmodal);
    this.reload();

  }
  // SI BORRA PERO NO SE ELIMINA DE LA PÁGINA
  delete() {
    // window.alert('Cambios se han guardado con éxito');
    this.usuarioService.delete(this.usuario.id, this.planmodal);
    this.reload();
  }

  seguirPlan(id: number) {
    this.planmodal = this.usuarioService.getPlan(this.usuario.id, id);
    this.modalRefWarning = this.modalService.show(this.modalTemplateWarning);
  }

  aceptarPlan() {
    this.usuarioService.elegirComoPlan(this.usuario.id, this.planmodal);
  }


}
