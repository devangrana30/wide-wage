import React from 'react'

function WithdrawlSection() {
  return (
    <section className='section-gap bg-neutral-50 relative'>
      <div className='container'>
        <div className='w-full md:w-3/5 max-md:mb-6'>
          <div className='text-neutral-900 mb-10'>
            <h2 className='text-2xl md:text-4xl font-normal mb-3'>Monthly withdrawal scheme</h2>
            <div className='w-12 h-0.5 bg-primary opacity-30 mb-3'></div>
          </div>
          <div className='about-content text-lg tracking-wide font-normal space-y-4'>
            <ul className='check-list space-y-4'>
              <li>In this scheme you can withdrawal your intrest everymonth.</li>
              <li>Interest of your added capital(money) is 2% per month.</li>
              <li>Interest will be directly added in your given bank account.</li>
              {/* <li>Your capital will be same as long as scheme runs with RESHAMWALA INVESTMENT HUB.</li> */}
              <li>Example : If you are investing 1,00,000 INR then your capital is 1,00,000 INR</li>
            </ul>
            <p>Your first month interest will be 2,000 INR which will directly added
              to your respective bank account and your capital will be same. </p>
          </div>
        </div>
        <div className='w-full md:w-2/5 h-full md:absolute top-0 right-0'>
          <img src='general/indian_rupee_composition.svg' className='w-full md:h-full max-h-96 object-bottom'></img>
        </div>
      </div>
    </section>
  )
}

export default WithdrawlSection;
