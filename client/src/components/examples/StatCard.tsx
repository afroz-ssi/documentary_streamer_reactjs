import { StatCard } from '../StatCard'
import { Film } from 'lucide-react'

export default function StatCardExample() {
  return (
    <div className="w-80">
      <StatCard
        title="Total Documentaries"
        value={156}
        icon={Film}
        description="Published documentaries"
        trend={{ value: 12, isPositive: true }}
      />
    </div>
  )
}
