const Footer = () => {
  return (
    <footer className='bg-slate-100 text-black uppercase text-[12px] font-medium py-4'>
      <div className='container mx-auto grid grid-cols-3 items-center'>
        <div className=' font-normal'>
          <a href='/privacy-policy' className='hover:underline'>
            Privacy Policy
          </a>
        </div>

        <div className='flex justify-center space-x-24'>
          <a
            href='https://www.youtube.com/'
            className='hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            youtube
          </a>
          <a
            href='https://www.pinterest.com/'
            className='hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            pinterest
          </a>
        </div>

        <div className='text-sm text-right'>© 2025 Rayfitout</div>
      </div>
    </footer>
  )
}

export default Footer
