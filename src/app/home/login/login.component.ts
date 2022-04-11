import { BehaviorSubject } from 'rxjs';
import { NovoUsuario } from './../novo-usuario/novo-usuario';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  usuarioExiste!: boolean;
  usuario!: NovoUsuario;

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autentica(this.email, this.senha).subscribe({
      next: (response) => {
        this.usuario = response;
        this.router.navigate(['jogo']);
      },
      error: (error) => {
        this.usuarioExiste = false;
        console.log(error);
      },
    });
  }
}
