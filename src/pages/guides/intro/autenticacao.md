---
tableOfContents: false
---
# Autenticação

Todas as rotas na API do Layers exigem autentiçãopor meio de token com o objetivo de garantir a segurança dos dados das instituições de ensino. Assim, para que seu app possa acessar as rotas descritas ele deve estar [registrado](link) e passar o token de acesso no header `authorization`. 

## Gerando seu token

Para gerar um token no Layers, seu app deve realizar a seguinte requisição na qual `appId` é o identificador do seu app cadastrado.

```http
GET /appmaker/apps/:appId/token
```

A resposta será da API será:

```js
{
    "token": 'Bearer ' + seuToken
}
```

Esse token deve então ser utilizado para todas as requisições para a API do Layers.