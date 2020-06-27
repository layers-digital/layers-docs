import { Component, h, Prop, State } from "@stencil/core";
import { AcessorNode } from "./schema";
import { normalizeObject, getAcessorPathNames } from "./util";
import {OpenAPIObject} from 'openapi3-ts'
import { Close } from "../../icons";

@Component({
  tag: 'docs-openapi-schema-nested'
})
export class DocsOpenapiSchemaNested {
  @Prop() spec: OpenAPIObject
  @Prop() node: AcessorNode

  @Prop() open: boolean = false
  @State() isOpen: boolean = false

  componentWillLoad() {
    let path = getAcessorPathNames(this.node, true).join('.')
    console.log({path})
    if (window.location.hash.startsWith('#' + path)) {
      this.isOpen = true
    } else {
      this.isOpen = this.open ?? false
    }
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  render() {
    let node: AcessorNode = this.node
    if (node.schema.type == 'array') {
      node = {
        name: '[]',
        schema: normalizeObject(this.spec, node.schema.items),
        parent: node
      }
    }

    let count = Object.keys(node.schema.properties).length

    console.log('type', node.schema.type, {node})

    let text = this.isOpen ? 'Ocultar Propriedades' : `Mostrar ${count} propriedade${count>1 ? 's': ''}`
    return (
    <section class={`Api-nested-section ${this.isOpen ? 'active' : ''}`}>
      <button class="Api-nested-toggle-btn" onClick={() => this.toggle()}>
        {/* <Close/> */}
        {text}
      </button>
      {this.isOpen ? 
        <docs-openapi-schema node={node} spec={this.spec}/> :
        null}
    </section>
    )
  }
}