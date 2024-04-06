import React from 'react'

function Footer() {
    return (
        <footer className='bg-neutral-900 pt-20' id='contact'>
            <div className='container'>
                <div className='navbar-brand mx-auto text-center mb-5'>
                    <a href='void(0)' className='inline-block p-3 bg-white rounded-md'>
                        <img src='wide-wage-logo.png' className='max-w-full h-20'></img>
                    </a>
                </div>
                <div className='space-y-4'>
                    <div className='w-full flex items-center justify-center gap-2 text-white hover:text-secondary transition-all duration-500'>
                        <div className='w-5 h-5 shrink-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <a href='mailto:widewageinvestment@gmail.com' className='shrink-0 text-lg font-light'>widewageinvestment@gmail.com</a>
                    </div>
                    <div className='w-full flex items-center justify-center gap-2 text-white hover:text-secondary transition-all duration-500'>
                        <div className='shrink-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        </div>
                        <a href='tel:+91 96873 83217' className='shrink-0 text-lg font-light'>96873 83217</a>
                    </div>
                    <div className='w-full flex items-center justify-center gap-2 text-white hover:text-secondary transition-all duration-500'>
                        <div className='shrink-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                        </div>
                        <a href='https:www.instagram.com' className='shrink-0 text-lg font-light'>@widewagwinvestment</a>
                    </div>
                </div>
                <div className='copyright py-4 border-t border-neutral-200 text-center text-white mt-6'>©{(new Date().getFullYear())} <a href="#" className='hover:text-secondary'>Wide Wage Investment</a>. All rights reserved</div>
            </div>
        </footer>
    )
}

export default Footer;
