import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpCliente: HttpClient) {}

  autentica(email: string, senha: string): Observable<any> {
    return this.httpCliente.post(
      'http://localhost:8080/jogoDaForca/api/jogo/login',
      {
        email: email,
        senha: senha,
      }
    );
  }
}
