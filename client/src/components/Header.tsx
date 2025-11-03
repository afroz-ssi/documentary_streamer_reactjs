import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, Search, User, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { InteractiveLogo } from "./InteractiveLogo";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

interface HeaderProps {
  theme?: "light" | "dark";
  onThemeToggle?: () => void;
  onMenuToggle?: () => void;
  showMenu?: boolean;
  onCategorySelect?: (category: string) => void;
  onSignInClick?: () => void;
  onSearch?: (query: string) => void;
}

// const categories = [
//   { id: "all", name: "All Documentaries" },
//   { id: "science", name: "Science" },
//   { id: "technology", name: "Technology" },
//   { id: "history", name: "History" },
//   { id: "nature", name: "Nature" },
//   { id: "space", name: "Space" },
//   { id: "culture", name: "Culture" },
//   { id: "politics", name: "Politics" },
//   { id: "sports", name: "Sports" },
//   { id: "art", name: "Art" },
// ];

export function Header({ theme = "light", onThemeToggle, onMenuToggle, showMenu = false, onCategorySelect, onSignInClick, onSearch }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuToggle?.();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery);
      setLocation(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch?.("");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleMobileMenuToggle}
            className="md:hidden"
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <InteractiveLogo />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span className="text-sm font-medium hover:text-purple-600 cursor-pointer transition-colors" data-testid="link-documentaries">
              Documentaries
            </span>
          </Link>
          <Link href="/photography">
            <span className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors" data-testid="link-photography">
              Photography
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sm font-medium hover:text-teal-600 cursor-pointer transition-colors" data-testid="link-about">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm font-medium hover:text-purple-500 cursor-pointer transition-colors" data-testid="link-contact">
              Contact
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentaries..."
              className="pl-10 pr-10 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>
          <Button
            variant="ghost"
            size="icon"
            onClick={onSignInClick}
            data-testid="button-signin"
          >
            <User className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
          <nav className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/">
                <div className="p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-base font-medium text-center">
                    Documentaries
                  </span>
                </div>
              </Link>
              <Link href="/photography">
                <div className="p-3 rounded-lg bg-card hover:bg-blue-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-base font-medium text-center">
                    Photography
                  </span>
                </div>
              </Link>
              <Link href="/about">
                <div className="p-3 rounded-lg bg-card hover:bg-teal-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-base font-medium text-center">
                    About Us
                  </span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="p-3 rounded-lg bg-card hover:bg-purple-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="block text-base font-medium text-center">
                    Contact
                  </span>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
