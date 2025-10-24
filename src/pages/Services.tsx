import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Cpu, BookOpen, Users, CheckCircle2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import instituteImage from "@/assets/institute.jpg";
import farmImage from "@/assets/organic-farm.jpg";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Agricultural Training Institute",
      description: "Professional training programs for aspiring farmers and agricultural enthusiasts. Learn modern organic farming techniques from experienced practitioners.",
      features: [
        "Hands-on organic farming workshops",
        "Certification programs",
        "Expert mentorship",
        "Practical field experience"
      ]
    },
    {
      icon: Cpu,
      title: "AgriTech Solutions",
      description: "Innovative technology solutions for modern farming. We provide cutting-edge tools and systems to optimize agricultural productivity.",
      features: [
        "Smart irrigation systems",
        "Crop monitoring technology",
        "Farm management software",
        "Sustainable automation"
      ]
    },
    {
      icon: BookOpen,
      title: "Research & Development",
      description: "Dedicated to advancing sustainable agriculture through continuous research and innovation in organic farming practices.",
      features: [
        "Soil health research",
        "Organic pest management",
        "Climate-resilient crops",
        "Biodiversity studies"
      ]
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert guidance for individuals and organizations looking to transition to organic and sustainable farming practices.",
      features: [
        "Farm setup consultation",
        "Organic certification support",
        "Business planning",
        "Market linkage assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Institute & Technology
            </h1>
            <p className="text-xl opacity-90">
              Empowering the future of sustainable agriculture through education and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Institute Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Leading the Way in AgriTech Education
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our Agricultural Training Institute combines traditional wisdom with
                modern technology to prepare the next generation of farmers and
                agricultural professionals.
              </p>
              <p className="text-lg text-muted-foreground">
                With state-of-the-art facilities and expert instructors, we provide
                comprehensive training that bridges the gap between conventional farming
                and sustainable practices.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src={instituteImage}
                alt="Institute"
                className="rounded-lg shadow-primary w-full"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Upcoming Training Sessions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our expert-led workshops and certification programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Organic Farming Basics",
                date: "Every Saturday",
                duration: "4 weeks",
                level: "Beginner"
              },
              {
                title: "Advanced Soil Management",
                date: "First Sunday of Month",
                duration: "8 weeks",
                level: "Advanced"
              },
              {
                title: "Smart Irrigation Systems",
                date: "Bi-weekly Thursdays",
                duration: "6 weeks",
                level: "Intermediate"
              },
              {
                title: "Organic Certification Process",
                date: "Monthly Workshops",
                duration: "2 weeks",
                level: "All Levels"
              }
            ].map((session, index) => (
              <Card
                key={index}
                className="hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Calendar className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {session.level}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{session.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Schedule: {session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Duration: {session.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Training Programs
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your journey towards sustainable agriculture with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-10 shadow-lg hover:scale-105 transition-transform bg-white text-secondary hover:bg-white/90">
                Enroll Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-10 shadow-lg hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-secondary">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
