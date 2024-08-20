import { MegaMenuData } from 'Types';

export const menuData: MegaMenuData = {
  menuItems: [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'About Us',
      url: '/about-us'
    },
    {
      title: 'Bikes',
      id: 75,
      url: '/products/category/75',
      categories: [
        {
          links: [
            { title: 'Helmets', url: '/products/category/75', id: 113 },
            { title: 'Lights', url: '/products/category/75', id: 114 },
            { title: 'Computers and sensors', url: '/products/category/75^115', id: 115 },
            { title: 'Drivetrains', url: '/products/category/75', id: 127 }
          ],
        },
      ],
    },
    {
      title: 'Accessories',
      id: 76,
      url: '/products/category/76',
      categories: [
        {
          links: [
            { title: 'Bike Maintenance', url: '/products/category/76^', id: 119 },
            { title: 'Bike trainer', url: '/products/category/76', id: 120 },
            { title: 'Bicycle Travel Case & Bags', url: '/products/category/76', id: 121 },
            { title: 'Apparel', url: '/products/category/76', id: 122 },
            { title: 'Bike Racks & Stands', url: '/products/category/76', id: 123 },
          ],
        }
      ],
    },
    {
      title: 'Parts',
      id: 77,
      url: '/products/category/77',
      categories: [
        {
          links: [
            { title: 'Pedals', url: '/products/category/77', id: 130 },
            { title: 'Pumps', url: '/products/category/77', id: 124 },
            { title: 'SCOOTER', url: '/products/category/77', id: 134 }
          ],
        },
      ],
    },
    {
      title: 'Contact Us',
      url: '/contact-us'
    },
  ],
};