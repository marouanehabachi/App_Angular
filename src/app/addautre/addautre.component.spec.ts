import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddautreComponent } from './addautre.component';

describe('AddautreComponent', () => {
  let component: AddautreComponent;
  let fixture: ComponentFixture<AddautreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddautreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddautreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
