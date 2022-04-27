---
template: default
title: Layers SSO Token
tableOfContents: true
previousText: 'Single Sign-On na layers'
previousUrl: '/docs/forstartups/sso'
nextText: 'Sincronização de Dados'
nextUrl: '/docs/forstartups/sincronizacao-de-dados'
---

# Validando o Layers SSO Token
Caso o seu App já tenha armazenado o Layers SSO Token do usuário e não quiser fazê-lo logar novamente com a Layers, é possível utilizar nossa API de autenticação para validar este token novamente. Caso o token não seja mais válido, o App pode, então, redirecioná-lo para o Login. Caso contrário, o App pode seguir normalmente.

## Validando o Token
Para validar o token é simples, basta tê-lo em mãos e enviar uma requisição para a rota de validação de token da Layers.

```http
GET http://api.layers.digital/v1/sso/token/validate
```
Com Headers incluindo o Layers SSO Token do usuário:
```headers
Authorization: Bearer {{Layers SSO Token}}
```

A requisição retornará `200` se o token for válido. Caso contrário, o token não é válido e o usuário deve logar novamente com a Layers.
