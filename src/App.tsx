import { WasteCard } from './components'
import { mockWasteContainers } from './data/mockData'

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-neutral-900">
              RemWaste Container Service
            </h1>
            <p className="mt-2 text-lg text-neutral-600">
              Choose from our available waste containers
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      

        {/* Container Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {mockWasteContainers.map((container) => (
            <WasteCard key={container.id} container={container} />
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
