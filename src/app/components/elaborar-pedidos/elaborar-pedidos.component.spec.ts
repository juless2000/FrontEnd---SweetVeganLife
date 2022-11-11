import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaborarPedidosComponent } from './elaborar-pedidos.component';

describe('ElaborarPedidosComponent', () => {
  let component: ElaborarPedidosComponent;
  let fixture: ComponentFixture<ElaborarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElaborarPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElaborarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
