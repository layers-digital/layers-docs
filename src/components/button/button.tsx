import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'docs-button',
  styleUrl: 'button.css'
})
export class DocsButton {
  @Prop() href: string;
  @Prop() download?: string = null
  @Prop({ reflectToAttr: true }) round = false;

  render() {
    if (typeof this.href === 'string') {
      if (this.download) {
        return (
          <a href={this.href} download={this.download}>
            <slot/>
          </a>
        )
      }

      const isInternal = /^\/docs/.test(this.href);
      if (isInternal) {
        return (
          <stencil-route-link url={this.href}>
            <slot/>
          </stencil-route-link>
        );
      }

      return (
        <a href={this.href}>
          <slot/>
        </a>
      );
    }

    return (
      <button>
        <slot/>
      </button>
    );
  }
}
