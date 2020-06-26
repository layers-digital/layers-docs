# Marcar ocorrências como lidas

A action `@layers:education:AcademicRecords:markRecordsAsViewed` é usada para marcar uma ou mais ocorrências como lidas.

O app que requisita informações deve enviar uma requisição `POST` no formato abaixo:

## Requisição:

```js
{
  "context": {
    "issuedAt": Date,  // Quando a chamada foi feita
    "action": '@layers:education:AcademicRecords:markRecordsAsViewed',
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
    "groupId": String | null, // Identificador unico do grupo de registros
    "recordIds": [ // Identificadores únicos dos registros
      "ID_DO_REGISTRO_A",
      "ID_DO_REGISTRO_B",
      "ID_DO_REGISTRO_C",
      ...
    ]
  },
  "secret": String, // Chave secreta
}
```

## Resposta:

A API deve retornar apenas status 200 confirmando que a operação foi efetuada.

## Validações que sugerimos:
- `secret` é idêntica à salva no código? (IMPORTANTE)
- `context.community` é uma comunidade aceita? (DESEJAVEL)
- `context.action` é uma action implementada e válida? (IMPORTANTE)
- `data.user` possui permissão de acesso ao recurso? (OPCIONAL, pois o Layers já aplica regras de escopamento nas telas)
- `data.user` pertence à `context.comunity`? (OPCIONAL)

**Obs:** Caso algum erro ocorra, retornar códigos HTTP na faixa 4xx-5xx


**ATENÇÃO:** Os comentários foram adicionados apenas para explicar as estruturas de dados, nem a requisição e nem a resposta devem ter comentários, ambos devem ser JSONs válidos.
