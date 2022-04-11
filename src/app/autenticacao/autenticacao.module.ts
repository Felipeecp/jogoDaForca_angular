import { HomeModule } from './../home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoService } from './autenticacao.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, HomeModule],
})
export class AutenticacaoModule {}
