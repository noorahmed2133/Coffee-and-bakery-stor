import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  customizations?: any;
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center mb-8">Shopping Cart</h1>
        <Card>
          <CardContent className="py-16 text-center">
            <p className="text-muted-foreground mb-6">Your cart is empty</p>
            <Button onClick={() => onNavigate('menu')}>
              Browse Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          ${item.price.toFixed(2)} each
                        </p>
                        
                        {/* Customizations */}
                        {item.customizations && Object.keys(item.customizations).length > 0 && (
                          <div className="text-xs text-muted-foreground mb-2">
                            {item.customizations.milkType && (
                              <span className="mr-3">Milk: {item.customizations.milkType}</span>
                            )}
                            {item.customizations.sugarLevel && (
                              <span className="mr-3">Sugar: {item.customizations.sugarLevel}</span>
                            )}
                            {item.customizations.extraFlavor && item.customizations.extraFlavor !== 'none' && (
                              <span>Flavor: {item.customizations.extraFlavor}</span>
                            )}
                          </div>
                        )}

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7"
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    {cartItems[cartItems.length - 1].id !== item.id && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mb-3" size="lg">
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onNavigate('menu')}
              >
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
