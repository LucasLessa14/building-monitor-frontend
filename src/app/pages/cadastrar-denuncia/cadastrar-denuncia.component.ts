import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { DenunciaService } from '../../shared/services/denuncia.service';
import { IDenuncia } from '../../shared/models/IDenuncia';

@Component({
  selector: 'app-cadastrar-denuncia',
  standalone: true,
  imports: [
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cadastrar-denuncia.component.html',
  styleUrl: './cadastrar-denuncia.component.scss',
})
export class CadastrarDenunciaComponent implements OnInit {
  public form!: FormGroup;
  private denuncia!: IDenuncia;

  constructor(
    private denunciaService: DenunciaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      localizacao: ['', Validators.required],
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.denuncia = {
        localizacao: this.form.get('localizacao')?.value,
        tipo: this.form.get('tipo')?.value,
        descricao: this.form.get('descricao')?.value,
      };
      this.denunciaService.cadastrarDenuncia(this.denuncia);
    } else {
      console.error('Formulário inválido');
    }
  }
}
