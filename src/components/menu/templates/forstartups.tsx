import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups',
  },
  'Layers Portal': {
    'Portais na Layers': '/docs/forstartups/funcionalidades/portais',
  },
  'Layers SSO': {
    'Introdução a SSO': '/docs/forstartups/sso',
  },
  'Layers Sync': {
    'Sincronização de dados': '/docs/forstartups/funcionalidades/sincronizacao-de-dados'
  },
  'Layers API Hub': {
    'API Hub': '/docs/forstartups/api'
  },
  'Software Development Kits': {
    'Layers Portal': '/docs/forstartups/sdk/layers-portal',
    'Botão "Logar com Layers"': '/docs/forstartups/sdk/layers-button',
  }
}
