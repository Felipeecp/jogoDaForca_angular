import { Palavra } from './../../home/models/palavra';
import { JogoMainService } from './jogo-main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-main',
  templateUrl: './jogo-main.component.html',
  styleUrls: ['./jogo-main.component.css'],
})
export class JogoMainComponent implements OnInit {
  letraAtual: string = '';
  listaPalavras: Palavra[] = [];
  palavraEscolhida!: Palavra;
  listaDinamica: string[] = [];
  letrasPalavraEscolhida!: string[];
  categoria: string = '';
  totalTentativas = 6;
  listaDinamicaTemValorVazio: boolean = true;
  ganhou!: boolean;

  constructor(private jogoMainService: JogoMainService) {}

  ngOnInit(): void {
    this.jogoMainService.listaPalavras().subscribe({
      next: (response) => {
        this.listaPalavras = response;
        this.selecionarPalavra();
        this.preencheListaDinamica();
      },
    });
  }

  recomecar() {
    this.totalTentativas = 6;
    this.listaDinamica = [];
    this.listaDinamicaTemValorVazio = true;
    this.selecionarPalavra();
    this.preencheListaDinamica();
  }

  preencheListaDinamica() {
    for (let i in this.letrasPalavraEscolhida) {
      if (this.listaDinamica[i] == undefined) {
        this.listaDinamica[i] = ' ';
      }
    }
  }

  preencheLetraAtual(letra: string) {
    this.letraAtual = letra;
    const letraMinuscula = letra.toLowerCase();
    const posicao = this.palavraEscolhida.nome.indexOf(letraMinuscula);
    console.log(this.totalTentativas !== 0 && this.listaDinamicaTemValorVazio);
    if (posicao < 0) {
      this.totalTentativas--;
    } else {
      for (let index in this.letrasPalavraEscolhida) {
        if (this.letrasPalavraEscolhida[index] === letraMinuscula) {
          this.listaDinamica[index] = letraMinuscula;
          this.listaDinamicaTemValorVazio = this.listaDinamica.includes(' ');
        }
      }
    }
  }

  selecionarPalavra() {
    const indexPalavra = Math.floor(Math.random() * this.listaPalavras.length);
    this.palavraEscolhida = this.listaPalavras[indexPalavra];
    this.letrasPalavraEscolhida = this.palavraEscolhida.nome.split('');
    this.categoria = this.palavraEscolhida.categoria;
    console.log(this.palavraEscolhida.nome);
  }
}
