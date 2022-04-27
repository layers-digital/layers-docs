import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups',
  },
  'Layers SSO': {
    'Single Sign-On na Layers': '/docs/forstartups/sso',
    'Validando o Layers SSO Token': '/docs/forstartups/sso/validating-tokens',
  },
  'Layers Sync': {
    'Sincronização de dados': '/docs/forstartups/sincronizacao-de-dados'
  },
  'Layers Portal': {
    'Portais na Layers': '/docs/forstartups/portais',
  },
  'Layers API Hub': {
    'API Hub': '/docs/forstartups/api'
  },
  'Software Development Kits': {
    'Layers Portal': '/docs/forstartups/sdk/layers-portal',
    'Botão "Logar com Layers"': '/docs/forstartups/sdk/layers-button',
  }
}
