/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  JSX,
} from '@stencil/core';
import {
  Link,
  MenuItems,
  Page,
  ReferenceKeys,
} from './definitions';
import {
  OpenAPIObject,
} from 'openapi3-ts';
import {
  AcessorNode,
} from './components/openapi/schema';
import {
  AcessorNode as AcessorNode1,
} from './components/openapi/schema';
import {
  LocationSegments,
  RouterHistory,
} from '@stencil/router';
import {
  SelectCategoryOption,
} from './components/menu/select-category';

export namespace Components {
  interface CodeColor {
    'display': string;
    'mode': string;
    'value': string;
  }
  interface ColorAccordion {}
  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandOutput {}
  interface CommandPrompt {}
  interface ContributorList {
    'contributors': string[];
    'link': (contributor: string) => string;
  }
  interface DocsButton {
    'href': string;
    'round': boolean;
  }
  interface DocsCard {
    'header': string;
    'hoverIcon': string;
    'href': string;
    'icon': string;
    'iconset': string;
    'img': string;
    'ionicon': string;
    'size': 'md' | 'lg';
  }
  interface DocsCards {}
  interface DocsCode {
    'language': string;
  }
  interface DocsCodepen {
    'defaultTab': string;
    'height': string | number;
    'penTitle': string;
    'preview': boolean;
    'slug': string;
    'theme': string;
    'user': string;
  }
  interface DocsDemo {
    'source': string;
    'url': string;
  }
  interface DocsDropdown {
    'align': 'left' | 'right' | 'center';
    'close': () => Promise<void>;
    'icon': (props: any) => JSX.Element;
    'label': string;
    'open': () => Promise<void>;
    'toggle': () => Promise<void>;
  }
  interface DocsHeader {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsItem {
    'header': string;
    'href': string;
    'icon': string;
    'ionicon': string;
    'rounded': boolean;
  }
  interface DocsItemList {}
  interface DocsMenu {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsMenuCollapsible {
    'heading': string;
  }
  interface DocsMenuToggle {}
  interface DocsNav {
    'items': MenuItems;
  }
  interface DocsOpenapiSchema {
    'hideReadOnly': boolean;
    'hideWriteOnly': boolean;
    'includeRootName': boolean;
    'name': string;
    'node'?: AcessorNode;
    'spec': OpenAPIObject;
  }
  interface DocsOpenapiSchemaNested {
    'node': AcessorNode;
    'open': boolean;
    'spec': OpenAPIObject;
  }
  interface DocsPage {
    'history': RouterHistory;
    'path': string;
  }
  interface DocsPageFooter {
    'page': Page;
  }
  interface DocsPagination {
    'page': Page;
  }
  interface DocsReference {
    'data': any[];
    'keys': ReferenceKeys;
  }
  interface DocsRoot {}
  interface DocsSelect {
    'initializer': (options: string[]) => string;
    'optionRenderer': (option: string) => any;
    'options': string[];
    'select': (option: string) => Promise<void>;
  }
  interface DocsTab {
    'selected': boolean;
    'tab': string;
  }
  interface DocsTableOfContents {
    'basepath': string;
    'label': string;
    'links': Link[];
  }
  interface DocsTabs {
    'listenFor': string;
  }
  interface FileTree {}
  interface FileTreeDirectory {
    'collapsed': boolean;
    'name': string;
  }
  interface FileTreeFile {
    'name': string;
  }
  interface HeaderMobileCollapse {
    'darkMode': boolean;
  }
  interface IonicSearch {
    'mobile': boolean;
  }
  interface LayeredColorsSelect {}
  interface NativeEntInstall {
    'capacitorSlug'?: string;
    'pluginId': string;
    'variables'?: string;
  }
  interface SelectCategory {
    'history': RouterHistory;
    'location': LocationSegments;
    'options': SelectCategoryOption[];
  }
  interface SelectFramework {
    'onToggleClick': (e: Event) => void;
  }
}

declare global {


  interface HTMLCodeColorElement extends Components.CodeColor, HTMLStencilElement {}
  var HTMLCodeColorElement: {
    prototype: HTMLCodeColorElement;
    new (): HTMLCodeColorElement;
  };

  interface HTMLColorAccordionElement extends Components.ColorAccordion, HTMLStencilElement {}
  var HTMLColorAccordionElement: {
    prototype: HTMLColorAccordionElement;
    new (): HTMLColorAccordionElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {}
  var HTMLContributorListElement: {
    prototype: HTMLContributorListElement;
    new (): HTMLContributorListElement;
  };

  interface HTMLDocsButtonElement extends Components.DocsButton, HTMLStencilElement {}
  var HTMLDocsButtonElement: {
    prototype: HTMLDocsButtonElement;
    new (): HTMLDocsButtonElement;
  };

  interface HTMLDocsCardElement extends Components.DocsCard, HTMLStencilElement {}
  var HTMLDocsCardElement: {
    prototype: HTMLDocsCardElement;
    new (): HTMLDocsCardElement;
  };

  interface HTMLDocsCardsElement extends Components.DocsCards, HTMLStencilElement {}
  var HTMLDocsCardsElement: {
    prototype: HTMLDocsCardsElement;
    new (): HTMLDocsCardsElement;
  };

  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLDocsCodepenElement extends Components.DocsCodepen, HTMLStencilElement {}
  var HTMLDocsCodepenElement: {
    prototype: HTMLDocsCodepenElement;
    new (): HTMLDocsCodepenElement;
  };

  interface HTMLDocsDemoElement extends Components.DocsDemo, HTMLStencilElement {}
  var HTMLDocsDemoElement: {
    prototype: HTMLDocsDemoElement;
    new (): HTMLDocsDemoElement;
  };

  interface HTMLDocsDropdownElement extends Components.DocsDropdown, HTMLStencilElement {}
  var HTMLDocsDropdownElement: {
    prototype: HTMLDocsDropdownElement;
    new (): HTMLDocsDropdownElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLDocsItemElement extends Components.DocsItem, HTMLStencilElement {}
  var HTMLDocsItemElement: {
    prototype: HTMLDocsItemElement;
    new (): HTMLDocsItemElement;
  };

  interface HTMLDocsItemListElement extends Components.DocsItemList, HTMLStencilElement {}
  var HTMLDocsItemListElement: {
    prototype: HTMLDocsItemListElement;
    new (): HTMLDocsItemListElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsMenuCollapsibleElement extends Components.DocsMenuCollapsible, HTMLStencilElement {}
  var HTMLDocsMenuCollapsibleElement: {
    prototype: HTMLDocsMenuCollapsibleElement;
    new (): HTMLDocsMenuCollapsibleElement;
  };

  interface HTMLDocsMenuToggleElement extends Components.DocsMenuToggle, HTMLStencilElement {}
  var HTMLDocsMenuToggleElement: {
    prototype: HTMLDocsMenuToggleElement;
    new (): HTMLDocsMenuToggleElement;
  };

  interface HTMLDocsNavElement extends Components.DocsNav, HTMLStencilElement {}
  var HTMLDocsNavElement: {
    prototype: HTMLDocsNavElement;
    new (): HTMLDocsNavElement;
  };

  interface HTMLDocsOpenapiSchemaElement extends Components.DocsOpenapiSchema, HTMLStencilElement {}
  var HTMLDocsOpenapiSchemaElement: {
    prototype: HTMLDocsOpenapiSchemaElement;
    new (): HTMLDocsOpenapiSchemaElement;
  };

  interface HTMLDocsOpenapiSchemaNestedElement extends Components.DocsOpenapiSchemaNested, HTMLStencilElement {}
  var HTMLDocsOpenapiSchemaNestedElement: {
    prototype: HTMLDocsOpenapiSchemaNestedElement;
    new (): HTMLDocsOpenapiSchemaNestedElement;
  };

  interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {}
  var HTMLDocsPageElement: {
    prototype: HTMLDocsPageElement;
    new (): HTMLDocsPageElement;
  };

  interface HTMLDocsPageFooterElement extends Components.DocsPageFooter, HTMLStencilElement {}
  var HTMLDocsPageFooterElement: {
    prototype: HTMLDocsPageFooterElement;
    new (): HTMLDocsPageFooterElement;
  };

  interface HTMLDocsPaginationElement extends Components.DocsPagination, HTMLStencilElement {}
  var HTMLDocsPaginationElement: {
    prototype: HTMLDocsPaginationElement;
    new (): HTMLDocsPaginationElement;
  };

  interface HTMLDocsReferenceElement extends Components.DocsReference, HTMLStencilElement {}
  var HTMLDocsReferenceElement: {
    prototype: HTMLDocsReferenceElement;
    new (): HTMLDocsReferenceElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLDocsSelectElement extends Components.DocsSelect, HTMLStencilElement {}
  var HTMLDocsSelectElement: {
    prototype: HTMLDocsSelectElement;
    new (): HTMLDocsSelectElement;
  };

  interface HTMLDocsTabElement extends Components.DocsTab, HTMLStencilElement {}
  var HTMLDocsTabElement: {
    prototype: HTMLDocsTabElement;
    new (): HTMLDocsTabElement;
  };

  interface HTMLDocsTableOfContentsElement extends Components.DocsTableOfContents, HTMLStencilElement {}
  var HTMLDocsTableOfContentsElement: {
    prototype: HTMLDocsTableOfContentsElement;
    new (): HTMLDocsTableOfContentsElement;
  };

  interface HTMLDocsTabsElement extends Components.DocsTabs, HTMLStencilElement {}
  var HTMLDocsTabsElement: {
    prototype: HTMLDocsTabsElement;
    new (): HTMLDocsTabsElement;
  };

  interface HTMLFileTreeElement extends Components.FileTree, HTMLStencilElement {}
  var HTMLFileTreeElement: {
    prototype: HTMLFileTreeElement;
    new (): HTMLFileTreeElement;
  };

  interface HTMLFileTreeDirectoryElement extends Components.FileTreeDirectory, HTMLStencilElement {}
  var HTMLFileTreeDirectoryElement: {
    prototype: HTMLFileTreeDirectoryElement;
    new (): HTMLFileTreeDirectoryElement;
  };

  interface HTMLFileTreeFileElement extends Components.FileTreeFile, HTMLStencilElement {}
  var HTMLFileTreeFileElement: {
    prototype: HTMLFileTreeFileElement;
    new (): HTMLFileTreeFileElement;
  };

  interface HTMLHeaderMobileCollapseElement extends Components.HeaderMobileCollapse, HTMLStencilElement {}
  var HTMLHeaderMobileCollapseElement: {
    prototype: HTMLHeaderMobileCollapseElement;
    new (): HTMLHeaderMobileCollapseElement;
  };

  interface HTMLIonicSearchElement extends Components.IonicSearch, HTMLStencilElement {}
  var HTMLIonicSearchElement: {
    prototype: HTMLIonicSearchElement;
    new (): HTMLIonicSearchElement;
  };

  interface HTMLLayeredColorsSelectElement extends Components.LayeredColorsSelect, HTMLStencilElement {}
  var HTMLLayeredColorsSelectElement: {
    prototype: HTMLLayeredColorsSelectElement;
    new (): HTMLLayeredColorsSelectElement;
  };

  interface HTMLNativeEntInstallElement extends Components.NativeEntInstall, HTMLStencilElement {}
  var HTMLNativeEntInstallElement: {
    prototype: HTMLNativeEntInstallElement;
    new (): HTMLNativeEntInstallElement;
  };

  interface HTMLSelectCategoryElement extends Components.SelectCategory, HTMLStencilElement {}
  var HTMLSelectCategoryElement: {
    prototype: HTMLSelectCategoryElement;
    new (): HTMLSelectCategoryElement;
  };

  interface HTMLSelectFrameworkElement extends Components.SelectFramework, HTMLStencilElement {}
  var HTMLSelectFrameworkElement: {
    prototype: HTMLSelectFrameworkElement;
    new (): HTMLSelectFrameworkElement;
  };
  interface HTMLElementTagNameMap {
    'code-color': HTMLCodeColorElement;
    'color-accordion': HTMLColorAccordionElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'contributor-list': HTMLContributorListElement;
    'docs-button': HTMLDocsButtonElement;
    'docs-card': HTMLDocsCardElement;
    'docs-cards': HTMLDocsCardsElement;
    'docs-code': HTMLDocsCodeElement;
    'docs-codepen': HTMLDocsCodepenElement;
    'docs-demo': HTMLDocsDemoElement;
    'docs-dropdown': HTMLDocsDropdownElement;
    'docs-header': HTMLDocsHeaderElement;
    'docs-item': HTMLDocsItemElement;
    'docs-item-list': HTMLDocsItemListElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-menu-collapsible': HTMLDocsMenuCollapsibleElement;
    'docs-menu-toggle': HTMLDocsMenuToggleElement;
    'docs-nav': HTMLDocsNavElement;
    'docs-openapi-schema': HTMLDocsOpenapiSchemaElement;
    'docs-openapi-schema-nested': HTMLDocsOpenapiSchemaNestedElement;
    'docs-page': HTMLDocsPageElement;
    'docs-page-footer': HTMLDocsPageFooterElement;
    'docs-pagination': HTMLDocsPaginationElement;
    'docs-reference': HTMLDocsReferenceElement;
    'docs-root': HTMLDocsRootElement;
    'docs-select': HTMLDocsSelectElement;
    'docs-tab': HTMLDocsTabElement;
    'docs-table-of-contents': HTMLDocsTableOfContentsElement;
    'docs-tabs': HTMLDocsTabsElement;
    'file-tree': HTMLFileTreeElement;
    'file-tree-directory': HTMLFileTreeDirectoryElement;
    'file-tree-file': HTMLFileTreeFileElement;
    'header-mobile-collapse': HTMLHeaderMobileCollapseElement;
    'ionic-search': HTMLIonicSearchElement;
    'layered-colors-select': HTMLLayeredColorsSelectElement;
    'native-ent-install': HTMLNativeEntInstallElement;
    'select-category': HTMLSelectCategoryElement;
    'select-framework': HTMLSelectFrameworkElement;
  }
}

declare namespace LocalJSX {
  interface CodeColor {
    'display'?: string;
    'mode'?: string;
    'value'?: string;
  }
  interface ColorAccordion {}
  interface CommandCursor {
    'blink'?: boolean;
  }
  interface CommandLine {
    'nobuttons'?: boolean;
  }
  interface CommandOutput {}
  interface CommandPrompt {}
  interface ContributorList {
    'contributors'?: string[];
    'link'?: (contributor: string) => string;
  }
  interface DocsButton {
    'href'?: string;
    'round'?: boolean;
  }
  interface DocsCard {
    'header'?: string;
    'hoverIcon'?: string;
    'href'?: string;
    'icon'?: string;
    'iconset'?: string;
    'img'?: string;
    'ionicon'?: string;
    'size'?: 'md' | 'lg';
  }
  interface DocsCards {}
  interface DocsCode {
    'language'?: string;
  }
  interface DocsCodepen {
    'defaultTab'?: string;
    'height'?: string | number;
    'penTitle'?: string;
    'preview'?: boolean;
    'slug'?: string;
    'theme'?: string;
    'user'?: string;
  }
  interface DocsDemo {
    'source'?: string;
    'url'?: string;
  }
  interface DocsDropdown {
    'align'?: 'left' | 'right' | 'center';
    'icon'?: (props: any) => JSX.Element;
    'label'?: string;
  }
  interface DocsHeader {
    'onToggleClick'?: (e: Event) => void;
  }
  interface DocsItem {
    'header'?: string;
    'href'?: string;
    'icon'?: string;
    'ionicon'?: string;
    'rounded'?: boolean;
  }
  interface DocsItemList {}
  interface DocsMenu {
    'onToggleClick'?: (e: Event) => void;
  }
  interface DocsMenuCollapsible {
    'heading'?: string;
  }
  interface DocsMenuToggle {}
  interface DocsNav {
    'items'?: MenuItems;
  }
  interface DocsOpenapiSchema {
    'hideReadOnly'?: boolean;
    'hideWriteOnly'?: boolean;
    'includeRootName'?: boolean;
    'name'?: string;
    'node'?: AcessorNode;
    'spec'?: OpenAPIObject;
  }
  interface DocsOpenapiSchemaNested {
    'node'?: AcessorNode;
    'open'?: boolean;
    'spec'?: OpenAPIObject;
  }
  interface DocsPage {
    'history'?: RouterHistory;
    'path'?: string;
  }
  interface DocsPageFooter {
    'page'?: Page;
  }
  interface DocsPagination {
    'page'?: Page;
  }
  interface DocsReference {
    'data'?: any[];
    'keys'?: ReferenceKeys;
  }
  interface DocsRoot {
    'onPageChanged'?: (event: CustomEvent<any>) => void;
  }
  interface DocsSelect {
    'initializer'?: (options: string[]) => string;
    'onSelection'?: (event: CustomEvent<string>) => void;
    'optionRenderer'?: (option: string) => any;
    'options'?: string[];
  }
  interface DocsTab {
    'selected'?: boolean;
    'tab'?: string;
  }
  interface DocsTableOfContents {
    'basepath'?: string;
    'label'?: string;
    'links'?: Link[];
  }
  interface DocsTabs {
    'listenFor'?: string;
  }
  interface FileTree {}
  interface FileTreeDirectory {
    'collapsed'?: boolean;
    'name'?: string;
  }
  interface FileTreeFile {
    'name'?: string;
  }
  interface HeaderMobileCollapse {
    'darkMode'?: boolean;
  }
  interface IonicSearch {
    'mobile'?: boolean;
  }
  interface LayeredColorsSelect {}
  interface NativeEntInstall {
    'capacitorSlug'?: string;
    'pluginId'?: string;
    'variables'?: string;
  }
  interface SelectCategory {
    'history'?: RouterHistory;
    'location'?: LocationSegments;
    'options'?: SelectCategoryOption[];
  }
  interface SelectFramework {
    'onToggleClick'?: (e: Event) => void;
  }

  interface IntrinsicElements {
    'code-color': CodeColor;
    'color-accordion': ColorAccordion;
    'command-cursor': CommandCursor;
    'command-line': CommandLine;
    'command-output': CommandOutput;
    'command-prompt': CommandPrompt;
    'contributor-list': ContributorList;
    'docs-button': DocsButton;
    'docs-card': DocsCard;
    'docs-cards': DocsCards;
    'docs-code': DocsCode;
    'docs-codepen': DocsCodepen;
    'docs-demo': DocsDemo;
    'docs-dropdown': DocsDropdown;
    'docs-header': DocsHeader;
    'docs-item': DocsItem;
    'docs-item-list': DocsItemList;
    'docs-menu': DocsMenu;
    'docs-menu-collapsible': DocsMenuCollapsible;
    'docs-menu-toggle': DocsMenuToggle;
    'docs-nav': DocsNav;
    'docs-openapi-schema': DocsOpenapiSchema;
    'docs-openapi-schema-nested': DocsOpenapiSchemaNested;
    'docs-page': DocsPage;
    'docs-page-footer': DocsPageFooter;
    'docs-pagination': DocsPagination;
    'docs-reference': DocsReference;
    'docs-root': DocsRoot;
    'docs-select': DocsSelect;
    'docs-tab': DocsTab;
    'docs-table-of-contents': DocsTableOfContents;
    'docs-tabs': DocsTabs;
    'file-tree': FileTree;
    'file-tree-directory': FileTreeDirectory;
    'file-tree-file': FileTreeFile;
    'header-mobile-collapse': HeaderMobileCollapse;
    'ionic-search': IonicSearch;
    'layered-colors-select': LayeredColorsSelect;
    'native-ent-install': NativeEntInstall;
    'select-category': SelectCategory;
    'select-framework': SelectFramework;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'code-color': LocalJSX.CodeColor & JSXBase.HTMLAttributes<HTMLCodeColorElement>;
      'color-accordion': LocalJSX.ColorAccordion & JSXBase.HTMLAttributes<HTMLColorAccordionElement>;
      'command-cursor': LocalJSX.CommandCursor & JSXBase.HTMLAttributes<HTMLCommandCursorElement>;
      'command-line': LocalJSX.CommandLine & JSXBase.HTMLAttributes<HTMLCommandLineElement>;
      'command-output': LocalJSX.CommandOutput & JSXBase.HTMLAttributes<HTMLCommandOutputElement>;
      'command-prompt': LocalJSX.CommandPrompt & JSXBase.HTMLAttributes<HTMLCommandPromptElement>;
      'contributor-list': LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
      'docs-button': LocalJSX.DocsButton & JSXBase.HTMLAttributes<HTMLDocsButtonElement>;
      'docs-card': LocalJSX.DocsCard & JSXBase.HTMLAttributes<HTMLDocsCardElement>;
      'docs-cards': LocalJSX.DocsCards & JSXBase.HTMLAttributes<HTMLDocsCardsElement>;
      'docs-code': LocalJSX.DocsCode & JSXBase.HTMLAttributes<HTMLDocsCodeElement>;
      'docs-codepen': LocalJSX.DocsCodepen & JSXBase.HTMLAttributes<HTMLDocsCodepenElement>;
      'docs-demo': LocalJSX.DocsDemo & JSXBase.HTMLAttributes<HTMLDocsDemoElement>;
      'docs-dropdown': LocalJSX.DocsDropdown & JSXBase.HTMLAttributes<HTMLDocsDropdownElement>;
      'docs-header': LocalJSX.DocsHeader & JSXBase.HTMLAttributes<HTMLDocsHeaderElement>;
      'docs-item': LocalJSX.DocsItem & JSXBase.HTMLAttributes<HTMLDocsItemElement>;
      'docs-item-list': LocalJSX.DocsItemList & JSXBase.HTMLAttributes<HTMLDocsItemListElement>;
      'docs-menu': LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
      'docs-menu-collapsible': LocalJSX.DocsMenuCollapsible & JSXBase.HTMLAttributes<HTMLDocsMenuCollapsibleElement>;
      'docs-menu-toggle': LocalJSX.DocsMenuToggle & JSXBase.HTMLAttributes<HTMLDocsMenuToggleElement>;
      'docs-nav': LocalJSX.DocsNav & JSXBase.HTMLAttributes<HTMLDocsNavElement>;
      'docs-openapi-schema': LocalJSX.DocsOpenapiSchema & JSXBase.HTMLAttributes<HTMLDocsOpenapiSchemaElement>;
      'docs-openapi-schema-nested': LocalJSX.DocsOpenapiSchemaNested & JSXBase.HTMLAttributes<HTMLDocsOpenapiSchemaNestedElement>;
      'docs-page': LocalJSX.DocsPage & JSXBase.HTMLAttributes<HTMLDocsPageElement>;
      'docs-page-footer': LocalJSX.DocsPageFooter & JSXBase.HTMLAttributes<HTMLDocsPageFooterElement>;
      'docs-pagination': LocalJSX.DocsPagination & JSXBase.HTMLAttributes<HTMLDocsPaginationElement>;
      'docs-reference': LocalJSX.DocsReference & JSXBase.HTMLAttributes<HTMLDocsReferenceElement>;
      'docs-root': LocalJSX.DocsRoot & JSXBase.HTMLAttributes<HTMLDocsRootElement>;
      'docs-select': LocalJSX.DocsSelect & JSXBase.HTMLAttributes<HTMLDocsSelectElement>;
      'docs-tab': LocalJSX.DocsTab & JSXBase.HTMLAttributes<HTMLDocsTabElement>;
      'docs-table-of-contents': LocalJSX.DocsTableOfContents & JSXBase.HTMLAttributes<HTMLDocsTableOfContentsElement>;
      'docs-tabs': LocalJSX.DocsTabs & JSXBase.HTMLAttributes<HTMLDocsTabsElement>;
      'file-tree': LocalJSX.FileTree & JSXBase.HTMLAttributes<HTMLFileTreeElement>;
      'file-tree-directory': LocalJSX.FileTreeDirectory & JSXBase.HTMLAttributes<HTMLFileTreeDirectoryElement>;
      'file-tree-file': LocalJSX.FileTreeFile & JSXBase.HTMLAttributes<HTMLFileTreeFileElement>;
      'header-mobile-collapse': LocalJSX.HeaderMobileCollapse & JSXBase.HTMLAttributes<HTMLHeaderMobileCollapseElement>;
      'ionic-search': LocalJSX.IonicSearch & JSXBase.HTMLAttributes<HTMLIonicSearchElement>;
      'layered-colors-select': LocalJSX.LayeredColorsSelect & JSXBase.HTMLAttributes<HTMLLayeredColorsSelectElement>;
      'native-ent-install': LocalJSX.NativeEntInstall & JSXBase.HTMLAttributes<HTMLNativeEntInstallElement>;
      'select-category': LocalJSX.SelectCategory & JSXBase.HTMLAttributes<HTMLSelectCategoryElement>;
      'select-framework': LocalJSX.SelectFramework & JSXBase.HTMLAttributes<HTMLSelectFrameworkElement>;
    }
  }
}


