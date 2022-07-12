import { Component, Prop, h } from '@stencil/core';
import { Logo } from '../../icons';
// import { FrameworkSelect } from './framework-select';
// import componentsTemplate from './templates/components';
// import cliTemplate from './templates/cli';
// import studioTemplate from './templates/studio';
// import appflowTemplate from './templates/appflow';
// import mainTemplate from './templates/main';
import api from './templates/api';
import sync from './templates/sync';
import conceptsTemplate from './templates/concepts';
import forStartups from './templates/forstartups';
import forErps from './templates/forerps';
import forSchools from './templates/forschools';

// import tutorialsTemplate from './templates/tutorials';
import sdksTemplate from './templates/sdk';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  @Prop() onToggleClick: (e: Event) => void;

  render() {
    return [
      <header>
        <docs-menu-toggle onClick={this.onToggleClick}/>
        <stencil-route-link url="/docs/">
          <Logo class="MenuLogo"/>
        </stencil-route-link>
      </header>,
      <stencil-route-switch>
        {/* <stencil-route url="/docs/api">
          <section class="MenuControls">
            <select-category options={api.categories}/>
          </section>
        </stencil-route> */}
        {/* <stencil-route url="/docs/(guides)?/:service?">
          <section class="MenuControls">
            <select-category options={guideCategories}/>
          </section>
        </stencil-route> */}
        <stencil-route></stencil-route>
      </stencil-route-switch>,
      <stencil-route-switch scrollTopOffset={0} class="Menu">
        <stencil-route url="/docs/(register|status)"/>
        {/* <stencil-route url="/docs/status"/> */}
        <stencil-route url="/docs/api/data/:service?" routeRender={sync}/>
        <stencil-route url="/docs/api/apihub/:service?" routeRender={api}/>
        <stencil-route url="/docs/api/notifications/:service?" routeRender={forStartups}/>
        <stencil-route url="/docs/sdk" routeRender={sdksTemplate}/>
        <stencil-route url="/docs/forstartups" routeRender={forStartups}/>
        <stencil-route url="/docs/forerps" routeRender={forErps}/>
        <stencil-route url="/docs/forschools" routeRender={forSchools}/>
        <stencil-route url="/docs/" routeRender={conceptsTemplate}/>
      </stencil-route-switch>
    ];
  }
}
