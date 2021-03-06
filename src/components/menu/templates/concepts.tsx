import { h } from '@stencil/core';

export default () => {
  return <docs-nav items={items} />
};

const items = {
  'Conceitos': {
    'Introdução à Layers': '/docs/',
  },

  'Pensado para EdTechs': {
    'Instituições de Ensino': '/docs/concepts/instituicoes-de-ensino',
    // 'Fornecedores': '/docs/concepts/fornecedores',
    'Startups': '/docs/concepts/startups',
    'ERPs': '/docs/concepts/erps',
  },

  'Funcionalidades': {
    // '': '/docs/concepts/funcionalidades',
    'Logar com Layers': '/docs/concepts/funcionalidades/logar-com-layers',
    'Portais': '/docs/concepts/funcionalidades/portais',
    'Hub de APIs': '/docs/concepts/funcionalidades/hub-de-apis',
    'Sincronização de Dados': '/docs/concepts/funcionalidades/sincronizacao-de-dados',
    'Notificações': '/docs/concepts/funcionalidades/notificacoes',
    // 'E-commerce': '/docs/concepts/funcionalidades/e-commerce',
    'Login Federado': '/docs/concepts/funcionalidades/login-federado',
    'Comunicação': '/docs/concepts/funcionalidades/comunicacao'
  },

  'Construindo Apps': {
    'O que é um App?': '/docs/concepts/construindo-apps/o-que-e-um-app',
    // 'Acesso à API': '/docs/concepts/construindo-apps/acesso-a-api',
    // 'Hub de APIs': '/docs/concepts/construindo-apps/hub-de-apis',
  },

  'Ecossistema Layers': {
    // '': '/docs/concepts/ecossistema-layers',
    'Introdução': '/docs/concepts/ecossistema-layers',
    'Comunidades': '/docs/concepts/ecossistema-layers/comunidades',
    'Apps': '/docs/concepts/ecossistema-layers/apps',
    'Contas de Usuário': '/docs/concepts/ecossistema-layers/contas-de-usuario',
    'Membros e Grupos': '/docs/concepts/ecossistema-layers/membros-e-grupos',
    'Permissões': '/docs/concepts/ecossistema-layers/permissoes',
  }
}
