import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProductoComponent } from './filtrar-producto.component';

describe('FiltrarProductoComponent', () => {
  let component: FiltrarProductoComponent;
  let fixture: ComponentFixture<FiltrarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
