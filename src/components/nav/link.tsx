import { Outbound } from '../../icons';
import { l10n } from '../../l10n';
import { h } from '@stencil/core';

type NavLinkTag = {
  text: string,
  color: string,
}

export type NavLink = {
  text: string,
  href?: string,
  tag?: NavLinkTag,
  childs?: any
}

export function link(item: NavLink) {
  const isExternalLink = (href: string) => {
    return href.indexOf('http') === 0;
  };

  const text = l10n.getString(item.text) || item.text;
  const isExternal = isExternalLink(item.href);

  if (isExternal) {
    return (
      <a href={item.href}
        target="_blank"
        class="Nav-link outbound">
          <span>{text}</span> <Outbound/>
      </a>
    );
  }

  const prefix = /^\/docs(\/[a-z]{2})?\//;
  const language = l10n.getLocale();
  const url = language !== 'pt'
    ? `/docs/${language}/${item.href.replace(prefix, '').replace(/^\//, '')}`
    : item.href;

  return (
    <stencil-route-link
      url={url}
      strict={false}
      exact
      activeClass="Nav-link--active"
      anchorClass="Nav-link">
        <span class="Nav-text">{text}</span>
        {item.tag ? <span class={`Nav-tag ${item?.tag.color ?? ''}`}>{item?.tag.text}</span> : null}
    </stencil-route-link>
  );
};
