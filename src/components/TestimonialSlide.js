import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider(props) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };
    const testimonials = [
        {
            id: 1,
            contents: "Vatsal Reshamwala has former international gymnastics player and achieved so many things in his life however his mindset is to achieve something in business so he started his firm in short period of time as a founder of WIDE WAGE INVESTMENT.",
            tagline: '"If you want to succeed in your life, forget about the failure."',
            name: "Vatsal Reshamwala",
            role: "CEO & Founder"
        },
        {
            id: 2,
            contents: "As we started our firm from trash like every other business. Anushka joined our firm as finance advisor. She started her career in different field rather her dedication & vision possible establishment of WIDE WAGE INVESTMENT.",
            tagline: '“Every investment is worthy”',
            name: "Anushka Mistry",
            role: "MD & Co-Founder"
        },
        // {
        //     id: 3,
        //     contents: "He started his career as analyst but with the thought of achieving his dream he joined this company. And his integrity and honesty gave this company a good and straight employee. Utilizing his talent and knowledge for company made him worthy.",
        //     tagline: '“Every investment is worthy”',
        //     name: "Bhagirath Variya",
        //     role: "GM & CO-Founder"
        // },
    ];

    return (
        <Slider {...settings}>
            {testimonials.map((item) => (
                <div className='testimonial-slide' key={item.id}>
                    <div className='quote mb-10 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-white mx-auto" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" /><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" /></svg>
                    </div>
                    <div className='about-content text-lg tracking-wide font-light text-white leading-loose space-y-3 mb-10'>
                        <p>{item.contents}</p>
                        <p>{item.tagline}</p>
                    </div>
                    <div className='space-y-3 text-white font-normal'>
                        <div className='text-xl font-medium tracking-wide'>{item.name}</div>
                        <div className='text-base'>{item.role}</div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}