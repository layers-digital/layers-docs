import { Component, Listen, Prop, State, h } from '@stencil/core';
import { ForwardArrow, Logo } from '../../icons';
import { l10n } from '../../l10n';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  @Prop() onToggleClick: (e: Event) => void;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    if (!this.frameRequested) {
      requestAnimationFrame(() => {
        const { scrollY } = window;
        this.hidden = scrollY > 60 && scrollY > this.prevScroll;
        this.prevScroll = scrollY;
        this.frameRequested = false;
      });
      this.frameRequested = true;
    }
  }

  hostData() {
    return {
      class: { hidden: this.hidden }
    };
  }

  renderMenu(section: 'Docs') {
    return [
      ['Docs'].includes(section) ?
      <div class="SectionNav-tabs">
        <stencil-route-link url="/docs/" urlMatch={[/^\/docs(?!\/(api|sdk|status|register|suporte|forstartups)).*$/]}>Conceitos</stencil-route-link>
        <stencil-route-link url="/docs/api" urlMatch={['/docs/api']}>APIs</stencil-route-link>
        <stencil-route-link url="/docs/sdk/como-colocar-o-botao-logar-com-layers" urlMatch={['/docs/sdk']}>SDKs</stencil-route-link>
        <stencil-route-link url="/docs/status" urlMatch={['/docs/status']}>Status</stencil-route-link>
        <stencil-route-link url="/docs/forstartups" urlMatch={['/docs/forstartups']}>Layers Startups</stencil-route-link>
      </div> : null,
    ];
  }

  render() {
    const { getString } = l10n;
    return (
      <header>
        <docs-menu-toggle onClick={this.onToggleClick}/>

        <stencil-route-link url="/docs/">
          <Logo class="MenuLogo"/>
        </stencil-route-link>

        <header-mobile-collapse>
          <nav class="SectionNav">
            <stencil-route-switch>
              <stencil-route>
                {this.renderMenu('Docs')}
              </stencil-route>
            </stencil-route-switch>
          </nav>

          <nav class="UtilNav">
            <docs-dropdown label={getString('header-support')} align="right">
              <section>
                <a href="https://id.layers.digital" target="_blank">Acessar Plataforma</a>
                <a href="mailto:devs@layers.education?subject=Layers Docs" target="_blank">devs@layers.education</a>
              </section>
            </docs-dropdown>

            <a href="https://github.com/layers-digital" target="_blank">
              <ion-icon name="logo-github" class="lg-only"></ion-icon>
              <span class="sm-only">GitHub <ForwardArrow class="Dropdown-arrow"/></span>
            </a>
          </nav>
        </header-mobile-collapse>
      </header>
    );
  }
}
