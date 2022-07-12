---
template: default
title: Provendos dados para uma Action
tableOfContents: false
previousText: 'Consumindo Informações'
previousUrl: '/docs/api/apihub/consumindo'
---

# Provendo dados para uma Action

Para um App Consumidor poder consumir dados de uma action é necessário que haja um app responsável por prover dados para essa Action. Um app com essa responsabilidade é chamado de App Provedor. Um exemplo comum desse tipo são ERPs que fornecem diversos dados como notas acadêmicas, registros médicos e etc, que podem ser utilizados por outros apps.

## Respondendo por uma Action

### Request

Para um App Provedor ser responsável por determinada action, é necessário que sejam implementadas rotas do tipo

```http
POST https://api.layers.digital/v1/services/validate/{{action}}/{{provider_id}}
```

```headers
Authorization: Bearer {{token_do_seu_app}}
community-id: {{id_da_comunidade}}
```

Ou seja, para cada Action que um app é responsável por fornecer dados, é necessário que haja uma rota que responda por ela conforme especificado anteriormente.

### Response

A payload da resposta da requisição varia de acordo com a Action. 