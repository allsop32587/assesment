const ProductsVideo = () => {
  return (
    <div className='flex flex-row gap-8 py-12'>
      <div className='w-[600px] h-[617px] relative overflow-hidden'>
        <video
          className='w-full h-full object-cover opacity-0 animate-fadeIn'
          autoPlay
          muted
          loop
          playsInline
        >
          <source src='/video-1.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='w-[803px] h-[617px] relative overflow-hidden'>
        <video
          className='w-full h-full object-cover opacity-0 animate-fadeIn'
          autoPlay
          muted
          loop
          playsInline
        >
          <source src='/video-2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default ProductsVideo
