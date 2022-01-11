## 🚀 Como executar o projeto

```bash
# Clone este repositório
# Acesse a pasta do projeto no terminal/cmd
$ cd teste-backend-imobpower

# Instale as dependências
$ yarn install
```

### Crie o arquivo para conexão com o banco

* Tenha a imagem do banco de dados postgres no docker

```ts
// Exemplo
// nome: ormconfig.json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "docker",
  "database": "testeImobpower",
  "entities": [
    "./src/modules/**/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations"
  }
}
```

### Crie a tabela no Banco de dados

```bash
# Execute as migrações
$ yarn typeorm migration:run

# Aguarde a criação da tabela
# Execute a aplicação
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

### Acesse as rotas com um API Client (como o insomnia)
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Teste%20-%20ImobPower&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fbrhenriq%2Fsimple-landing-page%2Fmain%2Frotas.json)

### **[Documentação](https://teste-imobpower.herokuapp.com/docs/)**

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[TypeORM](https://typeorm.io)**
-   **[Postgres](https://www.postgresql.org)**
-   **[Docker](https://www.docker.com)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[Swagger](https://swagger.io)**
-   **[Bcrypt](https://www.npmjs.com/package/bcryptjs)**
-   **[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)**

---

## 🛠 Deploy on Heroku

A aplicação poder ser acessada **[Aqui](https://teste-imobpower.herokuapp.com/)**
