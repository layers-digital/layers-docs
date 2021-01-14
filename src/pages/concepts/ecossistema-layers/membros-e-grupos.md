---
template: default
title: Membros e Grupos
tableOfContents: false
nextText: 'Permissões'
nextUrl: '/docs/concepts/ecossistema-layers/permissoes'
previousText: 'Contas de Usuário'
previousUrl: '/docs/concepts/ecossistema-layers/contas-de-usuario'
---

# Membros e Grupos

## Membros

Membros representam na Layers Education entidades às quais usuários podem estar vinculados. Além dos usuários vinculados a eles, membros tem obrigatóriamente um nome e um identificador único na comunidade. No modelo de comunidade escolar, membros representam alunos.

## Grupos

Grupos na Layers são a entidade utilizada para representar agrupamentos de membros. Na Layers, assim como os membros, grupos tem obrigatóriamente um nome e um identificador único na comunidade. Além dos integrantes, grupos podem também ter administradores: usuários que podem enviar editar e publicar para o grupo. No modelo de comunidade escolar, grupos representam as turmas ou classes.

## Vínculo entre Membros e Grupos

Os vínculos entre membros e grupos na Layers são chamados de `enrollments`. Cada vínculo contém o identificador do membro ao qual ele diz respeito e do grupo ao qual o membro deve ser vinculado além de conter também o tipo de entidade vinculada ao grupo. No modelo de comunidade escolar, vínculos representam as matrículas de alunos em uma turma.