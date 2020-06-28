import Listr from 'listr'
import fs from 'fs-extra';

import { join, resolve } from 'path';
import { GenerateOpenApiNavigation } from '../../helpers/OpenApi';
import { ApiServices } from '../../data/apis'

const MENU_DATA_DIR = resolve(__dirname, '../../../src/components/menu/data')

export default {
  title: 'APIs',
  task() {
    let menu = {}

    for (let service of ApiServices) {
      menu[service.id] = GenerateOpenApiNavigation(`/docs/api/${service.id}`, service.spec as any)
    }

    fs.outputJSON(
      join(MENU_DATA_DIR, 'apis.json'),
      menu,
      { spaces: 2 }
    )
  }
}