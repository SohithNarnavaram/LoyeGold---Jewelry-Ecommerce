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
    <div className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer">
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-70`}></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif font-bold">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
            <div className="text-white/80 text-xs">{itemCount} pieces available</div>
          </div>
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-fit bg-white/20 backdrop-blur text-white border-white/30 transition-all duration-500 group-hover:bg-white/30"
          >
            Shop Collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;