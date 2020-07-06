import data from './data.json'
import oauth from './oauth.json'
import apihub from './apihub.json'
import tickets from './tickets.json'
import payments from './payments.json'
import notification from './notification.json'
import communication from './communication.json'
import { OpenAPIObject } from 'openapi3-ts'

export interface ApiService {
  id: string,
  title: string,
  spec: OpenAPIObject,
}

export const ApiServices: ApiService[] = [
  {
    title: 'Dados',
    id: 'data',
    spec: data as any,
  },
  {
    title: 'Pagamentos',
    id: 'payments',
    spec: payments as any,
  },
  {
    title: 'Hub de APIs',
    id: 'apihub',
    spec: apihub as any,
  },
  {
    title: 'Autenticação OAuth',
    id: 'auth',
    spec: oauth as any,
  },
  {
    title: 'Atendimentos',
    id: 'tickets',
    spec: tickets as any,
  },
  {
    title: 'Comunicação',
    id: 'communication',
    spec: communication as any,
  },
  {
    title: 'Notificações',
    id: 'notifications',
    spec: notification as any,
  }
]