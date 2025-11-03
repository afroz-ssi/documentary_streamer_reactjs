import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentaryCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  rating: number;
  categories: string[];
  year: number;
  onClick?: () => void;
}

export function DocumentaryCard({
  title,
  thumbnail,
  duration,
  rating,
  categories,
  year,
  onClick,
}: DocumentaryCardProps) {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div
      className="group relative rounded-lg overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-transform"
      onClick={onClick}
      data-testid={`card-documentary-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute top-2 right-2 flex gap-1">
          {categories.slice(0, 1).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs px-1 py-0">
              {category}
            </Badge>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-2 space-y-1">
          <h3 className="text-white text-sm font-semibold line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-white/90 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{formatDuration(duration)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>

          <Button
            size="sm"
            className="w-full h-6 text-xs bg-accent/80 backdrop-blur-sm hover:bg-accent text-accent-foreground border border-accent/50"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            data-testid="button-watch-now"
          >
            <Play className="w-3 h-3 mr-1" />
            Watch
          </Button>
        </div>
      </div>
    </div>
  );
}
