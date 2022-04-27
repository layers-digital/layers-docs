---
template: default
title: Botão "Logar com Layers"
tableOfContents: true
previousText: 'Layers Portal'
previousUrl: '/docs/forstartups/sdk/layers-portal'
---

# Botão "Logar com Layers"

Com o objetivo de tornar o uso da autenticação com a Layers mais simples disponibilizamos um componente do botão da Layers. Para utilizar esse componente na sua aplicação, siga as instruções abaixo.


## 1 - Importe a biblioteca

Para ter acesso ao componente do botão logar com a Layers será necessário importar o código da biblioteca de autenticação da Layers como mostrado no trecho de código abaixo. A importação do código deve ser feita na tag head para evitar que o recurso seja requisitado antes que ele tenha sido carregado.

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Minha Pagina</title>
        <script src="https://js.layers.digital/v1/LayersAuth.js"></script>
    </head>
</html>
```

## 2 - Adicione o botão de autenticação da Layers à sua página

```html
<layers-auth-button
  client-id="myapp",
  scope="identity:basic:read"
  response-type="code"
  redirect-uri="https://myapp.com"
  label="Continuar com"
></layers-auth-button>
```

Uma vez importada a bibioteca, adicione o componente do botão à sua página passando os atributos obrigatórios:
+ **client-id**: 
Deve conter o identificador do seu app na Layers Education.
+ **scope**:
Deve conter os [escopos](https://github.com/layers-digital/docs/blob/master/oauth2.0/docs.md). de autorização que o usuário deve ceder permissão para o uso do seu app.
+ **mode**:
Existem três valores possíveis para o atributo ```mode```:
    + ```embedded```: Abre um dialog na sua página com a tela de login da Layers para que o usuário digite suas credenciais.
    + ```popup```: Abre um popup em outra janela com a tela de login da Layers para que o usuário digite suas credenciais.
    + ```redirect```: Redireciona o usuário para a tela de login da Layers e depois redireciona de volta para o seu app passando o código como parâmetro na query.
+ **redirect-uri**:
Deve conter a url de redirecionamento para o seu app quando for usado o ```mode="redirect"```.
+ **label**:
Será usada como texto do botão na forma ```label```+ Layers.

Além dos atributos obrigatórios, estão disponíveis também atributos de estilo para que o botão se adeque ao design na sua página. São eles:
+ **dark | light**:
Esses atributos especificam a cor do botão. Usar o atributo ```dark``` resulta no botão verde enquanto usar o atributo ```light```ou não usar nenhum dos dois resulta no botão branco.
+ **size**: 
Existem quatro opções de tamanho para o botão de autenticação com Layers: ```small```, ```normal```, ```medium```e ```large```. Para especificar o tamanho basta usar ```size="tamanho"```
+ **flat**:
Por padrão o componente do botão logar com Layers tem uma borda. Para remover essa borda use o atributo ```flat```
+ **raised**:
Por padrão o botão de logar com Layers não tem drop-shaddow. Se preferir um botão com elevação, basta usar o attributo ```raised```.
+ **block**:
Ao usar o atributo ```block``` o botão o botão se tornará flexível, ocupando todo o espaço horizontal do seu container.
+ **inherit-font**:
A fonte padrão do botão de autenticação é Nunito-Bold. Embora recomendemos o uso dessa fonte para que o botão seja identificado mais facilmente, é possível alterar a fonte através do atributo ```ìnherit-font```. Quando for usado esse atributo, a fonte do botão será herdada do seu componente pai.

## 3 - Escute pelo evento com o resultado da autenticação

Caso você tenha optado por usar o modo ```redirect```, não será possível ouvir o evento como mostrado abaixo. Em vez disso, o código sera passado na chave code dos parâmetros na query.

```http
GET https://seuapp.com/?code=ca34a65ba76de14886dc532a811740c844f610d5
```

Para os modos ```embedded```e ```popup``` o código que deve ser usado para obter o token de acesso do usuário pode ser obtido ouvindo a resposta do evento LayersAuth como mostrado no trecho de código abaixo. 

```html
<script>
  LayersAuth.onResult((error, data) => {
    if (error) {
      //handle error
    }
    //use code to generate an OAuth token for the user
    const code = data.code
  })
</script>
```

## 4 - Use o código para obter o token

Por fim, use o código obtido para na requisição abaixo a para obter o token que deve ser usado como autenticação nas [rotas de OAuth disponíveis na Layers](https://github.com/layers-digital/docs/blob/master/oauth2.0/docs.md).

``` http
POST /oauth/token
``` 

```js
{
  "grant_type": "authorization_code",
  "client_id": String
  "code": "{{code}}",
  "redirect_uri": "{{redirect_uri}}"
}
```

+ **grant_type**: Tipo de fluxo
+ **client_id**: Identificador do app
+ **code**: Código recebido
+ **redirect_uri**: URI para a qual o usuário deve ser redirecionado ao fim da autenticação 

A API deve retornar um JSON com o seguinte formato:

```js
{
  "access_token": "{{jwtToken}}",
  "token_type": Bearer,
  "expires_in": Number,
  "state": String
}
```

+ **access_token**: Token de acesso
+ **token_type**: Tipo de token
+ **expires_in**: Tempo até o token expirar em segundos
+ **state**: Mensagem adicional que pode ser utilizada para ser retornado na rota de token de acesso