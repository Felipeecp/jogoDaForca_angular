import { NovoUsuario } from './../../home/novo-usuario/novo-usuario';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { LoginComponent } from './../../home/login/login.component';
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
  usuarioLogado!: NovoUsuario;
  pontos: number = 0;

  constructor(
    private jogoMainService: JogoMainService,
    private authService: AutenticacaoService
  ) {}

  ngOnInit(): void {
    this.jogoMainService.listaPalavras().subscribe({
      next: (response) => {
        this.listaPalavras = response;
        this.selecionarPalavra();
        this.preencheListaDinamica();
        this.usuarioLogado = this.authService.usuarioAtual;
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
    const letraMinuscula = letra.toUpperCase();
    const posicao = this.palavraEscolhida.nome
      .toUpperCase()
      .indexOf(letraMinuscula);
    console.log(this.totalTentativas !== 0 && this.listaDinamicaTemValorVazio);
    if (posicao < 0) {
      this.totalTentativas--;
    } else {
      for (let index in this.letrasPalavraEscolhida) {
        if (this.letrasPalavraEscolhida[index] === letraMinuscula) {
          this.listaDinamica[index] = letraMinuscula;
          this.listaDinamicaTemValorVazio = this.listaDinamica.includes(' ');
          console.log(this.usuarioLogado.pontos);
          if (!this.listaDinamicaTemValorVazio) {
            this.pontos += this.listaDinamica.length;
            this.usuarioLogado.pontos = this.pontos;
            console.log(this.usuarioLogado.pontos);
          }
        }
      }
    }
  }

  selecionarPalavra() {
    const indexPalavra = Math.floor(Math.random() * this.listaPalavras.length);
    this.palavraEscolhida = this.listaPalavras[indexPalavra];
    this.letrasPalavraEscolhida = this.palavraEscolhida.nome
      .toUpperCase()
      .split('');
    this.categoria = this.palavraEscolhida.categoria;
  }

  atualizarPontosUsuario() {
    return null;
  }
}
