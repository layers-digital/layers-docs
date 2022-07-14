---
template: default
title: Layers Developer Center
tableOfContents: true
---

O [ecossistema Layers](#ecossistema-layers) é uma plataforma web e mobile que contém os dados e conecta as soluções educacionais utilizadas por instituições de ensino. Por meio de apps, instituições de ensino podem personalizar sua experiência conectando soluções que já utilizam como ERP's, EdTech's ou mesmo soluções internas.

Para desenvolvedores desses serviços, integrar sua solução à Layers significa criar um app único com as funcionalidades disponibilizadas. Esse app, uma vez revisado e aprovado, poderá ser utilizado por qualquer instituição que utilize a Layers sem necessidade de realizar novas integrações ou desenvolvimento específico para cada instituição.

## Segmentos na Layers
<docs-cards>
  <docs-card header="Para Escolas" href="/docs/forschools" icon="/docs/assets/icons/Instituições de ensino.svg">
    <p>Layers para Escolas e outras Instituições de Ensino</p>
  </docs-card>

  <docs-card header="Para Startups" href="/docs/forstartups" icon="/docs/assets/icons/edtechs.svg">
    <p>Layers para Startups e EdTechs</p>
  </docs-card>

  <docs-card header="Para ERPs" href="/docs/forerps" icon="/docs/assets/icons/ERP.svg">
    <p>Layers para Sistemas de Gestão</p>
  </docs-card>

  <!-- <docs-card header="Provedores" href="/docs/concepts/Provedores" icon="/docs/assets/icons/Provedores.svg">
    <p>Funcionalidades para Provedores</p>
  </docs-card> -->
</docs-cards>

## Ecossistema Layers

O ecossistema Layers Education é composto por EdTechs que desenvolvem [apps](#apps-na-layers) e Instituições de ensino que os utilizam. Para isso, instituições de ensino devem instalar os apps em suas [comunidades](#comunidades-na-layers): unidades de organização na Layers que contém os dados e apps usados pela instituição.


<docs-zoomable-image href="/docs/assets/images/layersDiagram.png" caption="Diagrama com Resumo da estrutura da Layers">
</docs-zoomable-image>


A segurança dos apps é garantida pela Layers uma vez que todas as soluções de terceiros disponibilizadas são rigorosamente checadas pelos nossos desenvolvedores. Desse modo, instituições de ensino podem ter certeza que os dados de sua instituição estão seguros ao instalar qualquer app disponibilizado.

### Comunidades na Layers

Comunidades são a maior unidade de organização na Layers. Cada instituição de ensino, desenvolvedor de app ou Provedor é representada por uma comunidade na Layers que contém seus dados e na qual são instalados os apps que adicionarão funcionalidades escolhidas pelos administradores da comunidade.

Além da personalização por meio dos apps, é possível escolher também o ícone, nome e modelo de comunidade que melhor se aplica ao cenário no qual ela vai ser utilizada (escolar, desenvolvedor de apps, Provedor, torneio, etc). 

Para instituições com várias unidades é possível ainda definir a hierarquia de suas comunidades, definindo a comunidade da mantenedora ou sede como pai das comunidades das demais unidades. Desse modo, usuários da comunidade pai podem acessar as comunidades filhas e enviar publicações para elas.

### Apps na Layers

Assim como aplicativos para um celular são maneiras de adicionar funcionalidades ao celular, um app na Layers é uma maneira de adicionar funcionalidades à Layers. Apps na Layers Education tem três principais características: [Identidade](#identidade), [funcionalidades](#funcionalidades) e [visibilidade](#visibilidade). 

#### Identidade

A identidade de um app na Layers diz respeito ao nome, ícone, identificador e à descrição do app. Essas informações poderão ser exibidas na Layers Store e também nas comunidades nas quais o app está instalado quando usuários interagirem com o app ou com informações providas por ele.

#### Funcionalidades

A Layers disponibiliza uma série de funcionalidades das quais apps podem escolher as que precisam para implementar a funcionalidade que pretendem adicionar à Layers.


#### Visibilidade

A visibilidade do app define se ele será mostrado ou não na Layers Store para que comunidades o encontrem e instalem. Apps podem ainda definir se comunidades interessadas em instalá-lo devem pedir por aprovação dos desenvolvedores ou não.

Essas configurações devem ser feitas quando o app é criado para que a equipe de desenvolvedores da Layers as valide. Caso o desenvolvedor do app precise alterar alguma configuração, é possível editar qualquer uma delas e submeter o app para nova validação.

Uma vez registrado e configurado o app ele pode ser instalado em comunidades nas quais adicionará suas funcionalidades às de outros apps já instalados.


### Contas de usuário

Pessoas que acessam dados na Layers tem duas representações: contas e usuários. Cada pessoa pode ter atrelada ao seu e-mail somente uma conta à qual podem estar vinculados diversos usuários em diferentes comunidades que compartilham o mesmo e-mail da conta.

#### Conta

Não é necessário criar uma conta na Layers. Ao registrar um usuário em uma comunidade será gerada uma conta se não houver uma existente para o e-mail cadastrado. Contas na Layers não são atreladas a nenhuma comunidade e contém as informações de nome e e-mail da pessoa à qual ela pertence.

#### Usuário

Usuários são a representação de pessoas que podem acessar uma comunidade especifica da Layers. Na Layers, usuários contém informações relativas à pessoa na comunidade. As informações obrigatórias para que um usuário possa ser criado são o seu nome, e-mail e permissões na comunidade, mas usuários podem também conter o informações sobre os membros aos quais estão relacionados, seu endereço, informações de contato ou outros campos adicionados por apps na comunidade.

### Membros e Grupos

#### Membros

Membros representam na Layers Education entidades às quais usuários podem estar vinculados. Além dos usuários vinculados a eles, membros tem obrigatóriamente um nome e um identificador único na comunidade. No modelo de comunidade escolar, membros representam alunos.

#### Grupos

Grupos na Layers são a entidade utilizada para representar agrupamentos de membros. Na Layers, assim como os membros, grupos tem obrigatóriamente um nome e um identificador único na comunidade. Além dos integrantes, grupos podem também ter administradores: usuários que podem enviar editar e publicar para o grupo. No modelo de comunidade escolar, grupos representam as turmas ou classes.

#### Vínculo entre Membros e Grupos

Os vínculos entre membros e grupos na Layers são chamados de `enrollments`. Cada vínculo contém o identificador do membro ao qual ele diz respeito e do grupo ao qual o membro deve ser vinculado além de conter também o tipo de entidade vinculada ao grupo. No modelo de comunidade escolar, vínculos representam as matrículas de alunos em uma turma.

### Permissões na Layers

Permissões na Layers são strings geralmente com o formato `entidade:ação` que estão relacionadas a apps ou usuários em uma determinada comunidade. As rotas de APIs da Layers tem restrições de acesso baseadas em permissões, assim, para que um app ou usuário possa acessar uma determinada rota ele precisa ter a permissão requerida pela rota. Para simplificar a atribuição de permissões individuais, é possível atribuir perfis: agrupamentos de permissões personalizáveis, a apps ou usuários.

Além de usar permissões existentes para acessar rotas de APIs da Layers, apps podem também criar suas próprias permissões e atribuí-las a perfis existentes para definir quais usuários terão acesso às funcionalidades que implementam.