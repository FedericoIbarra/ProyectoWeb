import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNutrimentalComponent } from './info-nutrimental.component';

describe('InfoNutrimentalComponent', () => {
  let component: InfoNutrimentalComponent;
  let fixture: ComponentFixture<InfoNutrimentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNutrimentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNutrimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
