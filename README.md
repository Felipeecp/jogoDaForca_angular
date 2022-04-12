# JogoDaForca

Projeto desenvolvido durante programa de estagio empresa [Techne](https://www.techne.com.br/)

## Descrição

A proposta do desafio foi criar um site com um protótipo de jogo da forca.
O site deveria ter:

- Tela de login com autenticação do usuário cadastrado no banco dados;
- Tela de cadastro de novos usuário;
- Na tela de cadastro, ter campos de endereço (CEP, Cidade e Estado) e campos relacionados a cartão de crédito;
- Tela do Jogo com toda a lógica para funcionamento do jogo;

## Tecnologias utilizadas

- Angular
- Typescript
- Bootstrap
- consumo de api Java (descrições da api neste [repositorio](https://github.com/Felipeecp/jogoDaForca_api))

## Desenvolvimento

Durante o programa foi estudado cursos sobre SQL Server, JavaEE e Angular.

**Backend**

- Para desenvolver o backend da aplicação, optei por desenvolver a solução criando uma API REST usando o JavaEE, usando principalmente JAX-RS e Hibernate.
- O servido foi gerado usando JBoss e Wildfly.
- Como banco de dados foi utilizado SQL Server.

**Frontend**

- O Frontend foi criado com usando Angular com Typescript
- Bootstrap foi utilizado com framework css
- Foi consumida da API desenvolvida para fazer o login, cadastrar novos usuários e obter as palavras para o funcionamento do jogo do banco de dados.

## Tecnologias

Projeto gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
