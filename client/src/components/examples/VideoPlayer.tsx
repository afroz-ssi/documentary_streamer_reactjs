import { VideoPlayer } from '../VideoPlayer'
import natureThumbnail from '@assets/generated_images/Nature_documentary_thumbnail_landscape_a133d6bc.png'

export default function VideoPlayerExample() {
  return (
    <div className="p-8">
      <VideoPlayer
        videoUrl="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
        thumbnail={natureThumbnail}
        title="Sample Documentary"
      />
    </div>
  )
}
