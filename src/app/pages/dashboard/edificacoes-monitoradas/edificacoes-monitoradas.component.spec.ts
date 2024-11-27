import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificacoesMonitoradasComponent } from './edificacoes-monitoradas.component';

describe('EdificacoesMonitoradasComponent', () => {
  let component: EdificacoesMonitoradasComponent;
  let fixture: ComponentFixture<EdificacoesMonitoradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdificacoesMonitoradasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdificacoesMonitoradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
