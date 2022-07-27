---
template: default
title: Eventos e Promises
tableOfContents: true
nextText: 'Propriedades e Métodos'
nextUrl: '/docs/sdk/portais/propriedades-e-metodos'
previousText: 'Introdução'
previousUrl: '/docs/sdk/portais/introducao'
---

A lib de portais disponibiliza uma série de eventos e promises para que apps que usam a funcionalidade de portais possam monitorar o status da lib e da sua conexão com a Layers.

## Eventos

+ **ready**: O evento `ready` é emitido quando a lib de portais é carregado, indicando que ele foi importado com sucesso.

```js
LayersPortal.on('ready', function(){
  //função chamada quando a lib for carregado
})
```

+ **connected**: O evento `connected` é emitido quando a lib de portais está conectado com a Layers, indicando que apps podem acessar propriedades e métodos da lib. A função chamada quando receber esse evento pode receber o objeto `data` com informações de usuário e seção como parâmetro.

```js
LayersPortal.on('connected', function(data){
  //função chamada quando a lib estiver conectado com a Layers
})
```

## promises

Além dos eventos, apps podem optar por usar promises para controlar o status da lib.

+ **readyPromise**: A propriedade `readyPromise` é, como o nome sugere, uma promise que será resolvida quando a lib for importado com sucesso.

+ **connectedPromise**: Assim como a propriedade anterior, a propriedade `connectedPromise` será resolvida  quando a lib estiver conectado com a Layers retornando as informações de seção e do usuário acessando o portal.
