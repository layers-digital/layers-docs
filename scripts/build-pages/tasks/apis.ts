import { buildPages, Page } from "..";
import Listr from 'listr'
import { ApiService, ApiServices } from '../../data/apis'
import { GetRoutes, GetSchemas, GetSchemaMenu, GetRouteMenu, generateExample } from "../../helpers/OpenApi";
import markdownRenderer from "../markdown-renderer";

export default {
  title: 'APIs',
  task: () => new Listr(
    ApiServices.map(
      service => ({
        title: `${service.title} (${service.id})`,
        task: () => buildPages(getAPIPagesForService(service))
      })
    )
  )
}

function getAPIPagesForService(service: ApiService): (() => Promise<Page[]>) {
  return () => getAPIPages(service);
}

async function getAPIPages(service: ApiService): Promise<Page[]> {
  const base = `/docs/api/${service.id}`
  const serviceId = service.id
  if (!serviceId) {
    throw new Error('serviceId is required')
  }

  const routesPages = RenderRoutePages(base, service)
  const schemaPages = RenderSchemaPages(base, service)

  return Promise.all([...routesPages, ...schemaPages]);
}

/**
 * Gera páginas de Entidade
 */
function RenderRoutePages(base: string, service: ApiService) {
  const routes = GetRoutes(service.spec)
  return routes.map(route => {
    const title = route.summary;
    const menu = GetRouteMenu(base, route)
    const path = menu.href;
    
    const readme = route.spec.description ?? ''
    const urlBase = service.spec.servers[0].url
    const example = '```http\n' + route.method.toUpperCase() + ' ' + urlBase + route.path + '\n```'

    return {
      template: 'api-route',
      title,
      path,
      body: markdownRenderer(readme, path),
      serviceId: service.id,
      example: markdownRenderer(example, path),
      route,
    };
  });
}

/**
 * Gera páginas das Rotas
 */
function RenderSchemaPages(base: string, service: ApiService) {
  let schemas = GetSchemas(service.spec)
  return schemas.map(schema => {
    const title = schema.summary;
    const menu = GetSchemaMenu(base, schema)
    const path = menu.href;
    // const demoUrl = await getDemoUrl(component);
    
    const readme = schema.spec.description ?? ''
    const exampleJson = generateExample(service.spec, {
      name: schema.name,
      schema: schema.spec
    })
    const example = '```json\n'+JSON.stringify(exampleJson, null, 2)+'\n```'

    return {
      template: 'api-schema',
      title,
      path,
      body: markdownRenderer(readme, path),
      serviceId: service.id,
      example: markdownRenderer(example, path),
      schema,
      tableOfContents: false,
    };
  });
}