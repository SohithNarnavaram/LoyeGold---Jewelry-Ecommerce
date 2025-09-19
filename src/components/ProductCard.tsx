import { useState } from 'react';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviewCount, 
  imageUrl, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      imageUrl,
    });
  };

  const handleToggleFavorite = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id,
        name,
        price,
        imageUrl,
      });
    }
  };

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className="group card-luxury bg-card overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={handleProductClick}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
              New
            </span>
          )}
          {isSale && (
            <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Sale
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur hover:bg-white transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleToggleFavorite();
          }}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isFavorite(id) ? 'fill-primary text-primary' : 'text-muted-foreground'
            }`} 
          />
        </Button>
        
        {/* Quick Add Button */}
        <div className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button 
            className="btn-luxury px-4 py-2 rounded-full text-sm font-medium shadow-lg" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <ShoppingBag className="h-3 w-3 mr-1" />
            Quick Add
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 
            className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors cursor-pointer"
            onClick={handleProductClick}
          >
            {name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({reviewCount})
            </span>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;