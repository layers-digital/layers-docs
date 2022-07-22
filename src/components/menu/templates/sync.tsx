import { h } from '@stencil/core';
import menuData from '../data/apis.json'

export default () => {
  return <docs-nav items={items} />
};

const menuStructure = {
  "Entidades": [],
  "Consumindo Dados": [],
  "Provendo Dados": [],
}

const tagTextToType = {
  "{...}": "Entidades",
  "GET": "Consumindo Dados",
  "HEAD": "Consumindo Dados",
  "POST": "Provendo Dados",
  "PUT": "Provendo Dados",
  "DELETE": "Provendo Dados",
  "PATCH": "Provendo Dados",
}

Object.keys(menuData.data).map((key: string) => {
  const items = menuData.data[key];
  items.forEach((item: {
    text: string,
    href: string,
    tag: {
      color: string,
      text: string,
    }
  }) => {
    const tag = item.tag.text
    const type = tagTextToType[tag]
    if (type) {
      menuStructure[type].push(item)
    }
  });
});

const items = {
  'Layers Data Sync': {
    'Introdução': '/docs/api/data',
  },
  ...menuStructure
}
