import { NovoUsuario } from './../home/novo-usuario/novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  usuarioAtual!: NovoUsuario;
  constructor(private httpCliente: HttpClient) {}

  autentica(email: string, senha: string): Observable<any> {
    return this.httpCliente
      .post('http://localhost:8080/jogoDaForca/api/jogo/usuario/login', {
        email: email,
        senha: senha,
      })
      .pipe(
        tap((response) => {
          this.usuarioAtual = response as NovoUsuario;
        })
      );
  }
}
