---
template: default
title: Single Sign-On na Layers
tableOfContents: true
previousText: 'Introdução'
previousUrl: '/docs/forstartups'
nextText: 'Validando Tokens'
nextUrl: '/docs/forstartups/sso/validating-tokens'
---

Entregamos uma experiência de Login Unificado (Single Sign-On ou SSO) baseado no protocolo [OAuth2](https://oauth.net/2/) para otimizar o tempo gasto com gestão de contas e acessos aos recursos digitais.

## Faça login com a Layers
Plataformas parceiras possuem o botão "Logar com Layers", facilitando o acesso com apenas um login.

O botão é um link com parâmetros adicionados que definem para qual aplicativo a Layers deve enviar o usuário e algumas configurações necessárias para o fluxo do
protocolo OAuth2.

Com a intenção de facilitar a vida do desenvolvedor, a Layers desenvolveu uma SDK que abstrai grande parte da lógica necessária para a implementação do botão - para utilizá-lo, é necessário utilizar a [SDK de Botão "Logar com Layers"](/docs/forstartups/sdk/layers-button)

### Escopos OAuth2
| Escopo                    | Acesso                                                                                                                                                                               |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| openid       | account.id                                                     |
| profile       | account.createdAt <br/>account.updatedAt <br/>account.language <br/>account.timezone <br/>account.firstName                                                                                                                                                                        |
| fullname       | account.name                                                                                                                                                                       |
| email         | account.email                                                                                                                                                                        |
| related.communities | community.community <br/>community.name <br/>community.icon <br/>community.logo <br/>community.language <br/>community.timezone <br/>community.geolocation <br/>community.color <br/>community.createdAt <br/>community.updatedAt <br/>user.lastSeenAt <br/>user.id <br/>user.createdAt <br/>user.updatedAt <br/>user.alias <br/>user.roles <br/>user.permissions |
| related.groups     | group.id <br/>group.name <br/>group.alias <br/>group.createdAt <br/>group.updatedAt <br/>group.enrollment.id <br/>group.enrollment.kind <br/>group.enrollment.entity <br/>group.enrollment.group <br/>group.enrollment.createdAt <br/>group.enrollment.updatedAt                                                                                               |
| related.members                | member.id <br/>member.name <br/>member.createdAt <br/>member.updatedAt                                                                                                                                          |
| related.members.groups         | groups.id <br/>group.name <br/>group.alias <br/>group.createdAt <br/>group.updatedAt <br/>group.enrollment.id <br/>group.enrollment.kind <br/>group.enrollment.entity <br/>group.enrollment.group <br/>group.enrollment.createdAt <br/>group.enrollment.updatedAt  

## Layers OAuth2
Caso não queira utilizar a [SDK de Botão "Logar com Layers"](/docs/forstartups/sdk/layers-button) e criar seu próprio fluxo, as especificações passo a passo do OAuth2 da Layers seguem abaixo.

### Client-side

O cliente deverá abrir a seguinte url `https://id.layers.digital`, passando os seguintes pârametros:

| Parâmetro     | Valor                                                               |
| ------------- | ------------------------------------------------------------------- |
| client_id     | Identificador do app                                                |
| response_type | `code` (Atualmente o único aceitado)                                |
| redirect_uri  | URL de redirecionamento configurada anteriormente                   |
| scope         | Escopos configurados anteriormente (deve ser indentado com espaços) |
| state         | Mensagem adicional que pode ser utilizada para ser retornado na rota de token de acesso (OPCIONAL) |

Exemplo de url: `https://id.layers.digital/?client_id=myApp&redirect_uri=https://myApp.com&response_type=code&scope=openid profile fullname`

### Autenticação
Todas as chamadas devems ser feitas na url da API da layers: `https://api.layers.digital`

Após o usuário fazer o fluxo de login e aceitar os escopos, será redirecionado para `https://{{redirect_uri}}?code={{code}}`. Com este código de acesso `{{code}}`, será necessário fazer a seguinte requisição:

```http
POST https://api.layers.digital/oauth/token
```
###### Requisição do tipo FORM URL Encoded:
```js
{
    "grant_type": "authorization_code",
    "client_id": "{{client_id}}",
    "code": "{{code}}",
    "redirect_uri": "{{redirect_uri}}"
}
```
###### A API retornará um JSON com o seguinte formato:
###### Resposta:
```js
{
    "access_token": "{{jwtToken}}",
    "token_type": "Bearer",
    "expires_in": Number // Em quanto tempo irá expirar este token,
    "state": String // Irá retornar o mesmo valor caso tenha sido utilizado na primeira chamada
}
```

### Requisitando dados básicos do usuário logado

Todos os endpoints abaixo devem ser autenticados da seguinte forma:
##### Headers
```js
Authorization: 'Bearer {{jwtToken}}'
```

#### Endpoints

##### Informações da Conta
```http
GET https://api.layers.digital/v1/oauth/account/info
```

Retorna os detalhes de uma conta e suas comunidades
Caso utilize mais de um item na chave `includes`, é necessário separar por vírgulas

Exemplo de chamada com includes:
```http
GET https://api.layers.digital/v1/oauth/account/info?includes=communities
```

###### A API retornará um JSON com o seguinte formato:
###### Resposta:
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

#### Informações do Usuário

```http
GET https://api.layers.digital/v1/oauth/user/info?_community={{community}}
```

Retorna os detalhes de um usuário, turmas e alunos
Caso utilize mais de um item na chave `includes`, é necessário separar por vírgulas

Exemplo de chamada com includes:
```http
GET https://api.layers.digital/v1/oauth/user/info?_community={{community}}&includes=communities,groups
```

###### A API retornará um JSON com o seguinte formato:
###### Resposta:
```js
{
    "user": {
        "lastSeenAt": Date, // Última visualização do usuário
        "id": String, // Identificador único
        "createdAt": Date, // Data de criação do usuário
        "updatedAt": Date, // Última data de atualização do usuário
        "alias": String, // Identificador do usuário na comunidade
        "roles": String, // Papéis do usuário na comunidade
        "permissions": String // Permissões do usuário na comunidade
    },
    "community": { // Incluir "includes=community" na querystring para ter acesso
        "color": String, // Cor principal da comunidade
        "community": String, // Identificador único
        "icon": String, // Logo
        "name": String, // Nome
    }
    "groups": [ // Incluir "includes=groups" na querystring para ter acesso
        {
            "id": String, // Identificador único do grupo
            "name": String, // Nome do grupo
            "alias": String, // Identificador do grupo
            "createdAt": Date, // Data de criação do grupo
            "updatedAt": Date, // Última data de atualização do grupo,
            "season": String, // Período escolar da turma
            "enrollment": { // Incluir "includes=groups.enrollment" na querystring para ter acesso
                "id": String, // Identificador único da mátricula
                "kind": String, // Tipo da mátricula
                "entity": String, // Identificador da entidade mátriculada
                "group": String, // Identificador do grupo da mátricula
                "createdAt": Date, // Data de criação da mátricula
                "updatedAt": Date // Última data de atualização da mátricula
            }
        }
    ],
    "members": [ // Incluir "includes=members" na querystring para ter acesso
        {
            "name": String, // Nome do aluno
            "createdAt": String, // Data de criação do aluno
            "updatedAt": String, // Última data de atualização do aluno
            "alias": String, // Identificador do aluno
            "id": String // Identificador único do aluno,
            "groups": [ // Incluir "includes=members.groups" na querystring para ter acesso
                {
                    "id": String, // Identificador único do grupo
                    "name": String, // Nome do grupo
                    "alias": String, // Identificador do grupo
                    "createdAt": Date, // Data de criação do grupo
                    "updatedAt": Date, // Última data de atualização do grupo,
                    "season": String, // Período escolar da turma
                    "enrollment": { // Incluir "includes=members.groups.enrollment" na querystring para ter acesso
                        "id": String, // Identificador único da mátricula
                        "kind": String, // Tipo da mátricula
                        "entity": String, // Identificador da entidade mátriculada
                        "group": String, // Identificador do grupo da mátricula
                        "createdAt": Date, // Data de criação da mátricula
                        "updatedAt": Date // Última data de atualização da mátricula
                    }
                }
            ]
        }
    ]
}
```

**ATENÇÃO:** Os comentários foram adicionados apenas para explicar as estruturas de dados, nem a requisição e nem a resposta devem ter comentários, ambos devem ser JSONs válidos.
