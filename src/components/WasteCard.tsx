import type { WasteContainer } from '../types';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';



interface WasteCardProps {
  container: WasteContainer;
  isSelected?: boolean;
  onSelect?: (container: WasteContainer) => void;
}


export function WasteCard({ container, isSelected = false, onSelect }: WasteCardProps) {
  const handleSelect = () => {
    onSelect?.(container);
  };

  return (
    <div className={`overflow-hidden relative w-full rounded-lg bg-white shadow ring-2 transition-all cursor-pointer ${
      isSelected ? 'ring-orange-500' : 'ring-neutral-200'
    } flex flex-col justify-between items-start`} onClick={handleSelect}>
      <img src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${container.size}-yarder-skip.jpg`} alt={`${container.size} yard skip`} className='w-full h-64 object-cover rounded-t-lg rounded-lg' />
        
      <div className='p-2 w-full h-full absolute flex flex-col justify-between '>
        <div className='flex justify-between items-start w-full'>
          <p className='bg-black/50 py-1 px-2 inline w-fit rounded-full bg-opacity-10 text-sm font-medium text-white'>{container.hire_period_days} day hire period</p>
          {isSelected && (
            <CheckCircleIcon className="size-6 text-orange-500 bg-white rounded-full" />
          )}
        </div>
        
        <div className=' w-full flex flex-col items-start gap-0'>
          {!container.allowed_on_road && (
            <div className='ml-2 w-fit bg-neutral-900 flex items-center justify-center gap-2 p-2 rounded-t-lg'>
              <ExclamationTriangleIcon className='text-base text-yellow-500 size-4'/>
              <p className='text-xs text-yellow-500 rounded-t-lg'>Not allowed on the road</p>
            </div>
          )}

          <div className='bg-neutral-50 rounded-lg w-full flex items-center justify-between p-2'>
            <div className=''>
              <p className='text-base font-medium text-neutral-900'>{container.size} Yard Skip</p>
              <p className='text-base text-neutral-900'>£{container.price_before_vat}</p>
            </div>
            <button className={`pointer text-sm font-medium text-white flex items-center justify-center gap-2 rounded-full py-2 px-4 transition-colors ${
              isSelected ? 'bg-orange-500' : 'bg-neutral-900'
            }`}>
              {isSelected ? 'Selected' : 'Select'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
