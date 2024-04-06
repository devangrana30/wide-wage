import React from 'react'

function AboutSection() {
  return (
    <section className='section-gap bg-neutral-50' id='about'>
      <div className='container'>
        <div className='text-center text-neutral-900 mb-10'>
          <h4 className='text-lg font-medium mb-3'>Wide Wage Investment</h4>
          <div className='w-12 h-0.5 bg-primary mx-auto opacity-30 mb-3'></div>
          <h2 className='text-3xl md:text-5xl font-normal mb-3'>About Us</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div className='about-img'>
            <img src='general/about-illustrations-image.png' className='w-full xl:w-3/4'></img>
          </div>
          <div className='about-content text-xl tracking-wide font-normal space-y-3'>
            <p>WIDE WAGE INVESTMENT is basic investment center with good return policy that can helps you to keep your future secure and financially carefree.</p>
            <p>Make your future better with our highly return scheme and as well as make your present more pleasant.</p>
            <p>Get good passive income with our different schemes that can helps you to improve your financial status.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
