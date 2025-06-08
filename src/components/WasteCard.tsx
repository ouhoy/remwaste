import type { WasteContainer } from '../types';
import { ExclamationTriangleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

interface WasteCardProps {
  container: WasteContainer;
}

export function WasteCard({ container }: WasteCardProps) {

  return (
    <div className='p-2 relative w-full rounded-lg bg-white shadow border-1 border-neutral-200 flex flex-col justify-between items-start'>
        
        
        <p className='bg-black/50 p-1 rounded-full bg-opacity-10 text-sm font-medium text-white'>14 day hire period</p>
        
        
        <div className=' w-full flex flex-col items-start gap-0'>

            <div className='ml-2 w-fit bg-neutral-900 flex items-center justify-center gap-2 p-2 rounded-t-lg'>
                <ExclamationTriangleIcon className='text-base text-amber-500 size-4'/>
                        <p className='text-xs text-amber-500 rounded-t-lg'>Not allowed on the road</p>
            </div>

            <div className='bg-neutral-50 rounded-lg w-full flex items-center justify-between p-2'>
                <div className=''>
                    <p className='text-base font-medium text-neutral-900'>4 Yard Skip</p>
                    <p className='text-bas text-neutral-900'>£211</p>
                    
                </div>

                <PlusCircleIcon className='text-base text-neutral-900 size-8'/>
            </div>

        </div>
    </div>
  );
}
