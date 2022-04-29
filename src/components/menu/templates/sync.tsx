import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers Data Sync': {
    'Introdução': '/docs/api/data',
  },
  ...(menuData.data)
}
