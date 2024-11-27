import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDenunciaComponent } from './cadastrar-denuncia.component';

describe('CadastrarDenunciaComponent', () => {
  let component: CadastrarDenunciaComponent;
  let fixture: ComponentFixture<CadastrarDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarDenunciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
