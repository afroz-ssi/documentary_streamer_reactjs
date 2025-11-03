import { useState } from "react";
import { Header } from "@/components/Header";
import { AuthForm } from "@/components/AuthForm";
import { useTheme } from "@/components/ThemeProvider";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "@/components/BookingForm";
import { Camera, Heart, Users, Calendar, Star, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Wedding Photography",
    description: "Capture your special day with stunning, timeless photos",
    icon: Heart,
    features: ["Pre-wedding shoot", "Ceremony coverage", "Reception photos", "Digital gallery"],
    price: "Starting from $1,200"
  },
  {
    title: "Birthday Celebrations",
    description: "Make every birthday memorable with professional photography",
    icon: Calendar,
    features: ["Party coverage", "Candid moments", "Group photos", "Edited highlights"],
    price: "Starting from $300"
  },
  {
    title: "Corporate Events",
    description: "Professional event photography for your business needs",
    icon: Users,
    features: ["Event documentation", "Team photos", "Networking shots", "Brand coverage"],
    price: "Starting from $500"
  }
];

const process = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and preferences for the shoot"
  },
  {
    step: 2,
    title: "Planning & Preparation",
    description: "We plan the timeline, locations, and coordinate all details"
  },
  {
    step: 3,
    title: "Photography Session",
    description: "Professional photography with attention to every special moment"
  },
  {
    step: 4,
    title: "Post-Processing",
    description: "Expert editing and enhancement of your photos"
  },
  {
    step: 5,
    title: "Delivery",
    description: "Receive your high-quality photos in digital gallery format"
  }
];

export default function PhotographyPage() {
  const { theme, toggleTheme } = useTheme();
  const [bookingForm, setBookingForm] = useState<{ isOpen: boolean; type: "booking" | "quote" }>({ isOpen: false, type: "booking" });
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [, setLocation] = useLocation();

  const openBookingForm = (type: "booking" | "quote") => {
    setBookingForm({ isOpen: true, type });
  };

  const closeBookingForm = () => {
    setBookingForm({ isOpen: false, type: "booking" });
  };

  const handleAuthSuccess = (userData: any) => {
    setUser(userData.user);
    localStorage.setItem('token', userData.token);
  };

  const handleSearch = (query: string) => {
    setLocation(`/?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        theme={theme}
        onThemeToggle={toggleTheme}
        showMenu={false}
        onSignInClick={() => setIsAuthFormOpen(true)}
        onSearch={handleSearch}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-accent/10 via-background to-muted/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Camera className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Professional Photography Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Capturing life's most precious moments with artistic vision and professional expertise. 
            From weddings to birthdays, we make every occasion unforgettable.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 bg-accent hover:bg-accent/80 text-accent-foreground" onClick={() => openBookingForm("booking")}>
            Book Your Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Photography Services</h2>
            <p className="text-xl text-muted-foreground">
              Professional photography for every special occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="w-12 h-12 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-sm font-semibold">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Photography Process</h2>
            <p className="text-xl text-muted-foreground">
              A seamless 5-step process to capture your perfect moments
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground">
              Professional excellence in every shot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Expert Photographers", desc: "Certified professionals with years of experience" },
              { icon: Camera, title: "High-End Equipment", desc: "Latest cameras and professional lighting setup" },
              { icon: Heart, title: "Personalized Service", desc: "Tailored approach for each client's unique needs" },
              { icon: CheckCircle, title: "Quick Delivery", desc: "Fast turnaround with high-quality edited photos" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover-elevate">
                <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Capture Your Moments?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create beautiful memories together. Contact us today for a consultation.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" onClick={() => openBookingForm("quote")}>
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <BookingForm 
        isOpen={bookingForm.isOpen} 
        onClose={closeBookingForm} 
        type={bookingForm.type} 
      />
      
      <AuthForm 
        isOpen={isAuthFormOpen} 
        onClose={() => setIsAuthFormOpen(false)} 
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}