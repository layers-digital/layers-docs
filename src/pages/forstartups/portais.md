---
template: default
title: LayersPortal.js
tableOfContents: false
previousText: 'Introdução'
previousUrl: '/docs/forstartups'
nextText: 'Single Sign-On na Layers'
nextUrl: '/docs/forstartups/sso'
---

# LayersPortal.js

A funcionalidade de Portais da Layers permite que apps adicionem telas personalizadas à nossa interface. Os Apps podem também habilitar a funcionalidade de autenticação OAuth para que os usuários que acessarem o portal sejam autenticados e o app possa acessar informações consentidas por eles. Além disso, utilizar essa funcionalidade permite que o App utilize nosso sistema de [Push Notifications](/docs/api/notifications/notification/post), que permite um fácil envio de push notifications para os usuários do app mobile e web.


### Criando um portal na Layers

Para que um app possa utilizar essa funcionalidade da Layers ele deve estar cadastrado, ter a funcionalidade "portais" habilitada e disponibilizar o link de uma página que utilize [a lib de portais](/docs/forstartups/portais#layersportal-js) da Layers. Essa biblioteca permite que o app receba eventos quando o app estiver pronto e quando estiver conectado para que ele possa ser acessado através da Layers.


## LayersPortal.js

### Importando e configurando a lib

Uma vez que o app está registrado ele poderá ser instalado nas comunidades e utilizado pelos usuários da comunidade em específico. Para que tudo funcione de forma segura e fluida para o usuário final, a página que será acessada através da Layers deve importar nossa lib de portais da maneira que está exemplificado abaixo. Através dessa lib, apps podem acessar informações e funcionalidades da Layers.

``` html
<!DOCTYPE HTML>
<html>
  <head>
    <script>
      window.LayersPortalOptions = {
        appId: String,
        insidePortalOnly: Boolean,
      }
    </script>
    <script type="text/javascript" src="https://js.layers.digital/v1/LayersPortal.js"></script>
  </head>
</html>
```

#### Configurações do portal

O objeto `LayersPortalOptions` deve ser definido com as seguintes propriedades:

+ **appId**: String contendo o identificador do app
+ **insidePortalOnly**: Booleano indicando se a página deve ser acessível apenas através da Layers

### Utilizando a lib

A lib de portais disponibiliza uma série de eventos e promises para que apps que usam a funcionalidade de portais possam monitorar o status da lib e da sua conexão com a Layers.

#### Eventos

+ **ready**: O evento `ready` é emitido quando a lib de portais é carregada, indicando que ele foi importado com sucesso.

```js
LayersPortal.on('ready', function() {
  //função chamada quando a lib for carregada
})
```

+ **connected**: O evento `connected` é emitido quando a lib de portais está conectada com a Layers, indicando que apps podem acessar propriedades e métodos da lib. A função chamada quando receber esse evento pode receber o objeto `data` com informações de usuário e seção como parâmetro.

```js
LayersPortal.on('connected', function(data) {
  //função chamada quando a lib estiver conectada com a Layers
})
```

#### Promises

Além dos eventos, apps podem optar por usar promises para controlar o status da lib.

+ **readyPromise**: A propriedade `readyPromise` é, como o nome sugere, uma promise que será resolvida quando a lib for importada com sucesso.

+ **connectedPromise**: Assim como a propriedade anterior, a propriedade `connectedPromise` será resolvida  quando a lib estiver conectada com a Layers retornando as informações de seção e do usuário acessando o portal.

A lib de portais também oferece propriedades e métodos que permitem que apps acessem informações não sensíveis do usuário acessando o portal e funcionalidades de navegação Layers

#### Propriedades

+ **ready**: Booleano que indica se a lib de portais foi importada com sucesso
+ **connected**: Booleano que indica se a lib de portais está conectada com a Layers
+ **platform**: String que pode ter o valor de `"iframe"`, `"ios"` ou `"android"` se a página estiver sendo acessada através da Layers ou `null` se estiver sendo acessada fora da Layers.
+ **session**: String da seção
+ **userId**: String do identificador único do usuário na Layers
+ **communityId**: String do identificador da comunidade através do qual o usuário está acessando o portal
+ **accountId**: String do identificador único da conta do usuário acessando o portal

#### Layers Portal: Parâmetros

+ **ready**: O parâmetro `'ready'` deve ser passado para indicar que a página a ser exposta no portal está carregada.
+ **update**: O parâmetro `'params'` permite que apps atualizem a URL e/ou o título do portal. Para isso, o app deve chamar a função como mostrado no exemplo abaixo:

```js
LayersPortal('update', {
  url: String, // nova URL (opcional)
  title: String // novo título (opcional)
})
```

+ **go**: O parâmetro `'go'` permite que portais redirecionem para outras páginas de portais ou da Layers. Para isso, o app deve chamar a função passando como parâmetro a URL da página para a qual o usuário deve ser redirecionado.
+ **close**: O parâmetro `'close'` permite que o app feche o portal

#### Autenticação

A autenticação pode ser feita através do uso das informações na lib de portais e da rota de validar sessão. Essa rota recebe nos parâmetros da query a `session`, o `userId` e a `community`. Fora isso, a rota também necessita da utilização de um `token de aplicação`, que é fornecido pela Layers à Startup durante o processo de integração. As informações necessárias podem ser extraídas da lib de portais da seguinte maneira:

```js
const { session, communityId, userId } = LayersPortal
```

Assim, a aplicação pode fazer uma requisição na URL de validação de sessão no seguinte formato:

```headers
Authorization: Bearer {{ AppToken }}
```
```http
GET https://api.layers.digital/v1/sso/session/validate?session={SESSION}&community={COMMUNITY}&userId={USER_ID}
```

Caso as informações enviadas sejam válidas, a rota de validação de sessão responderá com status `200` confirmando que essa é uma sessão válida e o usuário está autenticado na Layers.

#### Requisitando informações do usuário

Com a sessão validada, para requisitar informações do usuário em questão basta utilizar a [rota de informações do usuário do Layers Data Sync](/docs/api/data/users/userid)