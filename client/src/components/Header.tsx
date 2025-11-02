import { Button } from "@/components/ui/button";
import { Film, Moon, Sun, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

interface HeaderProps {
  theme?: "light" | "dark";
  onThemeToggle?: () => void;
  onMenuToggle?: () => void;
  showMenu?: boolean;
}

export function Header({ theme = "light", onThemeToggle, onMenuToggle, showMenu = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          {showMenu && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              data-testid="button-menu-toggle"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
              <Film className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">DocuStream</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors" data-testid="link-browse">
              Browse
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors" data-testid="link-about">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors" data-testid="link-contact">
              Contact
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentaries..."
              className="pl-10 w-64"
              data-testid="input-search"
            />
          </div>
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
    </header>
  );
}
