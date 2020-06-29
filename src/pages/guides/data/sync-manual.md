# Sincronizar dados manualmente

Além da [sincronização automática](./sync) é possível também ter controle de cada uma das etapas de criação de usuários, membros, grupos e seus vínculos.

## Criar usuário

Para criar um novo usuário no Layers deve ser feita a seguinte requisição passando os [headers obrigatórios](link).

> **Atenção:** para realizar essa requisição seu app deve ter a permissão `user:write`

```http
POST /users
```

```js
{
  "invite": true,
  "address": {
    "code": "00000-000",
    "city": "São Paulo",
    "state": "SP",
    "address": "Rua Tonelero",
    "district": "Vila Tolstoi",
    "number": "155"
  },
  "roles": [
    "student",
    "guardian",
    "admin",
    "professor"
  ],
  "name": "Felipe Tiozo",
  "email": "felipe.tiozo@tenda.digital",
  "alias": "12345667",
  "phone": "(11) 23434-2342",
  "cellphone": "(11) 24234-2342",
  "cpf": "003.236.790-21",
  "birth": "1995-04-27T03:00:00.000Z"
}
```

A API do Layers retornará o usuário criado no seguinte formato;

```js
{
  "createdAt": "2018-11-29T13:27:14.096Z",
  "updatedAt": "2018-11-29T13:27:14.096Z",
  "activatedAt": null,
  "id": "5bffe932ea476f5c760ce99a",
  "status": "INVITED",
  "invitationCount": 0,
  "lastSentInvitation": null,
  "roles": [],
  "name": "Felipe Tiozo",
  "email": "felipe.tiozo@tenda.digital",
  "address": {
      "code": "00000-000",
      "state": "São Paulo",
      "city": "SP",
      "district": "Vila Tolstoi",
      "address": "Rua Tonelero",
      "number": '155'
  },
  "emailHealth": null
}
```

## Criar membro

Alunos no Layers são chamados de membros. Para criar um novo aluno seu app deve realizar a requisição abaixo.

> **Atenção:** para realizar essa requisição seu app deve ter a permissão `member:write`

```http
POST /members
```

```js
{
  "name": "Nome do aluno",
  "alias": "123456",
  "birth": "2018-11-29T13:27:14.096Z"
}
```

A API retornará o membro criado no seguinte formato:

```js
{
  "id": "5bffead1ea476f5c760d09cb",
  "updatedAt": "2018-11-29T13:34:09.374Z",
  "createdAt": "2018-11-29T13:34:09.374Z",
  "active": true,
  "name": "Nome do aluno",
  "alias": "123456",
  "access": [],
  "birth": "2018-11-29T13:27:14.096Z",
  "accessCount": 0,
  "enrollments": null
}
```

## Criar grupos

Grupos no Layers são a representação de turmas ou salas de aula. Seu app pode criar um grupo através da requisição abaixo.

> **Atenção:** para realizar essa requisição seu app deve ter a permissão `group:write`

```http
POST /groups
```

```js
{
  name: 'nome da turma'
}
```

A API do Layers retornará o grupo criada no seguinte formato:

```js
{
  "id":"5efa29590a85d90001071d50",
  "createdAt":"2020-06-29T17:48:09.136Z",
  "updatedAt":"2020-06-29T17:48:09.136Z",
  "active":true,
  "name":"nome da turma",
  "tags":[],
  "admins":[],
  "members":[],
  "enrollments":null,
  "type":"classroom",
  "syncedAt":null,
  "enrollmentsCount":null,
  "adminsCount":0
}
```

## Vincular membro a um grupo

A requisição abaixo  um membro ao grupo cujo identificador está como parâmetro na rota.

> **Atenção:** para realizar essa requisição seu app deve ter a permissão `group:write`

```http
PUT /groups/{groupId}/enrollments
```

```js
{
  "enrollments": [
    {
      "entity":"{memberId}",
      "kind": "member"
    }
  ]
}
```

A API do Layers retornará então o vínculo criado no seguinte formato:

```js
[
    {
        "id": "5bfff038ea476f5c760d6c57",
        "createdAt": "2018-11-29T13:57:12.996Z",
        "updatedAt": "2018-11-29T13:57:12.996Z",
        "kind": "member",
        "group": {
            "_id": "5bf5406ab2dd0c00232a3b71",
            "name": "Turma nova"
        },
        "entity": {
            "_id": "5bffead1ea476f5c760d09cb",
            "name": "Nome do aluno",
            "access": [
                {}
            ],
            "alias": "123456"
        }
    }
]
```

## Vincluar usuários a um membro

Para que familiares de um aluno recebam as publicações que forem feitas para eles é preciso que estejam vinculados ao membro no Layers. Para vincular um membro a um app seu app deve realizar a requisição abaixo na qual `memberId` é o identificador do membro ao qual os usuários especificados devem ser vinculados.

> **Atenção:** para realizar essa requisição seu app deve ter a permissão `member:write`

```http
PUT /members/{memberId}
```

```js
{
  users: [
    {userId}
  ]
}
```

A resposta da API será a lista de usuários vinculados ao membro cujo id foi especificado em `memberId` nos parâmetros da rota no seguinte formato:

```js
[
  {id: {userId}}
]
```

