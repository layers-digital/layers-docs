import { OpenAPIObject } from 'openapi3-ts'

export function buildMenuStructure(spec: OpenAPIObject) {
  let menus = {
    'Titulo Teste': {
      'Artigo 1': '/add',
      'Artigo 2': '/add',
      'Artigo 3': '/add',
    }
  }

  return menus
}