# Escopos OAuth do Layers

Escopos OAuth definem quais informações de conta de de usuário sua aplicação poderá acessar. Esse escopo deve ser escolhido quando criando o app e deve ser aprovado pelo usuário para que suas informações fiquem disponíveis para o app.

## OpenID

O escopo `openid` dá acesso ao id da conta do usuário 

## Perfil

O escopo `profile` dá acesso à data de criação (`createdAt`), edição (`updatedAt`), língua (`anguage`), fusorário (`timezone`) e primeiro nome (`firstName`) do usuário.

## Nome completo

O escopo `fullname` dá acesso ao nome completo do usuário.

## email

O escopo `email` dá acesso ao endereço de e-mail do usuário.

## Comunidades relacionadas

O escopo `related.communitiies` dá acesso ao indentificador (`community`), nome(`name`), ícone(`icon`), logo (`logo`), idioma (`language`), fusorário (`timezone`), localização (`geolocation`), cor principal (`color`), data de criação (`createdAt`) e de atualização (`updatedAt`) de communidades às quais o usuário está vinculado além do identificador (`id`), data de criação (`createdAt`), data de atualização (`updatedAt`), alias (`alias`), perfis (`roles`) e permissões de roles (`permissions`) do usuário.

## Grupos relacionados

O escopo de `related.groups` dá acesso ao identificaor (`group.id`), nome (`group.name`), alias(`group.alias`), data de criação (`group.createdAt`), data de edição (`group.updatedAt`), identificador do vínculo do usuário (`group.enrollment.id`), tipo do vínculo (`group.enrollment.kind`), identificador da entidade vinculada ao grupo (`group.enrollment.entity`), identificador do grupo (`group.enrollment.group`), data de criação do vínculo (`group.enrollment.createdAt`), data de edição do vínculo (`group.enrollment.updatedAt`) de grupos relacionados com o usuário.

## Membros relacionados

O escopo `related.members` dá acesso ao nome (`member.name`), data de criação (`member.createdAt`) e data de edição (`member.updatedAt`) de membros vinculados ao usuário.

## Grupos relacionados a alunos relacionados

O escopo de `related.members.groups` dá acesso ao identificaor (`group.id`), nome (`group.name`), alias (`group.alias`), data de criação (`group.createdAt`), data de edição (`group.updatedAt`), identificador do vínculo do usuário (`group.enrollment.id`), tipo do vínculo (`group.enrollment.kind`), identificador da entidade vinculada ao grupo (`group.enrollment.entity`), identificador do grupo (`group.enrollment.group`), data de criação do vínculo (`group.enrollment.createdAt`), data de edição do vínculo (`group.enrollment.updatedAt`) de grupos relacionados a membros relacionados ao usuário.