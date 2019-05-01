import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PlanesService } from '../planes.service';
import { Plan } from 'src/app/data-models/plan';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  planmodal: Plan;
  public plan: Plan[] = [];
  modalRefInfo: BsModalRef;
  modalRefEdit: BsModalRef;
  @ViewChild('modalInfo') modalTemplateInfo: TemplateRef<any>;
  @ViewChild('modalEdit') modalTemplateEdit: TemplateRef<any>;
  constructor(private planesService: PlanesService,
              private modalService: BsModalService) { }



  ngOnInit() {

    this.plan = this.planesService.getPlanesSugeridos();

  }

  infoSugerido(id: number) {
    this.planmodal = this.planesService.getPlan(id);
    this.modalRefInfo = this.modalService.show(this.modalTemplateInfo);
  }

  edit(id: number) {

    this.planmodal = this.planesService.getPlan(id);
    this.modalRefEdit = this.modalService.show(this.modalTemplateEdit);
  }

  submit() {

    // window.alert('Cambios se han guardado con éxito');
    this.planesService.editPlan(this.planmodal);

  }
  // SI BORRA PERO NO SE ELIMINA DE LA PÁGINA
  delete() {
    // window.alert('Cambios se han guardado con éxito');
    this.planesService.delete(this.planmodal);
  }



}