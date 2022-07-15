---
template: default
title: Provendos dados para uma Action
tableOfContents: false
previousText: 'Consumindo Informações'
previousUrl: '/docs/api/apihub/consumindo'
nextText: 'Actions Disponíveis'
nextUrl: '/docs/api/apihub/actions'
---

# Provendo dados para uma Action

Para um App Consumidor poder consumir dados de uma action é necessário que haja um app responsável por prover dados para essa Action. Um app com essa responsabilidade é chamado de App Provedor. Um exemplo comum desse tipo são ERPs que fornecem diversos dados como notas acadêmicas, registros médicos e etc, que podem ser utilizados por outros apps.

## Respondendo por uma Action

### Request

Para um App Provedor ser responsável por determinada action, é necessário que seja implementada uma rota para sua action específica.

```http
POST https://api.app_provedor.com/v1/layers/actions/{{action}}
```

Nesta rota, você deve esperar uma requisição com, no mínimo, os seguintes parâmetros no corpo da mensagem:

```json
{
  "context": {
    "issuedAt": "2022-07-14T14:36:28.242Z", // data e hora da requisição
    "action": "@layers:identificador_da_action", // action específica
    "community": "test" // comunidade específica
  },
  "secret": "exemplo", // chave secreta específica do app
}
```

Dependendo da Action, outros campos podem ser incluídos para dar mais contexto de quem está requisitando a informação. Caso seja uma action que dependa do usuário final, o ID deste usuário na Layers pode ser enviado numa chave `layersID`, por exemplo.


### Response

A payload da resposta da requisição varia de acordo com a Action.
