import Listr from 'listr'
import fs from 'fs-extra';
import { OpenAPIObject } from 'openapi3-ts'

import apihub from '../../data/apis/apihub.json'
import payments from '../../data/apis/payments.json'
import { buildMenuStructure } from './utils'
import { join, resolve } from 'path';

const MENU_DATA_DIR = resolve(__dirname, '../../../src/components/menu/data')

const Services = [
  {
    key: 'payments',
    spec: payments,
  },
  {
    key: 'apihub',
    spec: apihub,
  }
]

export default function BuildApiMenus() {

  let menu = {}

  for (let service of Services) {
    menu[service.key] = buildMenuStructure(service.spec as unknown as OpenAPIObject)
  }

  fs.outputJSON(
    join(MENU_DATA_DIR, 'apis.json'),
    menu,
    { spaces: 2 }
  )
}