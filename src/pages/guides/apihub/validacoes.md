# Validando requisições

Embora o Layers valide o formato das payloads de apps trocando informações por meio do Hub de API's é importante que o provedor de informações realize algumas validações para garantir que não há problemas na requisição por dados.

## Validações Importantes

+ O valor da chave `secret` é idêntico àquele salvo no código
+ A action em `context.action` é uma action válida?
  
## Validações Desejáveis

+ A comunidade em `context.community` é uma comunidade válida?
+ O usuário em `data.user` possui permissão para acessar o recurso que está solicitando?
+ O usuário em `data.user` pertence à comunidade `context.community`?

Caso a requisição não passe em todas essas validações retorne um erro com código na faixa 4XX - 5XX