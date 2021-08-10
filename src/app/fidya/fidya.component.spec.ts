import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidyaComponent } from './fidya.component';

describe('FidyaComponent', () => {
  let component: FidyaComponent;
  let fixture: ComponentFixture<FidyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FidyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
