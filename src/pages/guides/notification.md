
# Enviar notificação

Através da API do Layers é possível enviar notificações com título e texto de corpo personalizados para dispositivos Android, iOS e também na plataforma web. Para isso, um app deve cumprir os seguintes requisitos:

+ Estar aprovado e instalado na comunidade para cujos usuários deseja enviar notificações
+ Ter funcionalidade API habilitada
+ Ter a permissão `notification:send`

## Faça a requisição para a rota de notificação

```http
POST /notification/send
```

```js
{
    "title": "Título da notificação",
    "body": "Texto do corpo da notificação"
    "targets": {
        "topics": [{
            "alias": "alias" // 'alias' do user/member/group/tag
            "kind": "member" // Tipo do target, pode ser: user, member, group ou tag
        }, {
            "id": "id" // 'id' do user/member/group/tag no Layers
            "kind": "group"
        }, {
            "email": "email@escola.com.br(opens in new tab)" // 'email' do user
            "kind": "user"
        }],
        "roles": ["guardian"], // Permissões que serão notificadas (pode ser omitida caso os todos os targets tenham `"kind": "user"`)
    }
}
```

A chave `target.topics` recebe um Array de objetos com as seguintes chaves:

* `kind`: Indica o tipo do target, pode ser `user`, `member`, `group` ou `tag`
* `alias` | `id` | `email`: Indica o identificador do target. **Obs.: Informe apenas uma destas chaves por topic.**

> **Obsercação:** A chave `target.roles` pode ser omitida caso todos os `topics` tenham `"kind": "user"`.
