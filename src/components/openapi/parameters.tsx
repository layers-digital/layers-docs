import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'docs-openapi-parameters',
  styleUrl: 'parameters.css',
})

export class DocsOpenapiParameters {
  @Prop() parameters: any[]

  render(){
    return (
      <div>
        <h3>Parâmetros</h3>
        <ul class="parameters-container">
          {this.parameters.map((parameter) => parameter.name ?
            <li class="parameter">
              <div class="column-grow">
                <div class="row-grow">
                  <div class="row parameter-name">{parameter.name}</div>
                  <div class="row">({parameter.in})</div>
                  {parameter.required ? <div class="row parameter-label-required">obrigatório</div> : null}
                </div>
                <div class="row-grow parameter-description">{parameter.description}</div>
              </div>
            </li> : null
          )}
        </ul>
      </div>
    )
  }
}