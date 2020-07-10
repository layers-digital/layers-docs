---
template: default
title: API de notificações
tableOfContents: false
# nextText: 'Environment Setup'
# nextUrl: '/docs/guides/intro'
---

# API de Notificações

A API de notificações permite que apps enviem notificações push com título e texto de corpo personalizados por meio do Layers via web, android e mobile. Notificações podem ser enviadas para um único usuário bem como para um grupo de usuários do Layers especificado como público alvo. As notificações são então enviadas para todos os dispositivos com os quais o usuário está logado em sua conta atualmente sem que o app precise guardar informações desses dispositivos.

Para utilizar a api de notificações o app deve estar registrado no Layers, ter a funcionalidade API habilitada e possuir a permissão `notification:send`.