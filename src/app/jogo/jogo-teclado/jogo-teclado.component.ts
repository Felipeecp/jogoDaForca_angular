import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ↻';
interface Tecla {
  letra: string;
  pressionado: boolean;
}
@Component({
  selector: 'app-jogo-teclado',
  templateUrl: './jogo-teclado.component.html',
  styleUrls: ['./jogo-teclado.component.css'],
})
export class JogoTecladoComponent implements OnInit {
  @Output() teclaPressionada = new EventEmitter<string>();

  teclas: Tecla[] = [];

  constructor() {
    this.teclas = LETRAS.split('').map((valor) => {
      return {
        letra: valor,
        pressionado: false,
      };
    });
  }

  ngOnInit(): void {}

  aoPressionar(tecla: Tecla): void {
    tecla.pressionado = true;
    this.teclaPressionada.emit(tecla.letra);
    // console.log(tecla.letra);
  }
}
