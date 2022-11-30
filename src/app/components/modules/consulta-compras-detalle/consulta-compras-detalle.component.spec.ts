import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaComprasDetalleComponent } from './consulta-compras-detalle.component';

describe('ConsultaComprasDetalleComponent', () => {
  let component: ConsultaComprasDetalleComponent;
  let fixture: ComponentFixture<ConsultaComprasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaComprasDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaComprasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
