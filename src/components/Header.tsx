import { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();
  const { state: favoritesState } = useFavorites();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-2xl font-serif font-bold gradient-rose bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigate('/')}
            >
              Loyegold
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Profile
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary"
              onClick={() => navigate('/profile')}
            >
              <User className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary relative"
              onClick={() => navigate('/profile')}
            >
              <Heart className="h-4 w-4" />
              {favoritesState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {favoritesState.items.length}
                </span>
              )}
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
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              >
                Products
              </button>
              <button 
                onClick={() => {
                  navigate('/profile');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              >
                Profile
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => navigate('/profile')}
                >
                  <User className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                  onClick={() => navigate('/profile')}
                >
                  <Heart className="h-4 w-4" />
                  {favoritesState.items.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                      {favoritesState.items.length}
                    </span>
                  )}
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
      
      {/* Cart Sidebar */}
      <CartSidebar />
    </header>
  );
};

export default Header;