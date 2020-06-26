# Informações de conta do Layers

Usando o token gerado pelo uso do botão de logar com Layers é possível acessar as informações da conta do usuário autenticado dentro dos escopos aos quais ele consentiu. Para isso, realize a requisição abaixo passando o token no header `authorization`.

##### **GET** `/v1/oauth/account/info`
Caso utilize mais de um item na chave `includes`, é necessário separar por vírgulas

A API retornará um JSON com o seguinte formato:

```js
{
    "createdAt": Date, // Data de criação da conta
    "email": String, // Email de acesso da conta
    "firstName": String, // Primeiro nome
    "id": String, // Identificador único
    "language": String, // Idioma principal da conta
    "lastName": String, // Último nome
    "name": String, // Nome completo
    "timezone": String // Timezone principal da conta",
    "updatedAt": String // Última data de atualização da conta,
    "communities": [ // Incluir "includes=communities" na querystring para ter acesso
        {
            "color": String, // Cor principal da comunidade
            "community": String, // Identificador único
            "icon": String, // Logo
            "name": String // Nome
        }
    ]
}
```