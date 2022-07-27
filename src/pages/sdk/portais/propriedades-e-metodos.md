---
template: default
title: Propriedades e Métodos
tableOfContents: true
nextText: 'Autenticação'
nextUrl: '/docs/sdk/portais/autenticacao'
previousText: 'Eventos e Promises'
previousUrl: '/docs/sdk/portais/eventos-e-promises'
---

A lib de portais oferece propriedades e métodos que permitem que apps acessem informações não sensíveis do usuário acessando o portal e funcionalidades de navegação Layers

## Propriedades

+ **ready**: Booleano que indica se a lib de portais foi importado com sucesso
+ **connected**: Booleano que indica se a lib de portais está conectado com a Layers
+ **platform**: String que pode ter o valor de `"iframe"`, `"ios"` ou `"android"` se a página estiver sendo acessada através ad Layers ou `null` se estiver sendo acessada fora da Layers.
+ **session**: String da seção
+ **userId**: String do identificador único do usuário na Layers
+ **communityId**: String do identificador da comunidade através do qual o usuário está acessando o portal
+ **accountId**: String do identificador único da conta do usuário acessando o portal

## Métodos

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
<!-- + **notify**: O método `notify()` permite que -->
