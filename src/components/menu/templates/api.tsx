import { h } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';
import { Angular } from '../../../icons';
import OpenApiPayments from '../../../data/api-payments.json'

export default (props: RouteRenderProps) => {
  const navItems = items[props.match.params.service] ?? items['service-a']
  return <docs-nav items={navItems} />
};

export const categories = [
  {
    icon: Angular,
    url: '/docs/api/payments',
    title: 'Hub de Pagamenos'
  },
  {
    icon: Angular,
    url: '/docs/api/service-b',
    title: 'Service B'
  },
  {
    icon: Angular,
    url: '/docs/api/apihub',
    title: 'Hub de API\'s'
  },
  // {
  //   icon: null,
  //   title: 'Apps Integráveis'
  // },
  {
    icon: Angular,
    url: '/docs/api/apihub',
    title: 'Ficha Médica'
  },
]

const items = {
  'service-a': GenerateOpenApiNavigation('/docs/api/payments', OpenApiPayments),
  // {
  //   'menu-appflow': '/docs/api/payments',
  //   'teste': {
  //     'sadasd': '/docs/api/payments/b',
  //     'sadasd-sadas': '/docs/api/payments/b',
  //     'sadasd-sdas': '/docs/api/payments/b',
  //   },
  //   ... GenerateOpenApiNavigation('/docs/api/payments', OpenApiPayments)
  //   // 'menu-appflow-quickstart': {
  //   //   'menu-appflow-quickstart-overview': '/docs/api/service-a/quickstart',
  //   //   'menu-appflow-quickstart-connect': '/docs/api/service-a/quickstart/connect',
  //   //   'aaa': {
  //   //     'menu-appflow-quickstart-github': '/docs/api/service-a/quickstart/github',
  //   //     'menu-appflow-quickstart-bitbucket': '/docs/api/service-a/quickstart/bitbucket',
  //   //     'menu-appflow-quickstart-bitbucket-server': '/docs/api/service-a/quickstart/bitbucket-server',
  //   //     'menu-appflow-quickstart-ionic-remote': '/docs/api/service-a/quickstart/ionic-remote',
  //   //   },
  //   // }
  // },
  'service-b': {
    'menu-appflow-quickstartb': {
      'menu-appflow-quickstart-overview': '/docs/guides/intro/feito-para-edtech',
      'menu-appflow-quickstart-connect': '/docs/api/service-b/quickstart/connect',
    }
  },
  'service-c': {
    'menu-appflow-quickstartc': {
      'menu-appflow-quickstart-overview': '/docs/api/service-c/quickstart',
      'menu-appflow-quickstart-connect': '/docs/api/service-c/quickstart/connect',
    }
  }
}


type DocRoute = {
  type: 'route',
  summary: string,
  path: string,
  method: string,
  spec: any
}

type DocSchema = {
  type: 'schema',
  summary: string,
  name: string,
  spec: any,
}

// type DocType = DocRoute | DocSchema


function GenerateOpenApiNavigation(base: string, schema: any) {
  
  // Aggregate Routes
  let routesByTag = GroupRoutesByTags(schema)
  
  // Aggregate Schemas
  let schemasByTag = GroupSchemasByTags(schema)
  

  // Build final navigation object
  let navigation: any = {}
  for (let group of schema["x-tagGroups"]) {
    let items: any = []
    for (let tag of group.tags) {
      // Join Schemas
      for (let schema of schemasByTag.get(tag) ?? []) {
        items.push(generateSchemaNavLink(base, schema))
      }
      // Join Routes
      for (let route of routesByTag.get(tag) ?? []) {
        items.push(generatePathNavLink(base, route))
      }
    }
    navigation[group.name] = items
  }
  console.log(navigation)
  return navigation
}

function GroupRoutesByTags({paths}: any) {
  let routesByTag = new Map<string, DocRoute[]>()
  for (let path in paths) {
    for (let method in paths[path]) {
      let spec = paths[path][method]
      let route: DocRoute = {
        type: 'route', path, method, spec, summary: spec.summary
      }
      for (let tag of spec.tags) {
        if (routesByTag.has(tag))
          routesByTag.get(tag).push(route)
        else
          routesByTag.set(tag, [route])
      }
    }
  }
  return routesByTag
}

function GroupSchemasByTags({components}: any) {
  let schemas = components.schemas
  let schemasByTag = new Map<string, DocSchema[]>()
  for (let name in schemas) {
    let spec = schemas[name]
    let summary = spec['x-summary'] ?? spec['description']
    let xTags = spec['x-tags'] ?? []
    if (!Array.isArray(xTags) && !!xTags) {
      xTags = [xTags]
    }

    let schema: DocSchema = {
      type: 'schema', name, spec, summary
    }

    for (let tag of xTags) {
      if (schemasByTag.has(tag))
        schemasByTag.get(tag).push(schema)
      else
        schemasByTag.set(tag, [schema])
    }
  }

  return schemasByTag
}

function generatePathNavLink(base: string, route: DocRoute) {
  let path = route.path.replace(/[\{\}\:]/g, '')
  let method = route.method.toLowerCase()
  
  if (method && method !== 'get') {
    path += '/' + (method)
  }

  const methodColors = {
    put: 'yellow',
    delete: 'red',
    get: 'green',
    post: 'blue',
  }

  return {
    text: route.summary,
    href: base + path,
    tag: {
      color: methodColors[method],
      text: method.toUpperCase()
    }
  }
}

function generateSchemaNavLink(base: string, route: DocSchema) {
  let name = route.name
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_')
  let path = '/' + name + '/object'
  
  return {
    text: route.summary,
    href: base + path,
    tag: {
      color: 'purple',
      text: '{...}'
    }
  }
}

// a.Nav-link:after {
//   content: 'DEL';
//   position: absolute;
//   right: 4px;
//   top: 4px;
//   /* bottom: 6px; */
//   height: 20px;
//   line-height: 20px;
//   padding: 0 4px;
//   color: #f1414182;
//   font-size: 12px;
//   font-weight: bold;
//   border-radius: 3px;
//   background: #f1414108;
// }