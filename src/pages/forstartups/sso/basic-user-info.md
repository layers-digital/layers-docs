---
template: default
title: Requisitando Informações do Usuário
tableOfContents: true
previousText: 'Single Sign-On na Layers'
previousUrl: '/docs/forstartups/sso'
nextText: 'Validando o Layers SSO Token'
nextUrl: '/docs/forstartups/sso/validating-tokens'
---

# Requisitando Informações do Usuário
Após o login, provavelmente sua aplicação precisará de informações básicas do usuário logado. Dada essa necessidade, a Layers disponibiliza rotas para que as aplicações consigam facilmente os dados do usuário logado. 

## Requisições

Todos os endpoints abaixo devem ser autenticados da seguinte forma:
### Headers
```headers
Authorization: 'Bearer {{Layers SSO Token}}'
```

### Endpoints

#### Informações da Conta
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
