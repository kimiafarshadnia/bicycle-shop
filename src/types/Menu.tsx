export interface MenuLink {
    title: string;
    url: string;
    id: number;
}

export interface MenuCategory {
    links: MenuLink[];
    url?: string;
}

export interface MegaMenuItem {
    title: string;
    categories?: MenuCategory[];
    url: string;
    id?: number;
}

export interface MegaMenuData {
    menuItems: MegaMenuItem[];
}