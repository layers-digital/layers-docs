import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Primeiros Passos': {
    'Requisitando acesso': '/docs/register',
    'Acessando pela primeira vez o ambiente de desenvolvimento': '/docs/first-steps',
  },
  'Integração Layer SSO': {
    'O que é SSO?': '/docs/integration/sso101',
    'Fluxo SSO com a Layers': '/docs/integration/fluxo-sso',
    'Botão \"Logar com Layers \"': '/docs/integration/botao-logar-com-layers',
  },
  'Integração Layer Rostering': {
    'Rostering: o que é': '/docs/integration/Rostering',
    'Fluxo de dados': '/docs/integration/fluxo-sso',
    'Permissionamento de Dados': '/docs/integration/botao-logar-com-layers',
  },
  'Integração Layers Experiência Unificada': {
    'O que é Experiência Unificada?': '/docs/integration/experiencia-unificada',
    'Microfrontends': '/docs/integration/microfrontends',
    'Layers SDK': '/docs/integration/layers-sdk',
    'Android e IOS': '/docs/integration/android-e-ios',
  }
}
