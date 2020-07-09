# Permissões no Layers

Permissões no Layers são strings geralmente com o formato `entidade:ação` que estão relacionadas a apps ou usuários em uma determinada comunidade. As rotas de APIs do Layers tem restrições de acesso baseadas em permissões, assim, para que um app ou usuário possa acessar uma determinada rota ele precisa ter a permissão requerida pela rota. Para simplificar a atribuição de permissões individuais, é possível atribuir perfis: agrupamentos de permissões personalizáveis, a apps ou usuários.

Além de usar permissões existentes para acessar rotas de APIs do Layers, apps podem também criar suas próprias permissões e atribuí-las a perfis existentes para definir quais usuários terão acesso às funcionalidades que implementam.