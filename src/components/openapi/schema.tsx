import { Component, h, Prop, State } from "@stencil/core";

import {OpenAPIObject} from 'openapi3-ts'
import { normalizeObject, getAcessorPathNames, getRefPath, AcessorNode } from "./util";

@Component({
  tag: 'docs-openapi-schema',
  styleUrl: 'schema.css',
})
export class DocOpenapiSchema {

  @Prop() spec: OpenAPIObject
  @Prop() path: string
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
    console.log({path})
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
          {this.buildObjectTypeLabel(node)}
          {this.buildDefaultLabel(node)}
          {this.buildEnumLabel(node)}
          {this.buildConstraintsLabel(node)}
          {this.buildIsRequiredLabel(node)}
        </h3>

        {node.schema.description && <p class="Api-property-description">{node.schema.description}</p>}
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
        <ul class="Api-property-list" key={name}>{props}</ul>
      )
    }
  }

  buildIsRequiredLabel(node: AcessorNode) {
    let isRequired = node.parent?.schema.required?.includes(node.name) ?? false
    return isRequired ? 
      <span class="Api-label Api-label-required">obrigatório</span> : 
      <span class="Api-label Api-label-optional">opcional</span>
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

  buildEnumLabel(node: AcessorNode) {
    let list = node.schema.enum
    
    if (!list) {
      return null
    }

    return <span class="Api-label Api-label-option">
      <span class="Api-label-tooltip">{list.map(val => <code>{val}</code>)}</span>
      ENUM
    </span>
  }

  buildObjectTypeLabel(node: AcessorNode, sufix?: string) {
    let {type, nullable, title, items, externalDocs, format} = node.schema

    // Uppercase type name
    let typeStr = this.camelCase(format ?? type ?? '')

    // If its an object, get it's name (title key)
    if (type == 'object' && title) {
      typeStr = title || typeStr
    }
    
    // Append array type name
    if (type == 'array') {
      let subtype: AcessorNode = {
        name: '[]',
        schema: normalizeObject(this.spec, items),
        parent: node
      }

      return this.buildObjectTypeLabel(subtype, '[ ]')
    }
    // Append nullable option
    typeStr += (nullable ? '?' : '') + (sufix ?? '')
    
    // Return link if available
    if (type == 'object' && externalDocs?.url) {
      typeStr = <stencil-route-link url={externalDocs.url}>{typeStr}</stencil-route-link>
    }
    
    return <span class="Api-label Api-label-type">{typeStr}</span>
  }

  buildDefaultLabel(node: AcessorNode) {
    let def = node.schema.default
    if (def === undefined) {
      return null
    }

    return <span class="Api-label Api-label-option">
      DEFAULT
      <span class="Api-label-tooltip"><code>{String(def)}</code></span>
    </span>
  }

  buildConstraintsLabel({schema}: AcessorNode) {
    let tags = []

    if (schema.minItems !== undefined && schema.maxItems !== undefined) 
      tags.push(`De ${schema.minItems} até ${schema.maxItems} Itens`)
    else if (schema.minItems !== undefined)
      tags.push(`Pelo menos ${schema.minItems}' Itens`)
    else if (schema.maxItems !== undefined)
      tags.push(`Até ${schema.maxItems} Itens`)

    if (schema.minLength !== undefined && schema.maxLength !== undefined) 
      tags.push(`De ${schema.minLength} até ${schema.maxLength} caracteres`)
    else if (schema.minLength !== undefined)
      tags.push(`Pelo menos ${schema.minLength}' caracteres`)
    else if (schema.maxLength !== undefined)
      tags.push(`Até ${schema.maxLength} caracteres`)

    if (schema.minimum !== undefined)
      tags.push(`${schema.exclusiveMinimum ? '>' : '>='} ${schema.minItems}`)

    if (schema.maximum !== undefined)
      tags.push(`${schema.exclusiveMaximum ? '<' : '<='} ${schema.maximum}`)
    
    if (schema.pattern !== undefined)
      tags.push(`/${schema.pattern}/`)
    
    if (schema.uniqueItems)
      tags.push(`Itens Únicos`)

    if (!tags.length)
      return null
    
    return <span class="Api-label Api-label-option">
      REGRAS
      <span class="Api-label-tooltip">
        {tags.map(tag => <code>{tag}</code>)}
      </span>
    </span>
  }

  camelCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {
    let node = this.getRootAcessorNode()
    if (!node) {
      return <div>Entity not found: {this.path}</div>
    }

    return this.renderPropertyList(node)
  }
}