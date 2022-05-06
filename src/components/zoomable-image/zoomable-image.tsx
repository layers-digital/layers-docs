import { Component, Element, Prop, h, State, Listen, Method } from '@stencil/core';

@Component({
  tag: 'docs-zoomable-image',
  styleUrl: 'zoomable-image.css'
})
export class ZoomableImage {
  @Prop() href: string
  @State() isOpen = false
  @Element() element: HTMLElement;
  @Listen('click', { target: 'window' })

  handleClick(event: MouseEvent) {
    const isNode = event.target instanceof Node;
    const isOurs = isNode && this.element.contains(event.target as Node);

    if (!isOurs) {
      this.close();
    }
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  @Method()
  async open() {
    this.isOpen = true
  }

  render() {

    return (
      <div>
        <img onClick={this.open.bind(this)} class="notModalImg" src={this.href} alt="Integrando sua Startup" />
        <div class={ this.isOpen ? "openModal" : "modal" }>
          <span onClick={this.close.bind(this)} class="close">&times;</span>
          <img class="modalImg" src={this.href} />
        </div>
      </div>
    );
  }
}
