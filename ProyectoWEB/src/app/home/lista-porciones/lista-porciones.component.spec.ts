import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorcionesComponent } from './lista-porciones.component';

describe('ListaPorcionesComponent', () => {
  let component: ListaPorcionesComponent;
  let fixture: ComponentFixture<ListaPorcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPorcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPorcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
