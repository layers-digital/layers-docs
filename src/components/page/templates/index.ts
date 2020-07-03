import defaultTemplate from './default';
import cli from './cli';
import error from './error';
import native from './native';
import apiRoute from './api-route';
import apiSchema from './api-schema';

export default {
  'default': defaultTemplate,
  'api-route': apiRoute,
  'api-schema': apiSchema,
  'cli': cli,
  'error': error,
  'native': native,
};
