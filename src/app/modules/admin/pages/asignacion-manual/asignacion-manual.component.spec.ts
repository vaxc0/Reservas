import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionManualComponent } from './asignacion-manual.component';

describe('AsignacionManualComponent', () => {
  let component: AsignacionManualComponent;
  let fixture: ComponentFixture<AsignacionManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionManualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
