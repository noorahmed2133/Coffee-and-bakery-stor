import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage, CartItem } from './components/CartPage';
import { products, Product } from './lib/products';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

type Page = 'home' | 'menu' | 'product' | 'cart' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const popularProducts = products.filter(p => p.popular);
  const selectedProduct = selectedProductId 
    ? products.find(p => p.id === selectedProductId) || null
    : null;

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: Product, customizations: any, quantity: number) => {
    const newItem: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      customizations,
    };

    setCartItems(prev => [...prev, newItem]);
    toast.success(`${product.name} added to cart!`);
    
    // Navigate back to menu
    setCurrentPage('menu');
    window.scrollTo(0, 0);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    toast.success('Item removed from cart');
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartItemsCount={totalCartItems}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
            popularProducts={popularProducts}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            products={products}
            onProductClick={handleProductClick}
          />
        )}

        {currentPage === 'product' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setCurrentPage('menu')}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="mb-6">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Welcome to Cozy Coffee & Bakery, where passion meets perfection in every cup and every bite. 
                Since 2020, we've been dedicated to serving our community with the finest coffee and freshly 
                baked goods.
              </p>
              <p className="text-muted-foreground mb-4">
                Our expert baristas craft each drink with precision and care, using only the highest quality 
                beans sourced from sustainable farms around the world. Our bakers start early each morning to 
                ensure that every pastry, cake, and bread is fresh and delicious.
              </p>
              <p className="text-muted-foreground">
                We believe that great coffee and good food bring people together. That's why we've created a 
                warm and welcoming space where friends can gather, remote workers can focus, and everyone can 
                enjoy a moment of comfort in their day.
              </p>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="mb-6">Contact Us</h1>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2">Location</h3>
                <p className="text-muted-foreground">
                  123 Coffee Street<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 7:00 AM - 8:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 9:00 PM
                </p>
              </div>
              <div>
                <h3 className="mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Phone: (555) 123-4567<br />
                  Email: hello@cozycoffee.com
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}