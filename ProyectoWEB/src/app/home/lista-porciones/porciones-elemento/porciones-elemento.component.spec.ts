import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcionesElementoComponent } from './porciones-elemento.component';

describe('PorcionesElementoComponent', () => {
  let component: PorcionesElementoComponent;
  let fixture: ComponentFixture<PorcionesElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcionesElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcionesElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
