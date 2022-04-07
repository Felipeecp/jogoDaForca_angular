import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-jogo-forca',
  templateUrl: './jogo-forca.component.html',
  styleUrls: ['./jogo-forca.component.css'],
})
export class JogoForcaComponent implements OnInit, OnChanges {
  @Input() tentativas!: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const totalTentativasAtual = changes?.['tentativas']?.currentValue;
    if (totalTentativasAtual) {
      this.tentativas = totalTentativasAtual;
    }
  }

  ngOnInit(): void {}
}
