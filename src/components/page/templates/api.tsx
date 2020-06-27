import { h } from "@stencil/core";
import { toHypertext } from "../to-hypertext";

import {OpenAPIObject} from 'openapi3-ts'
// import ApiPaymentsSpec from '../../../data/api-payments.json'


export default (props) => {
  const { page } = props;

  let headings = [...page.headings]

  let spec = ({} as unknown as OpenAPIObject)

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
      <docs-openapi-schema spec={spec} name={page.objectName}></docs-openapi-schema>
    </article>
  )
}