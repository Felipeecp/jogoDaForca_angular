import { Cartao } from '../cartao/cartao';
import { Endereco } from './../endereco/endereco';
export interface NovoUsuario {
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  senha: string;
  pontos: number;
  endereco: Endereco;
  cartao: Cartao;
}
