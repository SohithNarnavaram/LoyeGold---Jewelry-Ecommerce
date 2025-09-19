import ProductCard from './ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Rose Gold Pendant Necklace",
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviewCount: 156,
      imageUrl: product1,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Diamond Gold Earrings",
      price: 149,
      rating: 4.9,
      reviewCount: 203,
      imageUrl: product2,
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "White Gold Gemstone Ring",
      price: 199,
      originalPrice: 250,
      rating: 4.7,
      reviewCount: 89,
      imageUrl: product3,
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "Charm Bracelet Collection",
      price: 79,
      rating: 4.6,
      reviewCount: 124,
      imageUrl: product4,
      isNew: true,
      isSale: false
    }
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
          
          <div className="flex gap-3">
            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors border-b border-primary">
              All
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Necklaces
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Rings
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Earrings
            </button>
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
        
        <div className="text-center mt-12">
          <button className="btn-luxury px-8 py-3 rounded-lg font-medium transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;