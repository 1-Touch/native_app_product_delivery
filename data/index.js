// Images
import product1 from '../assets/products/prod1.jpg';
import product2 from '../assets/products/prod2.jpg';
import product3 from '../assets/products/prod3.jpg';
import product4 from '../assets/products/prod4.jpg';
import liked1 from '../assets/products/liked1.jpg';
import liked2 from '../assets/products/liked2.jpg';
import liked3 from '../assets/products/liked3.jpg';
import liked4 from '../assets/products/liked4.jpg';
import liked5 from '../assets/products/liked5.jpg';
import offer1 from '../assets/products/offer1.jpg';
import offer2 from '../assets/products/offer2.jpg';
import offer3 from '../assets/products/offer3.jpg';
import offer4 from '../assets/products/offer4.jpg';
import offer5 from '../assets/products/offer5.jpg';

// Data
export const products = [
  {
    id: 1,
    name: 'Pink Top',
    image: product1,
    price: '200',
    discount: '20',
    category: {
      id: 10,
      subcategory: 'formals',
    },
  },
  {
    id: 2,
    name: 'Blue Skirt',
    image: product2,
    price: '400',
    discount: '30',
    category: {
      id: 11,
      subcategory: 'casuals',
    },
  },
  {
    id: 3,
    name: 'Dry Fit T-shirt',
    image: product3,
    price: '1200',
    discount: '50',
    category: {
      id: 12,
      subcategory: 'casuals',
    },
  },
  {
    id: 4,
    name: 'Skin Fit Denims Pack 3',
    image: product4,
    price: '800',
    discount: '10',
    category: {
      id: 13,
      subcategory: 'casuals',
    },
  },
  {
    id: 5,
    name: 'Summer Wear',
    image: liked1,
    price: '960',
    discount: '35',
    category: {
      id: 15,
      subcategory: 'casuals',
    },
  },
  {
    id: 6,
    name: 'Perfume pack 2',
    image: liked2,
    price: '350',
    discount: '12',
    category: {
      id: 16,
      subcategory: 'casuals',
    },
  },
  {
    id: 7,
    name: 'Denim Jacket',
    image: liked3,
    price: '1500',
    discount: '15',
    category: {
      id: 17,
      subcategory: 'formals',
    },
  },
  {
    id: 8,
    name: 'Red heels',
    image: liked4,
    price: '8000',
    discount: '40',
    category: {
      id: 18,
      subcategory: 'formals',
    },
  },
  {
    id: 9,
    name: 'Yellow Denim',
    image: liked5,
    price: '500',
    discount: '25',
    category: {
      id: 19,
      subcategory: 'casuals',
    },
  },
];

export const categories = [
  {
    id: 1,
    name: 'electronics',
    subCategory: [
      { id: 11, name: 'Mobile' },
      { id: 12, name: 'Laptop' },
      { id: 13, name: 'DSLR' },
      { id: 14, name: 'TV' },
      { id: 15, name: 'Desktop' },
    ],
  },
  {
    id: 2,
    name: 'clothes',
    subCategory: [
      { id: 21, name: 'formals' },
      { id: 22, name: 'casuals' },
      { id: 23, name: 'sports' },
    ],
  },
  {
    id: 3,
    name: 'Baby Products',
  },
  {
    id: 4,
    name: 'Fitness',
    subCategory: [
      { id: 41, name: 'Protein' },
      { id: 42, name: 'Dumbels' },
      { id: 43, name: 'Clothes' },
    ],
  },
  {
    id: 5,
    name: 'Sports',
    subCategory: [
      { id: 51, name: 'Clothes' },
      { id: 52, name: 'Books' },
    ],
  },
  {
    id: 6,
    name: 'Groccery',
    subCategory: [
      { id: 61, name: 'Rashan' },
      { id: 62, name: 'Vegetables' },
    ],
  },
];

export const topDeals = [
  { id: 5, name: 'Summer Wear', image: liked1, price: '960', discount: '35' },
  {
    id: 6,
    name: 'Perfume pack 2',
    image: liked2,
    price: '350',
    discount: '12',
  },
  {
    id: 7,
    name: 'Denim Jacket',
    image: liked3,
    price: '1500',
    discount: '15',
  },
  { id: 8, name: 'Red heels', image: liked4, price: '8000', discount: '40' },
  {
    id: 9,
    name: 'Yellow Denim',
    image: liked5,
    price: '500',
    discount: '25',
  },
];

export const offers = [
  { id: 1, image: offer1 },
  { id: 2, image: offer2 },
  { id: 3, image: offer3 },
  { id: 4, image: offer4 },
  { id: 5, image: offer5 },
];
