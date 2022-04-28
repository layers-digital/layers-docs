import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers Sync': {
    'Introdução': '/docs/sync',
  },
  ...(menuData.data)
}
