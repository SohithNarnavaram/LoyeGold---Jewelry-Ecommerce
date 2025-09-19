import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Rose Gold Pendant Necklace",
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviewCount: 156,
    imageUrl: product1,
    isNew: true,
    isSale: true,
    category: "necklaces"
  },
  {
    id: 2,
    name: "Diamond Gold Earrings",
    price: 149,
    rating: 4.9,
    reviewCount: 203,
    imageUrl: product2,
    isNew: false,
    isSale: false,
    category: "earrings"
  },
  {
    id: 3,
    name: "White Gold Gemstone Ring",
    price: 199,
    originalPrice: 250,
    rating: 4.7,
    reviewCount: 89,
    imageUrl: product3,
    isNew: false,
    isSale: true,
    category: "rings"
  },
  {
    id: 4,
    name: "Charm Bracelet Collection",
    price: 79,
    rating: 4.6,
    reviewCount: 124,
    imageUrl: product4,
    isNew: true,
    isSale: false,
    category: "bracelets"
  },
  {
    id: 5,
    name: "Platinum Tennis Bracelet",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 78,
    imageUrl: product1,
    isNew: false,
    isSale: true,
    category: "bracelets"
  },
  {
    id: 6,
    name: "Emerald Drop Earrings",
    price: 189,
    rating: 4.8,
    reviewCount: 142,
    imageUrl: product2,
    isNew: true,
    isSale: false,
    category: "earrings"
  },
  {
    id: 7,
    name: "Gold Infinity Ring",
    price: 129,
    originalPrice: 160,
    rating: 4.7,
    reviewCount: 167,
    imageUrl: product3,
    isNew: false,
    isSale: true,
    category: "rings"
  },
  {
    id: 8,
    name: "Pearl Chain Necklace",
    price: 159,
    rating: 4.8,
    reviewCount: 93,
    imageUrl: product4,
    isNew: true,
    isSale: false,
    category: "necklaces"
  },
  {
    id: 9,
    name: "Ruby Stud Earrings",
    price: 219,
    originalPrice: 280,
    rating: 4.9,
    reviewCount: 234,
    imageUrl: product1,
    isNew: false,
    isSale: true,
    category: "earrings"
  },
  {
    id: 10,
    name: "Sapphire Engagement Ring",
    price: 499,
    rating: 5.0,
    reviewCount: 67,
    imageUrl: product2,
    isNew: true,
    isSale: false,
    category: "rings"
  },
  {
    id: 11,
    name: "Gold Link Bracelet",
    price: 109,
    originalPrice: 140,
    rating: 4.6,
    reviewCount: 156,
    imageUrl: product3,
    isNew: false,
    isSale: true,
    category: "bracelets"
  },
  {
    id: 12,
    name: "Diamond Cross Pendant",
    price: 249,
    rating: 4.8,
    reviewCount: 89,
    imageUrl: product4,
    isNew: true,
    isSale: false,
    category: "necklaces"
  }
];

export const getAllProducts = () => products;

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};