import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
}

interface CategorySidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "science", name: "Science" },
  { id: "technology", name: "Technology" },
  { id: "history", name: "History" },
  { id: "nature", name: "Nature" },
  { id: "space", name: "Space" },
  { id: "culture", name: "Culture" },
  { id: "politics", name: "Politics" },
  { id: "sports", name: "Sports" },
  { id: "art", name: "Art" },
];

export function CategorySidebar({ selectedCategories, onCategoryChange }: CategorySidebarProps) {
  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === "all") {
      onCategoryChange([]);
    } else {
      onCategoryChange([categoryId]);
    }
  };

  const isSelected = (categoryId: string) => {
    if (categoryId === "all") {
      return selectedCategories.length === 0;
    }
    return selectedCategories.includes(categoryId);
  };

  return (
    <div className="w-full p-3 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 items-center justify-center min-w-max mx-auto">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={isSelected(category.id) ? "secondary" : "outline"}
            size="sm"
            onClick={() => handleCategorySelect(category.id)}
            className={`whitespace-nowrap text-sm px-4 py-2 h-8 transition-colors ${
              isSelected(category.id) 
                ? "bg-accent text-accent-foreground hover:bg-accent/80" 
                : "hover:bg-accent/50"
            }`}
            data-testid={`button-category-${category.id}`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
