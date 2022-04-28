export interface Page {
  title: string;
  body: string;
  [key: string]: any;
}

export interface Link {
  text: string;
  href: string;
  tag?: {
    color: string;
    text: string
  };
}
export interface ReferenceKeys {
  Head: (item: any) => any;
  [key: string]: (item: any) => any;
}

export interface MenuItem {
  [key: string]:  string | Link;
}

export interface MenuItems {
  [key: string]: string | MenuItems | MenuItem[];
}
