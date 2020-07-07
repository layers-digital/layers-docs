import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Tutoriais': {
    'Como criar um App': '/docs/tutorial/como-criar-um-app',
    'Como colocar o botão "Logar com Layers"': '/docs/tutorial/como-colocar-o-botao-logar-com-layers',
  }
}
