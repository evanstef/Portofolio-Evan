/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useRef } from 'react'
import Container from './Container'
import foto from '../assets/foto_evan.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ParticlesComponent from './ParticleComponent'


const HomePage = () => {
  const containerHome = useRef(null);

  useGSAP(() => { 
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gambar-evan", {  opacity : 0, duration : 1, delay : 7 })

    const tl = gsap.timeline()
    // animasi pada tulisan dan foto
    tl.from(".nama-evan", { opacity : 0, duration : 2, delay : 8 })
      .from(".crafting", { scale : 0, duration : 0.2 })
      .from(".text1 p", { scale : 0, duration : 0.1, stagger : 0.1 })
      .from(".text2 p", { scale : 0, duration : 0.1, stagger : 0.1 })
      .from(".text3 p", { scale : 0, duration : 0.1, stagger : 0.1 })
      .from(".languages", {scale : 0, opacity : 0, duration : 0.5 })
      .from(".about-me", { scale : 0, duration : 0.1 })
      .from(".contact-me", { scale : 0, duration : 0.1 })

  }, {scope : containerHome})

  return (
    <section id='home-page' className='gsap_animation w-full h-screen home-page overflow-hidden bg-gradient-to-b from-primary via-primary to-variatif relative'>
         {/* efek background bintang */}
        <ParticlesComponent isActive={true} className="absolute top-0 left-0 w-full h-full z-10" />
        <Container>
            {/* Keterangan dan foto */}
            <div ref={containerHome} className='flex flex-col md:flex-row justify-between items-center w-full h-full'>
              
              {/* Keterangan */}
              <div className='w-full md:w-1/2 font-bold text-xl sm:text-2xl xl:text-4xl text-center mt-16 lg:mt-0'>
                <h1 className='mb-20 sm:mb-10 md:mb-24 nama-evan'>Hi, I&apos;m Evan Stefanus Candra</h1>
                <p className='text-xl crafting'>Crafting, Design As</p>
                <div className='flex gap-5 justify-center front-end'>

                  <div className='flex gap-1 text1'>
                    <p>F</p>
                    <p>r</p>
                    <p>o</p>
                    <p>n</p>
                    <p>t</p>
                    <p>e</p>
                    <p>n</p>
                    <p>d</p>
                  </div>

                  <div className='flex gap-1 text2'>
                    <p>W</p>
                    <p>e</p>
                    <p>b</p>
                  </div>
                  
                 <div className='flex gap-1 text3'>
                  <p>D</p>
                  <p>e</p>
                  <p>v</p>
                 </div>
                  
                </div>
                <div className='xl:text-2xl languages'>
                  <Typewriter 
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 50,
                      strings: ['JavaScript, TypeScript, PHP'],
                    }}
                  />
                </div>
                <div className='flex justify-center gap-5 items-center text-xs sm:text-sm  xl:text-base'>
                  <button className='about-me rounded-full px-4 py-1 hover:text-white hover:bg-gray-900 border-2 bg-white text-black mt-6'>About Me</button>
                  <button className='contact-me border-2 rounded-full px-4 py-1  hover:text-white mt-6'>Contact Me</button>
                </div>
                
              </div>

              {/* Foto */}
              <div className='w-full md:w-1/2 gambar-evan'>
                <Image className='w-full h-full' src={foto} alt="Foto Evan" />
              </div>

            </div>
        </Container>  
    </section>
  )
}

export default HomePage
