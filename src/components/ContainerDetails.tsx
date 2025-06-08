import type { WasteContainer } from '../types';

interface ContainerDetailsProps {
  container: WasteContainer;
  onContinue: () => void;
  onBack: () => void;
}

export function ContainerDetails({ container, onContinue, onBack }: ContainerDetailsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-lg p-6 animate-slide-up">
  
    <div className='hazard-background h-2 w-full absolute top-0 left-0 right-0 z-10'></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div className="flex items-center md:items-start justify-between gap-4 md:gap-1 md:flex-col">
              <h3 className="text-lg font-semibold text-neutral-900">
                {container.size} Yard Skip
              </h3>
              <p className="text-lg font-medium text-neutral-900">
                £{container.price_before_vat}  <span className="text-sm text-neutral-600">
                {container.hire_period_days} days
              </span>
              </p>
         
          </div>


          <div className="flex gap-3 w-full md:w-fit">
            <button
              onClick={onBack}
              className="w-full md:w-fit py-2 px-4 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={onContinue}
              className="w-full md:w-fit py-2 px-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
