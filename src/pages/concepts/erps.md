---
template: default
title: Layers para ERPs
tableOfContents: false
# nextText: 'Environment Setup'
# nextUrl: '/docs/guides/intro'
---

# Layers para ERPs

A Layers oferece um conjunto de ferramentas que permitem que sistemas de gestão se integrem com diversas instituições de ensino. Por meio de um único app o ERP pode sincronizar dados de pais, alunos e turmas com a Layers, expor as informações suportadas pelo API Hub, enviar comunicados importantes ou mesmo notificações de novas informações disponíveis.

O ERP que desenvolve a parte de sincronização e integração com o API HUB deve desenvolver uma API que recebe as requisições e responde de acordo com as principais funcionalidades listadas abaixo. Portanto a documentação abaixo deve servir como um modelo da documentação da API desenvolvida pelo ERP.

## Principais funcionalidades

<docs-cards>
  <docs-card header="Layers API Hub" href="/docs/api/apihub" icon="/docs/assets/icons/Hub.svg">
    <p>Prover e consumir informações sobre horários, frequência, cobranças e mais</p>
  </docs-card>

  <docs-card header="Layers Data Sync" href="/docs/api/data" icon="/docs/assets/icons/Data.svg">
    <p>Manter os dados da Layers atualizados com as informações do ERP</p>
  </docs-card>

  <!-- <docs-card header="Notificações" href="/docs/concepts/funcionalidades/notificacoes" icon="/docs/assets/icons/Notifications.svg">
    <p>Mandar notificações push para android, ios e web</p>
  </docs-card> -->
</docs-cards>
