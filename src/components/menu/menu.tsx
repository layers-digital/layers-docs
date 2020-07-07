import { Component, Prop, h } from '@stencil/core';
import { Logo } from '../../icons';
// import { FrameworkSelect } from './framework-select';
// import componentsTemplate from './templates/components';
// import cliTemplate from './templates/cli';
// import studioTemplate from './templates/studio';
// import appflowTemplate from './templates/appflow';
// import mainTemplate from './templates/main';
import api from './templates/api';
import conceptsTemplate from './templates/concepts';
import tutorialsTemplate from './templates/tutorials';

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
        <stencil-route url="/docs/api">
          <section class="MenuControls">
            <select-category options={api.categories}/>
          </section>
        </stencil-route>
        {/* <stencil-route url="/docs/(guides)?/:service?">
          <section class="MenuControls">
            <select-category options={guideCategories}/>
          </section>
        </stencil-route> */}
        <stencil-route></stencil-route>
      </stencil-route-switch>,
      <stencil-route-switch scrollTopOffset={0} class="Menu">
        <stencil-route url="/docs/api/:service?" routeRender={api.template}/>
        <stencil-route url="/docs/tutorial/:service?" routeRender={tutorialsTemplate}/>
        <stencil-route url="/docs/(concepts)?/:service?" routeRender={conceptsTemplate}/>
      </stencil-route-switch>
    ];
  }
}
