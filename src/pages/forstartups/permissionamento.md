---
template: default
title: Permissionamento na Layers
tableOfContents: false
---

# Como funciona

A layers permite que cada comunidade tenha sua própria organização de papéis. Assim, cada comunidade pode ter papéis customizados que agregam permissões diferentes. Um exemplo de possíveis papéis seria: Aluno, Professor, Responsável, Coordenador e Administrador.


Dito isso, é importante que o controle de permissões da Layers também possa ser feito de forma inteligente, ou seja, as permissões devem ser manipuláveis para cada um dos papéis disponíveis em uma comunidade qualquer. Assim, a Layers disponibiliza para seus Apps uma forma fácil de expor essas permissões, de forma que cada comunidade que tenha o App instalado possa definir quais papéis daquela comunidade possuem quais permissões em um dado App. Essas permissões também permitem que, na tela de configuração da Layers, o Administrador da comunidade possa definir quem pode e quem não pode ver um App específico.


<docs-zoomable-image href="/docs/assets/images/printPermissoes.png" caption="Exemplo de permissões expostas e tela de configuração da comunidade"></docs-zoomable-image>

<docs-zoomable-image href="/docs/assets/images/printNivelAcesso.png" caption="Ao clicar em 'Alterar', é possível definir de forma granular as permissões expostas pelo App para aquele papel"></docs-zoomable-image>

Da perspectiva de uma Startup fazendo uma integração, o ideal é que as permissões, caso existam, da Startup sejam passadas para a Layers durante o processo de integração, de forma que seja possível a configuração destes níveis de permissionamento de antemão.
