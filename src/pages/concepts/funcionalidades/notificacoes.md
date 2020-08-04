---
template: default
title: API de notificações
tableOfContents: false
# nextText: 'Environment Setup'
# nextUrl: '/docs/guides/intro'
---

# API de Notificações

A API de notificações permite que apps enviem notificações push com título e texto de corpo personalizados por meio do Layers sem que seja necessário guardar nenhuma informação de dispositivos. As notificações podem ser enviadas para um único usuário bem como para um grupo de usuários do Layers especificado como público alvo e serão recebidas tanto na web quanto nos dispositivos mobile que o usuário está logado.

## Rotas disponíveis e permissões

Para utilizar a api de notificações o app deve estar registrado no Layers, ter a funcionalidade API habilitada e possuir a permissão `notification:send`. A rota de envio de notificações está descrita na [referência da API de notificações](./../../api/notifications/notication/send/post).