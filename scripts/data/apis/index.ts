import apihub from './apihub.json'
import payments from './payments.json'
import { OpenAPIObject } from 'openapi3-ts'

export interface ApiService {
  id: string,
  title: string,
  spec: OpenAPIObject,
}

export const ApiServices: ApiService[] = [
  {
    title: 'Pagamentos',
    id: 'payments',
    spec: payments as any,
  },
  {
    title: 'Hub de APIs',
    id: 'apihub',
    spec: apihub as any,
  }
]