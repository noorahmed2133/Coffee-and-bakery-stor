export type ProductCategory = 'hot' | 'cold' | 'bakery';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  popular?: boolean;
}

export const products: Product[] = [
  // Hot Drinks
  {
    id: '1',
    name: 'Classic Latte',
    description: 'Smooth espresso with steamed milk and a light layer of foam',
    price: 4.50,
    category: 'hot',
    image: 'https://images.unsplash.com/photo-1638202425698-6e08b964e669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjEwMTYzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Rich espresso topped with velvety foam and a dusting of cocoa',
    price: 4.25,
    category: 'hot',
    image: 'https://images.unsplash.com/photo-1708430651927-20e2e1f1e8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlfGVufDF8fHx8MTc2MDk4NzMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '3',
    name: 'Espresso',
    description: 'Bold and intense shot of pure coffee perfection',
    price: 3.00,
    category: 'hot',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZXxlbnwxfHx8fDE3NjEwMjIzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    name: 'Caramel Macchiato',
    description: 'Espresso marked with vanilla and topped with caramel drizzle',
    price: 5.25,
    category: 'hot',
    image: 'https://images.unsplash.com/photo-1638202425698-6e08b964e669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjEwMTYzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Cold Drinks
  {
    id: '5',
    name: 'Iced Coffee',
    description: 'Refreshing cold brew served over ice',
    price: 4.00,
    category: 'cold',
    image: 'https://images.unsplash.com/photo-1521572763880-ca232ebd0126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZHxlbnwxfHx8fDE3NjEwMDU3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '6',
    name: 'Caramel Frappuccino',
    description: 'Blended coffee with caramel, ice, and whipped cream',
    price: 5.50,
    category: 'cold',
    image: 'https://images.unsplash.com/photo-1637178036445-f1e3c8c37095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFwcHVjY2lubyUyMGRyaW5rfGVufDF8fHx8MTc2MDk3NzI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '7',
    name: 'Iced Vanilla Latte',
    description: 'Cold espresso with milk and sweet vanilla syrup',
    price: 4.75,
    category: 'cold',
    image: 'https://images.unsplash.com/photo-1521572763880-ca232ebd0126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZHxlbnwxfHx8fDE3NjEwMDU3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '8',
    name: 'Mocha Frappuccino',
    description: 'Chocolate and coffee blended with ice and topped with whipped cream',
    price: 5.75,
    category: 'cold',
    image: 'https://images.unsplash.com/photo-1637178036445-f1e3c8c37095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFwcHVjY2lubyUyMGRyaW5rfGVufDF8fHx8MTc2MDk3NzI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Bakery
  {
    id: '9',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French pastry baked to golden perfection',
    price: 3.50,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzYxMDU0NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '10',
    name: 'Blueberry Muffin',
    description: 'Moist muffin loaded with fresh blueberries',
    price: 3.75,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1592345936479-8faba698aa01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWZmaW4lMjBiYWtlcnl8ZW58MXx8fHwxNzYxMDY4MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '11',
    name: 'Chocolate Cake',
    description: 'Rich, decadent chocolate cake with smooth frosting',
    price: 5.00,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1644158776192-2d24ce35da1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjA5OTQxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '12',
    name: 'Cinnamon Roll',
    description: 'Warm, gooey cinnamon roll with cream cheese frosting',
    price: 4.25,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1650626105236-2e3b1f933fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGwlMjBwYXN0cnl8ZW58MXx8fHwxNzYwOTU2OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
