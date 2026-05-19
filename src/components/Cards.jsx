import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen flex items-center px-20 gap-5'>
            {/* Left Card Container (Takes 1/2 width) */}
            <div className='cardcontainer h-[50vh] w-1/2'>
                {/* Single Card: OCHI (Dark Green) */}
                <div 
                    className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'
                >
                    <img 
                        src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
                        alt="Ochi Logo" 
                        className='w-32'
                    />
                    {/* Status Button for the "Client" Card */}
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-sm font-["Neue_Montreal"]'>
                        &copy; 2019-2022
                    </button>
                </div>
            </div>

            {/* Right Cards Container (Takes 1/2 width, split into two horizontal cards) */}
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                
                {/* Top-Right Card: CLUTCH (Dark Gray/Black) */}
                <div className='card relative rounded-xl w-1/2 h-full bg-[#192622] flex items-center justify-center'>
                    <img 
                        src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" 
                        alt="Clutch Logo" 
                        className='w-32'
                    />
                    {/* Status Button for the "Clutch" Card */}
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-sm font-["Neue_Montreal"]'>
                        RATING 5.0 ON CLUTCH
                    </button>
                </div>

                {/* Bottom-Right Card: TRAWA (Dark Gray/Black) */}
                <div className='card relative rounded-xl w-1/2 h-full bg-[#192622] flex items-center justify-center'>
                    <img 
                        src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" 
                        alt="Trawa Logo" 
                        className='w-32'
                    />
                    {/* Status Button for the "Trawa" Card */}
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-sm font-["Neue_Montreal"]'>
                        BUSINESS BOOTCAMP ALUMNI
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
