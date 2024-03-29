---
template: default
title: LayersPortal.js
tableOfContents: true
nextText: 'Single Sign-On na Layers'
nextUrl: '/docs/forstartups/sso'
previousText: 'Portais na Layers'
previousUrl: '/docs/forstartups/portais'
---

# LayersPortal.js

A funcionalidade de Portais da Layers permite que apps adicionem telas personalizadas à nossa interface, formando uma experiência unificada e integrando totalmente no ecossistema Layers.

## Importando e configurando a lib

Uma vez que o app está registrado ele poderá ser instalado nas comunidades e utilizado pelos usuários da comunidade em específico. Para que tudo funcione de forma segura e fluida para o usuário final, a página que será acessada através da Layers deve importar nossa lib de portais da maneira que está exemplificado abaixo. Através dessa lib, apps podem acessar informações e funcionalidades da Layers.

``` html
<!DOCTYPE HTML>
<html>
  <head>
    <script>
      window.LayersPortalOptions = {
        appId: String,
        insidePortalOnly: Boolean,
        manualLoadingControl: Boolean
      }
    </script>
    <script type="text/javascript" src="https://js.layers.digital/v1/LayersPortal.js"></script>
  </head>
</html>
```

### Configurações do portal

O objeto `LayersPortalOptions` deve ser definido com as seguintes propriedades:

+ **appId**: String contendo o identificador do app
+ **insidePortalOnly**: Booleano indicando se a página deve ser acessível apenas através da Layers
+ **manualLoadingControl**: Booleano indicando se o app controlará o carregamento manualmente, chamando o método `LayersPortal.ready()` quando a página estiver carregada ou se o controle de carregamento deve ser feito automáticamente pela Layers

## Utilizando a lib

A lib de portais disponibiliza uma série de eventos e promises para que apps que usam a funcionalidade de portais possam monitorar o status da lib e da sua conexão com a Layers.

### Eventos

+ **ready**: O evento `ready` é emitido quando a lib de portais é carregado, indicando que ele foi importado com sucesso.

```js
LayersPortal.on('ready', function(){
  //função chamada quando a lib for carregada
})
```

+ **connected**: O evento `connected` é emitido quando a lib de portais está conectado com a Layers, indicando que apps podem acessar propriedades e métodos da lib. A função chamada quando receber esse evento pode receber o objeto `data` com informações de usuário e seção como parâmetro.

```js
LayersPortal.on('connected', function(data){
  //função chamada quando a lib estiver conectado com a Layers
})
```

### Promises

Além dos eventos, apps podem optar por usar promises para controlar o status da lib.

+ **readyPromise**: A propriedade `readyPromise` é, como o nome sugere, uma promise que será resolvida quando a lib for importada com sucesso.

+ **connectedPromise**: Assim como a propriedade anterior, a propriedade `connectedPromise` será resolvida  quando a lib estiver conectada com a Layers retornando as informações de seção e do usuário acessando o portal.



A lib de portais também oferece propriedades e métodos que permitem que apps acessem informações não sensíveis do usuário acessando o portal e funcionalidades de navegação Layers

### Propriedades

+ **ready**: Booleano que indica se a lib de portais foi importado com sucesso
+ **connected**: Booleano que indica se a lib de portais está conectado com a Layers
+ **platform**: String que pode ter o valor de `"iframe"`, `"ios"` ou `"android"` se a página estiver sendo acessada através da Layers ou `null` se estiver sendo acessada fora da Layers.
+ **session**: String da seção
+ **userId**: String do identificador único do usuário na Layers
+ **communityId**: String do identificador da comunidade através do qual o usuário está acessando o portal
+ **accountId**: String do identificador único da conta do usuário acessando o portal

### Métodos

+ **ready**: O método `ready()` deve ser chamado para indicar que a página a ser exposta no portal está carregada se a a opção `manualLoadingControl` for definida como `true` nas configurações do portal.
+ **update**: O método `update(params)` permite que apps atualizem a URL e/ou o título do portal. Para isso, o app deve chamar a função como mostrado no exemplo abaixo:

```js
LayersPortal.update(
  {
    url: String, //nova URL (opcional)
    title: String //novo título (opcional)
  }
)
```

+ **go**: O método `go(path)` permite que portais redirecionem para outras páginas de portais ou da Layers. Para isso, o app deve chamar a função passando como parâmetro a URL da página para a qual o usuário deve ser redirecionado.
+ **close**: O método `close()` permite que o app feche o portal

### Autenticação

A autenticação pode ser feita através do uso das informações na lib de portais e da rota de validar sessão. Essa rota recebe nos parâmetros da query a `session`, o `userId` e a `community`. Fora isso, a rota também necessita da utilização de um `token de aplicação`, que é fornecido pela Layers à Startup durante o processo de integração. As informações necessárias podem ser extraídas da lib de portais da seguinte maneira:

```js
const { session, communityId, userId } = LayersPortal
```

Assim, a aplicação pode fazer uma requisição na URL de validação de sessão no seguinte formato:

```headers
Authorization: Bearer {{AppToken}}
```
```http
GET https://api.layers.digital/v1/sso/session/validate?session={SESSION}&community={COMMUNITY}&userId={USER_ID}
```

Caso as informações enviadas sejam válidas, a rota de validação de sessão responderá com status `200` confirmando que essa é uma sessão válida e o usuário está autenticado na Layers.
