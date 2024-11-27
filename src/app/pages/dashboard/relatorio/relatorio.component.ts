import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IEdificacao } from '../../../shared/models/IEdificacao';
import { CommonModule } from '@angular/common';
import { ISensores } from '../../../shared/models/ISensores';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.scss',
})
export class RelatorioComponent implements OnChanges {
  @Input()
  public edificacao: IEdificacao | null = null;
  public sensores: ISensores[] = [];
  public imagem: string = 'assets/img-1.png';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['edificacao'] && changes['edificacao'].currentValue) {
      this.sensores = changes['edificacao'].currentValue.sensores;
      this.imagem = this.randomImage() || 'assets/img-1.png';
    }
  }

  public randomImage(): string {
    let qtdImagens = 4;
    let imagemSorteada: string = '';

    while (imagemSorteada === this.imagem) {
      const random = Math.floor(Math.random() * qtdImagens) + 1;
      imagemSorteada = 'assets/img-' + random + '.png';
      console.log(imagemSorteada);
    }
    return imagemSorteada;
  }
}
