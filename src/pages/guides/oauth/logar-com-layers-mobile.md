# Botão logar com Layers mobile

É possível disponibilizar a opção de logar com Layers no seu aplicativo mobile seguindo as [melhores práticas de design](./melhores-praticas). Para isso, ao clicar no botão de logar com Layers o cliente deve abrir a  url `https://id.layers.digital`, passando os seguintes pârametros:

| Parâmetro     | Valor                                                               |
| ------------- | ------------------------------------------------------------------- |
| client_id     | Identificador do app                                                |
| response_type | `code` (Atualmente o único aceitado)                                |
| redirect_uri  | URL de redirecionamento configurada anteriormente                   |
| scope         | Escopos configurados anteriormente (deve ser indentado com espaços) |
| state         | Mensagem adicional que pode ser utilizada para ser retornado na rota de token de acesso (OPCIONAL) |

Exemplo de url: `https://id.layers.digital/?client_id=layers&redirect_uri=https://layers.com&response_type=code&scope=openid profile fullname`

Uma vez que o usuário realizou o Login e aceitou os escopos pedidos pelo app, ele será redirecionado para a uri especificada na chave `redirect_uri` passando como parametro da query o código na chave `code`. 

Para realizar a autenticação com o layers então o app deve realizar a requisição abaixo.

##### POST `/oauth/token`

```js
{
  "grant_type": "authorization_code",
  "client_id": "{{client_id}}",
  "code": "{{code}}",
  "redirect_uri": "{{redirect_uri}}"
} 
```

A API de OAuth do Layers então retornará o seguinte JSON

```js
{
  "access_token": "{{jwtToken}}",
  "token_type": "Bearer",
  "expires_in": Number // Em quanto tempo irá expirar este token,
  "state": String // Irá retornar o mesmo valor caso tenha sido utilizado na primeira chamada
}
```

Esse token pode então ser usado para ter acesso aos [endpoints de OAuth](link)