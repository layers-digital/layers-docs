import { h } from "@stencil/core";
import { toHypertext } from "../to-hypertext";

import ApiServices from '../../../data/api-services.json'


export default (props) => {
  const { page } = props;

  let service = ApiServices[page.serviceId]
  if (!service) {
    return <div>Page has invalid or missing serviceId property: {String(service)}</div>
  }

  let schema = page.schema
  if (!schema) {
    return <div>Page is missing object schema property</div>
  }

  console.log(page)

  return (
    <article>
      <h1>{ page.title }</h1>
      <span class="Nav-tag purple large">{"{...}"}</span>

      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>

      <section class="Api-two-column">
        <section>
          <h2 id="schema">
            <a href="#schema">Especificação</a>
          </h2>
          <docs-openapi-schema-nested
            spec={service.spec}
            path={`#/components/schemas/${schema.name}`}
            // node={node}
            text="Propriedades da Entidade"
            open={true}
            canClose={false}/>
        </section>

        <section>
          <h2 id="example">
            <a href="#example">Exemplo</a>
          </h2>
          {toHypertext(h, page.example)}
        </section>
      </section>

      <docs-page-footer page={page} />
    </article>
  )
}
