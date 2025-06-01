const InfoRayfitout = () => {
  return (
    <div className='py-16 px-8 bg-slate-100 space-y-16 uppercase'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='font-semibold text-[50px] tracking-normal'>
            IDEAS COME TO LIFE
            <br />
            WITH CONVERSATION.
          </p>
          <p className='text-[40px] font-normal tracking-normal mt-4'>INFO@RAYFITOUT.COM</p>
        </div>
        <a
          href='/inquiry'
          className='flex-shrink-0 flex items-center border border-black text-black font-normal uppercase py-4 px-4 border-b transition-all duration-200 ease-in-out hover:bg-black hover:text-white active:scale-95'
        >
          <span className='font-semibold text-[18px]'>DROP AN INQUIRY</span>
        </a>
      </div>

      <div className='grid grid-cols-4 gap-8'>
        <div>
          <h3 className='text-[19px] text-black font-medium uppercase'>Office</h3>
        </div>

        <div className='flex flex-col space-y-1'>
          <span className='uppercase text-[16px] font-medium'>Dubai, UAE</span>
          <span className='text-[16px] font-normal'>23, St 35, Al Qusais 5</span>
          <span className='text-[16px] font-normal'>+971 800 729 43</span>
        </div>

        <div className='flex flex-col space-y-1'>
          <span className='uppercase text-[16px] font-medium'>Riyadh, Saudi Arabia</span>
          <span className='text-[16px] font-normal'>Level 6, Gate D, Al Akaria Plaza</span>
          <span className='text-[16px] font-normal'>Riyadh, Saudi Arabia</span>
          <span className='text-[16px] font-normal'>+966 800 891 2050</span>
        </div>

        <div className='flex flex-col space-y-1'>
          <span className='uppercase text-[16px] font-medium'>Nairobi, Kenya</span>
          <span className='text-[16px] font-normal'>Office 2504, Britam Tower</span>
          <span className='text-[16px] font-normal'>Hospital Hill Road, Upperhill</span>
          <span className='text-[16px] font-normal'>Kenya</span>
          <span className='text-[16px] font-normal'>+254 2076 40228</span>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-8'>
        <div>
          <h3 className='text-[19px] text-black font-medium uppercase'>Business</h3>
        </div>

        <div className='flex flex-col space-y-1'>
          <span className='text-[16px] uppercase font-medium'>Inquiries</span>
          <span className='text-[16px] font-normal underline'>info@rayfitout.com</span>
        </div>

        <div className='flex flex-col space-y-1'>
          <span className='text-[16px] uppercase font-medium'>Career</span>
          <span className='text-[16px] font-normal underline'>hr@rayfitout.com</span>
        </div>
        <div className='flex flex-col space-y-1'>
          <span className='text-[16px] uppercase font-medium'>SUPPLIERS</span>
          <span className='text-[16px] font-normal underline'>PROCUREMENT@RAYFITOUT.COM</span>
        </div>
      </div>
    </div>
  )
}

export default InfoRayfitout
