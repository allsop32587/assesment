const Nav = () => {
  return (
    <header className='absolute top-0 left-0 w-full p-8 flex items-center justify-between z-20 animate-fadeInText'>
      {/* <div className='text-white text-xl font-semibold'>Rayfitout</div> */}
      <img src='/reyfitout.svg' />

      <nav>
        <ul className='flex space-x-10 text-[16px] tracking-normal uppercase text-white'>
          <li>
            <a href='/projects' className='hover:underline'>
              Projects
            </a>
          </li>
          <li>
            <a href='/services' className='hover:underline'>
              Services
            </a>
          </li>
          <li>
            <a href='/systems' className='hover:underline'>
              Systems
            </a>
          </li>
          <li>
            <a href='/products' className='hover:underline'>
              Products
            </a>
          </li>
          <li>
            <a href='/about' className='hover:underline'>
              About
            </a>
          </li>
          <li>
            <a href='/contact' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
