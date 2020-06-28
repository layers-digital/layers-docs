import { Component, h, Prop, State } from "@stencil/core";
import { AcessorNode } from "./schema";
import { normalizeObject, getAcessorPathNames, getRefPath } from "./util";
import {OpenAPIObject} from 'openapi3-ts'

@Component({
  tag: 'docs-openapi-schema-nested',
  styleUrl: 'schema-nested.css',
})
export class DocsOpenapiSchemaNested {
  @Prop() spec: OpenAPIObject
  @Prop() path: string
  @Prop() node: AcessorNode

  @Prop() text: string

  @Prop() open: boolean = false
  @State() isOpen: boolean = false

  private getRootAcessorNode(): AcessorNode {
    if (this.node) {
      return this.node
    }
    console.log(this.spec)
    
    let schema = getRefPath(this.spec, this.path)
    if (!schema) {
      return null
    }
    return {
      schema,
      name: this.path.split('/').pop(),
    }
  }

  componentWillLoad() {
    let node = this.getRootAcessorNode()

    let path = getAcessorPathNames(node, true).join('.')
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
    let node: AcessorNode = this.getRootAcessorNode()
    if (node.schema.type == 'array') {
      node = {
        name: '[]',
        schema: normalizeObject(this.spec, node.schema.items),
        parent: node
      }
    }

    if (typeof node.schema.properties != 'object') {
      return <section class="Api-nested-section">
        <button class="Api-nested-toggle-btn">Erro: Entidade inválida</button>
      </section>
    }

    let count = Object.keys(node.schema.properties).length

    let text = this.text ?? (this.isOpen ? 'Ocultar Propriedades' : `Mostrar ${count} propriedade${count>1 ? 's': ''}`)
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