import { Component, h, Prop, State } from "@stencil/core";

import {OpenAPIObject, SchemaObject} from 'openapi3-ts'
import { normalizeObject, getAcessorPathNames } from "./util";

export type AcessorNode = {
  schema: SchemaObject,
  name: string | null,
  parent?: AcessorNode
}

@Component({
  tag: 'docs-openapi-schema',
  styleUrl: 'styles.css',
})
export class DocOpenapiSchema {

  @Prop() spec: OpenAPIObject
  @Prop() name: string
  @Prop() node?: AcessorNode
  // @Prop() depthVisibility: number = 1
  @Prop() hideReadOnly: boolean = false
  @Prop() hideWriteOnly: boolean = false
  @Prop() includeRootName: boolean = false

  @State() openMap

  private getRootAcessorNode(): AcessorNode {
    if (this.node) {
      return this.node
    }
    // return getRefPath(this.spec, '#/components/schemas/Item/properties/content')
    let schema = this.spec.components.schemas[this.name]
    if (!schema) {
      return null
    }
    return {
      schema,
      name: this.name,
    }
  }

  renderProperty(node: AcessorNode) {
    if (!node.schema) {
      return null
    }

    if (this.hideReadOnly && node.schema.readOnly) {
      return null
    }

    if (this.hideWriteOnly && node.schema.writeOnly) {
      return null
    }

    let path = getAcessorPathNames(node)
    let ancestors = (this.includeRootName ? path : path.slice(1)).join('.')
    let href = path.join('.') + '.' + node.name
    let hasProperties = this.hasProperties(node)

    return (
      <li class="Api-property-list-item" key={href}>
        <h3 class="Api-property-spec">
          <a class="Api-property-name" href={`#${href}`} id={href}>
            {ancestors ? <span class="Api-property-name-ancestor">{ancestors}.</span> : null}
            {node.name}
          </a>
          <span class="Api-flex-grow"></span>
          <span class="Api-label Api-label-type">{this.buildObjectType(node)}</span>
          {this.isRequired(node) ? 
              <span class="Api-label Api-label-required">obrigatório</span> : 
              <span class="Api-label Api-label-optional">opcional</span>}
        </h3>
        <p class="Api-property-description">{node.schema.description}</p>

        {hasProperties && <docs-openapi-schema-nested node={node} spec={this.spec}></docs-openapi-schema-nested>}
        
        {/* {hasProperties ? <docs-openapi-object class="Api-object-nested" name={node.name} node={node} key={href+'/object'}></docs-openapi-object> : null} */}
      </li>
    )
  }

  renderPropertyList(node: AcessorNode) {
    let obj = normalizeObject(this.spec, node.schema)
    if (!obj) {
      return null
    }

    if (obj.type == 'object') {
      let props = Object
        .entries(obj.properties)
        .map(([name, schema]) => this.renderProperty({
          name,
          parent: node,
          schema: normalizeObject(this.spec, schema),
        }))

      return (
        <ul class="Api-property-list">{props}</ul>
      )
    }
  }

  isRequired(node: AcessorNode) {
    return node.parent?.schema.required?.includes(node.name) ?? false
  }

  hasProperties(node: AcessorNode) {
    if (node.schema.type == 'array') {
      return this.hasProperties({
        name: '[]',
        schema: normalizeObject(this.spec, node.schema.items)
      })
    }
    if (node.schema.type == 'object') {
      return true
    }

    return false
  }

  buildObjectType(node: AcessorNode) {
    let {type, nullable, title, items} = node.schema

    let strType = type ? type.charAt(0).toUpperCase() + type.slice(1) : ''
    if (type == 'object' && title) {
      strType = title || strType
    }
    
    if (type == 'array') {
      let subtype: AcessorNode = {
        name: '[]',
        schema: normalizeObject(this.spec, items),
        parent: node
      }

      strType = this.buildObjectType(subtype) + '[ ]'
    }
    return strType + (nullable ? '?' : '')
  }

  render() {
    let node = this.getRootAcessorNode()
    if (!node) {
      return <div>Entity not found: {this.name}</div>
    }

    return this.renderPropertyList(node)
  }
}