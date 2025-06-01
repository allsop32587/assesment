const Materials = () => {
  return (
    <div className='flex flex-row  gap-12 pl-8 pr-0 w-full'>
      <div className='flex-shrink-0 flex flex-col justify-between py-12 w-[455px]'>
        <div className='text-[18px] font-normal uppercase font-mont text-[#9A9A9A]'>Materials</div>

        <p className='text-[32px] uppercase font-normal font-mont'>
          <span className='text-[#9A9A9A]'>Unlike plastics,</span>
          <span className='text-black'> aluminum is 100% recyclable.</span>{' '}
          <span className='text-[#9A9A9A]'>Moreover, approximately 70% of it </span>
          <span className='text-black'>produced is still in use.</span>
        </p>

        <a
          href='/projects'
          className='flex-shrink-0 flex items-center border border-black text-black font-mont font-normal uppercase px-[33px] py-[23px] w-[261px] h-[71px] gap-[10px]'
        >
          <span>View Projects</span>
          <img src='/view_projects.svg' alt='Arrow Icon' className='w-3 h-3' />
        </a>
      </div>

      <div className='flex-1 ml-32 h-[569px]'>
        <img src='/materials.svg' alt='Materials' className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Materials
