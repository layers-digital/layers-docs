import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'API Hub': {
    'Introdução': '/docs/api/apihub',
    'Consumindo dados de uma Action': '/docs/api/apihub/consumindo',
    'Fornecendo dados para uma Action': '/docs/api/apihub/fornecendo'
  },
  ...(menuData.apihub)
}
