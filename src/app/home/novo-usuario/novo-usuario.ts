import { Cartao } from '../cartao/cartao';
import { Endereco } from './../endereco/endereco';
export interface NovoUsuario {
  nome: String;
  email: String;
  cpf: String;
  celular: String;
  senha: String;
  logradouro: String;
  endereco: Endereco;
  cartao: Cartao;
}
