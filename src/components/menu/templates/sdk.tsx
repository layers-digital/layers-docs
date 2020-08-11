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
    'Eventos e Promisses': '/docs/sdk/portais/eventos-e-promisses',
    'Propriedades e Métodos': '/docs/sdk/portais/propriedades-e-metodos',
  }
}