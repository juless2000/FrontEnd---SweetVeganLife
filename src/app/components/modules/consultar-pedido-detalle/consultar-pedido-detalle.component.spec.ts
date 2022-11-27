import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPedidoDetalleComponent } from './consultar-pedido-detalle.component';

describe('ConsultarPedidoDetalleComponent', () => {
  let component: ConsultarPedidoDetalleComponent;
  let fixture: ComponentFixture<ConsultarPedidoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPedidoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPedidoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
