import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { DenunciaService } from '../../../shared/services/denuncia.service';
import { IDenuncia } from '../../../shared/models/IDenuncia';

@Component({
  selector: 'app-denuncias-pendentes',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzGridModule],
  templateUrl: './denuncias-pendentes.component.html',
  styleUrl: './denuncias-pendentes.component.scss',
})
export class DenunciasPendentesComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  public denuncias: IDenuncia[] = [];

  constructor(private denunciaService: DenunciaService) {}

  ngOnInit() {
    this.denunciaService.listarDenuncias().subscribe((denuncias) => {
      this.denuncias = denuncias;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
