# Dados da tela "Home"

A action `@layers:getHomeInfo` é usada para obter dados da tela de "Home" do Layers Education para um usuário específico.

O app deve receber uma requisição `POST` com a seguinte estrutura de dados:

## Requisição:

```js
{
  "context": {
    "issuedAt": Date,  // Quando a chamada foi feita
    "action": '@layers:getHomeInfo',
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

O app que provê as informações da tela "Home" de um usuário específico deve responder conforme o padrão mostrado abaixo.

## Resposta:

```js
{
  //Badge de notificações, é um numero inteiro que representa a quantidade de notificações, valores possiveis: (opcional)
  //Boolean: Se for "true" mostra a badge sem contagem, se for "false" não mostra a badge
  //Number: Se for maior ou igual a 1 mostra a contagem na badge, caso contrario não mostra a badge
  "badge": 1

  //Informações de destaque (opcional)
  "featured": {

    //Titulo do grupo de cards em destaque, limitado a 30 caracteres (obrigatório)
    "title": "1 item novo na agenda",

    //Array de cards que estarão em destaque na home do Layers. Serão renderizados no máximo 4 cards, mesmo que mais sejam enviados (obrigatório)
    "cards": [
      {
        //Descrição curta do card, limitado a 26 caracteres. (obrigatório)
        "label": "Evento",

        //Titulo do card, limitado a 50 caracteres. (obrigatório)
        "title": "Festa junina",

        //Descrição do card (opcional)
        "description": "A festa junina será relaizada no dia 12/06/2020, todos estão convidados!",

        //Personaliza o estilo do card, valores possiveis: (opcional)
        //neutral
        //attention
        //success
        //danger
        "mood": "neutral",

        //Imagem que aparece no card, o apecto ideal é quadrada. (opcional)
        "image": "https://image.com",

        //Para onde o clique no card deve redirecionar o usuário (obrigatório)
        "action": {
          //Alvo onde a ação vai ser executada, valores possiveis: (obrigatório)
          //portal: Ação é executada no portal do proprio app dentro do Layers
          //url: Ação é abrir uma url no navegador
          "target": "portal",

          //URL que deve ser aberta no navegador. Campo obrigatório caso target seja url
          "url": null,

          //Parametros que devem ser enviados para o portal. Campo obrigatório caso target seja portal
          "params": "..."
        }
      }
    ]
  }
}
```

**Obs:** Caso algum erro ocorra, retornar códigos HTTP na faixa 4xx-5xx


**ATENÇÃO:** Os comentários foram adicionados apenas para explicar as estruturas de dados, nem a requisição e nem a resposta devem ter comentários, ambos devem ser JSONs válidos.
