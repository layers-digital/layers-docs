import { h } from "@stencil/core";
import { toHypertext } from "../to-hypertext";

import ApiServices from "../../../data/api-services.json";
import { OpenAPIObject } from "openapi3-ts";
import { normalizeObject } from "../../openapi/util";

export default (props) => {
  const { page } = props;

  let service = ApiServices[page.serviceId]?.spec as OpenAPIObject;
  if (!service) {
    return (
      <div>
        Page has invalid or missing serviceId property: {String(service)}
      </div>
    );
  }

  let route = page.route;
  if (!route) {
    return <div>Page is missing object route property</div>;
  }

  const PathSpec = service.paths[route.path as string][route.method as string];
  const requestBody = {
    name: "Requisição",
    schema: normalizeObject(
      service,
      PathSpec?.requestBody?.content?.["application/json"]?.schema
    ),
  };

  const response = {
    name: "Resposta",
    schema: normalizeObject(
      service,
      PathSpec?.responses?.["200"]?.content?.["application/json"]?.schema
    ),
  };

  console.log(page)

  return (
    <article>
      <h1>{page.title}</h1>
      <span class="Nav-tag purple large">{"{...}"}</span>

      <section class="markdown-content">{toHypertext(h, page.body)}</section>

      {toHypertext(h, page.example)}

      <section class="Api-two-column">
        <section>
          <h2 id="schema">
            <a href="#schema">Especificação</a>
          </h2>
          {Object.keys(requestBody.schema).length > 0 && (
            <docs-openapi-schema-nested
              spec={service.spec}
              node={requestBody}
              text={requestBody.name}
              open={true}
              canClose={false}
            />
          )}
        </section>

        <section>
          <h2 id="example">
            <a href="#example">Exemplo</a>
          </h2>
          {toHypertext(h, page.requestExample)}
        </section>
      </section>

      <section class="Api-two-column">
        <section>
          <h2 id="schema">
            <a href="#schema">Especificação</a>
          </h2>
          {Object.keys(response.schema).length > 0 && (
            <docs-openapi-schema-nested
              spec={service.spec}
              path={`#/components/schemas/${route.name}`}
              node={response}
              text={response.name}
              open={true}
              canClose={false}
            />
          )}
        </section>

        <section>
          <h2 id="example">
            <a href="#example">Exemplo</a>
          </h2>
          {toHypertext(h, page.responseExample)}
        </section>
      </section>

      <docs-page-footer page={page} />
    </article>
  );
};
