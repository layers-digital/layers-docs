import { Component, Prop, h } from "@stencil/core";
import { OpenAPIObject } from "openapi3-ts";
import { generateExample, getRefPath, AcessorNode } from "./util";

@Component({
  tag: 'docs-openapi-example',
})
export class DocsOpenapiExample {
  @Prop() spec: OpenAPIObject
  @Prop() path: string
  @Prop() node?: AcessorNode
  @Prop() indents: number = 2

  private getRootAcessorNode(): AcessorNode {
    if (this.node) {
      return this.node
    }

    let schema = getRefPath(this.spec, this.path)
    if (!schema) {
      return null
    }
    return {
      schema,
      name: this.path.split('/').pop(),
    }
  }


  render() {
    let example = generateExample(this.spec, this.getRootAcessorNode())
    if (!example) return

    let json = JSON.stringify(example, null, this.indents)
    return <docs-code language="json" class="api-example">
      <pre><code>{json}</code></pre>
    </docs-code>
  }
}
