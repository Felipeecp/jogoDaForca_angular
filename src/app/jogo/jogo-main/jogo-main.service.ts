import { Observable } from 'rxjs';
import { Palavra } from './../../home/models/palavra';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JogoMainService {
  private urlPalavraAleatoria =
    'http://localhost:8080/jogoDaForca/api/jogo/palavra/obterPalavraAleatoria';
  private urlListaPalavras =
    'http://localhost:8080/jogoDaForca/api/jogo/palavra/listarPalavras';

  constructor(private httpCliente: HttpClient) {}

  palavraAleatoria(): Observable<Palavra> {
    return this.httpCliente.get<Palavra>(this.urlPalavraAleatoria);
  }

  listaPalavras(): Observable<Palavra[]> {
    return this.httpCliente.get<Palavra[]>(this.urlListaPalavras);
  }
}
