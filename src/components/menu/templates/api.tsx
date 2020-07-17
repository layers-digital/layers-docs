import { h } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';
import menuData from '../data/apis.json'

const Template = {
  menu: {
    "general": {
      'Grupo': {
        'article 1': '/docs/api',
        'article 2': '/docs/api',
      }
    },
    ...menuData,
  },

  template(props: RouteRenderProps) {
    const navItems = Template.menu[props.match.params.service] ?? Template.menu['auth']
    return <docs-nav items={navItems} />
  },

  categories: [
    // {
    //   icon: '/docs/assets/icons/General.svg',
    //   url: '/docs/api/intro',
    //   title: 'Guias Gerais',
    // },
    {
      icon: '/docs/assets/icons/OAuth.svg',
      url: '/docs/api/auth',
      link: '/docs/api/auth/oauth/account/info',
      title: 'Autenticação OAuth',
    },
    {
      icon: '/docs/assets/icons/Data.svg',
      url: '/docs/api/data',
      link: '/docs/api/data/Member/object',
      title: 'Dados'
    },
    {
      icon: '/docs/assets/icons/Hub.svg',
      url: '/docs/api/apihub/',
      link: '/docs/api/apihub/@layersCalendargetRelated/post',
      title: 'Hub de API\'s'
    },
    {
      icon: '/docs/assets/icons/Notifications.svg',
      url: '/docs/api/notifications',
      link: '/docs/api/notifications/notication/send/post',
      title: 'Notificações'
    },
    // {
    //   icon: '/docs/assets/icons/Payments.svg',
    //   url: '/docs/api/payments',
    //   title: 'Pagamentos'
    // },
    {
      icon: '/docs/assets/icons/Comunicação.svg',
      url: '/docs/api/communication',
      link: '/docs/api/communication/Event/object',
      title: 'Comunicação'
    },
    {
      icon: '/docs/assets/icons/Atendimento.svg',
      url: '/docs/api/tickets',
      link: '/docs/api/tickets/Channel/object',
      title: 'Atendimentos'
    },
    {
      icon: '/docs/assets/icons/Mídia.svg',
      url: '/docs/api/media',
      link: '/docs/api/media/media/upload/post',
      title: 'Mídia'
    },
    // {
    //   icon: '/docs/assets/icons/Payments.svg',
    //   url: '/docs/api/tickets',
    //   title: 'Atendimentos'
    // },
  ],
}

export default Template
