import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { IEdificacao } from '../../../shared/models/IEdificacao';
import { EdificacaoService } from '../../../shared/services/edificacao.service';

@Component({
  selector: 'app-edificacoes-monitoradas',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './edificacoes-monitoradas.component.html',
  styleUrl: './edificacoes-monitoradas.component.scss',
})
export class EdificacoesMonitoradasComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  public edificacoes: IEdificacao[] = [];
  public edificacaoAtual: IEdificacao | null = null;

  @Output()
  public edificacao = new EventEmitter<IEdificacao | null>();

  constructor(private edificacaoService: EdificacaoService) {}

  ngOnInit(): void {
    this.subs.add(
      this.edificacaoService.listarEdificacoes().subscribe((edificacoes) => {
        this.edificacoes = edificacoes;
        if (edificacoes.length > 0) {
          this.selecionarEdificacao(edificacoes[0]);
        } else {
          this.edificacaoAtual = null;
          this.edificacao.emit(null);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public selecionarEdificacao(edificacao: IEdificacao): void {
    this.edificacaoAtual = edificacao;
    this.edificacao.emit(edificacao);
  }
}
