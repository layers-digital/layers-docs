import { OpenAPIObject, OperationObject, SchemaObject, ReferenceObject } from "openapi3-ts"
import { normalizeObject } from "../../src/components/openapi/util"
export * from '../../src/components/openapi/util'

export interface DocRoute {
  type: 'route',
  summary: string,
  path: string,
  method: string,
  spec: OperationObject,
  tags: string[],
}

export interface DocSchema {
  type: 'schema',
  summary: string,
  name: string,
  spec: SchemaObject,
  tags: string[],
}

export interface DocMenu {
  text: string,
  href: string,
  tag?: {
    color: string,
    text: string,
  }
}

// type DocType = DocRoute | DocSchema


export function GenerateOpenApiNavigation(base: string, spec: OpenAPIObject) {
  // Aggregate Routes
  let routes = GetRoutes(spec)
  let routesByTag = GroupByTags<DocRoute>(routes)
  
  // Aggregate Schemas
  let schemas = GetSchemas(spec)
  let schemasByTag = GroupByTags<DocSchema>(schemas)
  
  // Build final navigation object
  let navigation: any = {}

  if (!('x-nav' in spec))
    throw new Error('OpenAPI schema não contem "x-nav" na raiz para gerar documentação')

  for (let group of spec["x-nav"]) {
    let items: any = []
    for (let tag of group.tags) {
      // Join Schemas
      for (let schema of schemasByTag.get(tag) ?? []) {
        items.push(GetSchemaMenu(base, schema))
      }
      // Join Routes
      for (let route of routesByTag.get(tag) ?? []) {
        items.push(GetRouteMenu(base, route))
      }
    }
    navigation[group.name] = items
  }
  return navigation
}

export function GetRoutes({paths}: OpenAPIObject): DocRoute[] {
  let docs: DocRoute[] = []
  for (let path in paths) {
    for (let method in paths[path]) {
      let spec = paths[path][method] as OperationObject
      let tags = spec.tags ?? []
      docs.push({
        type: 'route',
        path,
        method,
        spec,
        tags,
        summary: spec.summary, 
      })
    }
  }

  return docs
}

export function GetSchemas(obj: OpenAPIObject): DocSchema[] {
  let docs: DocSchema[] = []
  
  let schemas = obj.components.schemas
  for (let name in schemas) {
    let spec = normalizeObject(obj, schemas[name])
    let type = spec.type == 'object' ? 'Entidade' : (spec.enum ? 'Enum' : 'Schema')
    let summary = spec['x-summary'] ?? `${type} ${name}`
    
    let tags = spec['x-tags'] ?? []
    if (!Array.isArray(tags) && !!tags) {
      tags = [tags]
    }

    docs.push({
      type: 'schema',
      name,
      spec,
      tags,
      summary,
    })
  }
  return docs
}

function GroupByTags<T>(docs: DocRoute[]|DocSchema[]): Map<string, T[]> {
  let byTag = new Map<string, T[]>()

  for (let doc of docs) {
    for (let tag of doc.tags) {
      if (byTag.has(tag))
        byTag.get(tag).push(doc as unknown as T)
      else
        byTag.set(tag, [doc as unknown  as T])
    }
  }

  return byTag
}

export function GetRouteMenu(base: string, route: DocRoute): DocMenu {
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

export function GetSchemaMenu(base: string, schema: DocSchema): DocMenu {
  let name = schema.name
    // .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    // .map(x => x.toLowerCase())
    // .join('_')
  let path = '/' + name + '/object'
  
  return {
    text: schema.summary,
    href: base + path,
    tag: {
      color: 'purple',
      text: '{...}'
    }
  }
}