import { h } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';

export default (props: RouteRenderProps) => {
  const navItems = items[props.match.params.service] ?? items['intro']
  console.log(items[props.match.params.service])
  return <docs-nav items={navItems} />
};

export const categories = [
  {
    icon: '/docs/assets/icons/General.svg',
    url: '/docs/guides/intro',
    title: 'Guias Gerais'
  },
  {
    icon: '/docs/assets/icons/OAuth.svg',
    url: '/docs/guides/oauth',
    title: 'Autenticação OAuth'
  },
  {
    icon: '/docs/assets/icons/Data.svg',
    url: '/docs/guides/data',
    title: 'Dados'
  },
  {
    icon: '/docs/assets/icons/Hub.svg',
    url: '/docs/guides/apihub',
    title: 'Hub de API\'s'
  },
  {
    icon: '/docs/assets/icons/Payments.svg',
    url: '/docs/guides/payments',
    title: 'Pagamentos'
  },
  {
    icon: '/docs/assets/icons/Notifications.svg',
    url: '/docs/guides/notification',
    title: 'Notificações'
  },
  // {
  //   icon: '/docs/assets/icons/General.svg',
  //   url: '/docs/guides/tickets',
  //   title: 'Atendimentos'
  // },
  // {
  //   icon: null,
  //   title: 'Apps Integráveis'
  // }
]

const items = {
  'intro': {
    'Overview': {
      'Feito para EdTechs\'s': '/docs/',
      'Funcionalidades': '/docs/guides/intro/funcionalidades',
    },
    'Autenticação': {
      'Criar token': '/docs/guides/intro/autenticacao'
    }
  },
  'apihub': {
    'Overview': {
      'Hub de API\'s': '/docs/guides/apihub',
      'Prover informações': '/docs/guides/apihub/provendo-informacoes',
      'Requisitar informações': '/docs/guides/apihub/requisitando-informacoes',
      'Validações': '/docs/guides/apihub/validacoes'
    },
    'Calendário': {
      'Calendários relacionados': '/docs/guides/apihub/dados-calendario',
    },
    'Registro acadêmico': {
      'Registros relacionados': '/docs/guides/apihub/dados-ocorrencia',
      'Marcar como lida': 'docs/guides/apihub/dados-ocorrencia-lida'
    },
    'Cobranças': {
      'Cobranças relacionados': '/docs/guides/apihub/dados-cobrancas',
    },
    'Ficha Médica': {
      'Fichas médicas relacionados': '/docs/guides/apihub/dados-ficha-medica',
    },
    'Frequência': {
      'Frequências relacionadas': '/docs/guides/apihub/dados-frequencia',
    },
    'Notas Acadêmicas': {
      'Notas acadêmicas relacionasdas': '/docs/guides/apihub/dados-notas',
    }
  },
  'notification': {
    'Overview': {
      'Enviar notificações': '/docs/guides/notification'
    }
  },
  'oauth': {
    'Overview': { 
      'OAuth no Layers': '/docs/guides/oauth',
      'Escopos': '/docs/guides/oauth/escopos',
    },
    'Logar com Layers': {
      'Web': '/docs/guides/oauth/logar-com-layers',
      'Mobile': '/docs/guides/oauth/logar-com-layers-mobile',
      'Melhores práticas': '/docs/guides/oauth/melhores-praticas'
    },
    'Informações': {
      'Informações de usuário': '/docs/guides/oauth/info-usuario',
      'Informações da conta': '/docs/guides/oauth/info-conta'
    }
  },
  'data': {
    'Overview': {
      'Estrutura do Layers': '/docs/guides/data',
      'Perfis padrão': '/docs/guides/data/roles'
    },
    'Sincronização': {
      'Automática': '/docs/guides/data/sync',
      'Manual': '/docs/guides/data/sync-manual'
    }
  },
  'tickets': {
    'Overview': {
      'Estrutura dos Atendimentos': '/docs/guides/tickets',
      'Criar e editar canais de atendimento': '/docs/guides/tickets/criar-canais-de-atendimento',
      'Editar atendentes': '/docs/guides/tickets/editar-atendentes'
    }
  }
}