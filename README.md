# Base Conhecimento API

<div align="center">
  <h3 align="center">API de Base de Conhecimento</h3>

  <p align="center">
    Uma API REST em NestJS para gerenciar uma base de conhecimento com artigos e autenticação de usuários
    <br />
  </p>
</div>

## Sobre o Projeto

Base Conhecimento é uma API RESTful construída com NestJS que fornece:

* Autenticação e autorização de usuários com JWT
* Gerenciamento de artigos com categorias
* Controle de acesso baseado em funções (papéis de ADMIN e USER)

O projeto segue práticas modernas de desenvolvimento e utiliza o NestJS Guards para uma robusta autenticação.

### Construído Com

* [![NestJS][NestJS]][NestJS-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![pnpm][pnpm]][pnpm-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![JWT][JWT]][JWT-url]
* [![Docker][Docker]][Docker-url]

## Começando

Siga estas etapas para executar a API em seu ambiente local.

### Pré-requisitos

* Node.js 16+
* pnpm
* Docker e Docker Compose (para o banco de dados PostgreSQL)

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/seuusuario/base-conhecimento-nest.git
   ```

2. Inicie o banco de dados PostgreSQL com Docker Compose
   ```sh
   docker-compose up -d
   ```

3. Instale as dependências com pnpm
   ```sh
   pnpm install
   ```

4. Execute a aplicação
   ```sh
   pnpm run start:dev
   ```
   
5. A API estará disponível em:
   ```
   http://localhost:3000
   ```

## Documentação da API

### Endpoints de Autenticação

* **Registrar Usuário**: `POST /auth/register`
  ```json
  {
    "email": "usuario@exemplo.com",
    "password": "senha",
    "role": "USER"
  }
  ```

* **Login**: `POST /auth/login`
  ```json
  {
    "email": "usuario@exemplo.com",
    "password": "senha"
  }
  ```
  Retorna um token JWT para usar em requisições autenticadas

### Endpoints de Usuários

* **Obter Todos os Usuários**: `GET /users` (requer autenticação)

### Endpoints de Artigos

* **Obter Todos os Artigos**: `GET /articles` (requer autenticação)
* **Criar Artigo**: `POST /articles` (requer papel de USER)
  ```json
  {
    "title": "Título do Artigo",
    "content": "Conteúdo do artigo vai aqui",
    "categoryId": 1
  }
  ```

## Recursos de Segurança

A API implementa:
- Autenticação baseada em JWT
- Criptografia de senha usando Bcrypt
- Autorização baseada em papéis (ADMIN e USER)
- Gerenciamento de sessão stateless

## Esquema do Banco de Dados

A aplicação usa PostgreSQL com as seguintes entidades principais:
- `users`: Armazena credenciais e papéis de usuário
- `articles`: Armazena artigos da base de conhecimento
- `categories`: Armazena categorias de artigos

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença

Este projeto é open source e está disponível sob a Licença MIT.

<!-- MARKDOWN LINKS & IMAGES -->
[NestJS]: https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[NestJS-url]: https://nestjs.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[pnpm]: https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white
[pnpm-url]: https://pnpm.io/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[JWT]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white
[JWT-url]: https://jwt.io/
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
