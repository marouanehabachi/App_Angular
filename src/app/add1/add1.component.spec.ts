import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Add1Component } from './add1.component';

describe('Add1Component', () => {
  let component: Add1Component;
  let fixture: ComponentFixture<Add1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
