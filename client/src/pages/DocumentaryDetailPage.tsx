import { Header } from "@/components/Header";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";
import { useRoute } from "wouter";
import { Clock, Calendar, Star, User } from "lucide-react";
import natureThumbnail from "@assets/generated_images/Nature_documentary_thumbnail_landscape_a133d6bc.png";

const mockDocumentary = {
  id: "1",
  title: "Planet Earth: Wonders of Nature",
  description:
    "Embark on an extraordinary journey through Earth's most spectacular landscapes and ecosystems. From the depths of the oceans to the peaks of the highest mountains, witness the incredible diversity of life on our planet. This groundbreaking documentary series showcases the beauty and complexity of nature like never before, revealing the intricate connections between all living things and the delicate balance that sustains life on Earth.",
  director: "David Attenborough",
  year: 2023,
  duration: 52,
  rating: 4.8,
  categories: ["Science", "Nature"],
  thumbnail: natureThumbnail,
  videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
};

export default function DocumentaryDetailPage() {
  const { theme, toggleTheme } = useTheme();
  const [, params] = useRoute("/documentary/:id");

  return (
    <div className="min-h-screen bg-background">
      <Header theme={theme} onThemeToggle={toggleTheme} />

      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={mockDocumentary.thumbnail}
          alt={mockDocumentary.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {mockDocumentary.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {mockDocumentary.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{mockDocumentary.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{mockDocumentary.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{mockDocumentary.duration} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 md:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <VideoPlayer
            videoUrl={mockDocumentary.videoUrl}
            thumbnail={mockDocumentary.thumbnail}
            title={mockDocumentary.title}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {mockDocumentary.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Director</p>
                      <p className="font-medium">{mockDocumentary.director}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Release Year</p>
                      <p className="font-medium">{mockDocumentary.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{mockDocumentary.duration} minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="font-medium">{mockDocumentary.rating}/5.0</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
