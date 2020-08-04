import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'docs-openapi-parameters',
  // styleUrl: 'parameters.css',
})

export class DocsOpenapiParameters {
  @Prop() parameters: any[]

  render(){
    return (
      <div>
        <h3>Parâmetros</h3>
        <ul>
          {this.parameters.map((parameter) => parameter.name ?
            <li>
              {/* <div>{JSON.stringify(parameter)}</div> */}
              <div><strong>{parameter.name}</strong>: {parameter.description} ({parameter.in}) </div>
              {/* <div>{parameter.required}</div> */}
            </li> : null
          )}
        </ul>
      </div>
    )
  }
}