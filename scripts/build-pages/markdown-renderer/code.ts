import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

export default (code: string, info: string) => {
  const [lang] = info ? info.split(/\s+/).map(s => s.toLowerCase()) : [null];
  const isShell = shells.includes(lang);
  const language = isShell ? 'shell' : lang;

  if (Prism.languages[language] == null) {
    return `
<docs-code language=${language}>
  <pre><code>${escape(code)}</code></pre>
</docs-code>
`;
  }

  return `
<docs-code language="${language}">
  <pre><code>${Prism.highlight(code, language ? Prism.languages[language] : null, language)}</code></pre>
</docs-code>
`;
};

loadLanguages([
  'bash',
  'json',
  'tsx',
  'typescript',
  'scss'
]);

// `shell` is an alias of `bash`, so we have to extend `bash`.
Prism.languages.bash['prompt'] = /^\s*[\$#]\s+/gm;

const shells = [
  'shell',
  'bash',
  'sh'
];

const escape = (code: string) =>
  code.replace(/[&<>"']/g, (char) => escapeMap[char]);

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};

// Add http language
Prism.languages.http = {
  method: {
    pattern: /^(GET|POST|HEAD|PUT|DEL(ETE)?)/,
    inside: {
      get: /GET/i,
      post: /POST/i,
      put: /put/i,
      delete: /del(ete)?/i,
      head: /head/i,
    }
  },

  // url: {
    // pattern: /(https?:\/\/)?[^\/?#\s]*([^?#]*)(\?([^#]*))?(#(.*))?/,
    // inside: {
      schema: {
        pattern: /https?:\/\//,
        greedy: true,
      },
      // host: {
      //   pattern: /([^\/]+(\.[^\/]+)+)/,
      // },
      path: {
        pattern: /\/[^?#\s]*/,
        inside: {
          version: {
            pattern: /\/v\d+/,
          },

          param: {
            pattern: /(\/)[\:\{][^/#?\s]+[\}]?/,
            lookbehind: true,
          }
        }
      },
      query: {
        pattern: /(\?([^#]*))/,
        inside: {
          separator: /[?&]/,
          param: {
            pattern: /[^?=&]+=?[^?=&]*/,
            inside: {
              name: /^[^?=&]+/,
              value: {
                pattern: /[^?=&]+$/,
                inside: {
                  number: /^[\d\.]+$/,
                  boolean: /^(true|false)$/,
                  string: /^[\S]+$/,
                }
              }
            }
          }
        }
      }
    // }
  // }
}