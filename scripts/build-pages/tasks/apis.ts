import { buildPages, Page } from "..";
import Listr from "listr";
import { ApiService, ApiServices } from "../../data/apis";
import {
  GetRoutes,
  GetSchemas,
  GetSchemaMenu,
  GetRouteMenu,
  generateExample,
} from "../../helpers/OpenApi";
import markdownRenderer from "../markdown-renderer";
import { normalizeObject } from "../../../src/components/openapi/util";
import { OpenAPIObject } from "openapi3-ts";

export default {
  title: "APIs",
  task: () =>
    new Listr(
      ApiServices.map((service) => ({
        title: `${service.title} (${service.id})`,
        task: () => buildPages(getAPIPagesForService(service)),
      }))
    ),
};

function getAPIPagesForService(service: ApiService): () => Promise<Page[]> {
  return () => getAPIPages(service);
}

async function getAPIPages(service: ApiService): Promise<Page[]> {
  const base = `/docs/api/${service.id}`;
  const serviceId = service.id;
  if (!serviceId) {
    throw new Error("serviceId is required");
  }

  const routesPages = RenderRoutePages(base, service);
  const schemaPages = RenderSchemaPages(base, service);

  return Promise.all([...routesPages, ...schemaPages]);
}

/**
 * Gera páginas de Entidade
 */
function RenderRoutePages(base: string, service: ApiService) {
  const routes = GetRoutes(service.spec);
  return routes.map((route) => {
    const title = route.summary;
    const menu = GetRouteMenu(base, route);
    const path = menu.href;

    const readme = route.spec.description ?? "";
    const urlBase = service.spec.servers[0].url;
    const example =
      "```http\n" +
      route.method.toUpperCase() +
      " " +
      urlBase +
      route.path +
      "\n```";

    const PathSpec =
      service.spec.paths[route.path as string][route.method as string];

    const requestSchema = normalizeObject(
      service.spec,
      PathSpec?.requestBody?.content?.["application/json"]?.schema
    );

    const responseSchema = normalizeObject(
      service.spec,
      PathSpec?.responses?.["200"]?.content?.["application/json"]?.schema
    );

    const generateExampleForSpec = (schema) =>
      "```json\n" +
      JSON.stringify(
        generateExample(service.spec, { name: null, schema }),
        null,
        2
      ) +
      "\n```";

    const requestExampleMarkdown = generateExampleForSpec(requestSchema)
    const responseExampleMarkdown = generateExampleForSpec(responseSchema)

    return {
      template: "api-route",
      title,
      path,
      body: markdownRenderer(readme, path),
      serviceId: service.id,
      example: markdownRenderer(example, path),
      requestExample: markdownRenderer(requestExampleMarkdown, path),
      responseExample: markdownRenderer(responseExampleMarkdown, path),
      responseSchema,
      route,
    };
  });
}

/**
 * Gera páginas das Rotas
 */
function RenderSchemaPages(base: string, service: ApiService) {
  let schemas = GetSchemas(service.spec);
  return schemas.map((schema) => {
    const title = schema.summary;
    const menu = GetSchemaMenu(base, schema);
    const path = menu.href;
    // const demoUrl = await getDemoUrl(component);

    const readme = schema.spec.description ?? "";
    const exampleJson = generateExample(service.spec, {
      name: schema.name,
      schema: schema.spec,
    });
    const example =
      "```json\n" + JSON.stringify(exampleJson, null, 2) + "\n```";

    return {
      template: "api-schema",
      title,
      path,
      body: markdownRenderer(readme, path),
      serviceId: service.id,
      example: markdownRenderer(example, path),
      schema,
      tableOfContents: false,
    };
  });
}
