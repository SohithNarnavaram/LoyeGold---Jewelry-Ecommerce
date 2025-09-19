import { Star, Sparkles, Crown, Gem, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const CustomJewelry = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your custom jewelry request! We will contact you within 24 hours to discuss your design.');
  };

  const customServices = [
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: "Engagement Rings",
      description: "Create the perfect symbol of your love with a custom engagement ring designed just for you.",
      features: ["Diamond selection", "Setting design", "Metal choice", "Personal engraving"]
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Wedding Bands",
      description: "Matching wedding bands that tell your unique love story with personalized details.",
      features: ["Matching sets", "Custom engraving", "Metal mixing", "Stone settings"]
    },
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: "Statement Pieces",
      description: "Bold, one-of-a-kind jewelry pieces that reflect your personal style and personality.",
      features: ["Unique designs", "Gemstone selection", "Custom sizing", "Artistic elements"]
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Memorial Jewelry",
      description: "Beautiful pieces to honor loved ones with meaningful designs and personal touches.",
      features: ["Memory incorporation", "Custom inscriptions", "Symbolic elements", "Heirloom quality"]
    }
  ];

  const designProcess = [
    {
      step: "1",
      title: "Consultation",
      description: "We discuss your vision, style preferences, and budget to understand your perfect piece."
    },
    {
      step: "2", 
      title: "Design",
      description: "Our artisans create detailed sketches and 3D renderings of your custom jewelry."
    },
    {
      step: "3",
      title: "Approval", 
      description: "Review and approve the final design before we begin crafting your piece."
    },
    {
      step: "4",
      title: "Creation",
      description: "Expert craftsmen bring your design to life using the finest materials and techniques."
    },
    {
      step: "5",
      title: "Delivery",
      description: "Your completed custom jewelry is carefully inspected and delivered to you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Custom Jewelry Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your dreams into reality with our bespoke jewelry design service. 
            Every piece is handcrafted to tell your unique story.
          </p>
          <Button 
            size="lg" 
            className="btn-luxury px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Custom Design
          </Button>
        </div>

        {/* Custom Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Custom Jewelry Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customServices.map((service, index) => (
              <Card key={index} className="card-luxury p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Star className="h-3 w-3 text-accent fill-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Our Design Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {designProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Custom Creations Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-lg overflow-hidden card-luxury group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Gem className="h-12 w-12 text-primary" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="px-8"
            >
              View More Examples
            </Button>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="max-w-4xl mx-auto">
          <div className="card-luxury p-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">
              Start Your Custom Design
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" placeholder="e.g., ₹1,50,000 - ₹4,00,000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jewelryType">Type of Jewelry</Label>
                <Input id="jewelryType" placeholder="e.g., Engagement Ring, Necklace, Bracelet" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Desired Timeline</Label>
                <Input id="timeline" placeholder="e.g., 6 weeks, by December" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Design Description</Label>
                <Textarea 
                  id="description" 
                  rows={5} 
                  placeholder="Describe your vision, preferred materials, style inspiration, and any special requirements..."
                  required 
                />
              </div>

              <Button type="submit" className="w-full btn-luxury py-6 text-lg">
                Submit Custom Design Request
              </Button>
            </form>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Why Choose LoyeGold for Custom Jewelry?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Over 20 years of experience creating exquisite custom jewelry pieces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-muted-foreground">
                Only the finest metals, gemstones, and diamonds sourced ethically.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                We stand behind our work with comprehensive warranty and service.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomJewelry;