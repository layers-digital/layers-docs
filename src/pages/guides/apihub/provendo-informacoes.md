# Provendo informações

## Requisitos 

Para que um app possa prover informações respondendo actions em uma determinada comunidade ele deve cumprir os seguintes requisitos:

+ Estar aprovado e instalado na comunidade cujas informações deseja requisitar
+ Ter a funcionalidade de feature ```services``` habilitada 
+ Ter todas as actions que deseja responder descritas no array ```responds```

Uma vez que o seu app está instalado e configurado, é possível responder actions seguindo o fluxo abaixo.

## Receber a requisição

O primeiro passo para um app que responde por uma action é receber uma requisição do Layers. Quando um app na comunidade requisitar uma das actions que seu app responde, o Layers encaminhará a requisição para a rota informada na configuração do app. Nesse exemplo a requisição é para obter informações de calendário.

```js
{
  "context": {
    "issuedAt": Date,  // Quando a chamada foi feita
    "action": "@layers:Calendar:getRelated", // Identificador da action
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

## Responder a requisição

O app que provê informações deve então responder a requisição com todos os dados obrigatórios. O exemplo abaixo é do formato da resposta com dados de caelndário.

```js
{
  "result": [
    // Grade horária individual
    {
      // ID interno da grade horária (opcional)
      "id": "0001",

      // Titulo do calendário (obrigatório)
      "summary": "Calendário acadêmico",

      // Descrição do calendário (opcional)
      "description": "Calendário acadêmico geral",

      // Timezone global, será utilizada caso as datas do evento possuam time e não possuam timezone || UTC
      "timezone": "America/Sao_Paulo",

      // Eventos do calendário (obrigatório)
      "events": [
        {
          // ID interno do evento (opcional)
          "id": "0001",
          // Nome do evento (obrigatório)
          "summary": "Natal",
          // Data/hora de inicio do evento - Formato AAAA-MM-DD (obrigatório)
          "start": "2020-31-12",
          // Data de final do evento - Formato AAAA-MM-DD (obrigatório)
          "end": "2020-31-12",
          // Categoria do evento (opcional)
          "category": "Eventos",
          // Cor do evento (opcional)
          "color": "orange"
        },
        {
          "id": "0002",
          // Para representar um evento que ocupa o dia todo basta enviar apenas ANO-MES-DIA
          "summary": "Corpus Christi",
          // Data de inicio e de final devem ser iguais neste caso - Formato AAAA-MM-DD
          "start": "2020-06-11",
          "end": "2020-06-11",
          "category": "Feriados",
          // Data/hora que o evento foi criado - Formato AAAA-MM-DDTHH:mm:ssZ (opcional)
          "createdAt": "2020-01-01T13:45:00Z"
        },
        {
          "id": "0003",
          // Para representar um evento que ocupa varios dias basta enviar apenas ANO-MES-DIA
          "summary": "Férias escolares",
          "start": "2020-06-01",
          "end": "2020-06-30",
          "category": "Ferias"
        },
        {
          // ID interno do evento (opcional)
          "id": "0004",
          // Nome do evento (obrigatório)
          "summary": "Festa de halloween",
          // Data/hora de inicio do evento - Formato AAAA-MM-DDTHH:mm:ss (obrigatório)
          "start": "2020-10-31T09:00:00",
          // Data de final do evento - Formato AAAA-MM-DDTHH:mm:ss (obrigatório)
          "end": "2020-10-31T21:45:00",
          // Categoria do evento (opcional)
          "category": "Eventos"
        },
        {
          // ID interno do evento (opcional)
          "id": "0005",
          // Nome do evento (obrigatório)
          "summary": "Festa junina",
          // Data/hora de inicio do evento - Formato AAAA-MM-DDTHH:mm:ssZ (obrigatório)
          "start": "2020-07-27T09:00:00Z",
          // Data de final do evento - Formato AAAA-MM-DDTHH:mm:ssZ (obrigatório)
          "end": "2020-07-27T21:45:00Z",
          // Categoria do evento (opcional)
          "category": "Eventos"
        }
      ],

      // Categorias associadas aos eventos (opcional)
      // São utilizadas para definir a cor de cada evento
      // Caso uma categoria seja definida no evento mas não nesta estrutura uma cor aleatória será designada automaticamente
      "categories": [
        {
          // Nome da categoria. Deve corresponder a uma categoria atribuida a pelo menos um evento (obrigatório)
          "name": "Eventos",
          // Cor que será atribuida a todos os eventos desta categoria (obrigatório)
          // Cores predefinidas disponiveis:
          // aqua, purple, salmon, yellow-dark, link, lead-light, danger, success
          // Além dessas cores é possivel utilizar qualquer cor em hexadecimal
          "color": "aqua"
        },
        {
          "name": "Feriados",
          "color": "#F4F6F8"
        },
        {
          "name": "Ferias",
          "color": "purple"
        }
      ]
    }
  ]
}
```

Ao receber a resposta do seu app, o Layers realizará a validação da sua resposta conferindo se as informações estão de acordo com o que é esperado para a action informada e repassrá as informações para o app que as requisitou.