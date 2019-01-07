import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsLogInComponent } from './problems-log-in.component';

describe('ProblemsLogInComponent', () => {
  let component: ProblemsLogInComponent;
  let fixture: ComponentFixture<ProblemsLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
