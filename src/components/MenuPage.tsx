import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Product, ProductCategory } from '../lib/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuPageProps {
  products: Product[];
  onProductClick: (productId: string) => void;
}

export function MenuPage({ products, onProductClick }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center mb-8">Our Menu</h1>

      {/* Filter Bar */}
      <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
            >
              All Items
            </Button>
            <Button
              variant={selectedCategory === 'hot' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('hot')}
            >
              Hot Drinks
            </Button>
            <Button
              variant={selectedCategory === 'cold' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('cold')}
            >
              Cold Drinks
            </Button>
            <Button
              variant={selectedCategory === 'bakery' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('bakery')}
            >
              Bakery
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No items found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onProductClick(product.id)}
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      Popular
                    </div>
                  )}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        onProductClick(product.id);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
