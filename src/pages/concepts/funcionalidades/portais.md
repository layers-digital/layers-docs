---
template: default
title: Portais na Layers
tableOfContents: false
previousText: 'Logar com Layers'
previousUrl: '/docs/concepts/funcionalidades/logar-com-layers'
nextText: 'API Hub'
nextUrl: '/docs/concepts/funcionalidades/hub-de-apis'
---

# Portais na Layers

A funcionalidade de Portais da Layers permite que apps adicionem telas personalizadas à nossa interface. Além disso, apps podem também habilitar a funcionalidade de autenticação OAuth para que os usuários que acessarem o portal sejam autenticados e o app possa acessar informações consentidas por eles.


## Criando um portal na Layers

Para que um app possa utilizar essa funcionalidade da Layers ele deve estar cadastrado, ter a funcionalidade "portais" habilitada e disponibilizar o link de uma página que utilize o [SDK de portais](./../../sdk/portais/introducao) da Layers. Essa biblioteca permite que o app receba eventos quando o app estiver pronto e quando estiver conectado para que ele possa ser acessado através da Layers.

 Para utilizar a função de autenticação em conjunto com o portal, o app deve registrar quais escopos deseja utilizar e seguir os passos descritos no [tutorial de implementação](./../../sdk/como-colocar-o-botao-logar-com-layers#4-use-o-c-digo-para-obter-o-token) do botão "logar com Layers" a partir do recebimento do código.