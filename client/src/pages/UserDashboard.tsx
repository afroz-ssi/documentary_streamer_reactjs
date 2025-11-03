import { Header } from "@/components/Header";
import { useTheme } from "@/components/ThemeProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Camera, Clock, MapPin, Phone, Mail, User, Settings, LogOut } from "lucide-react";

interface UserDashboardProps {
  user: any;
  onSignOut: () => void;
}

const mockBookings = [
  {
    id: 1,
    service: "Wedding Photography",
    date: "2024-12-15",
    location: "Central Park, NYC",
    status: "confirmed",
    price: "$1,200"
  },
  {
    id: 2,
    service: "Birthday Celebration",
    date: "2024-11-28",
    location: "Private Residence",
    status: "pending",
    price: "$300"
  }
];

export default function UserDashboard({ user, onSignOut }: UserDashboardProps) {
  const { theme, toggleTheme } = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-500";
      case "pending": return "bg-yellow-500";
      case "cancelled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        theme={theme}
        onThemeToggle={toggleTheme}
        showMenu={false}
        onSignInClick={() => {}}
      />

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-muted-foreground">Manage your bookings and account settings</p>
            </div>
            <Button variant="outline" onClick={onSignOut} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-accent" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-xl">
                      {user?.name?.charAt(0)?.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{user?.name}</h3>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Member since {new Date().getFullYear()}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-accent" />
                  My Bookings
                </CardTitle>
                <CardDescription>
                  View and manage your photography bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mockBookings.length === 0 ? (
                  <div className="text-center py-8">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
                    <p className="text-muted-foreground mb-4">Book your first photography session to get started</p>
                    <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                      Book Now
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mockBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 hover-elevate">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{booking.service}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(booking.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{booking.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={`${getStatusColor(booking.status)} text-white`}>
                              {booking.status}
                            </Badge>
                            <p className="text-lg font-semibold mt-1">{booking.price}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          {booking.status === "pending" && (
                            <Button size="sm" variant="outline">
                              Cancel
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-6 text-center">
                <Camera className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Book New Session</h3>
                <p className="text-sm text-muted-foreground">Schedule a new photography session</p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">View History</h3>
                <p className="text-sm text-muted-foreground">See all your past bookings</p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-6 text-center">
                <Settings className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Account Settings</h3>
                <p className="text-sm text-muted-foreground">Manage your account preferences</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}