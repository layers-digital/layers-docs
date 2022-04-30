export interface Page {
  title: string;
  body: string;
  [key: string]: any;
}

export interface Tag {
  color: string,
  text: string
}

export interface Link {
  text: string;
  href: string;
  tag?: Tag
}

export interface ReferenceKeys {
  Head: (item: any) => any;
  [key: string]: (item: any) => any;
}

export interface MenuItem {
  [key: string]:  string | Link | Tag;
}

export interface MenuItems {
  [key: string]: string | MenuItems | MenuItem[];
}
