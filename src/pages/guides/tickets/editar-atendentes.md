# Associando e removendo atendentes de canais de atendimento

Para que um usuário possa responder solicitações feitas em um determinado canal de atendimento é necessário que ele esteja cadastrado como atendente desse canal. Esse cadastro do atendente pode ser feito chamando a rota abaixo:

> **ATENÇÃO**: para que um usuário possa ser cadastrado como atendente ele deve ter a permissão ```ticket:agent```.

##### PUT ```/tickets/channels/{channelId}/agent/{userId}```
+ channelId: identificador do documento do canal de atendimento
+ userId: identificador do documento do usuário

A resposta dessa requisição será:

```js
{
    "_id": String,
    "name": String,
    "email": String,
    "roles": [String],
    "status": String
}
```

+ **_id**: identificador do usuário
+ **name**: nome do usuário
+ **email**: e-mail do usuário
+ **roles**: permissões do usuário
+ **status**: status do usuário

Para remover um atendente de um canal de atendimento chame a mesma rota usando o metodo ```delete```.

### **DELETE** ```/tickets/channels/{channelId}/agents/{userId}```
