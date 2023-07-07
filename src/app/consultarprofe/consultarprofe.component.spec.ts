import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarprofeComponent } from './consultarprofe.component';

describe('ConsultarprofeComponent', () => {
  let component: ConsultarprofeComponent;
  let fixture: ComponentFixture<ConsultarprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarprofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
