import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Layers Para Escolas': {
    'Como Funciona': '/docs/forschools',
  },
}
