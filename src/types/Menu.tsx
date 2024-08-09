export interface MenuLink {
    title: string;
    url: string;
}

export interface MenuCategory {
    title: string;
    links: MenuLink[];
    url: string;
}

export interface MegaMenuItem {
    title: string;
    categories?: MenuCategory[];
    url?: string;
}

export interface MegaMenuData {
    menuItems: MegaMenuItem[];
}