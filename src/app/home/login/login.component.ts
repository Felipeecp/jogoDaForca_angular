import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  usuarioExiste!: boolean;

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autentica(this.email, this.senha).subscribe(
      () => {
        this.router.navigate(['jogo']);
      },
      (error) => {
        this.usuarioExiste = false;
        console.log(error);
      }
    );
  }
}
