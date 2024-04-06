import React from 'react'

function WhyUsSection() {
  return (
    <section className='section-gap'>
      <div className='container'>
        <div className='text-center text-neutral-900 mb-10'>
            <h4 className='text-lg font-medium mb-3'>Why us</h4>
            <div className='w-12 h-0.5 bg-primary mx-auto opacity-30 mb-3'></div>
            <h2 className='text-3xl md:text-5xl font-normal mb-3'>Why Wide Wage Investment?</h2>
        </div>
        <div className='flex flex-wrap justify-center -mx-4 md:gap-y-5'>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='py-5 border-t border-neutral-200 space-y-3'>
                    <div className='text-base font-light text-black opacity-80'>01</div>
                    <h3 className='text-xl md:text-2xl'>It is a great source of <span className='font-semibold'>passive</span> income.</h3>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='py-5 border-t border-neutral-200 space-y-3'>
                    <div className='text-base font-light text-black opacity-80'>02</div>
                    <h3 className='text-xl md:text-2xl'>We provide safest money transfer policy.</h3>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='py-5 border-t border-neutral-200 space-y-3'>
                    <div className='text-base font-light text-black opacity-80'>03</div>
                    <h3 className='text-xl md:text-2xl'>We only believe in bank to bank transfer for better clearance.</h3>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='py-5 border-t border-neutral-200 space-y-3'>
                    <div className='text-base font-light text-black opacity-80'>04</div>
                    <h3 className='text-xl md:text-2xl'>We are giving better returns of your invested money than any other investment policy.</h3>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='py-5 border-t border-neutral-200 space-y-3'>
                    <div className='text-base font-light text-black opacity-80'>05</div>
                    <h3 className='text-xl md:text-2xl'>We are open to clients questions and confusion.</h3>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='py-5 border-t border-neutral-200 space-y-3'>
                    <div className='text-base font-light text-black opacity-80'>06</div>
                    <h3 className='text-xl md:text-2xl'>We also provide reference reward policy to already existing clients.</h3>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection;
