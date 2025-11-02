import { Header } from "@/components/Header";
import { useTheme } from "@/components/ThemeProvider";
import { Card } from "@/components/ui/card";
import { Film, Users, Award, Globe } from "lucide-react";
import heroBanner from "@assets/generated_images/Documentary_platform_hero_banner_4040ee29.png";

const values = [
  {
    icon: Film,
    title: "Quality Content",
    description: "We curate only the finest documentaries from award-winning filmmakers",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by documentary enthusiasts for documentary enthusiasts",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to showcasing exceptional storytelling and cinematography",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Bringing stories from around the world to your screen",
  },
];

export default function AboutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Header theme={theme} onThemeToggle={toggleTheme} />

      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="About DocuStream"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About DocuStream
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your premier destination for premium documentary content
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At DocuStream, we believe in the power of storytelling to educate,
                inspire, and transform. Our mission is to make high-quality
                documentaries accessible to everyone, bringing together the world's
                most compelling stories in one place.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We partner with acclaimed filmmakers and production studios to
                deliver content that matters—documentaries that challenge perspectives,
                spark curiosity, and deepen understanding of our world.
              </p>
            </div>
            <Card className="p-8 bg-card">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">500+</div>
                <p className="text-muted-foreground">
                  Premium documentaries across multiple categories
                </p>
                <div className="text-4xl font-bold text-primary">50K+</div>
                <p className="text-muted-foreground">
                  Viewers discovering new perspectives daily
                </p>
                <div className="text-4xl font-bold text-primary">100+</div>
                <p className="text-muted-foreground">
                  Award-winning filmmakers in our collection
                </p>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="p-6 space-y-4 hover-elevate">
                  <div className="rounded-full bg-primary/10 p-3 w-fit">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
