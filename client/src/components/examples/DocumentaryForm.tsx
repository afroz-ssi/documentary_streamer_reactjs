import { DocumentaryForm } from '../DocumentaryForm'

export default function DocumentaryFormExample() {
  return (
    <div className="p-8 max-w-4xl">
      <DocumentaryForm
        onSubmit={(data) => console.log('Form submitted:', data)}
      />
    </div>
  )
}
