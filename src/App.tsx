import { useState, useEffect } from 'react'
import { WasteCard, SkeletonCard, StepsIndicator, ContainerDetails } from './components'
import type { WasteContainer } from './types'
import logoImage from './assets/images/logo.png'
function App() {
  const [containers, setContainers] = useState<WasteContainer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedContainer, setSelectedContainer] = useState<WasteContainer | null>(null)

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
        
        if (!response.ok) {
          throw new Error('Failed to fetch containers')
        }
        
        const data = await response.json()
        setContainers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchContainers()
  }, [])

  const handleContinue = () => {
    // continue logic here
    console.log('Continuing with container:', selectedContainer)
    // clear selection
    setSelectedContainer(null)
  }

  const handleBack = () => {
    setSelectedContainer(null)
  }

  return (
    <div className="min-h-screen">

 <img 
              src={logoImage} 
              alt="RemWaste Logo" 
              className="mx-auto my-4 h-16 w-auto"
            />

      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Steps Indicator */}
          <StepsIndicator />
          
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
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${selectedContainer ? 'pb-40' : ''}`}>
        {/* Container Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {loading ? (
            // Show skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-600">
              Error: {error}
            </div>
          ) : (
            containers.map((container) => (
              <WasteCard 
                key={container.id} 
                container={container}
                isSelected={selectedContainer?.id === container.id}
                onSelect={(container) => setSelectedContainer(container)}
              />
            ))
          )}
        </div>
      </main>

      {/* Selected Container Details */}
      {selectedContainer && (
        <ContainerDetails
          container={selectedContainer}
          onContinue={handleContinue}
          onBack={handleBack}
        />
      )}
    </div>
  )
}

export default App
