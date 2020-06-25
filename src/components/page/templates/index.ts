import defaultTemplate from './default';
import api from './api';
import cli from './cli';
import enterprisePlugin from './enterprise-plugin';
import error from './error';
import native from './native';

export default {
  'default': defaultTemplate,
  'api': api,
  'cli': cli,
  'enterprise-plugin': enterprisePlugin,
  'error': error,
  'native': native,
};
