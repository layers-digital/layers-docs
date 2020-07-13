import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  '': {
    'Status das APIs': '/docs/status',
  },
}