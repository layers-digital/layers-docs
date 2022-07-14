import {outputJson} from 'fs-extra'
import { resolve, join } from 'path'
import { ApiServices, ApiService } from '../../data/apis';
import { OpenAPIObject } from 'openapi3-ts';
import { GetRoutes, GetRouteMenu, GetSchemas, GetSchemaMenu } from '../../helpers/OpenApi';

const DATA_PATH = resolve(__dirname, '../../../src/data');
const DATA_ASSETS_PATH = resolve(__dirname, '../../../src/assets/apiCollections')


export default {
  title: 'Build API Services and Collection Api Assets JSON',
  async task() {
    let MappedServices = {}

    const serviceExternalSaves = []

    for (let service of ApiServices) {
      serviceExternalSaves.push(outputJson(join(DATA_ASSETS_PATH, `${service.id}.json`), service.spec, { spaces: 2 }))
      // Hidrate services
      hidrateRouteDocs(service)
      hidrateSchemaDocs(service)

      // Merge services
      MappedServices[service.id] = service
    }

    // Save Mapped Services to file and run all await calls simultaneously
    serviceExternalSaves.push(outputJson(join(DATA_PATH, 'api-services.json'), MappedServices, { spaces: 2 }))
    await Promise.all(serviceExternalSaves)
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
