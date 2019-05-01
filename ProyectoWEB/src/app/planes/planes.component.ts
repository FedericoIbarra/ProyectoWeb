import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Plan } from '../data-models/plan';
import { PlanesService } from './planes.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Porcion } from '../data-models/Porcion';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  modalRefEdit: BsModalRef;
  planmodal: Plan;
  @ViewChild('modalEdit') modalTemplateEdit: TemplateRef<any>;
  constructor(private planesService: PlanesService /** Este debe ser el de planes personales */ ,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.resetPlanModal();
  }
  openCreator() {

    this.modalRefEdit = this.modalService.show(this.modalTemplateEdit);
  }

  submit() {
    if(!this.planmodal) {
        window.alert('No existe');
    } else {
    window.alert(this.planmodal.nombre);
    this.planesService.addPlan(this.planmodal);
  }
  }
  resetPlanModal(){
    this.planmodal =  new Plan(0, true, '', '',
    [new Porcion(0, 'Verdura', 0), new Porcion(1, 'Cereales', 0), new Porcion(2, 'Leguminosas', 0),
    new Porcion(3, 'Lacteos', 0), new Porcion(0, 'Grasas', 0), new Porcion(0, 'Frutas', 0), new Porcion(0, 'Azucares', 0),
    new Porcion(0, 'Carnes', 0)]);
  }

}
