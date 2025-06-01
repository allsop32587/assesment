const ProjectInMind = () => {
  return (
    <div className='py-16'>
      <div className='px-8 bg-[#F1F1F1] py-20 m-8 flex flex-row  items-center justify-between'>
        <div className='uppercase text-[40px] font-medium'>HAVE A PROJECT IN MIND ?</div>
        <a
          href='/inquiry'
          className='flex-shrink-0 flex justify-center items-center border border-black text-black font-mont font-normal uppercase pl-[33px] pr-[24px] py-[23px] gap-3'
        >
          <span>drop an inquiry</span>
          <img src='/view_projects.svg' alt='Arrow Icon' className='w-3 h-3' />
        </a>
      </div>
    </div>
  )
}

export default ProjectInMind
