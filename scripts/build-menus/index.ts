import Listr from 'listr';
import api from './apis';

export default new Listr([
  {
    title: 'APIs',
    task: api,
  },
])