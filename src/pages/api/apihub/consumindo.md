---
template: default
title: Consumindo uma Action
tableOfContents: false
previousText: 'Introdução'
previousUrl: '/docs/api/apihub'
nextText: 'Provendo Informações'
nextUrl: '/docs/api/apihub/provendo'
---

# Consumindo uma Action

Dada uma certa Action, antes de consumí-la, é preciso que seu App Consumidor descubra quais são os Apps Provedores disponíveis para essa Action. Após isso, é preciso que seu app requisite para cada um dos Provedores as informações da action específica.

Para descobrir os Apps Provedores da Action, basta rodar a seguinte requisição:

## Descobrindo os Apps Provedores

### Request

```http
GET https://api.layers.digital/v1/services/discover/{{action}}
```

```headers
Authorization: Bearer {{token_do_seu_app}}
community-id: {{id_da_comunidade}}
```

### Response

```json
[
	{
		"id": "myerp", // ID do App Provedor
		"icon": "https://cdn.layers.digital/admin/uploads/b33178bd-75a3-4c5c-8018-f1b08c174ff2/Frame%203%20(1).png", // Logo do App Provedor
		"displayName": "My ERP", // Nome do App Provedor
		"versions": [ // Lista das versões que o App Provedor consegue responder da action específica
			1
		]
	},
	{
		"id": "erp-modelo",
		"icon": "https://cdn.layers.digital/admin/uploads/b89bb1d5-d76c-4444-990b-e8e1e699fd82/logo-erpmodelo.png",
		"displayName": "ERP Modelo",
		"versions": [
			1
		]
	}
]
```

A partir dessa resposta, precisamos, para cada App Provedor, requisitar seus dados referentes a action específica.

## Requisitando Informações para um App Provedor específico

### Request

```http
GET https://api.layers.digital/v1/services/call/{{action}}/{{id_app_Provedor}}?version={{versao_da_action_desejada}}
```

```headers
Authorization: Bearer {{token_do_seu_app}}
community-id: {{id_da_comunidade}}
```

O corpo da requisição varia de acordo com a action, assim como o payload de resposta. Você pode checar com detalhes nas seções logo abaixo! :) 
