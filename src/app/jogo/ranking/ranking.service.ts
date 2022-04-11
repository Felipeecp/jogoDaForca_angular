import { NovoUsuario } from './../../home/novo-usuario/novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  urlRaking = 'http://localhost:8080/jogoDaForca/api/jogo/usuario/obterRanking';

  constructor(private httpClient: HttpClient) {}

  listaUsuariosRaking() {
    return this.httpClient.get<NovoUsuario[]>(this.urlRaking);
  }
}
