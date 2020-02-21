# Overview
A API do backend é um recurso Node.js-based para comunicar com o Gerenciador de Contas. Você pode usá-la para acessar data e definir certas propriedades para os contatos.  
O Backend foi desenvolvido pensando-se na arquitetura MVC.

# Models: Contacts
Este é o Model de Contatos  

## Estrutura
```js
{
  "_id": "<UID Aleatório>",
  "name": "<Nome do contato>",
  "email": "<Email do contato>",
  "phone": "<Celular do contato>",
  "__v": <Qnt. de updates>
}
```

# Controllers
Aqui estão listados os controles da API, seus métodos, parâmetros e estrutura.

## Contatos

| Método       | Estrutura           | Ação                                  | Parâmetros          | Retorno       |
| ------------ | ------------------- | ------------------------------------- | ------------------- | ------------- |
| GET    | `/api/contacts`         | Lista todos os contatos cadastrados   | **Nenhum**          | JSON/Contatos |
| POST   | `/api/contacts`         | Cadastra um contato no banco de dados | JSON/name,email,phone  | JSON/Contato  |
| DELETE | `/api/contacts/:phone` | Deleta um contato                     | Rota                | 200 OK        |
