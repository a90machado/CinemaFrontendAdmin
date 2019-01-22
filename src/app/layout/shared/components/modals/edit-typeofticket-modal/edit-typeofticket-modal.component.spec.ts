import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeofticketModalComponent } from './edit-typeofticket-modal.component';

describe('EditTypeofticketModalComponent', () => {
  let component: EditTypeofticketModalComponent;
  let fixture: ComponentFixture<EditTypeofticketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeofticketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeofticketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
