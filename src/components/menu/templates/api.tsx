import { h } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';
import menuData from '../data/apis.json'

const Template = {
  menu: {
    "general": {
      'Menu': {
        'Visão geral': '/docs/api',
      }
    },
    ...menuData,
  },

  template(props: RouteRenderProps) {
    const navItems = Template.menu[props.match.params.service] ?? Template.menu['general']
    return [
      <docs-nav items={navItems} />,
    ]
  },

  categories: [
    {
      icon: '/docs/assets/icons/General.svg',
      link: '/docs/api',
      url: '/docs/api/index',
      title: 'Guias Gerais',
    },
    {
      icon: '/docs/assets/icons/Auth.svg',
      url: '/docs/api/auth',
      link: '/docs/api/auth/oauth/account/info',
      title: 'Autenticação',
      description: 'Autenticar usuários com o Layers, acessar informações com seu consentimento e validar seções dos portais'
    },
    {
      icon: '/docs/assets/icons/Data.svg',
      url: '/docs/api/data',
      link: '/docs/api/data/member/object',
      title: 'Dados',
      description: 'Obter acesso aos dados de usuários, grupos, membros e mais'
    },
    {
      icon: '/docs/assets/icons/Hub.svg',
      url: '/docs/api/apihub/',
      link: '/docs/api/apihub/@layerscalendargetrelated/post',
      title: 'Hub de API\'s',
      description: 'Prover informações sobre horários, frequência, cobranças e mais'
    },
    {
      icon: '/docs/assets/icons/Notifications.svg',
      url: '/docs/api/notifications',
      link: '/docs/api/notifications/notication/send/post',
      title: 'Notificações',
      description: 'Mandar notificações push para Android, iOS e Web'
    },
    // {
    //   icon: '/docs/assets/icons/E-commerce.svg',
    //   url: '/docs/api/payments',
    //   link: '/docs/api/payments/checkoutcustomer/object',
    //   title: 'Pagamentos'
    // },
    {
      icon: '/docs/assets/icons/Comunicação.svg',
      url: '/docs/api/communication',
      link: '/docs/api/communication/event/object',
      title: 'Comunicação',
      description: 'Enviar comunicados para a comunidade escolar'
    },
    {
      icon: '/docs/assets/icons/Atendimento.svg',
      url: '/docs/api/tickets',
      link: '/docs/api/tickets/channel/object',
      title: 'Atendimentos',
      description: 'Abrir chamados no Help Desk da comunidade escolar'
    },
    {
      icon: '/docs/assets/icons/Mídia.svg',
      url: '/docs/api/media',
      link: '/docs/api/media/media/upload/post',
      title: 'Mídia',
      description: 'Fazer upload de arquivos'
    },
    {
      icon: '/docs/assets/icons/AppMaker.svg',
      url: '/docs/api/appmaker',
      link: '/docs/api/appmaker/app/object',
      title: 'App Maker'
    },
    // {
    //   icon: '/docs/assets/icons/Payments.svg',
    //   url: '/docs/api/tickets',
    //   title: 'Atendimentos'
    // },
  ],
}

export default Template
