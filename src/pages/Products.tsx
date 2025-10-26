import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Clock, Users, CheckCircle2, Gift } from "lucide-react";
import { toast } from "sonner";
import incubatorImage from "@/assets/incubator.png";
import resortImage from "@/assets/resort.webp";
import resort2Image from "@/assets/resort2.webp";
import fruitImage from "@/assets/fruit.webp";
import fruit2Image from "@/assets/fruit2.webp";
import fruit3Image from "@/assets/fruit3.webp";

const Products = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState("");
  const [notifyEmail, setNotifyEmail] = useState("");

  const products = [
    {
      id: 1,
      name: "Manvaasam Incubator",
      description: "Complete egg incubation solution with online guidance and support",
      price: "₹2,999.00",
      image: incubatorImage,
      features: ["Hatching Period: 21 days", "80+ eggs capacity", "Online guidance", "1 Year replacement"],
      badge: "Popular"
    },
    {
      id: 2,
      name: "Manvaasam Resort - Farm House",
      description: "Experience farm life with resort amenities - perfect for a day getaway",
      price: "₹499.00",
      originalPrice: "₹999.00",
      image: resortImage,
      features: ["₹499/person", "Farm experience", "Resort amenities", "50% discount"],
      badge: "Best Offer"
    },
    {
      id: 3,
      name: "Organic Fruit Basket",
      description: "Handpicked selection of 10+ seasonal organic fruits from our farm",
      price: "₹1,299.00",
      image: fruitImage,
      features: ["Fresh Daily Harvest", "Chemical-Free", "Home Delivery", "150+ varieties"],
      badge: "Fresh"
    },
  ];

  const handlePurchase = (productName: string) => {
    setSelectedProduct(productName);
    setQuantity("");
    setDialogOpen(true);
  };

  const handleConfirmPurchase = () => {
    if (!quantity || parseInt(quantity) <= 0) {
      toast.error("Please enter a valid quantity");
      return;
    }

    const product = products.find(p => p.name === selectedProduct);
    const message = `Hi, I would like to order:\n\nProduct: ${selectedProduct}\nQuantity: ${quantity}\nPrice: ${product?.price}\n\nPlease confirm my order.`;
    const whatsappUrl = `https://wa.me/919344374664?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setDialogOpen(false);
    
    toast.success("Redirecting to WhatsApp...", {
      description: "Please complete your order via WhatsApp"
    });
  };

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      toast.success("Subscribed!", {
        description: "You'll receive notifications about new products",
      });
      setNotifyEmail("");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl opacity-90">
              Premium organic products and experiences from our farm
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {product.badge}
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold text-primary">{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-lg text-muted-foreground line-through">{product.originalPrice}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => handlePurchase(product.name)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Purchase Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Special Offers */}
          <div className="bg-gradient-primary text-white rounded-lg p-8 mb-16 text-center animate-fade-in">
            <Gift className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Special Group Discount!</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Book for groups of 5 or more and get 20% off on all packages. Perfect for family outings and corporate retreats!
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:scale-105 transition-transform">
              Contact for Group Booking
            </Button>
          </div>

          {/* Newsletter Section */}
          <Card className="max-w-2xl mx-auto bg-muted">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Get Notified About New Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNotify} className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purchase Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Order</DialogTitle>
            <DialogDescription>
              {selectedProduct === "Manvaasam Incubator" 
                ? "How many incubators would you like to order?"
                : "How many people will be staying at the resort?"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="quantity">
                {selectedProduct === "Manvaasam Incubator" ? "Number of Incubators" : "Number of People"}
              </Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmPurchase}>
              Send Order via WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
