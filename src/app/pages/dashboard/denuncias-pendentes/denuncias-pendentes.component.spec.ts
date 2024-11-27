import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasPendentesComponent } from './denuncias-pendentes.component';

describe('DenunciasPendentesComponent', () => {
  let component: DenunciasPendentesComponent;
  let fixture: ComponentFixture<DenunciasPendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenunciasPendentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DenunciasPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
