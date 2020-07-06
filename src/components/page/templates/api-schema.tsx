import { h } from "@stencil/core";
import { toHypertext } from "../to-hypertext";

import ApiServices from '../../../data/api-services.json'
// import { AcessorNode } from "../../openapi/util";
// import ApiPaymentsSpec from '../../../data/api-payments.json'


export default (props) => {
  const { page } = props;

  let headings = [...page.headings]

  headings.push({
    text: 'Exemplo',
    href: '#example',
  });

  headings.push({
    text: 'Especificação',
    href: '#schema',
  });

  let service = ApiServices[page.serviceId]
  if (!service) {
    return <div>Page has invalid or missing serviceId property: {String(service)}</div>
  }

  let schema = page.schema
  if (!schema) {
    return <div>Page is missing object schema property</div>
  }

  // const node: AcessorNode = {
  //   name: 'Root',
  //   schema: {
  //     "type": "object",
  //     "properties": {
  //       "result": {
  //         "type": "array",
  //         "items": [
  //           {
  //             "type": "object",
  //             "properties": {
  //               "id": {
  //                 "type": "string"
  //               },
  //               "summary": {
  //                 "type": "string"
  //               },
  //               "description": {
  //                 "type": "string"
  //               },
  //               "timezone": {
  //                 "type": "string"
  //               },
  //               "events": {
  //                 "type": "array",
  //                 "items": [
  //                   {
  //                     "type": "object",
  //                     "properties": {
  //                       "id": {
  //                         "type": ["string", "number"]
  //                       },
  //                       "summary": {
  //                         "type": "string"
  //                       },
  //                       "start": {
  //                         "type": ["date", "date-time"]
  //                       },
  //                       "end": {
  //                         "type": ["date", "date-time"]
  //                       },
  //                       "category": {
  //                         "type": "string"
  //                       },
  //                       "color": {
  //                         "type": "string"
  //                       }
  //                     },
  //                     "required": [
  //                       "summary",
  //                       "start",
  //                       "end"
  //                     ]
  //                   }
  //                 ]
  //               },
  //               "categories": {
  //                 "type": "array",
  //                 "items": [
  //                   {
  //                     "type": "object",
  //                     "properties": {
  //                       "name": {
  //                         "type": "string"
  //                       },
  //                       "color": {
  //                         "type": "string"
  //                       }
  //                     },
  //                     "required": [
  //                       "name",
  //                       "color"
  //                     ]
  //                   }
  //                 ]
  //               }
  //             },
  //             "required": [
  //               "summary",
  //               "events"
  //             ]
  //           }
  //         ]
  //       }
  //     },
  //     "required": [
  //       "result"
  //     ]
  //   },
  // }

  return (
    <article>
      <h1>{ page.title }</h1>
      <span class="Nav-tag purple large">{"{...}"}</span>
      {/* <div class="page-meta always-below">
        <docs-table-of-contents links={headings} basepath={page.path}/>
      </div> */}

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
          {/* <docs-openapi-example spec={service.spec} path={`#/components/schemas/${schema.name}`}></docs-openapi-example> */}
          {toHypertext(h, page.example)}
        </section>
      </section>

      <docs-page-footer page={page} />
    </article>
  )
}