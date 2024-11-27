import { Component } from '@angular/core';
import { EdificacoesMonitoradasComponent } from './edificacoes-monitoradas/edificacoes-monitoradas.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { DenunciasPendentesComponent } from './denuncias-pendentes/denuncias-pendentes.component';
import { IEdificacao } from '../../shared/models/IEdificacao';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    EdificacoesMonitoradasComponent,
    RelatorioComponent,
    DenunciasPendentesComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public edificacaoSelecionada: IEdificacao | null = null;

  public onEdificacaoSelecionada(edificacao: IEdificacao | null): void {
    if (edificacao) this.edificacaoSelecionada = edificacao;
  }
}
