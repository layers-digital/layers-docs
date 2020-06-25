import { Build, Component, Element, Prop, h } from '@stencil/core';
import { link, NavLink } from './link';
import { l10n } from '../../l10n';
import { MenuItems } from '../../definitions';


@Component({
  tag: 'docs-nav',
  styleUrl: 'nav.css'
})
export class DocsNav {
  @Element() element: HTMLElement;
  @Prop() items: MenuItems;

  private normalizeItems(items: any): NavLink[] {
    if (items.href) {
      return [items]
    }

    if (typeof items === 'object' && !Array.isArray(items)) {
      return Object
        .entries(items)
        .map(([text, value]) => {
          if (typeof value == 'string') {
            return {
              text: text,
              href: value as string,
            }
          } else {
            return {
              text,
              childs: value as string,
              ... (value as any)
            }
          }
        });
    }

    return items
  }

  // toLink = link;

  toItem = (item: NavLink, level = 0) => {
    if (item.childs) {
      return <li key={item as any}>{this.toSection(item, level + 1)}</li>;
    }
    
    if (typeof item === 'object') {
      return <li key={item as any}>{link(item)}</li>;
    }
    
    return null
  }

  toSection = (item: NavLink, level) => {
    const text = l10n.getString(item.text) || item.text;
    const childs = this.normalizeItems(item.childs);
    return (
      <section>
        { item.text !== '' && text !== undefined ? <header class="Nav-header">{text}</header> : null }
        <ul
          class="Nav-subnav"
          style={{ '--level': level }}>
            {childs.map(item => this.toItem(item, level))}
        </ul>
      </section>
    );
  }

  setScroll = () => {
    try {
      this.element.querySelector('.Nav-link--active')
        .scrollIntoView({
          block: 'center'
        });
    } catch (err) {
      this.element.offsetParent ?
        this.element.offsetParent.scrollIntoView() :
        this.element.scrollIntoView();
    }
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      requestAnimationFrame(this.setScroll);
    }
  }

  hostData() {
    return {
      'role': 'navigation'
    };
  }

  render() {
    return (
      <ul class="Nav">
        {this.normalizeItems(this.items).map(item => this.toItem(item))}
      </ul>
    );
  }
}
