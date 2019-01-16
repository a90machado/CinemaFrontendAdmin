import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomModalComponent } from './edit-room-modal.component';

describe('EditRoomModalComponent', () => {
  let component: EditRoomModalComponent;
  let fixture: ComponentFixture<EditRoomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRoomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
