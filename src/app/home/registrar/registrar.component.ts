import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Endereco } from '../endereco/endereco';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuarioService } from '../novo-usuario/novo-usuario.service';
import { NovoUsuario } from '../novo-usuario/novo-usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  registroForm!: FormGroup;
  enderecos!: Endereco[];

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.enderecos = [
      { id: 1, estado: 'Maranhão', cidade: 'São Luís', cep: '65030440' },
      { id: 2, estado: 'Ceará', cidade: 'Fortaleza', cep: '60060095' },
      { id: 3, estado: 'São Paulo', cidade: 'São Paulo', cep: '01035901' },
      { id: 4, estado: 'Sergipe', cidade: 'Aracaju', cep: '49010060' },
    ];

    this.registroForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      cpf: [''],
      celular: [''],
      senha: [''],
      logradouro: [''],
      endereco: [''],
      cartao: this.formBuilder.group({
        numero: [''],
        nomeCartao: [''],
        dataValidade: [''],
        codigoSeguranca: [''],
      }),
    });
  }

  cadastrar() {
    const novoUsuario = this.registroForm.getRawValue() as NovoUsuario;
    this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
