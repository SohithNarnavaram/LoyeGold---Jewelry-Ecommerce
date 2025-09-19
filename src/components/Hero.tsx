import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-jewelry.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Discover Your
                <span className="block gradient-rose bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Perfect Jewelry
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Elegant costume and fashion jewelry crafted with precision and designed to make every moment special.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-luxury shimmer">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-luxury">
                View Collections
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden card-luxury">
              <img
                src={heroImage}
                alt="Luxury jewelry collection featuring elegant necklaces, rings, and earrings"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur rounded-xl p-4 card-luxury">
              <div className="text-sm font-medium text-muted-foreground">Starting from</div>
              <div className="text-2xl font-bold text-primary">$29</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl p-4 card-luxury">
              <div className="text-sm font-medium text-muted-foreground">Free shipping</div>
              <div className="text-lg font-semibold text-accent">Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;