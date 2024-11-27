import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEdificacaoComponent } from './cadastrar-edificacao.component';

describe('CadastrarEdificacaoComponent', () => {
  let component: CadastrarEdificacaoComponent;
  let fixture: ComponentFixture<CadastrarEdificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarEdificacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarEdificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
