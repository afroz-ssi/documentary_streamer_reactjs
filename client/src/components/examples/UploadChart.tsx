import { UploadChart } from '../UploadChart'

const mockData = [
  { month: 'Jan', uploads: 12 },
  { month: 'Feb', uploads: 19 },
  { month: 'Mar', uploads: 15 },
  { month: 'Apr', uploads: 25 },
  { month: 'May', uploads: 22 },
  { month: 'Jun', uploads: 30 },
]

export default function UploadChartExample() {
  return (
    <div className="p-8 max-w-4xl">
      <UploadChart data={mockData} />
    </div>
  )
}
