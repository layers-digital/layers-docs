import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'docs-zoomable-image',
  styleUrl: 'zoomable-image.css'
})
export class ZoomableImage {
  @Prop() href: string;
  @Prop() alt: string;

  render() {

    return (
      <div class="Zoom-Image-Container">
        <img src={this.href} alt={this.alt} />
      </div>
    );
  }
}
