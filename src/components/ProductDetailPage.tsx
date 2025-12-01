import { useState } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Product } from '../lib/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, customizations: any, quantity: number) => void;
}

export function ProductDetailPage({ product, onBack, onAddToCart }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [milkType, setMilkType] = useState('whole');
  const [sugarLevel, setSugarLevel] = useState('regular');
  const [extraFlavor, setExtraFlavor] = useState('none');

  const handleAddToCart = () => {
    const customizations = product.category !== 'bakery' 
      ? { milkType, sugarLevel, extraFlavor }
      : {};
    
    onAddToCart(product, customizations, quantity);
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6"
        onClick={onBack}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Menu
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </CardContent>
          </Card>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <div className="text-3xl text-primary mb-8">${product.price.toFixed(2)}</div>

          {/* Customization Options (only for drinks) */}
          {product.category !== 'bakery' && (
            <div className="space-y-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4">Customize Your Drink</h3>

                  {/* Milk Type */}
                  <div className="mb-6">
                    <Label className="mb-3 block">Milk Type</Label>
                    <RadioGroup value={milkType} onValueChange={setMilkType}>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="whole" id="whole" />
                        <Label htmlFor="whole" className="cursor-pointer">Whole Milk</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="skim" id="skim" />
                        <Label htmlFor="skim" className="cursor-pointer">Skim Milk</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="almond" id="almond" />
                        <Label htmlFor="almond" className="cursor-pointer">Almond Milk (+$0.50)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oat" id="oat" />
                        <Label htmlFor="oat" className="cursor-pointer">Oat Milk (+$0.50)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sugar Level */}
                  <div className="mb-6">
                    <Label className="mb-3 block">Sugar Level</Label>
                    <RadioGroup value={sugarLevel} onValueChange={setSugarLevel}>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="none" id="none" />
                        <Label htmlFor="none" className="cursor-pointer">No Sugar</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="light" id="light" />
                        <Label htmlFor="light" className="cursor-pointer">Light Sugar</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="regular" id="regular" />
                        <Label htmlFor="regular" className="cursor-pointer">Regular Sugar</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="extra" id="extra" />
                        <Label htmlFor="extra" className="cursor-pointer">Extra Sugar</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Extra Flavor */}
                  <div>
                    <Label className="mb-3 block">Extra Flavor</Label>
                    <RadioGroup value={extraFlavor} onValueChange={setExtraFlavor}>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="none" id="flavor-none" />
                        <Label htmlFor="flavor-none" className="cursor-pointer">None</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="vanilla" id="vanilla" />
                        <Label htmlFor="vanilla" className="cursor-pointer">Vanilla (+$0.75)</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="caramel" id="caramel" />
                        <Label htmlFor="caramel" className="cursor-pointer">Caramel (+$0.75)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hazelnut" id="hazelnut" />
                        <Label htmlFor="hazelnut" className="cursor-pointer">Hazelnut (+$0.75)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3 bg-muted rounded-lg p-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={decrementQuantity}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={incrementQuantity}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
            <p>All items are prepared fresh to order. Allergen information available upon request.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
