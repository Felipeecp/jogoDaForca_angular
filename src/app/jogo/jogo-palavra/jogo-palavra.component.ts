import { Component, OnInit } from '@angular/core';
import { Palavra } from 'src/app/home/models/palavra';
import { JogoMainService } from '../jogo-main/jogo-main.service';

@Component({
  selector: 'app-jogo-palavra',
  templateUrl: './jogo-palavra.component.html',
  styleUrls: ['./jogo-palavra.component.css'],
})
export class JogoPalavraComponent implements OnInit {
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
