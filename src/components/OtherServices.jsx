const other_services = [
  {
    title: 'INTERIOR FIT OUT',
    imgSrc: '/interior-fit-out.jpg',
    href: '/interior-fit-out',
  },
  {
    title: 'INTERIOR DESIGN',
    imgSrc: '/interior-design.jpg',
    href: '/interior-design',
  },
  {
    title: 'ARCHITECTURE DESIGN',
    imgSrc: '/architecture-design.jpg',
    href: '/architecture-design',
  },
]

const OtherServices = () => {
  return (
    <div className='px-8 py-8'>
      <div className='uppercase text-[30px] font-medium mb-4'>Other Services</div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {other_services.map((svc) => (
          <a
            key={svc.title}
            href={svc.href}
            className='group relative block overflow-hidden h-[429px]'
          >
            <img
              src={svc.imgSrc}
              alt={svc.title}
              className='w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300'
            />

            <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
              <span className='text-[#FFFFFF] text-[24px] font-medium uppercase'>{svc.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default OtherServices
