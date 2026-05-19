import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20'>
            {/* Title Section */}
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            
            {/* Cards Section */}
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    
                    {/* First Card Container */}
                    <div className='cardcontainer relative w-1/2 h-[75vh]'>
                        {/* Text Label - ADJUSTED Positioning and Color */}
                        {/* The -ml-20 helps pull the massive text back slightly for better alignment */}
                        <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter text-white -ml-20'>
                            FYDE
                        </h1>

                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            {/* Placeholder Image 1 */}
                            <img 
                                className='w-full h-full bg-cover' 
                                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" 
                                alt="Featured Project: Fyde" 
                            />
                        </div>
                    </div>

                    {/* Second Card Container */}
                    <div className='cardcontainer relative w-1/2 h-[75vh]'>
                        {/* Text Label - ADJUSTED Positioning and Color */}
                        {/* The -mr-20 helps pull the massive text back slightly for better alignment */}
                        <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter text-white -mr-20'>
                            VISE
                        </h1>

                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            {/* Placeholder Image 2 */}
                            <img 
                                className='w-full h-full bg-cover' 
                                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg" 
                                alt="Featured Project: Vise" 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured
