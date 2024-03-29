import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const requests = menuData.apihub

const items = {
  'Layers API Hub': {
    'Introdução': '/docs/api/apihub',
    'Consumindo dados de uma Action': '/docs/api/apihub/consumindo',
    'Provendo dados para uma Action': '/docs/api/apihub/provendo',
    'Actions Disponíveis': '/docs/api/apihub/actions'
  },
  'Provendo Dados': requests
}
