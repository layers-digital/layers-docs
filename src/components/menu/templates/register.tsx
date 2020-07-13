import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Informações de Cadastro': {
    'Formulário': '/docs/register',
  }
}