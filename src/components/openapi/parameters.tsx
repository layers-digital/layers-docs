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
              <div class="column-flex">
                <div class="row-flex">
                  <div class="header parameter-name">{parameter.name}</div>
                  <div class="header">({parameter.in})</div>
                  {parameter.required ? <div class="header parameter-label-required">obrigatório</div> : null}
                </div>
                <div class="row-flex parameter-description">{parameter.description}</div>
              </div>
            </li> : null
          )}
        </ul>
      </div>
    )
  }
}