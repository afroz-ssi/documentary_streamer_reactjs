import { AdminSidebar } from "@/components/AdminSidebar";
import { StatCard } from "@/components/StatCard";
import { UploadChart } from "@/components/UploadChart";
import { Film, Users, Eye, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";

const mockStats = [
  { title: "Total Documentaries", value: 156, icon: Film, trend: { value: 12, isPositive: true } },
  { title: "Total Views", value: "2.4M", icon: Eye, trend: { value: 8, isPositive: true } },
  { title: "Active Users", value: "50.2K", icon: Users, trend: { value: 15, isPositive: true } },
  { title: "Growth Rate", value: "23%", icon: TrendingUp, trend: { value: 5, isPositive: true } },
];

const mockChartData = [
  { month: "Jan", uploads: 12 },
  { month: "Feb", uploads: 19 },
  { month: "Mar", uploads: 15 },
  { month: "Apr", uploads: 25 },
  { month: "May", uploads: 22 },
  { month: "Jun", uploads: 30 },
  { month: "Jul", uploads: 28 },
  { month: "Aug", uploads: 35 },
  { month: "Sep", uploads: 32 },
  { month: "Oct", uploads: 40 },
  { month: "Nov", uploads: 38 },
  { month: "Dec", uploads: 45 },
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar onLogout={() => setLocation("/")} />

      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockStats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                trend={stat.trend}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UploadChart data={mockChartData} />
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  "New documentary 'Ocean Depths' published",
                  "User feedback: 4.9★ average rating this month",
                  "Storage: 450GB of 1TB used",
                  "Peak traffic: 15K concurrent viewers",
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-card border border-border hover-elevate"
                  >
                    <p className="text-sm">{activity}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {i} hours ago
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
