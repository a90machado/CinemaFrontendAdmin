import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieModalComponent } from './new-movie-modal.component';

describe('NewMovieModalComponent', () => {
  let component: NewMovieModalComponent;
  let fixture: ComponentFixture<NewMovieModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
