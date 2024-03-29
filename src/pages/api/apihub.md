---
template: default
title: Layers API Hub
tableOfContents: false
---

# Layers API Hub

O Layers API Hub é uma funcionalidade do ecossistema Layers que permite Apps consumirem e fornecerem informações de outros Apps na Layers. Isto é feito através de actions: um protocolo que especifica o formato de comunicação entre os consumidores e Provedores de informação.

Para cada uma dessas actions, está disponível ao menos um App desenvolvido pela Layers que disponibiliza essas informações. Assim, Apps Provedores podem se responsabilizar apenas em fornecer as informações requisitadas via actions e outros Apps consumidores se responsabilizam por expor essas informações da melhor maneira para os usuários da Layers.

Para exemplificar, observe:
<docs-zoomable-image href="/docs/assets/images/flow-erp.png" caption="O app mais a esquerda é o “Notas Acadêmicas” e irá representar apps que necessitam de requisitar dados (App consumidor). Já o app mais a direita é o “ERP Modelo” e irá representar os apps que podem prover dados para outros apps (App Provedor)."></docs-zoomable-image>


Também disponibilizamos uma documentação das rotas do Layers API Hub em formato [Open Api 3.0](https://spec.openapis.org/oas/v3.0.0), podendo ser importada diretamente no [Postman](https://www.postman.com/) ou outro cliente HTTP que tenha suporte a esse formato.

<docs-button href="/docs/assets/apiCollections/apihub.json" download="layers_api_hub.json">
  Layers API Hub Open Api 3.0
</docs-button>

## Como funciona ?

+ <strong> 1 - App requisita informações </strong>

O App Consumidor irá fazer uma requisição HTTP (POST) para a Layers, requisitando os dados de determinada action. Por sua vez, a Layers validará se os dados enviados no body do request estão de fato corretos. Caso estejam, prossegue-se para a próxima etapa.

+ <strong> 2 - Layers repassa a requisição </strong>

A Layers irá requisitar os dados do App Provedor. Este último deve receber os dados como especificados na nossa documentação. Além de fazer a requisição para o App Provedor, a Layers irá enriquecer os dados enviados adicionando contexto (context) a eles.

+ <strong> 3 - App responde a requisição </strong>

Após receber os dados, o App Provedor irá requisitar os dados armazenados pelo ERP (nesse caso), realizando outra requisição HTTP (POST), e retornar os dados para Layers. Novamente, seu formato de response deve seguir o que está especificado na documentação da action específica.

+ <strong> 4 - Layers repassa a resposta </strong>

Ao final, a Layers recebe os dados do App Provedor e valida-os para verificar se estão de acordo com o que era esperado como resposta da action. Caso estejam corretos, eles são repassados para o App Consumidor, assim podendo utilizá-los.
