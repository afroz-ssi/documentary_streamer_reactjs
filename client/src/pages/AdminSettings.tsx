import { AdminSidebar } from "@/components/AdminSidebar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";

export default function AdminSettings() {
  const [, setLocation] = useLocation();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoPublish: false,
    allowComments: true,
    requireApproval: true,
  });

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar onLogout={() => setLocation("/")} />

      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8 max-w-4xl">
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Configure your platform settings and preferences
            </p>
          </div>

          <Card className="p-8 space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="emailNotifications">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive email updates about new documentaries and user activity
                    </p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, emailNotifications: checked })
                    }
                    data-testid="switch-email-notifications"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Content Management</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="autoPublish">Auto-Publish</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically publish documentaries after upload
                    </p>
                  </div>
                  <Switch
                    id="autoPublish"
                    checked={settings.autoPublish}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, autoPublish: checked })
                    }
                    data-testid="switch-auto-publish"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="allowComments">Allow Comments</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable user comments on documentaries
                    </p>
                  </div>
                  <Switch
                    id="allowComments"
                    checked={settings.allowComments}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, allowComments: checked })
                    }
                    data-testid="switch-allow-comments"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="requireApproval">Require Approval</Label>
                    <p className="text-sm text-muted-foreground">
                      Require admin approval before publishing
                    </p>
                  </div>
                  <Switch
                    id="requireApproval"
                    checked={settings.requireApproval}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, requireApproval: checked })
                    }
                    data-testid="switch-require-approval"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-border">
              <Button type="button" variant="outline" data-testid="button-cancel">
                Cancel
              </Button>
              <Button
                onClick={() => console.log("Settings saved:", settings)}
                data-testid="button-save"
              >
                Save Settings
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
