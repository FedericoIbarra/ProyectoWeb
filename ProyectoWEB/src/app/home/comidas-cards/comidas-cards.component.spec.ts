import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasCardsComponent } from './comidas-cards.component';

describe('ComidasCardsComponent', () => {
  let component: ComidasCardsComponent;
  let fixture: ComponentFixture<ComidasCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidasCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
