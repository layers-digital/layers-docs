# Dados de cobranças

A action `@layers:payments:Payables:getRelated` é usada para obter dados de cobranças para um usuário específico.

O app que requisita informações deve enviar uma requisição `POST` no formato abaixo:

## Requisição:

```js
{
  "context": {
    "issuedAt": Date,  // Quando a chamada foi feita
    "action": '@layers:payments:Payables:getRelated',
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


O app que provê os dados de cobranças de um usuário específico deve, por sua vez, receber uma requisição no formato acima e responder conforme o padrão mostrado abaixo.

## Resposta:

```js
{
  "result": [
  // Grupo de cobranças
  {

    // ID interno do grupo de cobranças, para possível fetch individual futuro (obrigatório)
    id: "RA",

    // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo" (obrigatório)
    title: "Aluno Munir Seduca",

    // Descrição do grupo de cobranças (aceita Quebras de linha) (opcional)
    description: "Responsável Financeiro: ...\n...",

    // Qual é o número total de parcelas (por padrão, será a contagem de payables) (opcional)
    installments: 12,
    
    // Informações de quem irá pagar as cobranças (opcional)
    customer: {
    
      // Documento do pagador (obrigatório)
      document: {
        // Tipo do documento cpf|cnpj (obrigatório)
        kind: "cpf",
        // Número do documento (obrigatório)
        value: "111"
      },
    
      // Nome do pagador (obrigatório)
      name: "Felipe Layers",
      
      // Email do pagador (opcional)
      email: "email@layers.education",
      
      // Telefone do pagador (opcional)
      phone: "111...",
      
      // Data de nascimento do pagador (formato AAAA-MM-DD) (opcional)
      birth: "2020-02-01"      
    },

    // Lista de cobranças que fazem parte desse grupo (obrigatório)
    payables: [
      {

        // ID interno da cobrança no ERP, para possível futura integração (obrigatório)
        id: "ID_DA_COBRANÇA",

        // Identificador personalizado da cobrança, será vísivel na interface (opcional)
        alias: "3213",

        // Qual é o número da parcela dessa cobrança? (obrigatório)
        installment: 1,

        // Descrição da cobrança (aceita markdown) (opcional)
        description: "Mensalidade referente ao mês de Janeiro de 2020",

        // Status da cobrança, valores possíveis: (obrigatório)
        // paid: Pago
        // partially_paid: Parcialmente Pago
        // pending: Aguardando Pagamento
        // open: Em Aberto
        // canceled: Cancelado
        // late: Atrasado
        status: "pending",

        // Data de vencimento da cobrança (formato AAAA-MM-DD) (obrigatório)
        dueAt: "2020-02-01",

        // Quando a cobrança foi paga, formato AAAA-MM-DD (opcional)
        paidAt: null,

        // Quando a cobrança foi enviada,formato AAAA-MM-DD (opcional)
        sentAt: null,

        // Valor que já foi pago (obrigatório)
        centsPaid: 0,

        // Valor total a ser pago (com multas/taxas, se aplicável) (obrigatório)
        centsTotal: 150000,

        // Valor original (sem multas/taxas) (obrigatório)
        centsOriginal: 150000,

        // Arquivo e código do boleto (obrigatório)
        boleto: {

          // Link para baixar o boleto (obrigatório)
          link: "https://boleto.pdf", //URL,

          // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto (obrigatório)
          code: "12341234123412341234",
        },

        // Lista de anexos da cobrança (opcional)
        attachments: [
          {

            // Tipo do anexo (obrigatório)
            // Valores possivels:
            // invoice: Nota fiscal
            // file: Arquivo
            kind: 'file',

            // Nome do anexo (obrigatório)
            title: "Comprovante de estorno",

            // Descrição do anexo (opcional)
            description: "Estorno realizado em 31/10/2019",

            // Link para baixar o anexo (obrigatório)
            url: "https://url.para-download.com",
          },
        ]
      }
    ]
  }
]
}
```

**Obs:** Caso algum erro ocorra, retornar códigos HTTP na faixa 4xx-5xx


**ATENÇÃO:** Os comentários foram adicionados apenas para explicar as estruturas de dados, nem a requisição e nem a resposta devem ter comentários, ambos devem ser JSONs válidos.
