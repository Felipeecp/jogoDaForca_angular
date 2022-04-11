import { Endereco } from './../endereco/endereco';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrarService {
  urlApiListaEnderecos =
    'http://localhost:8080/jogoDaForca/api/jogo/usuario/obterListaEnderecosJson';

  constructor(private httpClient: HttpClient) {}

  listaDeEnderecos(): Observable<Endereco[]> {
    return this.httpClient.get<Endereco[]>(this.urlApiListaEnderecos);
  }
}
