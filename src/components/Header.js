import React, { useState } from 'react';

function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <header class="w-full py-3 sticky top-0 left-0 bg-white z-50">
        <div className='container'>
            <div className='w-full flex items-center justify-between'>
                <div className='navbar-brand'>
                    <a href='void(0)' className='block'>
                        <img src='wide-wage-logo.png' className='max-w-full h-20'></img>
                    </a>
                </div>
                <div className='menubar'>
                    <div className='max-md:flex items-center gap-4 md:hidden'>
                        <a href='void(0)' className='btn-icon md:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                        </a>
                        <button className='w-12 h-12 bg-gray-100 rounded-full shadow-inner flex items-center justify-center' onClick={() => setToggle(!toggle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </button>
                    </div>
                    {/* {toggle && ( */}
                    <div className={`menu-wrapper max-md:fixed left-0 max-md:w-full max-md:h-full max-md:bg-white max-md:space-y-5 max-md:-top-full max-md:opacity-0 max-md:pt-5 ${toggle === true ? 'active' : ''}`}>
                        {/* <Header></Header> */}
                        <ul className='flex max-md:flex-col md:items-center gap-5 md:gap-10 text-neutral-900 tracking-wide font-medium [&>li>a:not(.btn):hover]:text-secondary max-md:px-4'>
                        <li>
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#team'>Team</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                        <li>
                            <a href='void(0)' className='btn'>Get started</a>
                        </li>
                        </ul>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
