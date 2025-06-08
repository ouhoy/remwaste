import { 
  MapPinIcon, 
  TrashIcon, 
  TruckIcon, 
  ShieldCheckIcon, 
  CalendarIcon, 
  CreditCardIcon 
} from '@heroicons/react/24/outline'

interface Step {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  completed: boolean
  current?: boolean
}

interface StepsIndicatorProps {
  currentStep?: string
}

export function StepsIndicator({ currentStep = 'Select Skip' }: StepsIndicatorProps) {
  const steps: Step[] = [
    { name: 'Postcode', icon: MapPinIcon, completed: true },
    { name: 'Waste Type', icon: TrashIcon, completed: true },
    { name: 'Select Skip', icon: TruckIcon, completed: false, current: currentStep === 'Select Skip' },
    { name: 'Permit Check', icon: ShieldCheckIcon, completed: false, current: currentStep === 'Permit Check' },
    { name: 'Choose Date', icon: CalendarIcon, completed: false, current: currentStep === 'Choose Date' },
    { name: 'Payment', icon: CreditCardIcon, completed: false, current: currentStep === 'Payment' },
  ]

  return (
    <div className="mb-8">
      <nav aria-label="Progress">
        <ol className="flex items-center justify-center space-x-5">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step.current
                      ? 'border-orange-500 bg-orange-50'
                      : step.completed
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  <step.icon
                    className={`h-5 w-5 ${
                      step.current
                        ? 'text-orange-500'
                        : step.completed
                        ? 'text-orange-500'
                        : 'text-gray-400'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${
                    step.current
                      ? 'text-orange-500'
                      : step.completed
                      ? 'text-orange-600'
                      : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {stepIdx !== steps.length - 1 && (
                <div
                  className={`ml-5 h-0.5 w-8 ${
                    step.completed ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
