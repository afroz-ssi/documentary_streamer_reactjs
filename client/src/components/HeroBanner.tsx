import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBannerData } from "./AdminPanel";

interface HeroBannerProps {
  data: HeroBannerData;
  onAdminClick?: () => void;
  showAdminButton?: boolean;
}

export function HeroBanner({ data, onAdminClick, showAdminButton = false }: HeroBannerProps) {
  const isVideo = data.backgroundImage?.includes('.mp4') || data.backgroundImage?.includes('.webm') || data.backgroundImage?.includes('video');
  
  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {isVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Video failed to load:', e);
          }}
        >
          <source src={data.backgroundImage} type="video/mp4" />
        </video>
      ) : (
        <img
          src={data.backgroundImage}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      {showAdminButton && (
        <Button
          onClick={onAdminClick}
          size="sm"
          className="absolute top-4 right-4 z-10"
          variant="secondary"
        >
          <Settings className="w-4 h-4 mr-2" />
          Edit
        </Button>
      )}
      
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 md:px-6 space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}