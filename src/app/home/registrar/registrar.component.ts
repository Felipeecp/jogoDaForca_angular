import { RegistrarService } from './registrar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Endereco } from '../endereco/endereco';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NovoUsuarioService } from '../novo-usuario/novo-usuario.service';
import { NovoUsuario } from '../novo-usuario/novo-usuario';
import { validarSenha } from './confirmaSenha.validator';

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
    private router: Router,
    private registrarService: RegistrarService
  ) {}

  ngOnInit(): void {
    this.registrarService.listaDeEnderecos().subscribe({
      next: (listaEnderecos) => {
        this.enderecos = listaEnderecos;
        console.log(this.enderecos);
      },
    });

    this.registroForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        celular: ['', [Validators.required]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: [''],
        endereco: this.formBuilder.group({
          id: ['', Validators.required],
          cep: ['', Validators.required],
          logradouro: ['', Validators.required],
          cidade: ['', Validators.required],
          estado: ['', Validators.required],
        }),
        cartao: this.formBuilder.group({
          numero: ['', [Validators.required]],
          nome: ['', [Validators.required]],
          dataValidade: ['', Validators.required],
          codigoSeguranca: ['', Validators.required],
        }),
      },
      {
        validators: [validarSenha],
      }
    );
  }

  cadastrar() {
    this.registroForm.removeControl('confirmarSenha');
    const novoUsuario = this.registroForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
    this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  consultarCEP() {
    const cep = this.registroForm.get('endereco.cep')?.value;
    if (cep != null) {
      let dados!: Endereco;
      this.enderecos.forEach((endereco) => {
        if (endereco.cep === cep) {
          dados = endereco;
        }
      });
      this.preencherEndereco(dados);
    }
  }

  preencherEndereco(dados: Endereco) {
    this.registroForm.patchValue({
      endereco: {
        id: dados.id,
        logradouro: dados.logradouro,
        cidade: dados.cidade,
        estado: dados.estado,
      },
    });
  }
}
