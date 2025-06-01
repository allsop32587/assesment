const items = [
  {
    title: 'modern profiles',
    imgSrc: '/modern_profiles.svg',
    href: '/modern-profiles',
  },
  {
    title: 'integeration',
    imgSrc: '/integeration.svg',
    href: '/integeration',
  },
  {
    title: 'modularity',
    imgSrc: '/modularity.svg',
    href: '/modularity',
  },
]

const OurProductsAndServices = () => {
  return (
    <div className='px-8 py-20'>
      <div className='grid grid-cols-3 gap-6'>
        {items.map((item) => (
          <a key={item.title} href={item.href} className='relative overflow-hidden group'>
            <img
              src={item.imgSrc}
              alt={item.title}
              className='w-full h-[574px] object-cover filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
            />

            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-white text-[18px] font-normal uppercase pointer-events-none'>
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default OurProductsAndServices
