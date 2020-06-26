# Dados de grade horária

A action `@layers:education:Timetables:getRelated` é usada para obter dados de grade horária para a tela de "Visão de Horários" para um usuário específico.

O app que requisita informações deve enviar uma requisição `POST` no formato abaixo:

## Requisição:

```js
{
  "context": {
    "issuedAt": Date,  // Quando a chamada foi feita
    "action": "@layers:education:Timetables:getRelated",
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
  },
  "secret": String, // Chave secreta
}
```

O app que provê as notas acadêmicas de um usuário específico deve, por sua vez, receber uma requisição no formato acima e responder conforme o padrão mostrado abaixo.

Resposta:
```js
{
  "result": [
    // Grade horária individual
    {
      // ID interno da grade horária (opcional)
      "id": "0001",

      // Ano letivo (opcional)
      "season": "2019",

      // Nome do estudante (obrigatório)
      "student": "Ivan Seidel Gomes",

      // Nome do curso/série (opcional)
      "course": "9º Ano",

      // Dia em que começa a semana (opcional)
      // Valores aceitos: "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
      "startWeekday": "monday", // default: "sunday"

      // Lista de horários (obrigatório)
      "schedules": [
        {
          // Título do horário (atividade, disciplina) (obrigatório)
          "title": "Língua Portuguesa e os estudos",

          // Abreviação do titulo (opcional)
          "abbr": "PORT",

          // Etiqueta do horário (opcional)
          "label": "Extracurricular",

          // Dia da semana em que o horário é vigente (obrigatório)
          // Valores aceitos: "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
          "weekday": "monday",

          // Horário de início (obrigatório)
          "startTime": "15:30:00", // Formato (hh:mm:ss) ISO 8601

          // Horário de fim (opcional)
          "endTime": "16:30:00", // Formato (hh:mm:ss) ISO 8601

          // Localização do horário (opcional)
          "location": "Campus SP, sala 12, bloco B",

          // Subtítulo do horário (opcional)
          "caption": "Prof(a): Ana Maria",
        }
      ],
    }
  ]
}
```


## Validações que sugerimos:
- secret é idêntica à salva no código? (IMPORTANTE)
- context.community é uma comunidade aceita? (DESEJAVEL)
- context.action é uma action implementada e válida? (IMPORTANTE)
- data.user possui permissão de acesso ao recurso? (OPCIONAL, pois o Layers já aplica regras de escopamento nas telas)
- data.user pertence à context.comunity? (OPCIONAL)

**Obs:** Caso algum erro ocorra, retornar códigos HTTP na faixa 4xx-5xx

**ATENÇÃO:**: Os comentários foram adicionados apenas para explicar as estruturas de dados, nem a requisição e nem a resposta devem ter comentários, ambos devem ser JSONs válidos.
