import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfTicketsComponent } from './type-of-tickets.component';

describe('TypeOfTicketsComponent', () => {
  let component: TypeOfTicketsComponent;
  let fixture: ComponentFixture<TypeOfTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
