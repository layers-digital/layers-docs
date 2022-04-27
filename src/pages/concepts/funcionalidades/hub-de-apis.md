---
template: default
title: API Hub
tableOfContents: true
nextText: 'Sincronização de Dados'
nextUrl: '/docs/concepts/funcionalidades/sincronizacao-de-dados'
---

# API Hub

Apps na Layers podem prover e/ou requisitar informações através do API Hub por meio de actions: protocolos que especificam o formato de requisições e respostas que devem ser seguidos tanto pelo app que requisita as informações quanto pelo app que vai provê-las.

## Fluxo de Informações

A troca de informações entre apps por meio do API Hub pode ser descrita em quatro etapas:

+ <strong> 1 - App requisita informações </strong>

A troca de informações entre apps da Layers começa com o app que necessita de informações fazendo uma requisição `POST` para a Layers seguindo o padrão estabelecido pela action especificada como parâmetro na URL.

+ <strong> 2 - Layers repassa a requisição </strong>

Uma vez que a Layers recebe a requisição, o corpo é validado de acordo com o protocolo da action. Se o formato da requisição estiver de acordo com o formato especificado, a Layers repassa a requisição para o provedor especificado como parâmetro na URL adicionando informações de contexto da requisição.

+ <strong> 3 - App responde a requisição </strong>

O app provedor registrado recebe então a requisição vinda da Layers na URL especificada quando ele foi cadastrado como provedor para a action que foi requisitada. A resposta deve seguir o formato especificado pelo protocolo da action.

+ <strong> 4 - Layers repassa a resposta </strong>

Ao receber a resposta do provedor, a Layers verifica se ela está de acordo com o protocolo da action e repassa as informações recebidas para o app que as requisitou.

## Actions disponíveis

A [referência do API Hub](/docs/api) tem descritas todas as actions suportadas hoje pela Layers descrevendo o formato de requisição que apps provedores devem receber e qual deve ser o formato da resposta devem retornar.

Para cada uma dessas actions, está disponível um app desenvolvido pela Layers que disponibiliza essas informações. Assim, apps provedores podem se responsabilizar apenas em disponibilizar as informações e nossos apps se responsabilizam por expor essas informações da melhor maneira para os usuários da Layers.

<!-- colocar cards de cada uma das actions disponíveis? -->