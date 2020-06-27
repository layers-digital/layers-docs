
# Sincronizar dados

A sinconização de dados para o Layers cria usuários, membros e grupos bem como seus vínculos uns aos outros na plataforma. Esse processo é ideal para quando é necessário realizar atualizações de uma grande quantidade de dados simultaneamente.

> **Atenção**: para realizar esse procedimento é necessário ter permissão ```sync:manage```

> **CUIDADO**: Essa rota altera pode alterar, criar e apagar dados na sua comunidade. 

## Defina os dados que deseja importar

Os dados devem estar no formato abaixo para serem enviados para a rosta de sincronização: 

```JSON

{
	"members": {
		"data": [
			{
				"name": "aluno exemplo",
				"alias": "ID123",
				"birth": "22/08/2004",
				"active": true,
				"users": [
					"familiar.exemplo@email.com"
				]

			}
		],
		"cleansync": false
	},
	"users": {
		"data": [
			{
				"name": "familiar exemplo",
				"alias": "ID456",
				"birth": "16/11/1962",
				"roleSet": {
					"guardian": true,
				},
				"active": true,
				"invite": false,

			}
		],
		"cleansync": false
	},
	"classrooms": {
		"data": [
			{
				"name": "turma exemplo",
				"alias": "ID789",
				"active": true,
				"members": [
					"ID123"
				],
				"admins": [
					"ID456"
				],
				"tags": [
					"ensino médio"
				]
			}
		],
		"cleansync": false
	}
}

```

> **CUIDADO**:  A chave de cleansync define se devem ser apagados documentos do tipo especificado que não estão na planilha. Se a sincronização for incremental utilize **```cleansync: false```** como no exemplo acima

## Envie esse esses para a nossa API

Para efetuar a sincronização de dados, envie uma requisição do tipo POST para a `/sync` com os headers de `authorization` e `community-id` e o seu objeto com os dados da sincronização no corpo. 