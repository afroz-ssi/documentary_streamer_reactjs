import { useState, useEffect } from "react";
import { CategorySidebar } from "@/components/CategorySidebar";
import { DocumentaryCard } from "@/components/DocumentaryCard";
import { Header } from "@/components/Header";
import { AuthForm } from "@/components/AuthForm";
import { HeroBanner } from "@/components/HeroBanner";
import { AdminPanel, HeroBannerData } from "@/components/AdminPanel";
import { useTheme } from "@/components/ThemeProvider";
import { useLocation } from "wouter";
import UserDashboard from "./UserDashboard";
import heroBanner from "@assets/generated_images/Documentary_platform_hero_banner_4040ee29.png";
import natureThumbnail from "@assets/generated_images/Nature_documentary_thumbnail_landscape_a133d6bc.png";
import scienceThumbnail from "@assets/generated_images/Science_documentary_laboratory_scene_cb011830.png";
import historyThumbnail from "@assets/generated_images/History_documentary_ancient_ruins_cbc41af7.png";
import techThumbnail from "@assets/generated_images/Technology_documentary_modern_tech_dd89a6a4.png";

const mockDocumentaries = [
  {
    id: "1",
    title: "Planet Earth: Wonders of Nature",
    thumbnail: natureThumbnail,
    duration: 52,
    rating: 4.8,
    categories: ["Science", "Nature"],
    year: 2023,
  },
  {
    id: "2",
    title: "The Future of AI",
    thumbnail: techThumbnail,
    duration: 45,
    rating: 4.6,
    categories: ["Technology"],
    year: 2024,
  },
  {
    id: "3",
    title: "Ancient Civilizations",
    thumbnail: historyThumbnail,
    duration: 60,
    rating: 4.9,
    categories: ["History"],
    year: 2023,
  },
  {
    id: "4",
    title: "Quantum Physics Explained",
    thumbnail: scienceThumbnail,
    duration: 48,
    rating: 4.7,
    categories: ["Science"],
    year: 2024,
  },
  {
    id: "5",
    title: "The Roman Empire",
    thumbnail: historyThumbnail,
    duration: 75,
    rating: 4.8,
    categories: ["History"],
    year: 2023,
  },
  {
    id: "6",
    title: "Space Exploration",
    thumbnail: scienceThumbnail,
    duration: 55,
    rating: 4.9,
    categories: ["Science", "Space"],
    year: 2024,
  },
  {
    id: "7",
    title: "Cultural Heritage",
    thumbnail: historyThumbnail,
    duration: 62,
    rating: 4.7,
    categories: ["Culture", "History"],
    year: 2023,
  },
  {
    id: "8",
    title: "Democracy in Action",
    thumbnail: techThumbnail,
    duration: 58,
    rating: 4.5,
    categories: ["Politics"],
    year: 2024,
  },
  {
    id: "9",
    title: "The Art of Renaissance",
    thumbnail: historyThumbnail,
    duration: 68,
    rating: 4.8,
    categories: ["Art", "History"],
    year: 2023,
  },
  {
    id: "10",
    title: "Olympic Legends",
    thumbnail: natureThumbnail,
    duration: 72,
    rating: 4.6,
    categories: ["Sports"],
    year: 2024,
  },
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [location, setLocation] = useLocation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroBannerData, setHeroBannerData] = useState<HeroBannerData>({
    title: "Undefined Possibilities Await",
    subtitle: "Explore the unknown, discover the extraordinary, and venture into uncharted territories of knowledge",
    backgroundImage: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const search = urlParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [location]);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData.user);
    localStorage.setItem('token', userData.token);
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  if (user) {
    return <UserDashboard user={user} onSignOut={handleSignOut} />;
  }

  const handleCategorySelect = (categoryId: string) => {
    setSearchQuery("");
    setLocation("/");
    if (categoryId === "all") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([categoryId]);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setLocation("/");
    }
  };

  const filteredDocumentaries = mockDocumentaries.filter((doc) => {
    const matchesSearch = !searchQuery || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategories.length === 0 ||
      doc.categories.some((cat) =>
        selectedCategories.some(
          (selectedCat) => selectedCat.toLowerCase() === cat.toLowerCase()
        )
      );
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header
        theme={theme}
        onThemeToggle={toggleTheme}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        showMenu={true}
        onCategorySelect={handleCategorySelect}
        onSignInClick={() => setIsAuthFormOpen(true)}
        onSearch={handleSearch}
      />

      <div className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-16 z-30">
        <CategorySidebar
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
        />
      </div>

      <HeroBanner 
        data={heroBannerData}
        onAdminClick={() => setIsAdminPanelOpen(true)}
        showAdminButton={true}
      />

      <main className="p-6 md:p-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategories.length === 0
                ? "All Documentaries"
                : selectedCategories.length === 1
                ? selectedCategories[0].charAt(0).toUpperCase() +
                  selectedCategories[0].slice(1)
                : `${selectedCategories.length} Categories Selected`}
            </h2>
            <p className="text-muted-foreground">
              {filteredDocumentaries.length} documentaries available
            </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-3 sm:gap-4">
            {filteredDocumentaries.map((doc) => (
              <DocumentaryCard
                key={doc.id}
                {...doc}
                onClick={() => setLocation(`/documentary/${doc.id}`)}
              />
            ))}
          </div>
        </div>
      </main>

      <AuthForm 
        isOpen={isAuthFormOpen} 
        onClose={() => setIsAuthFormOpen(false)} 
        onAuthSuccess={handleAuthSuccess}
      />
      
      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        onSave={setHeroBannerData}
        currentData={heroBannerData}
      />
    </div>
  );
}
