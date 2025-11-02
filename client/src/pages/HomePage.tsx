import { useState } from "react";
import { CategorySidebar } from "@/components/CategorySidebar";
import { DocumentaryCard } from "@/components/DocumentaryCard";
import { Header } from "@/components/Header";
import { useTheme } from "@/components/ThemeProvider";
import { useLocation } from "wouter";
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
  const [, setLocation] = useLocation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredDocumentaries =
    selectedCategories.length === 0 || selectedCategories.includes("all")
      ? mockDocumentaries
      : mockDocumentaries.filter((doc) =>
          doc.categories.some((cat) =>
            selectedCategories.some(
              (selectedCat) => selectedCat.toLowerCase() === cat.toLowerCase()
            )
          )
        );

  return (
    <div className="min-h-screen bg-background">
      <Header
        theme={theme}
        onThemeToggle={toggleTheme}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        showMenu={true}
      />

      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="Documentary Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Explore the World Through Documentaries
            </h1>
            <p className="text-xl text-white/90">
              Discover captivating stories across Science, Technology, and History
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block fixed md:sticky top-16 z-40 h-[calc(100vh-4rem)]`}
        >
          <CategorySidebar
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
          />
        </div>

        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">
                {selectedCategories.length === 0 || selectedCategories.includes("all")
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
}
