import { Palavra } from './../../home/models/palavra';
import { JogoMainService } from './jogo-main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-main',
  templateUrl: './jogo-main.component.html',
  styleUrls: ['./jogo-main.component.css'],
})
export class JogoMainComponent implements OnInit {
  palavraEscolhida!: Palavra;
  letrasPalavraEscolhida!: String[];

  constructor(private jogoMainService: JogoMainService) {}

  ngOnInit(): void {
    this.jogoMainService.palavraAleatoria().subscribe({
      next: (palavra) => {
        this.palavraEscolhida = palavra;
        this.letrasPalavraEscolhida = palavra.nome.split('');
        const tamanho = this.letrasPalavraEscolhida.length;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
