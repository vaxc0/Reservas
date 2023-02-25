import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecerReglasComponent } from './establecer-reglas.component';

describe('EstablecerReglasComponent', () => {
  let component: EstablecerReglasComponent;
  let fixture: ComponentFixture<EstablecerReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablecerReglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablecerReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
