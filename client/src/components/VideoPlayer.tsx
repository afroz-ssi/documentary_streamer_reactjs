import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

export function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="relative aspect-video w-full max-w-6xl mx-auto bg-black rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div className="relative w-full h-full group">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
              onClick={() => {
                setIsPlaying(true);
                console.log('Video playing:', videoUrl);
              }}
              data-testid="button-play-video"
            >
              <Play className="w-10 h-10 text-white fill-white" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full bg-black">
          <video
            className="w-full h-full"
            src={videoUrl}
            poster={thumbnail}
            autoPlay
            data-testid="video-player"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setIsPlaying(!isPlaying)}
                data-testid="button-pause-video"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>

              <div className="flex-1 h-1 bg-white/30 rounded-full">
                <div className="h-full w-1/3 bg-primary rounded-full" />
              </div>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setIsMuted(!isMuted)}
                data-testid="button-mute-toggle"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20"
                data-testid="button-fullscreen"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
