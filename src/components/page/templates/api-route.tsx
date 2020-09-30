import { h } from "@stencil/core";
import { toHypertext } from "../to-hypertext";

import ApiServices from "../../../data/api-services.json";
import { OpenAPIObject } from "openapi3-ts";
import { normalizeObject, OperationType } from "../../openapi/util";


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
    operation: "WRITE" as OperationType
  };

  const response = {
    name: "Resposta",
    schema: normalizeObject(
      service,
      PathSpec?.responses?.["200"]?.content?.["application/json"]?.schema
    ),
    operation: "READ" as OperationType
  };

  return (
    <article>
      <h1>{page.title}</h1>
      <span class="Nav-tag purple large">{"{...}"}</span>
      
      <section class="markdown-content">{toHypertext(h, page.body)}</section>

      {toHypertext(h, page.example)}

      {PathSpec.callbacks ? <select>
        <option>Prover Informações</option>
        <option>Requisitar Informações</option>
      </select> : null}

      {PathSpec.security ? <docs-openapi-authentication
        security={PathSpec.security}
      /> : null}
        
      {PathSpec.parameters && <docs-openapi-parameters
        parameters={ PathSpec.parameters.map((parameter)=>normalizeObject(service, parameter)) }
      />}

      {Object.keys(requestBody.schema).length > 0 ?
      <div>
        <h2>
          <a href="#request">Requisição</a>
        </h2>
        <section class="Api-two-column">
          <section>
            <h3 id="schema">
              <a href="#schema">Especificação</a>
            </h3>
            {Object.keys(requestBody.schema).length > 0 && (
              <docs-openapi-schema-nested
                spec={service.spec}
                node={requestBody}
                text={requestBody.name}
                open={true}
                canClose={false}
                hideReadOnly = {true}
              />
            )}
          </section>

          <section>
            <h3 id="example">
              <a href="#example">Exemplo</a>
            </h3>
            {Object.keys(requestBody.schema).length > 0 && (
              toHypertext(h, page.requestExample)
            )}
          </section>
        </section>
      </div>
      : null}


      {Object.keys(response.schema).length > 0 ?
      <div>
        <h2>
          <a href="#response">Resposta</a>
        </h2>
        <section class="Api-two-column">
          <section>
            <h3 id="schema">
              <a href="#schema">Especificação</a>
            </h3>
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
            <h3 id="example">
              <a href="#example">Exemplo</a>
            </h3>
            {Object.keys(response.schema).length > 0 && (
              toHypertext(h, page.responseExample)
            )}
            {/* {toHypertext(h, page.responseExample)} */}
          </section>
        </section>
      </div>
      : null}
      <docs-page-footer page={page} />
    </article>
  );
};
