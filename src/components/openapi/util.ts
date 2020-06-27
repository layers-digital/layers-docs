import {OpenAPIObject, SchemaObject} from 'openapi3-ts'
import { AcessorNode } from './schema';

export function isReferenceObject(obj) {
  return obj && obj.hasOwnProperty("$ref");
}

export function isSchemaObject(schema) {
  return schema && !schema.hasOwnProperty('$ref');
}

export function getRefPath(spec: OpenAPIObject, path: string) {
  if (path.startsWith('#/')) {
    let paths = path.replace('#/', '').split('/')
    let title = paths[paths.length - 1]
    let obj = spec as any
    let next
    while (next = paths.shift()) {
      if (obj && next in obj) {
        obj = obj[next]
      } else {
        return undefined
      }
    }

    if (isReferenceObject(obj)) {
      return {title, ...getRefPath(spec, obj.$ref)}
    }

    return {title, ...obj}
  } else {
    throw new Error('unsuporte path reference: ' + path)
  }
}

export function getRef(spec: OpenAPIObject, obj: SchemaObject) {
  if (!obj) {
    return undefined
  }

  if (isReferenceObject(obj)) {
    return getRefPath(spec, obj.$ref)
  }

  return obj
}

export function getAcessorPathNames(node: AcessorNode, includeSelf: boolean = false) {
  let path = includeSelf ? [node.name]  : []
  while (node = node.parent) {
    path.unshift(node.name)
  }
  return path
}

export function normalizeObject(spec: OpenAPIObject, obj: SchemaObject): SchemaObject {
  obj = getRef(spec, obj)

  if (!obj) {
    return {}
  }

  if (obj.allOf) {
    return obj.allOf.reduce((prev, obj) => Object.assign(prev, normalizeObject(spec, obj)), {})
  }

  return obj
}