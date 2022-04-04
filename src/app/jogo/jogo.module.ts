import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoRoutingModule } from './jogo-routing.module';
import { JogoMainComponent } from './jogo-main/jogo-main.component';


@NgModule({
  declarations: [
    JogoMainComponent
  ],
  imports: [
    CommonModule,
    JogoRoutingModule
  ]
})
export class JogoModule { }
