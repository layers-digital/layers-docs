---
template: default
title: Sincronização de dados
tableOfContents: false
nextText: 'Notficações'
nextUrl: '/docs/concepts/funcionalidades/notificacoes'
previousText: 'Hub de APIs'
previousUrl: '/docs/concepts/funcionalidades/hub-de-apis'
---

# Sincronização de dados

A API de dados permite que apps visualizem, criem e editem informações de usuários, membros, grupos e vínculos de acordo com as permissões que possuem na comunidade em que estão instalados. Por meio dessa funcionalidade é possível sincronizar dados das entidades do Layers, mantendo as informações atualizadas e uniformes entre o Layers e plataformas externas como sistemas de gestão ou registros de alunos e turmas.


## Rotas disponíveis e permissões

Para que um app possa ter acesso à API de dados, é necessário que ele esteja registrado no Layers com a funcionalidade de uso de APIs habilitada e as permissões necessárias para ver (`[entidade]:read`), escrever (`[entidade]:write`) ou gerenciar (`[entidade:manage]`) informações das entidades com as quais o app vai interagir. As rotas disponíveis na API de dados da Layers estão descritas na [referência](./../../api/data/member/object).