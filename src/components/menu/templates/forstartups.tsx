import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups/introduction',
    'Primeiros Passos': '/docs/forstartups/first-steps',
    'Integration layers': '/docs/forstartups/integration-layers',
  },
  'Acesso Unificado (SSO)': {
    'Introdução a SSO': '/docs/forstartups/sso101',
    'Fluxo SSO com a Layers': '/docs/forstartups/fluxo-sso',
    'Botão \"Logar com Layers\"': '/docs/forstartups/botao-logar-com-layers',
  },
  'Dados Unificados (Rostering)': {
    'Introdução a Rostering': '/docs/forstartups/Rostering',
    'Fluxo de dados': '/docs/forstartups/fluxo-sso',
    'Permissionamento de Dados': '/docs/forstartups/botao-logar-com-layers',
  },
  'Experiência Unificada': {
    'Introdução a Experiência Unificada': '/docs/forstartups/experiencia-unificada',
    'Microfrontends': '/docs/forstartups/microfrontends',
    'Layers SDK': '/docs/forstartups/layers-sdk',
  }
}
