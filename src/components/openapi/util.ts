import {OpenAPIObject, SchemaObject} from 'openapi3-ts'

export interface AcessorNode {
  schema: SchemaObject,
  name: string | null,
  parent?: AcessorNode
}

export type OperationType = 'READ' | 'WRITE'

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

const normalizedObjectMaps = new WeakMap()
export function normalizeObject(spec: OpenAPIObject, obj: SchemaObject): SchemaObject {
  if (!obj) {
    return {}
  }
   
  if (normalizedObjectMaps.has(obj)) {
    return normalizedObjectMaps.get(obj)
  }
  
  let out = getRef(spec, obj)
  
  if (!out) {
    out = {}
  } else {
      if (out.allOf){
        out = out.allOf.reduce((prev, out) => {
          if(out.hasOwnProperty('$ref')){
            out = getRef(spec, out)
          }
          // console.log(prev, out)
          const properties = Object.assign({}, prev.properties, out.properties)
          const required = prev.required + out.required
          
          const result = Object.assign(prev, normalizeObject(spec, out))
          result.properties = properties
          result.required = required
          return result
        }, {})
        // console.log(out)
      }
      if(out.anyOf){
        // console.log(out, 'anyOf')
      }
      function resolveArray(object, parent?){
        try {
          if(object.type == 'object'){
            Object.keys(object.properties).map(key => {
              switch(object.properties[key].type){
                case 'object':
                  // console.log(object)
                  parent.properties[key] = resolveArray(object.properties[key], object)
                  break
                case 'array':
                  if(object.properties[key].items.hasOwnProperty('$ref')){
                    object.properties[key].items = getRef(spec, object.properties[key].items)
                  }
                  if(object.properties[key].items.hasOwnProperty('allOf')){
                    object.properties[key].items = normalizeObject(spec, object.properties[key].items)
                  }
                  break
              }
            })
          }
          if(object.type == 'array'){
            // console.log(object)
            if(object.items.$ref){
              object.items = getRef(spec, object.items)
            }
            if(object.items.allOf){
              object.items = normalizeObject(spec, object.items)
            }
          }
        } catch (e) {
          //TODO: find out why sometimes object is undefined
        }
        
        return object
      }
      
      resolveArray(out)
  }

  try {
    normalizedObjectMaps.set(obj, out)
  } catch (e) {

  }

  return out
}

export function generateExample(spec: OpenAPIObject, node: AcessorNode, operation: OperationType = 'READ') {
  let schema = normalizeObject(spec, node.schema)
  let example = schema.example ?? schema.examples?.[0]
  // Check if can show property
  if (schema.readOnly && operation == 'WRITE') {
    return
  }

  if (schema.writeOnly && operation == 'READ') {
    return
  }

  if (Array.isArray(example)) {
    return example
  }

  if (schema.type == 'object') {
    let obj = typeof example == 'object' ? {...example} : {}
    for (let key in schema.properties) {
      let prop = schema.properties[key]
      obj[key] = generateExample(spec, {
        name: key,
        parent: node,
        schema: prop
      }, operation)
    }
    return obj
  }

  if (example) {
    return example
  }
  
  if (schema.type == 'array') {
    if((schema.items as SchemaObject).oneOf){
      const examples = (schema.items as SchemaObject).oneOf.map((option) => generateExample(spec, {
        name: '[]',
        parent: node,
        schema: option,
      }, operation))
      return examples
    }
    return [generateExample(spec, {
      name: '[]',
      parent: node,
      schema: schema.items,
    }, operation)]
  }

  return getDefaultTypeExample(node)
}

let EXAMPLE_DATE = new Date()
export function getDefaultTypeExample({schema}: AcessorNode) {
  let type
  try {
    type = !Array.isArray(schema.type) ? (schema.type as string).toLowerCase() : (schema.type as string[]).map(type => (type as string).toLowerCase())
  } catch (error) {
    // throw error
  }
  
  if (!type) {
    return
  }

  if (schema.default) {
    return schema.default
  }
  
  if (type == 'boolean') {
    return true
  }

  if (type == 'number') {
    return ((schema.minimum ?? 1) + (schema.maximum ?? 10)) / 2
  }
  
  if (type == 'integer') {
    return Math.round((schema.minimum ?? 1) + (schema.maximum ?? 10)) / 2
  }

  if (type == 'integer') {
    return Math.round((schema.minimum ?? 1) + (schema.maximum ?? 10)) / 2
  }
  
  let format = schema.format?.toLowerCase()
  if (type == 'string') {
    if (schema.enum?.[0]) {
      return schema.enum[0]
    }

    if (format == 'byte')
      return 'U3RyaW5nIGV4ZW1wbG8='

    if (format == 'date-time') {
      return EXAMPLE_DATE.toISOString()
    }

    if (format == 'date') {     
      return EXAMPLE_DATE.toISOString().split('T')[0]
    }

    if (format == 'time') {
      return EXAMPLE_DATE.toISOString().split('T')[1].replace('Z', '')
    }

    if (format == 'password') {
      return '********'
    }

    if (format == 'email') {
      return 'luke@starwars.com'
    }

    if (format == 'uuid') {
      return '2f985f64-5720-4562-b310-2c963f66afa6'
    }

    if (format == 'objectid') {
      return '5bb2575199d7179dfe85be02'
    }

    return 'exemplo'
  }
}