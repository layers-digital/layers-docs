import Listr from 'listr';
import api from './tasks/api';

export default new Listr([
  api
])