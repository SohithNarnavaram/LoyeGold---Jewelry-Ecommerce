import { useState } from 'react';
import { Heart, User, ShoppingBag, Settings, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const UserProfile = () => {
  const { state: favoritesState } = useFavorites();
  const { state: cartState } = useCart();
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345'
  });

  const handleSaveProfile = () => {
    // In a real app, this would save to backend
    localStorage.setItem('loyegold-user', JSON.stringify(userInfo));
    alert('Profile saved successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold">{userInfo.name}</h1>
              <p className="text-muted-foreground">{userInfo.email}</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Favorites ({favoritesState.items.length})
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Orders
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="card-luxury p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="mt-6 btn-luxury" onClick={handleSaveProfile}>
                  Save Changes
                </Button>
              </div>

              <div className="card-luxury p-6">
                <h2 className="text-xl font-semibold mb-4">Account Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{favoritesState.items.length}</div>
                    <div className="text-sm text-muted-foreground">Favorites</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{cartState.totalItems}</div>
                    <div className="text-sm text-muted-foreground">Cart Items</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-muted-foreground">Orders</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              {favoritesState.items.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
                  <p className="text-muted-foreground">
                    Start browsing and add items to your favorites
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoritesState.items.map((item) => (
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rating={4.5}
                      reviewCount={100}
                      imageUrl={item.imageUrl}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                <p className="text-muted-foreground">
                  Your order history will appear here once you make your first purchase
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserProfile;