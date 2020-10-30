import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Logar com Layers': {
    'Botão "Logar com Layers"': '/docs/sdk/como-colocar-o-botao-logar-com-layers',
  },
  'Portais': {
    'Introdução': '/docs/sdk/portais/introducao',
    'Eventos e Promises': '/docs/sdk/portais/eventos-e-promises',
    'Propriedades e Métodos': '/docs/sdk/portais/propriedades-e-metodos',
    'Autenticação': '/docs/sdk/portais/autenticacao',
  }
}