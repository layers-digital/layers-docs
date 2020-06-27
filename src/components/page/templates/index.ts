import defaultTemplate from './default';
import api from './api';
import cli from './cli';
import error from './error';
import native from './native';
import apiObject from './api-object';

export default {
  'default': defaultTemplate,
  'api-object': apiObject,
  'api': api,
  'cli': cli,
  'error': error,
  'native': native,
};
