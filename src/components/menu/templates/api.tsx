import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'API Hub': {
    'Introdução': '/docs/api/apihub',
  },
  ...(menuData.apihub)
}
