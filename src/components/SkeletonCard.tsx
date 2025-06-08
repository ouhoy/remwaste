export function SkeletonCard() {
  return (
    <div className='overflow-hidden relative w-full rounded-lg bg-white shadow ring-1 ring-neutral-200 flex flex-col justify-between items-start animate-pulse'>
      <div className='w-full h-64 bg-neutral-300 rounded-t-lg'></div>
      
      <div className='p-2 w-full h-full absolute flex flex-col justify-between'>
        <div className='bg-neutral-400 py-1 px-2 w-32 h-6 rounded-full'></div>
        
        <div className='w-full flex flex-col items-start gap-0'>
          <div className='bg-neutral-300 rounded-lg w-full flex items-center justify-between p-2'>
            <div className='flex flex-col gap-2'>
              <div className='bg-neutral-400 h-4 w-20 rounded'></div>
              <div className='bg-neutral-400 h-4 w-12 rounded'></div>
            </div>
            <div className='bg-neutral-400 h-8 w-16 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
