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
      categories: [
        {
          title: 'category a',
          links: [
            { title: 'Link 1', url: '/products' },
            { title: 'Link 2', url: '/link2' },
            { title: 'Link 3', url: '/link3' },
          ],
        },
        {
          title: 'category b',
          links: [
            { title: 'Link 4', url: '/link4' },
            { title: 'Link 5', url: '/link5' },
            { title: 'Link 6', url: '/link6' },
          ],
        },
        {
          title: 'category c',
          links: [
            { title: 'Link 7', url: '/link7' },
            { title: 'Link 8', url: '/link8' },
            { title: 'Link 9', url: '/link9' },
          ],
        },
      ],
    },
    {
      title: 'Accessories',
      categories: [
        {
          title: 'Category A',
          links: [
            { title: 'Link A1', url: '/linkA1' },
            { title: 'Link A2', url: '/linkA2' },
          ],
        },
        {
          title: 'Category B',
          links: [
            { title: 'Link B1', url: '/linkB1' },
            { title: 'Link B2', url: '/linkB2' },
          ],
        },
      ],
    },
    {
      title: 'Parts',
      categories: [
        {
          title: 'Category X',
          links: [
            { title: 'Link X1', url: '/linkX1' },
            { title: 'Link X2', url: '/linkX2' },
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