import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our jewelry? Need help with an order? Our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 10AM-7PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@loyegold.in</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    123 Jewelers Street<br />
                    Karol Bagh, New Delhi 110005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Store Hours</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                    <p>Saturday: 10:00 AM - 7:00 PM</p>
                    <p>Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-luxury p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" type="tel" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us how we can help you..."
                  required 
                />
              </div>

              <Button type="submit" className="w-full btn-luxury">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What is your return policy?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day return policy for all unworn jewelry in original condition.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom jewelry?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We specialize in custom jewelry design. Contact us to discuss your vision.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                <p className="text-muted-foreground text-sm">
                  Standard shipping takes 3-7 business days across India. Express shipping available for metro cities.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Do you provide certificates for diamonds?</h3>
                <p className="text-muted-foreground text-sm">
                  All our diamonds come with certified authenticity and quality certificates.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I resize my ring?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer complimentary resizing within 30 days of purchase.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer repair services?</h3>
                <p className="text-muted-foreground text-sm">
                  We provide professional jewelry repair and maintenance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;