# Como funcionam as permissões do Layers

Tanto quando os usuários quanto apps do Layers Education usam um sistema de permissões semelhante aos escopos da especificação OAuth. Essas permissões ditam quais ações que eles podem realizar na plataforma. Para simplificar a atribuição de permissões existem perfis: grupos de permissões que são comumente usados como `guardian`, para familiares, ou `professor`, para professores. Aqui estão explicados os perfís padrão do Layers, mas uma comunidade pode ter mais perfis ou perfis editados de acordo com suas necessidades.

## Administrador

O perfil de administrador cujo identificador no Layers é ```admin``` contém todas as permissões de edição e leitura presentes na plataforma. São elas:

+ ```feed:read```
+ ```sync:manage```
+ ```agenda:admin```
+ ```post:manage```
+ ```ticket:manage```
+ ```report:manage```
+ ```group:manage```
+ ```member:manage```
+ ```user:manage```
+ ```export:manage```
+ ```payments:admin```
+ ```statistics:read```

É importante ressaltar também que o perfil de administrador tem nível 4 de hierarquia, isso é, pode enviar publicações para qualquer perfil uma vez que todos tem níveis mais baixos.

## Coordenador

Um nível abaixo da permissão de administrador está a permissão de coordenador cujo identificador no Layers é ```coordenator```. Além de administrar as turmas das quais participa pode também aprovar publicações e editar modelos de relatório. Suas permissões são:

+ ```feed:read```
+ ```agenda:read```
+ ```group:manage```
+ ```post:manage```
+ ```post:approve```
+ ```pendency:write```
+ ```report:manage```
+ ```preference:read```

A hierarquia da permissão de coordenador é 3. Desse modo, um usuário com permissão de coordenador pode enviar publicações para qualquer outra permissão com exceção de administradores.

## Professor

O perfil de professor cujo identificador é ```professor``` tem as permissões para visualizar e publicar para os grupos dos quais faz parte.  As permissões do perfil de Professor são:

+ ```group:read:scoped```
+ ```feed:read```
+ ```post:write```
+ ```agenda:read```
+ ```pendency:write```
+ ```preference:read```
+ ```report:read```

O perfil de professor tem hierarquia de nível 2. Isso significa que ele pode publicar para atendentes, Familiares e Estudantes.

## Atendente

O perfil de atendente é específica para usuários que ficarão responsáveis por responder as solicitações feitas no Layers. As permissões inclusas nesse perfil são:

+ ```tiket:agent```
+ ```user:read```


## Familiar

O perfil de familiar tem permissões para acessar o app e visualizar as informações dos estudantes associados a ele na linha do tempo e agenda além de poder entrar em contato através de canais dos atendimento. As permissões inclusas no perfil de familiar são:

+ ```feed:read```
+ ```student:read```
+ ```pendency:read```
+ ```ticket:request```
+ ```preference:read```
+ ```agenda:read```

O perfil de familiar tem hierarquia de nível 1. Qualquer um dos perfis padrão ou personalizados com hierarquia maior ou igual a  1 pode publicar para usuários com permissão de familiar

## Estudante

O perfil de estudante é o que tem a menor quantidade de permissões. Um usuário com essa permissão pode ver a linha do tempo, a agenda e as turmas das quais participa. As permissões desse perfil são:

+ ```feed:read```
+ ```agenda:read```
+ ```preference:read```

A hierarquia da permissão de estudante é 0. Usuários com qualquer outra permissão podem publicar para estudantes.