/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useRef  } from 'react'
import Container from './Container'
import StarEffect from './StarEffect'
import Image from 'next/image'
import { useNavContext } from '../context/navContext'
import { data } from './DataWorks'
import gsap from 'gsap'



const ProjectPage = () => {
  const {isLoading} = useNavContext()
  const hoverRefs : any = useRef<any>([]);


  useEffect(() => {
    // Set initial state untuk setiap detail card
    hoverRefs.current.forEach((card : any) => {
      gsap.set(card, { scale: 0, zIndex: -10, rotateY: 360 });
    });
  }, []);

  // Handle hover untuk animasi
  const handleMouseEnter = (index : any) => {
    gsap.to(hoverRefs.current[index], {
      scale: 1,
      zIndex: 50,
      duration: 0.5,
      rotateY: 0, // Untuk flip card
      ease: "power4.out",
    });
  };

  const handleMouseLeave = (index : any) => {
    gsap.to(hoverRefs.current[index], {
      scale: 0,
      zIndex: -10,
      duration: 0.5,
      rotateY: 360, // Balik ke posisi awal
      ease: "power4.in",
    });
  };
  return (
    <section id='project-page' className={`gsap_animation w-full h-screen overflow-hidden project-page relative bg-gradient-to-b from-primary via-primary to-variatif ${isLoading ? "hidden" : ""}`}>
      {/* <ParticlesComponent isActive={true} className="absolute top-0 left-0 w-full h-full z-50" /> */}
      <StarEffect />
      <Container className='relative z-10 pt-20 md:pt-10 lg:pt-32 xl:pt-0'>
        <h1 className='text-center font-bold text-2xl xl:text-4xl mb-10 sm:mb-6 project-title'>The Project</h1>
        <div className='grid grid-cols-2 gap-x-2 gap-y-14 sm:gap-6 md:gap-6 lg:grid-cols-3 lg:gap-10'>
          {data.map((item, index) => (
            <div key={index} className="project-container relative w-full h-full hover:scale-110 duration-300 ease-out">
              <div className='overflow-hidden relative w-full h-full -z-10 rounded-md'>
                <Image onMouseEnter={() => handleMouseEnter(index)}
                     onMouseLeave={() => handleMouseLeave(index)} 
                     src={item.image} alt={item.judul} className='w-full h-full project-image cursor-pointer ' />
              </div>
              

              {/* Detail Project */}
              <div 
                ref={(el : any) => (hoverRefs.current[index] = el)} 
                className={`cursor-default absolute -top-4 -right-2 sm:right-0 xl:-right-7 w-32 sm:w-40 md:w-52 xl:w-72 h-auto p-2 sm:p-3 bg-black bg-opacity-85 border rounded-lg space-y-3 scale-0 -z-10 transform rotate-y-360`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}>
                <p className='text-white text-center font-bold text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-lg line-clamp-1'>{item.judul}</p>
                <p className='line-clamp-4 sm:line-clamp-5 xl:line-clamp-[7] text-[7px] sm:text-[9px] md:text-[10px] xl:text-xs'>{item.desc}</p>
                {/* icon tech */}
                <div className='grid grid-cols-6 gap-1 md:grid-cols-7 sm:gap-2'>
                  {item.icontech.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <div className='flex gap-2 md:gap-3 text-[8px] sm:text-[10px] lg:text-xs'>
                  <a href={item.source} target="_blank" rel="noopener noreferrer" className='flex items-center gap-[2px] md:gap-1 rounded md:rounded-lg duration-300 ease-out hover:bg-black text-black hover:text-white font-bold bg-white px-1 md:px-2 md:py-1'>
                    <svg role="img" className="fill-current w-2 h-2 sm:w-3 sm:h-3 xl:w-4 xl:h-4 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    <p>Github</p>
                  </a>

                  {item.judul === "Diary App" ? (
                    <button  rel="noopener noreferrer" className='flex items-center text-white font-bold rounded md:rounded-lg bg-red-800 px-1 md:px-2 duration-300 ease-in-out' disabled>
                    {/* icon link */}

                    <p>Maintenance</p>
                    
                  </button>  
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-[2px] md:gap-1 text-black font-bold rounded md:rounded-lg bg-white px-1 md:px-2 hover:bg-black hover:text-white duration-300 ease-in-out md:py-1 '>
                      {/* icon link */}
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='fill-current w-2 h-2 sm:w-3 sm:h-3 xl:w-4 xl:h-4' viewBox="0 0 128 128">
                      <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
                      </svg>
                      <p>Demo</p>
                      
                    </a>  
                    )}   
                </div>
              </div>
            </div>
          ))}     
        </div>
      </Container>
    </section>
  )
}

export default ProjectPage
