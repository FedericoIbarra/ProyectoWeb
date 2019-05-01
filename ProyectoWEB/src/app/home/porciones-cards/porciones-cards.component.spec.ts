import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcionesCardsComponent } from './porciones-cards.component';

describe('PorcionesCardsComponent', () => {
  let component: PorcionesCardsComponent;
  let fixture: ComponentFixture<PorcionesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcionesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcionesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
