import { Button } from "@/components/ui/button";
import { Film, LayoutDashboard, Settings, User, LogOut } from "lucide-react";
import { Link, useLocation } from "wouter";

interface AdminSidebarProps {
  onLogout?: () => void;
}

export function AdminSidebar({ onLogout }: AdminSidebarProps) {
  const [location] = useLocation();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { id: "documentaries", label: "Documentaries", icon: Film, path: "/admin/documentaries" },
    { id: "profile", label: "Profile", icon: User, path: "/admin/profile" },
    { id: "settings", label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Film className="w-8 h-8 text-primary" />
          <div>
            <h2 className="font-bold text-lg">Undefined </h2>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.path}>
            <Button
              variant={location === item.path ? "default" : "ghost"}
              className="w-full justify-start gap-3"
              data-testid={`button-nav-${item.id}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={onLogout}
          data-testid="button-logout"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
}
