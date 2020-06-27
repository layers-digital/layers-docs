# Informações de usuário do Layers

Usando o token gerado pelo uso do botão de logar com Layers é possível acessar as informações do usuário além de informações de turmas e alunos relacionados autenticado dentro dos escopos aos quais o usuário consentiu. Para isso, realize a requisição abaixo passando o token no header `authorization`.

##### **GET** `/v1/oauth/user/info?_community={{community}}`
Caso utilize mais de um item na chave `includes`, é necessário separar por vírgulas

A API retornará um JSON com o seguinte formato:

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