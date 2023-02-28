import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorServerErrorComponent } from './error-server-error.component';

describe('ErrorServerErrorComponent', () => {
  let component: ErrorServerErrorComponent;
  let fixture: ComponentFixture<ErrorServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorServerErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
