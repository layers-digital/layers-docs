---
template: default
title: Layers Portal
tableOfContents: true
nextText: 'Botão "Logar com Layers"'
nextUrl: '/docs/forstartups/sdk/layers-button'
previousText: 'API Hub'
previousUrl: '/docs/forstartups/api'
---

# Layers Portal SDK

A funcionalidade de Portais da Layers permite que apps adicionem telas personalizadas à nossa interface. Além disso, apps podem também habilitar a funcionalidade de autenticação OAuth para que os usuários que acessarem o portal sejam autenticados e o app possa acessar informações consentidas por eles.

## Importando e configurando o SDK

Uma vez que o app está registrado ele poderá ser instalado nas comunidades e adicionar a tela à Layers. Para isso, a página que será acessada através da Layers deve importar nosso SDK de portais da maneira que está exemplificado abaixo. Através desse SDK, apps podem acessar informações e funcionalidades da Layers.

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