/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { useNavContext } from '../context/navContext';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const {openNav, setOpenNav} = useNavContext();
  const navRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const hideTimeoutRef = useRef<any>(null);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home-page');

  // intersection observer untuk mengatahui saat ini berada di page mana dengan // Scroll ke elemen yang sesuai
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpenNav(false); // Tutup navbar setelah klik
  };

  // IntersectionObserver untuk mengetahui posisi aktif
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set id section yang aktif
          }
        });
      },
      {
        threshold: 0.5, // Adjust agar posisi dianggap aktif lebih responsif
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  


  // handle open nav
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  }

  // default navbar hidden
  useEffect(() => {
    if (navRef.current) {
      // Pastikan navbar tersembunyi secara default
      gsap.set(navRef.current, { x: "100%", visibility: "hidden" });
    }
  }, []);

  // handle close nav
  useEffect(() => {
    const body = document.body;
    if (openNav) {
      // Menambahkan overflow-hidden agar halaman tidak bisa di-scroll
      body.style.overflow = "hidden";

      // Animasi GSAP untuk menampilkan navbar
      gsap.to(navRef.current, {
        x: 0, // Geser ke posisi asli (dari kanan)
        visibility: "visible",
        duration: 1, // Durasi animasi
        ease: "power4.inOut", // Jenis easing
      });

      // Animasi GSAP untuk memunculkan tombol "close"
      gsap.from(".close-button", {
        scale: 0,
        delay: 0.7,
        duration: 0.7,
        ease: "elastic.inOut",
      })

       // Tampilkan overlay
       gsap.to(".overlay", {
        opacity: 0.5, // Transparansi overlay
        visibility: "visible",
        duration: 0.5,
      });

    } else {
      // mengaktifkan scroll kembali pada body
      body.style.overflow = "auto";


      // Animasi GSAP untuk menyembunyikan navbar
      gsap.to(navRef.current, {
        x: "100%", // Geser keluar ke kanan
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
            gsap.set(navRef.current, { visibility: "hidden" });
        }
      });

      // Sembunyikan overlay
      gsap.to(".overlay", {
        opacity: 0,
        visibility: "hidden",
        duration: 1,
      });
    }
  }, [openNav]);

  // Menyembunyikan navbar
  const hideNavbar = () => {
    if(!openNav) {
        gsap.to(".navbar", {
        y: "-100%", // Geser navbar ke atas
        duration: 0.4,
        ease: "power2.out",
      });
    }
    
  };

  // Menampilkan navbar
  const showNavbar = () => {
    gsap.to(".navbar", {
      y: "0%", // Geser navbar ke posisi semula
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // menyembunyikan navbar jika tidak ada action scroll
   // Logika untuk menyembunyikan navbar jika tidak ada aktivitas
   useEffect(() => {
    if (openNav) {
      // Jika menu navbar terbuka, hentikan semua timer dan event listener
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      return;
    }

    // Timer awal untuk menyembunyikan navbar setelah 5 detik tanpa aktivitas
    hideTimeoutRef.current = setTimeout(() => {
      hideNavbar();
    }, 4000);

    const resetHideTimeout = () => {
      // Tampilkan navbar saat ada aktivitas
      showNavbar();

      // Reset timer jika ada aktivitas
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Mulai ulang timer untuk menyembunyikan navbar
      hideTimeoutRef.current = setTimeout(() => {
        hideNavbar();
      }, 3000);
    };

    // Daftar event untuk mendeteksi aktivitas
    const activityEvents = ["scroll", "keypress"];
    activityEvents.forEach((event) => {
      window.addEventListener(event, resetHideTimeout);
    });

    // Bersihkan event listener dan timer saat komponen di-unmount
    return () => {
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetHideTimeout);
      });
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [openNav]); // Gunakan openNav sebagai dependensi

  return (
    <div className='border-b-[1px] border-white fixed z-40 w-full navbar'>
        <div className='flex items-center w-full justify-between p-4 xl:py-7 xl:px-16'>
            {/* Judul Navbar */}
            <div className='font-semibold text-sm xl:text-xl bg-gradient-to-r from-white to-gray-800 bg-clip-text text-transparent'>
                <h1>Evan Stefanus Candra</h1>
            </div>

            {/* Button Navbar */}
            <div onClick={() => handleOpenNav()} className='w-8 h-8 rounded-md cursor-pointer xl:w-10 xl:h-10 border xl:rounded-lg flex flex-col justify-evenly items-center'>
                <span className='w-5 h-[0.5px] bg-white'></span>  
                <span className='w-5 h-[0.5px] bg-white'></span>
                <span className='w-5 h-[0.5px] bg-white'></span>
            </div>
            
            {/* Menu Navbar */}
            <div ref={navRef} style={{ visibility: "hidden" }} className={`text-base sm:text-xl md:text-2xl xl:text-3xl font-bold p-10 absolute right-0 top-0 h-screen flex justify-center items-center w-1/2 xl:w-[30%] bg-secondary z-[100]`}>
                {/* tombol close */}
                <div onClick={() => handleOpenNav()} className='absolute cursor-pointer top-4 right-4 w-8 h-8 rounded-md xl:w-10 xl:h-10 border xl:rounded-lg flex justify-center items-center font-normal close-button'>X</div>

                {/* menu dan content navbar */}
                <div className='flex flex-col justify-center items-center space-y-6 xl:space-y-10'>
                    <a href='#' onClick={() => scrollToSection("home-page")} className={`hover:text-slate-700 duration-300 ease-out`}>Home</a>
                    <a href='#about-page' onClick={() => scrollToSection("about-page")} className={`hover:text-slate-700 duration-300 ease-out`} >About</a>
                    <a href='#project-page' onClick={() => scrollToSection("project-page")} className={`hover:text-slate-700 duration-300 ease-out`}>Projects</a>
                    <a href='#contact-page' onClick={() =>  scrollToSection("contact-page")} className={`hover:text-slate-700 duration-300 ease-out`}>Contact</a>

                    {/* sosmed */}
                    <div className='text-xs font-normal text-center xl:text-justify'>
                            <h1>@Copyright 2025. Evan Stefanus Candra</h1>
                    </div>

                    {/* full sosmed */}
                    <div className='flex gap-3'>
                          <a href="https://www.instagram.com/evan_sc_333/" target='_blank' className='duration-300 hover:text-slate-700'>
                            <svg role="img" className="fill-current w-6 h-6 xl:w-8 xl:h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                          </a>
                          <a href="mailto:gugeldodit@gmail.com" target='_blank' className='duration-300 hover:text-slate-700'>
                            <svg role="img" className="fill-current w-6 h-6 xl:w-8 xl:h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                          </a>
                          <a href="https://github.com/evanstef" target='_blank' className='duration-300 hover:text-slate-700'>
                            <svg role="img" className="fill-current w-6 h-6 xl:w-8 xl:h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                          </a>
                    </div>
                </div>
            </div>
        </div>

         {/* Background Overlay */}
      <div
        className="overlay fixed top-0 left-0 w-full h-screen bg-black opacity-0 z-50"
        style={{ visibility: "hidden" }}
        onClick={() => handleOpenNav()} // Klik overlay juga nutup navbar
      ></div>
    </div>
  )
}

export default Navbar
