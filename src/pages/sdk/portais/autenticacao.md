---
template: default
title: Autenticação
tableOfContents: true
previousText: 'Propriedades e Métodos'
previousUrl: '/docs/sdk/portais/propriedades-e-metodos'
---

Há duas maneiras de fazer autenticação de portais na Layers que devem ser implantadas simultaneamente para que o portal funcione corretamente tanto com a versão antiga quanto com a versão nova da Layers. O método antigo de autenticação será desativado assim como o app antigo da Layers em 2021.

## Método Antigo

Ao abrir a URL cadastrada como portal na Layers, serão passados os parâmetros `token` e `community` como no exemplo abaixo. 

```http
GET https://meu-app.com/meu-portal?token={TOKEN_DE_ACCOUNT}&community={COMMUNITY}
```

Para que o portal funcione corretamente com a versão antiga da Layers, é preciso que ele faça autenticação com o `token` e `community` através da seuinte requisição:

```http
GET https://api.layers.digital/v1/user/me
```

Será necessário passar os seguintes headers:

+ **authorization**: Bearer + `TOKEN_DE_ACCOUNT`
+ **x-community-id**: `COMMUNITY`
+ **user-agent**: AppId

Se as informações dos headers estiverem corretas, essa requisição retornará um JSON contendo as [informações do usuário](/docs/api/data/user/object) que está acessando o portal.

**IMPORTANTE**: Utilize o `TOKEN_DE_ACCOUNT` dos headers apenas para essa requisição. Para todas as outras requisições para APIs da Layers é necessário usar o token gerado para a sua aplcação quando a permissão de uso de API foi concedida.

## Método Novo

Para a versão nova da Layers a autenticação pode ser feita através do uso das informações no SDK de portais e da [rota de validar sessão](/docs/api/auth/sso/session/validate). Essa rota recebe nos parâmetros da query a `session`, o `userId` e a `communityId`. Essas informações podem ser extraídas do SDK de portais da seguinte maneira: 

```js
const session = LayersPortal.session
const communityId = LayersPortal.communityId
const userId = LayersPortal.userId
```

Caso as informações enviadas sejam válidas, essa rota responderá com status `200` confirmando que essa é uma sessão válida e o usuário está autenticado na Layers.