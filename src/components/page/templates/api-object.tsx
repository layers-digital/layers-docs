import { h } from "@stencil/core";
import { toHypertext } from "../to-hypertext";

import {OpenAPIObject} from 'openapi3-ts'
import ApiPaymentsSpec from '../../../data/api-payments.json'


export default (props) => {
  const { page } = props;

  let headings = [...page.headings]

  headings.push({
    text: 'Exemplo',
    href: '#example',
  });

  headings.push({
    text: 'Especificação da entidade',
    href: '#schema',
  });

  let spec = (ApiPaymentsSpec as unknown as OpenAPIObject)

  return (
    <article>
      <h1>
        { page.title }
      </h1>
      <div class="page-meta">
        <docs-table-of-contents links={headings} basepath={page.path}/>
      </div>

      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>

      <section>
        <h2 id="example">
          <a href="#example">Exemplo</a>
        </h2>
        <docs-code language="json" class="api-example">
          <pre><code>{JSON.stringify(spec, null, 2)}</code></pre>
        </docs-code>
      </section>

      <section>
        <h2 id="schema">
          <a href="#schema">Especificação</a>
        </h2>
        <docs-openapi-schema spec={spec} name={page.objectName}></docs-openapi-schema>
      </section>
    </article>
  )
}