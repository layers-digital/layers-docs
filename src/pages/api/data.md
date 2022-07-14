---
template: default
title: Layers Data Sync
tableOfContents: false
---

# Layers Data Sync

O Layers Data Sync permite que apps visualizem e importem informações de usuários, membros, grupos e vínculos de acordo com as permissões que possuem na comunidade em que estão instalados. Por meio dessa funcionalidade é possível sincronizar dados das entidades da Layers, mantendo as informações atualizadas Layers na sua aplicação. Em prol disso, o Layers Data Sync disponibiliza uma série de rotas que podem ser utilizadas pelos desenvolvedores. 

## Rotas disponíveis e permissões

Para que um app possa ter acesso à API de dados, é necessário que ele esteja registrado na Layers com a funcionalidade de uso de APIs habilitada e as permissões necessárias para ver (`[entidade]:read`) informações das entidades com as quais o app vai interagir.

## Open API 3.0

Também disponibilizamos uma documentação das rotas do Layers Data Sync em formato [Open Api 3.0](https://spec.openapis.org/oas/v3.0.0), podendo ser importada diretamente no [Postman](https://www.postman.com/) ou outro cliente HTTP que tenha suporte a esse formato.

<docs-button href="/docs/assets/apiCollections/data.json" download="layers_data_sync.json">
  Layers Data Sync Open Api 3.0
</docs-button>
