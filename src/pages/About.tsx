import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sprout, Target, Award, Leaf, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import farmImage from "@/assets/organic-farm.jpg";
import poolImage from "@/assets/swimming-pool.jpg";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Sustainable Practices",
    description: "We prioritize environmental responsibility in all our operations"
  }, {
    icon: Users,
    title: "Community Focus",
    description: "Supporting local farmers and creating employment opportunities"
  }, {
    icon: Sprout,
    title: "Organic Excellence",
    description: "100% chemical-free farming for healthier produce"
  }, {
    icon: Target,
    title: "Quality First",
    description: "Committed to delivering the finest organic products"
  }];
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Manvaasam</h1>
            <p className="text-xl opacity-90">
              Planting seeds of hope for a sustainable future
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img src={farmImage} alt="Our Farm" className="rounded-lg shadow-primary w-full" />
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Manvaasam was born from a vision to create a sustainable ecosystem where
                nature and modern living coexist harmoniously. Our 4-acre organic farm
                is a testament to our commitment to environmental stewardship.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We cultivate over 150 varieties of fruits using traditional organic
                methods, ensuring that every harvest is not just bountiful, but also
                healthy and environmentally responsible.
              </p>
              <p className="text-lg text-muted-foreground">
                Our green resort offers visitors a chance to reconnect with nature while
                enjoying modern amenities, all powered by sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="text-center hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Achievements</h2>
              <div className="space-y-4">
                {["Certified 100% Organic Farm by National Certification Board", "Winner of Sustainable Agriculture Award 2023", "Featured in Top 10 Eco-Resorts in the Region", "Training over 500+ farmers in organic methods", "Zero chemical usage for 5+ years"].map((achievement, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-muted-foreground">{achievement}</p>
                  </div>)}
              </div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
              <img src={poolImage} alt="Our Resort" className="rounded-lg shadow-primary w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      
    </div>;
};
export default About;