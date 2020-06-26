# Criando canais de atendimento

Canais de atendimento no Layers são a maneira de organizar mensagens em grupos por departamento ou assunto. É possível também escopar quais atendentes tem permissão para responder determinadas mensagens através dos vínculos entre atendentes e canais de atendimento uma vez que um atendente só pode responder mensagens de canais aos quais está vinculado.

A requisição abaixp cria um canal de atendimento no Layers

##### **POST** ```/tickets/channels```
```js
{
    "name": String 
}
```
+ **name**: nome do canal de atendimento

Essa requisição retorna a seguinte resposta:

```js
{
    "_id": String,
    "public": Boolean,
    "name": String,
    "agents": [String],
    "allowAudio": Boolean,
    "subjects": [
        {
            "title": String,
            "description": String
        }
    ],
}
```

+ **_id**: identificador do documento do canal de atendimento
+ **public**: indica se o canal será público ou interno. Se for público aparecerá para usuários quando forem criar uma solicitaçõa
+ **name**: nome do canal de atendimento
+ **agents**: array contendo os identificadores de documentos de usuários que podem responder mensagens para esse canal
+ **allowAudio**: indica se esse canal deve permitir o envio de mensagens de áudio
+ **subjects**: array contendo um objeto para cada assunto sugerido
    + **title**: título do assunto 
    + **description**: descrição do assunto

Com exceção do ```_id``` e dos ```agents``` todas as propriedades podem ser editadas por meio da requisição abaixo:

### **PUT** ```/tickets/channels/{channelId}```
```js
{
    "public": Boolean,
    "name": String,
    "allowAudio": Boolean,
    "subjects": [
        {
            "title": String,
            "description": String
        }
    ],
}
```

É possível adicionar ou remover atendentes de um canal. Isso pode ser feito como explicado no guia [Associando e removendo atendentes de canais de atendimento](https://github.com/layers-digital/docs/blob/master/articles/editar-atendentes.md).