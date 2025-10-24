import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, GraduationCap, Laptop } from "lucide-react";
import resortImage from "@/assets/resort.webp";
import instituteImage from "@/assets/institute.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Manvaasam Agri",
      description: "Work from Farm • Resort • Gardening • Organic Fruits & Vegetables • Swimming Pool",
      image: resortImage
    },
    {
      icon: GraduationCap,
      title: "Manvaasam Institute",
      description: "Technical Trainings • Placements • LMS • Online Courses",
      image: instituteImage
    },
    {
      icon: Laptop,
      title: "Manvaasam Tech",
      description: "Web & Mobile Development • Digital Marketing • Posters & Video",
      image: instituteImage
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive solutions for agriculture, education, and technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
