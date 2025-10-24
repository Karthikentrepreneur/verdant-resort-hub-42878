import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TreeDeciduous, Users, Star, GraduationCap, Laptop, Sprout } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Assets
// fallback poster
import fruitsImage from "@/assets/fruits.jpg";
import farmImage from "@/assets/organic-farm.jpg";
import poolImage from "@/assets/swimming-pool.jpg";
import instituteImage from "@/assets/institute.jpg";
import incubatorImage from "@/assets/incubator.png";
import resortImage from "@/assets/resort.webp";
import fruitImage from "@/assets/fruit.webp";
const Home = () => {
  return <div className="min-h-screen">
      {/* ========================= Hero (separate mobile & desktop video) ========================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Desktop video */}
        <video className="hidden md:block absolute inset-0 w-full h-full object-cover" src="/webhero.mp4" autoPlay muted loop playsInline poster="/hero-video-bg.jpg" />
        {/* Mobile video */}
        <video className="md:hidden absolute inset-0 w-full h-full object-cover" src="/mobilehero.mp4" autoPlay muted loop playsInline poster="/hero-video-bg.jpg" />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Bottom-right title content */}
        <div className="absolute right-4 bottom-20 md:right-8 md:bottom-24 z-20 max-w-xl">
          <div className="backdrop-blur-sm bg-black/40 text-white rounded-xl shadow-xl px-4 py-4 sm:px-6 sm:py-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-2xl">
              Seeds of Hope
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 font-light text-white/95">
              Experience Sustainable Living at Our Organic Farm Resort
            </p>
            
            <Link to="/products">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:scale-105 transition-transform bg-white text-foreground hover:bg-white/90">
                Book Resort Stay
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1 h-12 rounded-full overflow-hidden bg-white/20">
          <span className="block w-1 h-3 bg-white/90 animate-bounce" />
        </div>
      </section>

      {/* ========================= About Us ========================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
            <img src={farmImage} alt="Manvaasam Organic Farm" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white/90 text-foreground px-3 py-1 rounded-full text-sm shadow">
              <Sprout className="w-4 h-4" /> Organic • Sustainable • 4 Acres
            </div>
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary mb-4">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Story
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Manvaasam was born from a vision to create a sustainable ecosystem where nature and modern living coexist harmoniously. Our 4-acre organic farm is a testament to our commitment to environmental stewardship.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We cultivate over <b>150 varieties of fruits</b> using traditional organic methods, ensuring that every harvest is not just bountiful, but also healthy and environmentally responsible.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our green resort offers visitors a chance to reconnect with nature while enjoying modern amenities, all powered by sustainable practices.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border bg-card p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Manvaasam Agri</p>
                <p className="mt-1 font-semibold">Work from Farm • Resort • Gardening • Organic Fruits & Vegetables • Swimming Pool</p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Manvaasam Institute</p>
                <p className="mt-1 font-semibold">Technical Trainings • Placements • LMS • Online Courses</p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Manvaasam Tech</p>
                <p className="mt-1 font-semibold">Web & Mobile Development • Digital Marketing • Posters & Video</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about">
                <Button className="px-6">Learn More</Button>
              </Link>
              <Link to="/products">
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= Services ========================= */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore how Manvaasam supports nature-first living across agriculture, learning, and technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 Manvaasam Agri */}
            <Card className="group overflow-hidden border-none bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black/ tracking-tight text-emerald-500/90">01</span>
                  <Leaf className="w-10 h-10 opacity-80" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">MANVAASAM AGRI</h3>
                <p className="mt-2 text-muted-foreground">Work from Farm • Resort • Gardening • Organic fruits & Vegetables • Swimming Pool</p>
              </CardContent>
            </Card>

            {/* 02 Manvaasam Institute */}
            <Card className="group overflow-hidden border-none bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black/ tracking-tight text-purple-500/90">02</span>
                  <GraduationCap className="w-10 h-10 opacity-80" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">MANVAASAM INSTITUTE</h3>
                <p className="mt-2 text-muted-foreground">Technical Trainings • Placements • LMS • Online Courses</p>
              </CardContent>
            </Card>

            {/* 03 Manvaasam Tech */}
            <Card className="group overflow-hidden border-none bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950/30 dark:to-blue-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black/ tracking-tight text-indigo-500/90">03</span>
                  <Laptop className="w-10 h-10 opacity-80" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">MANVAASAM TECH</h3>
                <p className="mt-2 text-muted-foreground">Website & Mobile App Development • Digital Marketing • Posters & Video</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================= Products (3 dummy items) ========================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Handpicked organic goodness, harvested with care from our farm.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <Card className="overflow-hidden hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img src={fruitImage} alt="Organic Fruit Basket" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-white/90 text-foreground text-xs px-2 py-1 rounded-full shadow">Fresh</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Organic Fruit Basket</h3>
                  <p className="mt-2 text-muted-foreground">Handpicked selection of 10+ seasonal organic fruits from our farm</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold">₹1,299</span>
                    <Link to="/products">
                      <Button size="sm">View</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img src={resortImage} alt="Manvaasam Resort" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-white/90 text-foreground text-xs px-2 py-1 rounded-full shadow">Best Offer</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Manvaasam Resort - Farm House</h3>
                  <p className="mt-2 text-muted-foreground">Experience farm life with resort amenities - perfect for a day getaway</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">₹499</span>
                      <span className="text-sm text-muted-foreground line-through">₹999</span>
                    </div>
                    <Link to="/products">
                      <Button size="sm">View</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img src={incubatorImage} alt="Manvaasam Incubator" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-white/90 text-foreground text-xs px-2 py-1 rounded-full shadow">Popular</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Manvaasam Incubator</h3>
                  <p className="mt-2 text-muted-foreground">Complete egg incubation solution with online guidance and support</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold">₹2,999</span>
                    <Link to="/products">
                      <Button size="sm">View</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================= Stats ========================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-transparent">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <TreeDeciduous className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">4</h3>
              <p className="text-lg opacity-90">Acres of Organic Farm</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">150+</h3>
              <p className="text-lg opacity-90">Varieties of Fruits</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">1000+</h3>
              <p className="text-lg opacity-90">Happy Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= Testimonials ========================= */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">What Our Visitors Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real experiences from people who have visited Manvaasam</p>
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
          }].map((t, i) => <Card key={i} className="hover:shadow-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* ========================= FAQ ========================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">Common Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to frequently asked questions about our services</p>
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
          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="py-16 md:py-20 text-white bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Experience Nature?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your visit today and immerse yourself in organic living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-10 shadow-lg bg-white text-primary hover:bg-white/90">Book Resort Stay</Button>
            </Link>
            <Link to="/services">
              
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;