# Dados de ocorrências

A action `@layers:education:AcademicRecords:getRelated` é usada para obter dados de ocorrências para um usuário específico.

O app que requisita informações deve enviar uma requisição `POST` no formato abaixo:

## Requisição:

```js
{
  "context": {
    "issuedAt": Date,  // Quando a chamada foi feita
    "action": '@layers:education:AcademicRecords:getRelated',
    "community": String,  // Comunidade do usuário
  },
  "data": {
    "user": {
      "id": String,  // ID do usuário
      "name": String,  // Nome do usuário
      "alias": String | Number | null,  // Alias do usuário
      "timezone": String,  // Fuso horário do usuário
      "language": String,  // Língua preferencial do usuário
      "accountId": String,  // ID da account do usuário
    },
    "createdAfter": Date | null, // Se for diferente de nulo a resposta deverá conter apenas os novos dados depois dessa data
  },
  "secret": String, // Chave secreta
}
```

O app que provê as ocorrências de um usuário específico deve, por sua vez, receber uma requisição no formato acima e responder conforme o padrão mostrado abaixo.

## Resposta:

```js
{
  "result": [
    // Grupo de registros
    {

      // ID interno do grupo de registros, para possível fetch individual futuro (opcional)
      "id": "RA",

      // Periodo letivo (opcional)
      "season": "2019",

      // Título do grupo de registros. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo" (obrigatório)
      "student": "Marília Castelli",

      // Caption do grupo de registros (obrigatório)
      "course": "9º Ano - Ensino Fundamental",

      // Lista de registros que fazem parte desse grupo
      "records": [
        {
          // ID interno do registro no ERP, para possivel integração de duas vias (opcional)
          "id": "ID_DO_REGISTRO",

          // Quando o registro foi enviado (formato AAAA-MM-DDTHH:mm)(obrigatório)
          "createdAt": "2020-10-31T09:00:00Z",

          // Categoria do registro, vai ser utilizado para filtrar os registros (obrigatório)
          "category": "Notificado por comparecer sem marterial escolar",

          // Registro. Pode ser o nome da disciplina, ou como preferirem que esse registro seja categorizado (obrigatório)
          "caption": "Geografia",

          // Descrição do registro (aceita markdown) (obrigatório)
          "description": "Não trouxe o material didático de Geografia.",

          // Data em que o registro foi marcado como visto (formato AAAA-MM-DDTHH:mm) Se for null significa que não foi viewed (opcional)
          "viewedAt": null,

          // Quem marcou registro como visto. Importante retornar caso não tenha sido o próprio usuario que visualizou. (opcional)
          "viewedBy": null,

          // Dados adicionais que podem ser vistos pelo usuario. (opcional)
          "metadata": [
            {
              // Titulo da informação
              "label": "Enviado por",
              // Valor da informação
              "value": "Vânia Almeida"
            },
            {
              "label": "Professor",
              "value": "John Doe"
            },
            {
              "label": "Ocorreu em",
              "value": "21/04/2020"
            }
          ]
        }
      ]
    }
  ]
}
```


## Validações que sugerimos:
- `secret` é idêntica à salva no código? (IMPORTANTE)
- `context.community` é uma comunidade aceita? (DESEJAVEL)
- `context.action` é uma action implementada e válida? (IMPORTANTE)
- `data.user` possui permissão de acesso ao recurso? (OPCIONAL, pois o Layers já aplica regras de escopamento nas telas)
- `data.user` pertence à `context.comunity`? (OPCIONAL)

**Obs:** Caso algum erro ocorra, retornar códigos HTTP na faixa 4xx-5xx


**ATENÇÃO:** Os comentários foram adicionados apenas para explicar as estruturas de dados, nem a requisição e nem a resposta devem ter comentários, ambos devem ser JSONs válidos.
