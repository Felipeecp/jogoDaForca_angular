import { NovoUsuario } from './../../home/novo-usuario/novo-usuario';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Palavra } from 'src/app/home/models/palavra';
import { JogoMainService } from '../jogo-main/jogo-main.service';

@Component({
  selector: 'app-jogo-palavra',
  templateUrl: './jogo-palavra.component.html',
  styleUrls: ['./jogo-palavra.component.css'],
})
export class JogoPalavraComponent implements OnInit, OnChanges {
  @Input() categoriaAtual!: string;
  @Input() listaLetrasTentadas!: string[];

  listaPalavras: Palavra[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const listaDinamicaAtual = changes?.['listaLetrasTentadas']?.currentValue;
    if (listaDinamicaAtual) {
      this.alteraListaDinamica(listaDinamicaAtual);
    }
  }

  alteraListaDinamica(lista: string[]) {
    this.listaLetrasTentadas = lista;
  }

  ngOnInit(): void {}
}
