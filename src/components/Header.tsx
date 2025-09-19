import { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold gradient-rose bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Loyegold
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              White Jewelry
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Gold Jewelry
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Platinum Jewelry
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Custom
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
              <Heart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                2
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-4 w-4" />
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {state.totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-2 py-4 space-y-2">
              <a href="#" className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md">
                White Jewelry
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md">
                Gold Jewelry
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md">
                Platinum Jewelry
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md">
                Custom
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    2
                  </span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                  onClick={toggleCart}
                >
                  <ShoppingBag className="h-4 w-4" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                      {state.totalItems}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;