import type { WasteContainer } from '../types';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';



interface WasteCardProps {
  container: WasteContainer;
}


export function WasteCard({ container }: WasteCardProps) {
  return (
    <div className='overflow-hidden relative w-full rounded-lg bg-white shadow ring-1 ring-neutral-200 flex flex-col justify-between items-start'>
      <img src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${container.size}-yarder-skip.jpg`} alt={`${container.size} yard skip`} className='w-full h-64 object-cover rounded-t-lg rounded-lg' />
        
      <div className='p-2 w-full h-full absolute flex flex-col justify-between '>
        <p className='bg-black/50 py-1 px-2 inline w-fit rounded-full bg-opacity-10 text-sm font-medium text-white'>{container.hire_period_days} day hire period</p>
        
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
            <button className='pointer text-sm font-medium text-white flex items-center justify-center gap-2 rounded-full bg-neutral-900 py-2 px-4'>
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
