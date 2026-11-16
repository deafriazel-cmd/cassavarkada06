export type ProductSize = { name: string; price: number }

export type Product = {
  id: string
  name: string
  badge: string
  img: string
  alt: string
  detailsLabel: string
  desc: string
  ingredients: string[]
  sizesLabel: string
  sizes: ProductSize[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'cassava-cake',
    name: 'Cassava Cake',
    badge: 'Main Product',
    img: '/img/products/cassava-cake.jpg',
    alt: 'A baked cassava cake topped with golden, caramelized shredded cheese',
    detailsLabel: 'ingredients, prices',
    desc: 'Our signature treat: soft, chewy, creamy cassava cake with a golden, caramelized cheesy top. Made with grated kamoteng kahoy, coconut, and rich dairy, then baked until the top turns irresistibly golden. Sweet, satisfying, and perfect for sharing with your barkada.',
    ingredients: [
      'Alaska Evap',
      'Brown Sugar',
      'Coconut',
      'Star Margarine',
      'Cheese',
      'Condensed Milk',
      'Kamoteng Kahoy',
    ],
    sizesLabel: 'Available sizes and prices',
    sizes: [
      { name: 'CasSolo', price: 10 },
      { name: 'CasSalo', price: 50 },
      { name: 'CasFam', price: 100 },
    ],
  },
  {
    id: 'kwek-kwek',
    name: 'Kwek-Kwek',
    badge: 'Street Snack',
    img: '/img/products/kwek-kwek.jpg',
    alt: 'Glossy orange battered kwek-kwek quail eggs on skewers in paper cups',
    detailsLabel: 'ingredients and price',
    desc: 'Crispy, bright orange battered quail eggs, fried until golden and best enjoyed hot. A classic street snack that is cheap, crunchy, and perfect for sharing with your barkada. One batch is good for 100 pieces.',
    ingredients: [
      'Quail Egg',
      'Flour',
      'Corn Starch',
      'Salt',
      'Food Coloring (Orange)',
      'Calumet',
      'Sugar',
    ],
    sizesLabel: 'Price (good for 100 pcs)',
    sizes: [{ name: 'Each', price: 5 }],
  },
  {
    id: 'dynamite',
    name: 'Dynamite',
    badge: 'Street Snack',
    img: '/img/products/dynamite.jpg',
    alt: 'Golden, crispy dynamite rolls stacked in a basket lined with paper',
    detailsLabel: 'ingredients and price',
    desc: 'Crunchy wrapped rolls packed with cheese, spicy sili, and creamy tuna filling. Small bite, big kick, and perfect for sharing with your barkada. One batch is good for 100 pieces.',
    ingredients: [
      'Cheese',
      'Sili',
      'Wrapper',
      'Century Tuna',
      'Mayonnaise',
      'Ketchup',
      'Carrots',
    ],
    sizesLabel: 'Price (good for 100 pcs)',
    sizes: [
      { name: 'Each', price: 7 },
      { name: '3 pieces', price: 20 },
    ],
  },
  {
    id: 'nachos-salad',
    name: 'Nachos Salad',
    badge: 'Street Snack',
    img: '/img/products/nachos-salad.jpg',
    alt: 'Nachos topped with cheese sauce, seasoned ground meat, tomato, cucumber and a creamy drizzle',
    detailsLabel: 'ingredients, prices',
    desc: 'Crunchy nachos piled with savory pork giniling, fresh cucumber and tomatoes, melty cheese, and a creamy cheese whiz and mayo drizzle. Choose Regular or go Overload. One batch is good for 20 orders.',
    ingredients: [
      'Mayonnaise',
      'Cheez Whiz',
      'Alaska Evap',
      'Cucumber',
      'Tomatoes',
      'Mr. Chips or Nachos',
      'Pork Giniling',
      'Cheese',
    ],
    sizesLabel: 'Sizes and prices (good for 20 orders)',
    sizes: [
      { name: 'Regular', price: 20 },
      { name: 'Overload', price: 30 },
    ],
  },
  {
    id: 'butchi',
    name: 'Butchi',
    badge: 'Street Snack',
    img: '/img/products/butchi.jpg',
    alt: 'Sesame-coated butchi balls, one cut open to show a purple ube and cheese filling',
    detailsLabel: 'ingredients, price',
    desc: 'Chewy, crispy fried rice balls rolled in toasted sesame seeds, with a sweet, gooey filling of ube, sweet potato, chocolate, or cheese. A classic merienda favorite. One batch is good for 50 pieces.',
    ingredients: [
      'Rice Flour',
      'Cheese',
      'Chocolate',
      'Sugar',
      'Ube / Sweet Potato',
      'Sesame Seed',
    ],
    sizesLabel: 'Price (good for 50 pcs)',
    sizes: [{ name: 'Each', price: 7 }],
  },
]

export const PRODUCTS_BY_ID: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((product) => [product.id, product]),
)

export function formatPeso(amount: number) {
  return '₱' + amount.toLocaleString('en-PH')
}
