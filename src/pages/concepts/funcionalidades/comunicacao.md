---
template: default
title: API de comunicação
tableOfContents: false
previousText: 'Login Federado'
previousUrl: '/docs/concepts/funcionalidades/login-federado'
---

# API de comunicação

A API de Comunicação da Layers permite que apps utilizem funcionalidades do app de comunicação. Além de enviar diversos tipos de publicações para usuários que podem ser selecionados individualmente, por meio de grupos, tags ou através dos membros relacionados a eles, apps podem também visualizar as informações de publicações através dessa API.

## Rotas disponíveis e permissões

Para que o app tenha acesso à API de comunicação é preciso que ele esteja registrado na Layers com a funcionalidade de acesso a APIs habilitada e a permissão para ver (`post:read`), criar (`post:write`) publicações ou administrar (`post:manage`). Todas as rotas disponíveis estão documentadas e explicadas na [referência da API de comunicação](./../../api/communication/post/post).