import { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    // This effect runs once after the component mounts
    useEffect(() => {
        // Add an event listener to track mouse movement
        const handleMouseMove = (e) => {
            // Get the position of the mouse relative to the viewport
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            // Calculate the difference in coordinates from the center of the viewport
            // This is approximately where the center of the eyes component is located.
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            // Calculate the angle (in radians) using atan2, which accounts for all four quadrants
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            // Update the rotation state. The + 90 degrees ensures the line starts pointing up (0 degrees)
            // when the mouse is directly above the center (which is usually where you want the arrow to start).
            setRotate(angle - 180); 
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            {/* The background image section from the code snippet */}
            <div 
                data-scroll data-scroll-speed="-.7" // Example attribute for locomotive-scroll if used
                className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
            >
                {/* Center container for the two eye elements */}
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    
                    {/* First Eye */}
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            {/* Inner rotating line and pupil */}
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} 
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
                            >
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Eye */}
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                            {/* Inner rotating line and pupil */}
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} 
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
                            >
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
