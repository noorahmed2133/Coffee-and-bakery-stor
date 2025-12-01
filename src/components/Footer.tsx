import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-primary" />
              <span className="font-semibold text-primary">Cozy Coffee & Bakery</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Serving the finest coffee and freshly baked goods since 2020.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Coffee Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@cozycoffee.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Cozy Coffee & Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
