import { DocumentaryCard } from '../DocumentaryCard'
import natureThumbnail from '@assets/generated_images/Nature_documentary_thumbnail_landscape_a133d6bc.png'

export default function DocumentaryCardExample() {
  return (
    <div className="w-64">
      <DocumentaryCard
        id="1"
        title="Planet Earth: Wonders of Nature"
        thumbnail={natureThumbnail}
        duration={52}
        rating={4.8}
        categories={["Science"]}
        year={2023}
        onClick={() => console.log('Documentary clicked')}
      />
    </div>
  )
}
