import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, TreeDeciduous, Award, Users, Clock, Star, MapPin, Search, Truck, Package, Clock3, ShieldCheck, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import heroVideoBg from "@/assets/hero-video-bg.jpg";
import fruitsImage from "@/assets/fruits.jpg";
import farmImage from "@/assets/organic-farm.jpg";
import poolImage from "@/assets/swimming-pool.jpg";
import instituteImage from "@/assets/institute.jpg";
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30" />
        <div className="absolute inset-0 bg-cover bg-center transform scale-105 animate-pulse" style={{
        backgroundImage: `url(${heroVideoBg})`,
        filter: "brightness(0.6)",
        animationDuration: "8s"
      }} />
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        
        {/* Video Play Button */}
        <button onClick={() => setIsPlaying(!isPlaying)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group" aria-label="Play video">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all animate-pulse"></div>
            
          </div>
        </button>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
              Seeds of Hope
            </h1>
            <p className="text-2xl md:text-3xl mb-4 max-w-3xl mx-auto animate-fade-in font-light" style={{
            animationDelay: "0.2s"
          }}>
              Experience Sustainable Living at Our Organic Farm Resort
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in text-white/90" style={{
            animationDelay: "0.3s"
          }}>
              Fresh, Organic, and Delivered to Your Doorstep
            </p>
            
            {/* Enhanced Search Bar */}
            

            <div className="flex flex-wrap gap-5 justify-center animate-fade-in" style={{
            animationDelay: "0.6s"
          }}>
              <Link to="/products">
                <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-2xl hover:shadow-glow transition-all">
                  Explore Products
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg bg-white/10 hover:bg-white/20 text-white border-2 border-white backdrop-blur-sm shadow-2xl">
                  Book Resort Stay
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          
        </div>
      </section>

      {/* How It Works Section */}
      

      {/* Popular Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of organic products and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            title: "Organic Fruits & Vegetables",
            count: "150+ Varieties",
            image: fruitsImage,
            color: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20"
          }, {
            title: "Green Resorts",
            count: "Eco-Friendly Stays",
            image: poolImage,
            color: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/20 dark:to-teal-900/20"
          }, {
            title: "4 Acre Organic Farm",
            count: "Farm Tours & Stays",
            image: farmImage,
            color: "bg-gradient-to-br from-yellow-50 to-lime-100 dark:from-yellow-950/20 dark:to-lime-900/20"
          }, {
            title: "Swimming Pool",
            count: "Resort Amenities",
            image: poolImage,
            color: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/20 dark:to-cyan-900/20"
          }, {
            title: "Institute & Training",
            count: "AgriTech Programs",
            image: instituteImage,
            color: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-900/20"
          }, {
            title: "Farm Products",
            count: "Fresh Daily",
            image: fruitsImage,
            color: "bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/20 dark:to-rose-900/20"
          }, {
            title: "Wellness Programs",
            count: "Health & Nature",
            image: poolImage,
            color: "bg-gradient-to-br from-teal-50 to-green-100 dark:from-teal-950/20 dark:to-green-900/20"
          }, {
            title: "Events & Workshops",
            count: "Book Your Spot",
            image: farmImage,
            color: "bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950/20 dark:to-blue-900/20"
          }].map((category, index) => <Link key={index} to="/products" className="group">
                <Card className={`overflow-hidden hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer ${category.color} border-none h-full`} style={{
              animationDelay: `${index * 50}ms`
            }}>
                  <CardContent className="p-6">
                    <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <TreeDeciduous className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">4</h3>
              <p className="text-lg opacity-90">Acres of Organic Farm</p>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: "100ms"
          }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">150+</h3>
              <p className="text-lg opacity-90">Varieties of Fruits</p>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">1000+</h3>
              <p className="text-lg opacity-90">Happy Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Visitors Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people who have visited Manvaasam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: "Priya Sharma",
            role: "Nature Enthusiast",
            content: "The organic farm tour was incredible! The freshness of the fruits and the peaceful environment made it a perfect weekend getaway.",
            rating: 5
          }, {
            name: "Rajesh Kumar",
            role: "Agricultural Student",
            content: "The institute's training programs are top-notch. I learned so much about sustainable farming practices. Highly recommended!",
            rating: 5
          }, {
            name: "Anita Patel",
            role: "Family Visitor",
            content: "Our family had an amazing time at the resort. The pool, the gardens, and the organic food - everything was perfect!",
            rating: 5
          }].map((testimonial, index) => <Card key={index} className="hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to frequently asked questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What products do you deliver?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We deliver fresh organic fruits, vegetables, and farm products. We also offer farm stay packages, resort day passes, and institute training programs. All our produce is grown sustainably on our 4-acre organic farm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">How do I book a farm stay or resort visit?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can book directly through our Products page. Simply select your desired package, create an account or login, and complete the booking. Our team will contact you to confirm your reservation within 24 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What are your delivery hours?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We deliver fresh produce daily between 7 AM to 7 PM. Orders placed before 2 PM are eligible for same-day delivery. Weekend deliveries are also available for your convenience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What makes your farm organic and sustainable?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our 4-acre farm uses zero chemical pesticides, practices natural composting, crop rotation, and water conservation. We're committed to sustainable agriculture and maintaining biodiversity with 150+ fruit varieties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you offer group discounts?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Groups of 5 or more receive 20% off on farm stays and resort packages. This is perfect for family outings, corporate retreats, and educational tours. Contact us for custom group packages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-muted rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Don't hesitate to reach out. Our friendly team is here to help you!
              </p>
              <Link to="/about">
                <Button size="lg" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white bg-green-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Nature?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your visit today and immerse yourself in organic living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-10 shadow-lg hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90">
                Explore Products
              </Button>
            </Link>
            <Link to="/services">
              
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;