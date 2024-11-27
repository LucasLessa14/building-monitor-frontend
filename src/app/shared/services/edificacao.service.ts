import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEdificacao } from '../models/IEdificacao';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class EdificacaoService {
  // private edificacao: IEdificacao[] = [
  //   {
  //     id: 'b4e1cb0e-62dd-4905-9c84-7a67921e1bf7',
  //     nome: 'BS Tower Multi Office',
  //     endereco: 'R. Gonçalves Lêdo, 777',
  //     tipo: 'edifício',
  //     status: 'ok',
  //   },
  //   {
  //     id: 'b4e1cb0e-62dd-4905-9c84-7a67921e1bf8',
  //     nome: 'Edifício Avenida Paulista',
  //     endereco: 'Av. Paulista, 1234',
  //     tipo: 'edifício',
  //     status: 'ok',
  //   },
  //   {
  //     id: 'b4e1cb0e-62dd-4905-9c84-7a67921e1bf9',
  //     nome: 'Edifício Copan',
  //     endereco: 'Av. Ipiranga, 200',
  //     tipo: 'edifício',
  //     status: 'ok',
  //   },
  // ];
  readonly baseUrl = environment.apiUrl + '/edificacoes';

  constructor(private http: HttpClient) {}

  public listarEdificacoes(): Observable<IEdificacao[]> {
    return this.http.get<IEdificacao[]>(this.baseUrl);
  }

  public cadastrarEdificacao(edificacao: IEdificacao): Observable<IEdificacao> {
    return this.http.post<IEdificacao>(this.baseUrl, edificacao);
  }
}
