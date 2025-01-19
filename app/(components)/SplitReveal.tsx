"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const SplitText = () => {
  useEffect(() => {
     // Buat GSAP Timeline dengan repeat dan yoyo
     const tl = gsap.timeline({ repeat: -1, delay: 0.5 }); // repeat: -1 untuk animasi tanpa batas

     // Animasi garis reveal
     tl.fromTo(
       ".reveal-line",
       { width: "0%", opacity: 0 },
       {
         width: "100%",
         opacity: 1,
         duration: 1,
         ease: "power4.out",
       }
     )
       .fromTo(
         ".split-text span",
         { y: "100%", opacity: 0 }, // Muncul dari bawah
         {
           y: "0%",
           opacity: 1,
           duration: 1,
           stagger: 0.2,
           ease: "power4.out",
         },
         "-=0.8" // Mulai teks bersamaan dengan garis
       )
       .to(
         ".split-text span",
         {
           y: "-100%", // Hilang ke arah atas
           opacity: 0,
           duration: 1,
           stagger: 0.2,
           ease: "power4.in",
         },
         "+=0.5" // Delay sebelum animasi hilang
       )
       .to(
         ".reveal-line",
         {
           width: "0%",
           opacity: 0,
           duration: 1,
           ease: "power4.in",
         },
         "-=0.8" // Garis mulai menyusut saat teks mulai hilang
       );
  }, []);

  return (
    <div className="relative w-full flex text2-contact">
      <div className="relative font-bold">
        <div className="split-text relative">
          {Array.from("Contact Me").map((letter, index) => (
            <span
              key={index}
              className="inline-block transform translate-y-full"
            >
             {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        {/* Reveal Lines */}
        <div className="reveal-line absolute w-0 h-[2px] bg-white top-full"></div>
      </div>
    </div>
  );
};

export default SplitText;
