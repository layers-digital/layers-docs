# Requisitando informações

## Requisitos 

Para que um app possa requisitar informações através de actions em uma determinada comunidade ele deve cumprir os seguintes requisitos:

+ Estar aprovado e instalado na comunidade cujas informações deseja requisitar
+ Ter a funcionalidade de feature ```services``` habilitada 
+ Ter todas as actions que deseja requisitar descritas no array ```requests```

Uma vez que o seu app está instalado e configurado, é possível requisitar informações seguindo o fluxo abaixo.

## Encontrar provedores para uma determinada action

O primeiro passo de um app que tem permissão para requisitar uma determinada action é identificar quais são os possíveis provedores daquela informação na comunidade em que está instalado. Isso pode ser feito através da requisição mostrada abaixo: 

```http
GET /services/discover/{action}?version={versao}&_community={idComunidade}
```

+ **action**: Identificador da notificação 
+ **version**: Versão do app
+ **_community**: Identificador da comunidade


Essa requisição retorna os provedores que podem responder a action especificada como parametro na rota mostrada acima no seeguinte formato:

```js
{
    "version": Number, // Versão do app
    "communityInstallations": [String], // Provedores instalados que podem responser por essa ação
    "action": String // Action 
}
```

## Envio de uma requisição para um dos provedores de uma informação

Uma vez que o app sabe qual provedor irá usar, o app deve realizar uma requisição seguindo o formato especificado na documentação da action para a rota abaixo. Nesse exemplo, a requisição é para obter informações de calendário.

```http
POST /services/call/{action}/{provider}?version={versao}&_community={idComunidade}
```

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

Ao receber essa requisição, o Layers verifica não somente o corpo da requisição mas também  se o app tem permissão para requisitar a action especificada checando também se o provider especificado existe e está instalado na comunidade especificada. Apenas se a requisição passar nas validações ela será repassada para o provedor.

## Repasse da resposta validada

Ao receber a resposta do provedor, o Layers valida se ela está de acordo com o padrão de resposta esperado para essa action. Se a resposta for validada com sucesso ela é então repassada para o app que fez a requisição.