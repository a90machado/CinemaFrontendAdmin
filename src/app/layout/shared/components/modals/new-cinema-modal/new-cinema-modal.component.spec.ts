import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCinemaModalComponent } from './new-cinema-modal.component';

describe('NewCinemaModalComponent', () => {
  let component: NewCinemaModalComponent;
  let fixture: ComponentFixture<NewCinemaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCinemaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCinemaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
