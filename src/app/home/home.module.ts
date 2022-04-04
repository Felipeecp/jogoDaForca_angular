import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegistrarComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
