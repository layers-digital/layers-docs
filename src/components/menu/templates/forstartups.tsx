import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups',
  },
  'Acesso Unificado (SSO)': {
    'Introdução a SSO': '/docs/forstartups/sso',
    'Faça Login com a Layers': '/docs/forstartups/sso#fa-a-login-com-a-layers',
    'Layers OAuth2': '/docs/forstartups/sso#layers-oauth2',
  },
  'Dados Unificados (Rostering)': {
    'Introdução a Rostering': '/docs/forstartups/rostering',
    'Fluxo de dados': '/docs/forstartups/fluxo-dados',
    'Permissionamento de Dados': '/docs/forstartups/permissionamento-dados',
  },
  'Experiência Unificada': {
    'Introdução a Experiência Unificada': '/docs/forstartups/experiencia-unificada',
    'Microfrontends': '/docs/forstartups/microfrontends',
  },
  'Software Development Kits': {
    'Introdução aos SDK\'s': '/docs/forstartups/sdk',
    'Layers Portal': '/docs/forstartups/sdk/layers-portal',
    'Botão "Logar com Layers"': '/docs/forstartups/sdk/layers-button',
  }
}
