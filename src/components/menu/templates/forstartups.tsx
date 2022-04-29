import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups',
  },
  'Layers Portal': {
    'Portais na Layers': '/docs/forstartups/portais',
  },
  'Layers SSO': {
    'Single Sign-On na Layers': '/docs/forstartups/sso',
    'Requisitando Informações do Usuário': '/docs/forstartups/sso/basic-user-info',
    'Validando o Layers SSO Token': '/docs/forstartups/sso/validating-tokens',
  },
  'Layers Data Sync': {
    'Sincronização de dados': '/docs/forstartups/sincronizacao-de-dados'
  },
  'Layers API Hub': {
    'API Hub': '/docs/forstartups/api'
  },
  'Software Development Kits': {
    'Layers Portal': '/docs/forstartups/sdk/layers-portal',
    'Botão "Logar com Layers"': '/docs/forstartups/sdk/layers-button',
  }
}
