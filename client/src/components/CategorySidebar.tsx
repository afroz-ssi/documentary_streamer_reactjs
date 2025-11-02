import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Beaker, Cpu, BookOpen, Film, Leaf, Rocket, Users, Landmark, Trophy, Palette } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategorySidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const categories: Category[] = [
  { id: "all", name: "All Documentaries", icon: <Film className="w-5 h-5" /> },
  { id: "science", name: "Science", icon: <Beaker className="w-5 h-5" /> },
  { id: "technology", name: "Technology", icon: <Cpu className="w-5 h-5" /> },
  { id: "history", name: "History", icon: <BookOpen className="w-5 h-5" /> },
  { id: "nature", name: "Nature", icon: <Leaf className="w-5 h-5" /> },
  { id: "space", name: "Space", icon: <Rocket className="w-5 h-5" /> },
  { id: "culture", name: "Culture", icon: <Users className="w-5 h-5" /> },
  { id: "politics", name: "Politics", icon: <Landmark className="w-5 h-5" /> },
  { id: "sports", name: "Sports", icon: <Trophy className="w-5 h-5" /> },
  { id: "art", name: "Art", icon: <Palette className="w-5 h-5" /> },
];

export function CategorySidebar({ selectedCategories, onCategoryChange }: CategorySidebarProps) {
  const handleCategoryToggle = (categoryId: string) => {
    if (categoryId === "all") {
      if (selectedCategories.includes("all")) {
        onCategoryChange([]);
      } else {
        onCategoryChange(["all"]);
      }
    } else {
      let newCategories: string[];
      if (selectedCategories.includes(categoryId)) {
        newCategories = selectedCategories.filter(id => id !== categoryId && id !== "all");
      } else {
        newCategories = [...selectedCategories.filter(id => id !== "all"), categoryId];
      }
      onCategoryChange(newCategories);
    }
  };

  return (
    <div className="w-64 h-full bg-card border-r border-border p-6 space-y-3">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Categories</h2>
      {categories.map((category) => (
        <div key={category.id} className="flex items-center space-x-3 hover-elevate p-2 rounded-lg">
          <Checkbox
            id={category.id}
            checked={selectedCategories.includes(category.id) || (selectedCategories.length === 0 && category.id === "all")}
            onCheckedChange={() => handleCategoryToggle(category.id)}
            data-testid={`checkbox-category-${category.id}`}
          />
          <Label
            htmlFor={category.id}
            className="flex items-center gap-2 cursor-pointer flex-1"
          >
            {category.icon}
            <span>{category.name}</span>
          </Label>
        </div>
      ))}
    </div>
  );
}
