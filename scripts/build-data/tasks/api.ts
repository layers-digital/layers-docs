import {outputJson} from 'fs-extra'
import { resolve, join } from 'path'
import { ApiServices, ApiService } from '../../data/apis';
import { OpenAPIObject } from 'openapi3-ts';
import { GetRoutes, GetRouteMenu, GetSchemas, GetSchemaMenu } from '../../helpers/OpenApi';

const DATA_PATH = resolve(__dirname, '../../../src/data');


export default {
  title: 'Build API Services JSON',
  async task() {
    let MappedServices = {}

    for (let service of ApiServices) {
      // Hidrate services
      hidrateRouteDocs(service)
      hidrateSchemaDocs(service)

      // Merge services
      MappedServices[service.id] = service
    }
    
    // Save Mapped Services to file
    await outputJson(join(DATA_PATH, 'api-services.json'), MappedServices, { spaces: 2 })
  },
}

function hidrateRouteDocs(service: ApiService) {
  for (let route of GetRoutes(service.spec)) {
    let menu = GetRouteMenu(`/docs/api/${service.id}`, route)
    route.spec.externalDocs = route.spec.externalDocs ?? {
      description: menu.text,
      url: menu.href,
    }
  }
}

function hidrateSchemaDocs(service: ApiService) {
  for (let schema of GetSchemas(service.spec)) {
    let menu = GetSchemaMenu(`/docs/api/${service.id}`, schema)
    schema.spec.externalDocs = schema.spec.externalDocs ?? {
      description: menu.text,
      url: menu.href,
    }
  }
}