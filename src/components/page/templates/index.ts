import defaultTemplate from './default';
import cli from './cli';
import error from './error';
import native from './native';
import apiObject from './api-object';
import apiSchema from './api-schema';

export default {
  'default': defaultTemplate,
  'api-object': apiObject,
  'api-schema': apiSchema,
  'cli': cli,
  'error': error,
  'native': native,
};
