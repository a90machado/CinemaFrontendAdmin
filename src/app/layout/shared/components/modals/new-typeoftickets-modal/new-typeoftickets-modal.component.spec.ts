import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypeofticketsModalComponent } from './new-typeoftickets-modal.component';

describe('NewTypeofticketsModalComponent', () => {
  let component: NewTypeofticketsModalComponent;
  let fixture: ComponentFixture<NewTypeofticketsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTypeofticketsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypeofticketsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
