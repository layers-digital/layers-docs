---
template: default
title: Hub de APIs
tableOfContents: false
# nextText: 'Environment Setup'
# nextUrl: '/docs/guides/intro'
---

# Hub de APIs

O Hub de API's do Layers permite que apps troquem informações entre si seguindo o formato especificado por uma das actions do Layers: protocolos que especificam o formato de requisição e resposta aceitos para uma determinada informação. Apps podem requisitar e responder informações de [calendário](../../api/apihub/@layersCalendargetRelated/post), [ficha médica](../../api/apihub/@layershealthMedicalRecordgetRelated/post), [cobranças](../../api/apihub/@layerspaymentsPayablesgetRelated/post) e mais através de actions. Para qualquer que seja o papel que o app deseja exercer, ele deve estar registrado no Layers com permissão para usar o Hub de APIs além de ter especificado quais actions vão responder e quais vão requisitar.