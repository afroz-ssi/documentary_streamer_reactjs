import { useState } from 'react'
import { CategorySidebar } from '../CategorySidebar'

export default function CategorySidebarExample() {
  const [selected, setSelected] = useState<string[]>([])
  
  return (
    <div className="h-screen">
      <CategorySidebar
        selectedCategories={selected}
        onCategoryChange={(categories) => {
          setSelected(categories)
          console.log('Categories changed:', categories)
        }}
      />
    </div>
  )
}
