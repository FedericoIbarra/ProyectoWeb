import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPersonalesComponent } from './cards-personales.component';

describe('CardsPersonalesComponent', () => {
  let component: CardsPersonalesComponent;
  let fixture: ComponentFixture<CardsPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
