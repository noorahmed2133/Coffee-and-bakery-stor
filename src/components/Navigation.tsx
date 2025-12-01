import { Coffee, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemsCount: number;
}

export function Navigation({ currentPage, onNavigate, cartItemsCount }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Coffee className="w-8 h-8 text-primary" />
            <span className="font-semibold text-primary">Cozy Coffee & Bakery</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className={`transition-colors ${
                currentPage === 'menu'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${
                currentPage === 'contact'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Cart Icon */}
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={() => onNavigate('cart')}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
