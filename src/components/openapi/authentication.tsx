import { Component, h, Prop } from "@stencil/core";

@Component ({
  tag: "docs-openapi-authentication"
})

export class DocsOpenapiPermissions{
  @Prop() security: any

  resolveType(security){
    if(security.hasOwnProperty('Bearer') ){
    return security["x-layers-permissions"] ?  <div>Autenticação do tipo <strong>Token Bearer</strong> é necessária para acessar essa rota. O app deve estar cadastrado para usar a API com {security["x-layers-permissions"].length > 1 ? 'pelo menos uma das seguintes permissões:' : 'a permissão'} {security["x-layers-permissions"].length > 1 ? security["x-layers-permissions"].map((permission) => <code style={{"margin-right": "0.4em"}}key="permission">{permission}</code>) : <code>{security["x-layers-permissions"]}</code>}</div> : <div>Autenticação do tipo <strong>Token Bearer</strong> é necessária para acessar essa rota.</div>
    } else if (security.hasOwnProperty('OAuth2')){
      return <div>Autenticação do tipo <strong>OAuth 2.0</strong> é necessária para acessar essa rota. Para acessar essa rota o app deve estar cadastrado para usar a função de OAuth e ter ao menos um dos seguintes escopos: {security["OAuth2"].join(", ")}</div>
    } else {
      return <div>Unknown security scheme</div> 
    }
  }

  render(){
    return (
      <div>
        <h2 id="authentication">
          <a href="#authentication">Autenticação</a>
        </h2>

        {this.resolveType(this.security[0])}        
        
      </div>
      
    )
  }
}