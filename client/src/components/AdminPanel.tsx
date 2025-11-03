import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Upload, Save } from "lucide-react";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: HeroBannerData) => void;
  currentData: HeroBannerData;
}

export interface HeroBannerData {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function AdminPanel({ isOpen, onClose, onSave, currentData }: AdminPanelProps) {
  const [formData, setFormData] = useState<HeroBannerData>(currentData);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Admin Panel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Hero Title</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter hero title"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Hero Subtitle</label>
            <Textarea
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder="Enter hero subtitle"
              rows={3}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Background Image URL</label>
            <Input
              value={formData.backgroundImage}
              onChange={(e) => setFormData({ ...formData, backgroundImage: e.target.value })}
              placeholder="Enter image URL"
            />
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}