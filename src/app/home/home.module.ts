import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegistrarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [HomeComponent, LoginComponent],
})
export class HomeModule {}
