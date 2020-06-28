import { buildPages, Page } from "..";
import Listr from 'listr'
import { OpenAPIObject } from "openapi3-ts";
import { ApiService, ApiServices } from '../../data/apis'
import { GetRoutes, GetSchemas, GetSchemaMenu, GetRouteMenu } from "../../helpers/OpenApi";
import markdownRenderer from "../markdown-renderer";

// export default {
//   title: 'Build API pages',
//   task: new Listr(ApiServices.map(service => ({
//     title: 'Payments',
//     task: () => buildPages(getAPIPagesForService(service))
//   }))),
// };

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

  const routes = GetRoutes(service.spec)
  const routesPages = routes.map(route => {
    const title = route.summary;
    const menu = GetRouteMenu(base, route)
    const path = menu.href;
    
    const readme = route.spec.description ?? ''
    return {
      template: 'api-route',
      title,
      path,
      body: markdownRenderer(readme, path),
      serviceId,
      route: {...route},
    };
  });

  let schemas = GetSchemas(service.spec)
  const schemaPages = schemas.map(schema => {
    const title = schema.summary;
    const menu = GetSchemaMenu(base, schema)
    const path = menu.href;
    // const demoUrl = await getDemoUrl(component);
    
    const readme = schema.spec.description ?? ''

    return {
      template: 'api-object',
      title,
      path,
      body: markdownRenderer(readme, path),
      serviceId: service.id,
      schema: {...schema},
      tableOfContents: false,
    };
  });

  return Promise.all([...routesPages, ...schemaPages]);
}