const BespokeSystem = () => {
  return (
    <div className='relative py-24'>
      <img src='/bespoke_system.svg' alt='Bespoke System' className='w-full h-full object-cover' />

      <div className='absolute inset-0 flex items-center justify-center px-10'>
        <div className='flex justify-between items-center w-full pr-4'>
          <div className='space-y-2 w-[630px]'>
            <p className='text-[#FFFFFF] text-[18px] uppercase'>
              <span className='font-normal opacity-70'>Seamless</span>{' '}
              <span className='font-medium opacity-100'>Integration</span>
            </p>
            <p className='text-[32px] text-[#FFFFFF] uppercase'>
              <span className='font-semibold'>Bespoke </span>
              <span className='font-normal'>systems,</span>
              <br />
              <span className='font-semibold'>custom made</span>
              <span className='font-normal'> for your </span>
              <span className='font-semibold'>space</span>
            </p>
          </div>

          <a
            href='/inquiry'
            className='flex items-center border border-white text-white font-mont font-normal uppercase px-8 py-5 gap-3 transition-all duration-200 ease-in-out hover:bg-white hover:text-black active:scale-95'
          >
            <span>Drop your inquiry</span>
            <img src='/drop_an_inquiry.svg' alt='Inquiry Icon' className='w-3 h-3' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BespokeSystem
