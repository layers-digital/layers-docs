import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Logar com Layers': {
    'Botão "Logar com Layers"': '/docs/sdk/como-colocar-o-botao-logar-com-layers',
  },
  // 'Portais': {
  //   'Usando portais no seu app': ''
  // }
}