import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDenuncia } from '../models/IDenuncia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DenunciaService {
  private denuncias: IDenuncia[] = [
    {
      id: 'b4e1cb0e-62dd-4905-9c84-7a67921e1bf7',
      descricao: 'Vazamento de água',
      localizacao: 'R. Gonçalves Lêdo, 777',
      tipo: 'vazamento',
    },
    {
      id: 'b4e1cb0e-62dd-4905-9c84-7a67921e1bf8',
      descricao: 'Incêndio',
      localizacao: 'Av. Paulista, 1234',
      tipo: 'incendio',
    },
    {
      id: 'b4e1cb0e-62dd-4905-9c84-7a67921e1bf9',
      descricao: 'Desabamento',
      localizacao: 'Av. Ipiranga, 200',
      tipo: 'desabamento',
    },
  ];

  constructor(private http: HttpClient) {}

  public listarDenuncias(): Observable<IDenuncia[]> {
    return of(this.denuncias);
  }

  public cadastrarDenuncia(denuncia: IDenuncia): Observable<IDenuncia> {
    this.denuncias.push(denuncia);
    return of(denuncia);
  }
}
