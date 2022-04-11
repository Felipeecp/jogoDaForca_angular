import { NovoUsuario } from './../../home/novo-usuario/novo-usuario';
import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  listaUsuariosRaking!: NovoUsuario[];
  headers = ['Posição', 'Nome', 'Pontos'];

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.rankingService.listaUsuariosRaking().subscribe({
      next: (response) => {
        this.listaUsuariosRaking = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
