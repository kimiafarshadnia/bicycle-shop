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
            { title: 'Road Bikes', url: '/products/category/75', id: 122 },
            { title: 'Mountain Bikes', url: '/products/category/75', id: 122 },
            { title: 'Gravel Bikes', url: '/products/category/75', id: 122 },
            { title: 'City and Hybrid Bikes', url: '/products/category/75', id: 122 },
            { title: 'Kids Bikes', url: '/products/category/75', id: 122 },
            { title: 'Folding Bikes', url: '/products/category/75', id: 122 },
            { title: 'E-Bikes and Scooters', url: '/products/category/75', id: 122 },
            { title: 'Time Trail and Triathlon', url: '/products/category/75', id: 122 },
            { title: 'Bike Frame', url: '/products/category/75', id: 122 },
            { title: 'Warehouse Clearance', url: '/products/category/75', id: 122 },
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
            { title: 'Apparel', url: '/products/category/76', id: 122 },
            { title: 'Helmets', url: '/products/category/76', id: 113 },
            { title: 'Cycling Computers and Sensors', url: '/products/category/76', id: 115 },
            { title: 'Lights', url: '/products/category/76', id: 114 },
            { title: 'Sunglasses', url: '/products/category/76', id: 115 },
            { title: 'Bicycle Travel Case and Bags', url: '/products/category/76', id: 121 },
            { title: 'Bottels and Bottle Cages', url: '/products/category/76', id: 115 },
            { title: 'Pedals & Shoes', url: '/products/category/76', id: 130 },
            { title: 'Bike Maintenance', url: '/products/category/76', id: 119 },
            { title: 'Bike trainer', url: '/products/category/76', id: 120 },
            { title: 'Bike Racks & Stands', url: '/products/category/76', id: 123 },
            { title: 'Child Seat and Strollers', url: '/products/category/76', id: 115 },
            { title: 'Pumps', url: '/products/category/76', id: 124 },
            {title: 'Other Accessories', url: '/products/category/76', id: 111},
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
            {title: 'Wheels, Tires and Tubes', url: '/products/category/77', id: 111},
            {title: 'Wheels and Spares', url: '/products/category/77', id: 111},
            {title: 'Tires and Spares', url: '/products/category/77', id: 111},
            {title: 'Inner tubes and Spares', url: '/products/category/77', id: 111},
            { title: 'Drivetrains', url: '/products/category/77', id: 127 },
            {title: 'Seating', url: '/products/category/77', id: 111},
            {title: 'Steering', url: '/products/category/77', id: 111},
            {title: 'Pedals', url: '/products/category/77', id: 111},
            {title: 'Forks', url: '/products/category/77', id: 111},
            {title: 'Cables and Spares', url: '/products/category/77', id: 111},
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