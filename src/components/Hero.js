import React from 'react'

function Hero() {
  return (
    <section className='relative py-10 md:py-20' id='home'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div className='text-left'>
            <h4 className='text-lg text-neutral-900 mb-4'>Keep growing with us.</h4>
            <h1 className='text-4xl md:text-6xl font-medium text-neutral-900'>Wide Wage <span className="text-primary">Investment</span></h1>
            <div className='text-lg font-medium text-neutral-900 mt-5'>
              <p>Let's Grow your business with us.</p>
            </div>
            <a href='#' className='btn btn-primary mt-4'>Let's work together</a>
          </div>
          <div>
            <img src='general/hero-illustrations.png' className='w-full'></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;