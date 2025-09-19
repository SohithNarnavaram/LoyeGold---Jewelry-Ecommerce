import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  itemCount: number;
  gradient: string;
}

const CategoryCard = ({ title, description, imageUrl, itemCount, gradient }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl card-luxury bg-card cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-50`}></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="space-y-3 transform transition-all duration-300 group-hover:translate-y-[-4px]">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif font-bold transition-all duration-300 group-hover:text-white">{title}</h3>
            <p className="text-white/90 text-sm transition-all duration-300 group-hover:text-white/95">{description}</p>
            <div className="text-white/80 text-xs transition-all duration-300 group-hover:text-white/90">{itemCount} pieces available</div>
          </div>
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-fit bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white hover:text-foreground transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
          >
            Shop Collection
          </Button>
        </div>
      </div>
      
      {/* Smooth Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
    </div>
  );
};

export default CategoryCard;