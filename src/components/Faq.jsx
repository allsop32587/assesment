import { useState } from 'react'

const faqs = [
  {
    question: 'What is interior fit out?',
    answer:
      'Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves installing partition walls, flooring, ceiling, fittings and furniture fixtures.',
  },
  {
    question: 'What do interior fit out companies in Dubai do?',
    answer:
      'They convert empty shells into tenant-ready interiors by installing partition walls, flooring, ceilings, lighting, and all necessary fixtures/furniture to make the space fully functional.',
  },
  {
    question: 'How long does an interior fit out typically take?',
    answer:
      'A typical interior fit out can take anywhere from 4–12 weeks, depending on project scale, customization level, and permitting. Larger commercial projects may take longer.',
  },
  {
    question: 'What is the scope of the interior fit out?',
    answer:
      'The scope usually includes architectural planning, material selection, partition construction, flooring, MEP (mechanical, electrical, plumbing) integration, finishes, and final furniture/fixture installation.',
  },
  {
    question: 'How much does an interior fit out cost?',
    answer:
      'Costs vary widely. Smaller office fit outs can start around AED 150–200 per square foot, while high-end or specialized projects can exceed AED 400 per square foot, depending on materials and complexity.',
  },
  {
    question: 'What countries does Rayfitout operate in?',
    answer:
      'Rayfitout operates throughout the UAE (Dubai, Abu Dhabi, Sharjah) and has completed projects in Qatar and Saudi Arabia. Contact us to discuss expansion into other regions.',
  },
]

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className='px-8 py-20'>
      <h2 className='text-[30px] font-normal leading-5 uppercase mb-8'>
        Frequently Asked Questions
      </h2>
      <div className='border-b border-[#D9D9D9]' />

      <div className='space-y-2'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b border-[#D9D9D9]'>
            {/* Question Row */}
            <button
              onClick={() => toggleFaq(index)}
              className='w-full flex justify-between items-center py-4 focus:outline-none'
            >
              <span className='text-[18px] font-normal uppercase text-black'>{faq.question}</span>
              <img
                src={openFaqIndex === index ? '/faq-open.svg' : '/faq-close.svg'}
                alt={openFaqIndex === index ? 'Collapse' : 'Expand'}
                className='w-3 h-3'
              />
            </button>

            {/* Answer (expand/collapse) */}
            <div
              className={`
                  overflow-hidden transition-all duration-300
                  ${openFaqIndex === index ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}
                `}
            >
              <p className='text-[16px] w-[670px] font-normal text-[#8C8C8C]'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq