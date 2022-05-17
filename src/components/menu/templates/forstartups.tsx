import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups',
  },
  'Layers Portal': {
    'Portais na Layers': '/docs/forstartups/portais',
    'Layers Portal SDK': '/docs/forstartups/portais/layers-portal',
    ...(menuData.notifications)
  },
  'Layers SSO': {
    'Single Sign-On na Layers': '/docs/forstartups/sso',
    'Botão "Logar com Layers"': '/docs/forstartups/sso/layers-button',
    'Requisitando Informações do Usuário': '/docs/forstartups/sso/basic-user-info',
    'Validando o Layers SSO Token': '/docs/forstartups/sso/validating-tokens',
  },
  'Layers Data Sync': {
    'Sincronização de dados': '/docs/forstartups/sincronizacao-de-dados'
  },
  'Layers API Hub': {
    'API Hub': '/docs/forstartups/api'
  }
}
