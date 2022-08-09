import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers': {
    'Introdução': '/docs/forstartups',
  },
  'LayersPortal.js': {
    'Portais na Layers': '/docs/forstartups/portais',
    ...(menuData.notifications)
  },
  'Layers SSO': {
    'Single Sign-On na Layers': '/docs/forstartups/sso',
    'Botão "Logar com Layers"': '/docs/forstartups/sso/layers-button',
    'Requisitando Informações do Usuário': '/docs/forstartups/sso/basic-user-info',
    'Validando o Layers SSO Token': '/docs/forstartups/sso/validating-tokens',
  },
  'Permissionamento': {
    'Permissionamento na Layers': '/docs/forstartups/permissionamento',
  },
  'Outras Camadas': {
    'Layers Data Sync': '/docs/api/data',
    'Layers API Hub': '/docs/api/apihub'
  }
}
