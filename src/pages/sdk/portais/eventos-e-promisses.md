---
template: default
title: Eventos e Promisses
tableOfContents: true
# nextText: 'Environment Setup'
# nextUrl: '/docs/guides/intro'
---

O SDK de portais disponibiliza uma série de eventos e promisses para que apps que usam a funcionalidade de portais possam monitorar o status do SDK e da sua conexão com a Layers.

## Eventos

+ **ready**: O evento `ready` é emitido quando o SDK de portais é carregado, indicando que ele foi importado com sucesso.

```js
LayersPortal.on('ready', function(){
  //função chamada quando o SDK for carregado
})
```

+ **connected**: O evento `connected` é emitido quando o SDK de portais está conectado com o Layers, indicando que apps podem acessar propriedades e métodos do SDK. A função chamada quando receber esse evento pode receber o objeto `data` com informações de usuário e seção como parâmetro.

```js
LayersPortal.on('connected', function(data){
  //função chamada quando o SDK estiver conectado com a Layers
})
```

## Promisses

Além dos eventos, apps podem optar por usar promisses para controlar o status do SDK.

+ **readyPromisse**: A propriedade `readyPromisse` é, como o nome sugere, uma promisse que será resolvida quando o SDK for importado com sucesso.

+ **connectedPromisse**: Assim como a propriedade anterior, a propriedade `connectedPromisse` será resolvida  quando o SDK estiver conectado com o Layers retornando as informações de seção e do usuário acessando o portal.