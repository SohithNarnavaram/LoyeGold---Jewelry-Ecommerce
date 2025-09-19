import CategoryCard from './CategoryCard';
import whiteJewelryImage from '@/assets/white-jewelry.jpg';
import goldJewelryImage from '@/assets/gold-jewelry.jpg';
import platinumJewelryImage from '@/assets/platinum-jewelry.jpg';
import customJewelryImage from '@/assets/custom-jewelry.jpg';

const Categories = () => {
  const categories = [
    {
      title: "White Jewelry",
      description: "Elegant white gold and silver pieces",
      imageUrl: whiteJewelryImage,
      itemCount: 120,
      gradient: "bg-gradient-to-br from-slate-500/60 to-slate-700/60"
    },
    {
      title: "Gold Jewelry",
      description: "Classic gold collections",
      imageUrl: goldJewelryImage,
      itemCount: 185,
      gradient: "bg-gradient-to-br from-amber-500/60 to-yellow-600/60"
    },
    {
      title: "Platinum Jewelry",
      description: "Premium platinum designs",
      imageUrl: platinumJewelryImage,
      itemCount: 95,
      gradient: "bg-gradient-to-br from-gray-400/60 to-gray-600/60"
    },
    {
      title: "Custom Jewelry",
      description: "Personalized pieces made just for you",
      imageUrl: customJewelryImage,
      itemCount: 50,
      gradient: "bg-gradient-to-br from-primary/60 to-accent/60"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Shop by Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections of fine jewelry, each piece carefully selected 
            to complement your unique style and personality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              itemCount={category.itemCount}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;