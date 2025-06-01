const OurAluminiumSystem = () => {
  return (
    <div className='px-8 py-20'>
      <div className='text-[30px] font-medium uppercase'>OUR ALUMINIUM SYSTEMS</div>
      <div className='text-[16px] font-normal text-[#8C8C8C] tracking-[0]'>
        Expert craftsmanship in aluminium systems, offering fit your unique space.
      </div>

      <div className='mt-8 grid grid-cols-3 gap-8 uppercase'>
        <div className='flex flex-col items-start'>
          <img src='/door.svg' alt='Doors' className='w-full h-auto' />
          <span className='mt-4 uppercase'>Doors</span>
        </div>
        <div className='flex flex-col items-start'>
          <img src='/windows.svg' alt='Windows' className='w-full h-auto' />
          <span className='mt-4 uppercase'>Windows</span>
        </div>
        <div className='flex flex-col items-start'>
          <img src='/partitions.svg' alt='Partitions' className='w-full h-auto' />
          <span className='mt-4 uppercase'>Partitions</span>
        </div>
        <div className='flex flex-col items-start'>
          <img src='/pergolas.svg' alt='Pergolas' className='w-full h-auto' />
          <span className='mt-4 uppercase'>pergolas</span>
        </div>
        <div className='flex flex-col items-start'>
          <img
            src='/bullet_resistant_window.svg'
            alt='Bullet Resistant Window'
            className='w-full h-auto'
          />
          <span className='mt-4 uppercase'>Bullet Resistant Windows</span>
        </div>
        <div className='flex flex-col items-start'>
          <img src='/curtain_walls.svg' alt='Curtain Walls' className='w-full h-auto' />
          <span className='mt-4 uppercase'>Curtain Walls & FaCades</span>
        </div>
      </div>
    </div>
  )
}

export default OurAluminiumSystem
