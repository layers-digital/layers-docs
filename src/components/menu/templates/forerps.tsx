import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers Para ERPs': {
    'Como Funciona': '/docs/forerps',
  },
}
