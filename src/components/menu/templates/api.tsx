import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const requests = Object.values(menuData.apihub).flat()

const items = {
  'Layers API Hub': {
    'Introdução': '/docs/api/apihub',
    'Consumindo dados de uma Action': '/docs/api/apihub/consumindo',
    'Provendo dados para uma Action': '/docs/api/apihub/provendo'
  },
  'Provendo Dados': requests
}
