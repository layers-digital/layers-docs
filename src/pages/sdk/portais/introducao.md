---
template: default
title: Introdução aos portais
tableOfContents: false
nextText: 'Eventos e Promises'
nextUrl: '/docs/sdk/portais/eventos-e-promises'
---

Portais permitem que apps adicionem telas personalizadas ao ambiente Layers das comunidades nas quais estão instalados.

## Registre o app

O primeiro passo para usar a funcionalidade de portais no Layers é [registrar o app](./../../register) selecionando na pergunta sobre as funcionalidades que o app vai usar a opção de "Telas adicionais". 

## Importando e configurando o SDK

Uma vez que o app está registrado ele poderá ser instalado nas comunidades e adicionar a tela ao Layers. Para isso, a página que será acessada através do Layers deve importar nosso SDK de portais da maneira que está exemplificado abaixo. Através desse SDK, apps podem acessar informações e funcionalidades do Layers.

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
      !function(){var e;window.LayersPortal||(window.LayersPortal=((e=function(n,r){return new Promise((function(t,o){e.q.push([t,o,n,r])}))}).q=[],e.eh={},e.on=function(n,r){var t=e.eh[n]||[];t.push(r),e.eh[n]=t},e.ready=!1,e.readyPromise=new Promise((function(n){e.readyPromiseResolve=n})),e.connected=!1,e.connectedPromise=new Promise((function(n){e.connectedPromiseResolve=n})),e.platform=null,e.session=null,e.communityId=null,e.accountId=null,e.userId=null,e));var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://js.layers.digital/v1/LayersPortal.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}();
    </script>
  </head>
</html>
```

### Configurações do portal

O objeto `LayersPortalOptions` deve ser definido com as seguintes propriedades:

+ **appId**: String contendo o identificador do app
+ **insidePortalOnly**: Booleano indicando se a página deve ser acessível apenas através da Layers
+ **manualLoadingControl**: Booleano indicando se o app controlará o carregamento manualmente, chamando o método `LayersPortal.ready()` quando a página estiver carregada ou se o controle de carregamento deve ser feito automáticamente pelo Layers