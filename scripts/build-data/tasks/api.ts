import {outputJson} from 'fs-extra'
import { resolve, join } from 'path'
import { ApiServices } from '../../data/apis';

const DATA_PATH = resolve(__dirname, '../../../src/data');


export default {
  title: 'Build API Services JSON',
  async task() {
    // Map services to object keys
    let MappedServices = ApiServices.reduce((obj, service) => Object.assign(obj, {[service.id]: service}), {})
    await outputJson(join(DATA_PATH, 'api-services.json'), MappedServices, { spaces: 2 })
  },
}