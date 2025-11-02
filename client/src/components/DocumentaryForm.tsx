import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

interface DocumentaryFormData {
  title: string;
  description: string;
  director: string;
  year: string;
  duration: string;
  categories: string[];
  rating: string;
  published: boolean;
}

interface DocumentaryFormProps {
  onSubmit?: (data: DocumentaryFormData) => void;
  initialData?: Partial<DocumentaryFormData>;
}

const CATEGORIES = ["Science", "Technology", "History", "Nature", "Space", "Culture", "Politics", "Sports", "Art"];
const RATINGS = ["G", "PG", "PG-13", "R"];

export function DocumentaryForm({ onSubmit, initialData }: DocumentaryFormProps) {
  const [formData, setFormData] = useState<DocumentaryFormData>({
    title: "",
    description: "",
    director: "",
    year: "",
    duration: "",
    categories: [],
    rating: "",
    published: false,
    ...initialData,
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [bannerPreview, setBannerPreview] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log('Form submitted:', formData);
  };

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-4">
          Basic Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter documentary title"
              required
              data-testid="input-title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="director">Director *</Label>
            <Input
              id="director"
              value={formData.director}
              onChange={(e) => setFormData({ ...formData, director: e.target.value })}
              placeholder="Enter director name"
              required
              data-testid="input-director"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              placeholder="2024"
              required
              data-testid="input-year"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes) *</Label>
            <Input
              id="duration"
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="90"
              required
              data-testid="input-duration"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter documentary description"
            rows={4}
            required
            data-testid="input-description"
          />
        </div>

        <div className="space-y-2">
          <Label>Categories * (Select one or more)</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={formData.categories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                  data-testid={`checkbox-category-${category.toLowerCase()}`}
                />
                <Label htmlFor={category} className="cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="rating">Rating *</Label>
            <Select
              value={formData.rating}
              onValueChange={(value) => setFormData({ ...formData, rating: value })}
            >
              <SelectTrigger data-testid="select-rating">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {RATINGS.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-4">
          Media Files
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Thumbnail Image</Label>
            <Card className="border-2 border-dashed rounded-xl p-8">
              {thumbnailPreview ? (
                <div className="relative">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2"
                    onClick={() => setThumbnailPreview("")}
                    data-testid="button-remove-thumbnail"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drop thumbnail here or click to upload
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="thumbnail"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setThumbnailPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('thumbnail')?.click()}
                    data-testid="button-upload-thumbnail"
                  >
                    Choose File
                  </Button>
                </div>
              )}
            </Card>
          </div>

          <div className="space-y-2">
            <Label>Banner Image</Label>
            <Card className="border-2 border-dashed rounded-xl p-8">
              {bannerPreview ? (
                <div className="relative">
                  <img
                    src={bannerPreview}
                    alt="Banner preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2"
                    onClick={() => setBannerPreview("")}
                    data-testid="button-remove-banner"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drop banner here or click to upload
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="banner"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setBannerPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('banner')?.click()}
                    data-testid="button-upload-banner"
                  >
                    Choose File
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Video File</Label>
          <Card className="border-2 border-dashed rounded-xl p-8">
            <div className="text-center space-y-2">
              <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Drop video file here or click to upload
              </p>
              <Input
                type="file"
                accept="video/*"
                className="hidden"
                id="video"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('video')?.click()}
                data-testid="button-upload-video"
              >
                Choose File
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-4">
          Publishing
        </h2>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="published">Publish Status</Label>
            <p className="text-sm text-muted-foreground">
              Make this documentary visible to the public
            </p>
          </div>
          <Switch
            id="published"
            checked={formData.published}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, published: checked })
            }
            data-testid="switch-published"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" data-testid="button-cancel">
          Cancel
        </Button>
        <Button type="submit" data-testid="button-submit">
          Save Documentary
        </Button>
      </div>
    </form>
  );
}
