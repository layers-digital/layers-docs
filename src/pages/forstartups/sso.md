---
template: default
title: Single Sign-On na Layers
tableOfContents: true
previousText: 'LayersPortal.js'
previousUrl: '/docs/forstartups/portais/layers-portal'
nextText: 'Botão "Logar com Layers"'
nextUrl: '/docs/forstartups/sso/layers-button'
---

Entregamos uma experiência de Login Unificado (Single Sign-On ou SSO) baseado no protocolo [OAuth2](https://oauth.net/2/) para otimizar o tempo gasto com gestão de contas e acessos aos recursos digitais.

## Faça login com a Layers
Plataformas parceiras possuem o botão "Logar com Layers", facilitando o acesso com apenas um login.

O botão é um link com parâmetros adicionados que definem para qual aplicativo a Layers deve enviar o usuário e algumas configurações necessárias para o fluxo do
protocolo OAuth2.

Com a intenção de facilitar a vida do desenvolvedor, a Layers desenvolveu uma lib que abstrai grande parte da lógica necessária para a implementação do botão - para utilizá-lo, é necessário utilizar a [lib de Botão "Logar com Layers"](/docs/forstartups/sso/layers-button)

### Escopos OAuth2
| Escopo                    | Acesso                                                                                                                                                                               |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| openid       | account.id                                                     |
| profile       | account.createdAt <br/>account.updatedAt <br/>account.language <br/>account.timezone <br/>account.firstName                                                                                                                                                                        |
| fullname       | account.name                                                                                                                                                                       |
| email         | account.email                                                                                                                                                                        |
| related.communities | community.community <br/>community.name <br/>community.icon <br/>community.logo <br/>community.language <br/>community.timezone <br/>community.geolocation <br/>community.color <br/>community.createdAt <br/>community.updatedAt <br/>user.lastSeenAt <br/>user.id <br/>user.createdAt <br/>user.updatedAt <br/>user.alias <br/>user.roles <br/>user.permissions <br/> user.fields|
| related.groups     | group.id <br/>group.name <br/>group.alias <br/>group.createdAt <br/>group.updatedAt <br/> group.fields <br/>group.enrollment.id <br/>group.enrollment.kind <br/>group.enrollment.entity <br/>group.enrollment.group <br/>group.enrollment.createdAt <br/>group.enrollment.updatedAt <br/> group.enrollment.fields                                                                                               |
| related.members                | member.id <br/>member.name <br/>member.createdAt <br/>member.updatedAt <br/> member.fields                                                                                                                                         |
| related.members.groups         | groups.id <br/>group.name <br/>group.alias <br/>group.createdAt <br/>group.updatedAt <br/>group.fields <br/>group.enrollment.id <br/>group.enrollment.kind <br/>group.enrollment.entity <br/>group.enrollment.group <br/>group.enrollment.createdAt <br/>group.enrollment.updatedAt<br/> group.enrollment.fields

## Layers OAuth2
Caso não queira utilizar a [lib de Botão "Logar com Layers"](/docs/forstartups/sso/layers-button) e criar seu próprio fluxo, as especificações passo a passo do OAuth2 da Layers seguem abaixo.

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
