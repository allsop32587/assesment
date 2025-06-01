import Line from "./Line"

const services = [
  {
    title: 'Complimentary Installation',
    description:
      'We offer complimentary professional installation by our in‐house technicians to ensure flawless execution on every project.',
  },
  {
    title: 'Made‐to‐Measure Architecture',
    description:
      'Every system is precisely fabricated to its environment. No gaps, no compromises—only bespoke precision.',
  },
  {
    title: 'Patented Designs',
    description:
      'Our systems are designed to be embedded in the architecture—not added onto it. They align perfectly with joinery, wall cladding, and interior finishes.',
  },
]

const AboutProductsServices = () => {
  return (
    <div className='py-10'>
      {/* Section Heading */}
      <h2 className='px-8 text-[30px] mb-4 font-medium uppercase'>About Our Products & Services</h2>
      <Line />

      {/* Cards Container */}
      <div className='flex my-10 flex-row gap-8 justify-between px-8'>
        {services.map((item) => (
          <div key={item.title}>
            <div className='text-[24px] font-normal uppercase max-w-[250px]'>{item.title}</div>
            <p className='w-full text-[16px] font-normal text-[#8C8C8C]'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutProductsServices
