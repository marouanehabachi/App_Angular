import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoralComponent } from './new-moral.component';

describe('NewMoralComponent', () => {
  let component: NewMoralComponent;
  let fixture: ComponentFixture<NewMoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
