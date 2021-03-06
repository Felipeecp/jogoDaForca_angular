import { JogoMainComponent } from './jogo-main/jogo-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: JogoMainComponent,
  },
  {
    path: 'ranking',
    component: RankingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoRoutingModule {}
