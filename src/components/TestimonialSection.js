import React, { Component } from "react";
import SimpleSlider from "./TestimonialSlide";

function TestimonialSection() {
  return (
    <section className='testimonial-section pb-10' id='team'>
      <div className='testimonial-bg h-64 md:h-75 lg:h-96'>
        <img src='general/testimonial-background.jpg' className='w-full h-full object-cover object-center'></img>
      </div>
      <div className='container'>
        <div className='pt-10 pb-24 px-4 md:px-10 text-center max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl -mt-14 md:-mt-28 relative z-10'>
            <SimpleSlider></SimpleSlider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection ;
