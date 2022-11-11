import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarInventarioComponent } from './administrar-inventario.component';

describe('AdministrarInventarioComponent', () => {
  let component: AdministrarInventarioComponent;
  let fixture: ComponentFixture<AdministrarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
