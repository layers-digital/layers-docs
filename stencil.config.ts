import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/styles/global.css',
  // excludeUnusedDependencies: true,
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://developers.layers.education/docs',
      prerenderConfig: 'prerender.config.js',
      serviceWorker: null,
      copy: [
        { src: 'pages/**/*.json' },
        { src: 'assets', dest: 'assets' },
        { src: 'manifest.json', dest: 'manifest.json' },
        { src: 'www-root/*', dest: '..' },
      ]
    }
  ]
};
