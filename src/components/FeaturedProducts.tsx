import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { getAllProducts, getProductsByCategory } from '@/data/products';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const allProducts = getAllProducts();
  const products = getProductsByCategory(activeCategory).slice(0, 8);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'rings', name: 'Rings' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked favorites that our customers love most
            </p>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'text-primary border-b border-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <Button 
            onClick={() => navigate('/')} 
            className="btn-luxury px-8 py-3 rounded-lg font-medium transition-all duration-300 mr-4"
          >
            View All Products
          </Button>
          <Button 
            onClick={() => navigate('/custom-jewelry')} 
            variant="outline"
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Create Custom Design
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;