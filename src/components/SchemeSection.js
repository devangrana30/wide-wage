import React from 'react'

function SchemeSection() {
  return (
    <section className='relative section-gap'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <div className='text-neutral-900 mb-10'>
                    <h2 className='text-2xl md:text-4xl font-normal mb-3'>Capital gainer scheme</h2>
                    <div className='w-12 h-0.5 bg-primary opacity-30 mb-3'></div>
                </div>
                <div className='about-content text-lg tracking-wide font-normal space-y-4'>
                    <ul className='check-list space-y-4'>
                        <li>We are giving 2% of your invested money every month.</li>
                        <li>In this scheme your every month intrest will be added in your capital.</li>
                        <li>As per your next month intrest (2%) will be count on that added capital.</li>
                        <li>Example : If your capital or invested money is 1,00,000 INR
                            <p className='text-base mt-1'>Your first month intrest is 2,000 INR which will added to capital now your capital is 1,00,000 + 2,000 = 1,02,000 INR second month intrest is 2040 INR & so on…</p>
                        </li>
                    </ul>
                    <p>This will be continue till the scheme runs.</p>
                </div>
            </div>
            <div className='max-md:relative max-md:before:hidden before:content-[""] before:w-full md:before:w-1/2 before:h-full before:bg-neutral-100 before:absolute before:top-0 before:right-0 before:-z-10 md:px-6 max-md:bg-neutral-100 max-md:p-6 max-md:-mx-4'>
                <div className='text-neutral-900 mb-10'>
                    <h2 className='text-2xl md:text-4xl font-normal mb-3'>Reference reward scheme</h2>
                    <div className='w-12 h-0.5 bg-primary opacity-30 mb-3'></div>
                </div>
                <div className='about-content text-lg tracking-wide font-normal space-y-4'>
                    <ul className='check-list space-y-4'>
                        <li>Give reference and get money.</li>
                        <li>Get 1% of invested money of your reference person.</li>
                        <li>Suppose you are suggesting our investment policy to anyone else you will get 1% of that person’s capital.</li>
                        <li>Example : If your reference person’s capital is 1,00,000 INR you will get 1,000 INR once.</li>
                        <li>This scheme refers to existing clients only.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SchemeSection;
