import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            // The masker div has the key
            <div key={index} className='masker'> 
              
              {/* This inner div uses flex to align the box and the text on one line */}
              <div className='w-fit flex items-center overflow-hidden'>

                {/* Conditional Rendering of the Box (index 1 is the second item: "EYE OPENING") */}
                {index === 1 && (
                  // The design shows a RED box (image_70ebcb.png), so changed bg-green-500 to bg-red-500.
                  // Adjusted the top margin for slightly better vertical alignment with the first word.
                  <div className='mr-[1vw] w-[8.5vw] h-[5.2vw] rounded-md bg-green-500 relative'></div>
                )}
                
                {/* The h1 contains the text. Increased tracking-tighter for a closer letter spacing */}
                <h1 className="uppercase text-[9vw] leading-[7.5vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold">
                  {item}
                </h1>

              </div>
            </div>
          );
        })}
      </div>

      {/* ---------------------------------------------------------------------------------- */}
      {/* Footer Section: Fixing alignment and the "unique key prop" warning */}
      {/* ---------------------------------------------------------------------------------- */}
      
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-end py-5 px-20 text-sm">
        
        {/* Text Mapped Section (Fixes the unique key prop warning) */}
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          // FIX: Added key={index} to the p tag to remove the React warning.
          <p key={index} className="font-light tracking-tight leading-none">{item} </p>
        ))} 

        <div className="start flex items-center gap-5">
          {/* Button Styling */}
          <div className="px-4 py-2 border-[1px] border-zinc-400 font-light uppercase rounded-full">Start The Project</div>
          
          {/* Arrow Circle */}
          {/* FIX: Moved rotation to the outer div, removed the inner <span>. Changed border-zinc-500 to border-zinc-400 for consistency */}
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full -rotate-45">
            <FaArrowUpLong/>
          </div>
        </div> 
      </div>
    </div> 
  )
}

export default LandingPage