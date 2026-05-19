import React from 'react'

function Footer() {
    return (
        <div className='w-full h-screen flex bg-zinc-900 p-20 font-["Neue_Montreal"]'>
            {/* Left Side: Heading and Logo */}
            <div className='w-1/2 flex flex-col justify-between pr-10'>
                <div className='heading'>
                    {/* Kept text size fix (6vw) and adjusted line height for the bold text */}
                    <h1 className='text-[6vw] uppercase font-["Founders_Grotesk_X-Condensed"] font-bold leading-none -mb-3'>Eye-</h1>
                    <h1 className='text-[6vw] uppercase font-["Founders_Grotesk_X-Condensed"] font-bold leading-none'>Opening</h1>
                    <h1 className='text-[6vw] uppercase font-["Founders_Grotesk_X-Condensed"] font-bold leading-none'>Presentations</h1>
                </div>

                {/* Logo Section */}
                <div className='logo mt-10'>
                    {/* Ochi Logo SVG */}
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.7 18.3C35.8 12.4 26.2 12.4 20.3 18.3C14.4 24.2 14.4 33.8 20.3 39.7C26.2 45.6 35.8 45.6 41.7 39.7C47.6 33.8 47.6 24.2 41.7 18.3ZM31 36C28.2 36 26 33.8 26 31C26 28.2 28.2 26 31 26C33.8 26 36 28.2 36 31C36 33.8 33.8 36 31 36Z" fill="#fff"/>
                        <circle cx="31" cy="31" r="28.5" stroke="#fff" strokeWidth="3"/>
                    </svg>
                    
                    {/* Footer text from the bottom left corner */}
                    <div className='mt-20 text-sm text-zinc-400'>
                        <a href="#">MORE VIDEOS</a>
                    </div>
                </div>
            </div>

            {/* Right Side: Contact Details and Navigation (Complex Column Layout) */}
            <div className='w-1/2 flex flex-col justify-between pt-10'>
                {/* Top Right: Presentations Heading */}
                <h2 className='text-[6vw] uppercase font-["Founders_Grotesk_X-Condensed"] font-bold leading-none -mb-3'>Presentations</h2>

                {/* Bottom Right: Three Columns (S:, L:, M:) */}
                <div className='flex justify-between w-full mt-20 text-zinc-300'>
                    {/* Column 1: Social (S:) */}
                    <div className='flex flex-col'>
                        <h4 className='mb-4 font-semibold text-white'>S:</h4>
                        <a className='underline text-base' href="#">Instagram</a>
                        <a className='underline text-base' href="#">Behance</a>
                        <a className='underline text-base' href="#">Facebook</a>
                        <a className='underline text-base' href="#">LinkedIn</a>
                    </div>

                    {/* Column 2: Location (L:) */}
                    <div className='flex flex-col'>
                        <h4 className='mb-4 font-semibold text-white'>L:</h4>
                        <p className='text-base'>202-1965 W 4th Ave</p>
                        <a className='underline text-base mb-4' href="#">Vancouver, Canada</a>
                        <p className='text-base'>30 Chukarina St</p>
                        <a className='underline text-base' href="#">Lviv, Ukraine</a>
                        
                        {/* Email (E:) is placed here */}
                        <h4 className='mt-10 mb-4 font-semibold text-white'>E:</h4>
                        <a className='underline text-base' href="mailto:hello@ochi.design">hello@ochi.design</a>
                    </div>

                    {/* Column 3: Menu (M:) */}
                    <div className='flex flex-col'>
                        <h4 className='mb-4 font-semibold text-white'>M:</h4>
                        <a className='underline text-base' href="#">Home</a>
                        <a className='underline text-base' href="#">Services</a>
                        <a className='underline text-base' href="#">Our work</a>
                        <a className='underline text-base' href="#">About us</a>
                    </div>
                </div>
                
                {/* Copyright Text */}
                <p className='text-sm text-zinc-400 mt-10'>&copy; ochi design 2024. <a href="#" className='underline'>Legal</a> <a href="#" className='underline'>Terms</a></p>
            </div>
        </div>
    )
}

export default Footer
