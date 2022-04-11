import { HomeModule } from './../home/home.module';
import { AutenticacaoModule } from './../autenticacao/autenticacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoRoutingModule } from './jogo-routing.module';
import { JogoMainComponent } from './jogo-main/jogo-main.component';
import { JogoTecladoComponent } from './jogo-teclado/jogo-teclado.component';
import { JogoPalavraComponent } from './jogo-palavra/jogo-palavra.component';
import { JogoForcaComponent } from './jogo-forca/jogo-forca.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    JogoMainComponent,
    JogoTecladoComponent,
    JogoPalavraComponent,
    JogoForcaComponent,
    RankingComponent,
  ],
  imports: [CommonModule, JogoRoutingModule, AutenticacaoModule],
})
export class JogoModule {}
