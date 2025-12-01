import { Coffee, Cake, IceCream } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Product } from '../lib/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onProductClick: (productId: string) => void;
  popularProducts: Product[];
}

export function HomePage({ onNavigate, onProductClick, popularProducts }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1693540553111-f66c59eb2459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYWtlcnklMjBjYWZlfGVufDF8fHx8MTc2MTA2ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Coffee and bakery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl mb-4 text-white">Welcome to Cozy Coffee & Bakery</h1>
            <p className="text-xl mb-8 text-white/90">
              Start your day with the perfect cup of coffee and freshly baked treats
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => onNavigate('menu')}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center mb-12">Our Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('menu')}>
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Coffee className="w-24 h-24 text-primary" />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-2">Hot Drinks</h3>
                <p className="text-muted-foreground">Warm your soul with our specialty coffees</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('menu')}>
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-blue-200/30 to-blue-100/20 flex items-center justify-center">
                <IceCream className="w-24 h-24 text-blue-600" />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-2">Cold Drinks</h3>
                <p className="text-muted-foreground">Refresh yourself with iced beverages</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('menu')}>
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-amber-200/30 to-amber-100/20 flex items-center justify-center">
                <Cake className="w-24 h-24 text-amber-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-2">Bakery</h3>
                <p className="text-muted-foreground">Freshly baked goods made daily</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Items */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Popular Items</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-2">{product.name}</h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary">${product.price.toFixed(2)}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductClick(product.id);
                        }}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
