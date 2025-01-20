/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Lenis from "lenis";
import HomePage from "./(components)/HomePage";
import AboutPage from "./(components)/AboutPage";
import ProjectPage from "./(components)/ProjectPage";
import ContactPage from "./(components)/ContactPage";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useNavContext } from "./context/navContext";
// import ParticlesComponent from "./(components)/ParticleComponent";



export default function Home() {
  const {openNav,isLoading} = useNavContext();
  const lenisRef = useRef<any>(null);

  // Initialize Lenis
   // Initialize Lenis once
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      // infinite: true,
    });

    lenisRef.current = lenis;

    // Use requestAnimationFrame to continuously update the scroll
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Link Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      // Cleanup Lenis when the component is unmounted
      lenis.destroy();
    };
  }, []);

   // mengatur agar lenis berhenti ketika open nav bernilai true 
   useEffect(() => {
    const lenis = lenisRef.current;

    if (lenis) {
      if (openNav || isLoading) {
        lenis.stop(); // Pause Lenis when the navbar is open
      } else {
        lenis.start(); // Resume Lenis when the navbar is closed
      }
    }
  }, [openNav, isLoading]); // Re-run when openNav changes



  useEffect(() => {
      if(!isLoading) {
        // Animation on scroll
        gsap.registerPlugin(ScrollTrigger);

        // Ambil elemen dengan kelas '.gsap_animation'
        const gsapAnim = gsap.utils.toArray(".gsap_animation");

    
        // Animasi untuk setiap elemen
        gsapAnim.forEach((section : any) => {
          gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              start: "bottom bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
              end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
              scrub: true, // Buat animasi sinkron dengan scroll
            },
            yPercent: 100, // Geser elemen ke bawah sebesar 100%
            ease: "none",
          });
        });

        // Ambil elemen dengan kelas '.gsap_animation'
        const parralaxAnim = gsap.utils.toArray(".parralax-wrap");
    
        // Animasi untuk setiap elemen
        parralaxAnim.forEach((parralax : any) => {
          gsap.to(parralax, {
            scrollTrigger: {
              trigger: parralax,
              start: "top top", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
              end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
              scrub: true
            },
            yPercent: -30, // Geser elemen ke keatas sebesar 40%
            ease: "none",
          });
        });

        ScrollTrigger.refresh()

        // scrolling effect tiap page
        // home-page
        gsap.to(".nama-evan", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -100,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // kata kata creting
        gsap.to(".crafting", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -200,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // kata kata frontend
        gsap.to(".front-end", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -300,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // gambar evan
        gsap.to(".gambar-evan", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : 250,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // languages
        gsap.to(".languages", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -400,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // about me
        gsap.to(".about-me", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -500,
          filter: "blur(7px)",
          ease: "power2.out",
          })

        // contact me
        gsap.to(".contact-me", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -600,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // rotate the gear
        gsap.to(".gear", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          rotate : 360,
        })

        // Akhir Home Page

        // About PAge
        gsap.from(".about-page", {
          scrollTrigger: {
            trigger: ".about-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          borderRadius : "40% 40% 0 0",
          duration : 1
          })

        gsap.to(".about-title", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -200,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // gear scroll
        gsap.to(".gear", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          rotate : 360,
        })

        // Line light
        gsap.to(".line-efek", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : 400,
          ease: "power2.out",
        })

        // Description
        gsap.to(".desc-about", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -300,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        // Skill and logo
        gsap.to(".skills-title", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : 500,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        gsap.to(".logo-skills .logo", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true,
          },
          x: (index) => 600 + index * 20, // Geser lebih jauh berdasarkan indeks elemen
          filter: "blur(7px)",
          ease: "power2.out",
        });

        // Akhir About Page


        // Project Page
        gsap.from(".project-page", {
          scrollTrigger: {
            trigger: ".project-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          borderRadius : "40% 40% 0 0",
          duration : 1
        })
        gsap.to(".project-title", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          x : -200,
          filter: "blur(7px)",
          ease: "power2.out",
        })

        gsap.to(".project-image", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "bottom top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          scale : 2,
          filter: "blur(7px)",
          ease: "power2.out",
        })
        // Akhir Project Page


        // Contact Page
        gsap.from(".contact-page", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "top bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          borderRadius : "40% 40% 0 0",
          duration : 1
        })
        gsap.from(".text1-contact", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "center bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          xPercent : -100,
          filter: "blur(7px)",
        })

        gsap.from(".text2-contact", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "center bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          xPercent : -200,
          filter: "blur(7px)",
        })

        // form pesan 
        gsap.from(".form-pesan-contact", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "center bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          xPercent : 200,
          filter: "blur(7px)",
          duration : 1
        })

        // sosmed
        gsap.from(".sosmed-contact", {
          scrollTrigger: {
            trigger: ".contact-page",
            start: "center bottom", // Mulai animasi saat bagian bawah elemen mencapai bagian bawah viewport
            end: "top top", // Selesai animasi saat bagian bawah elemen mencapai bagian atas viewport
            scrub: true
          },
          xPercent : -400,
          filter: "blur(7px)",
          duration : 1
        })

        // Akhir Contact Page
      }
      
  }, [isLoading]);

    return (
          <div ref={lenisRef} className={`relative`}>
            <HomePage />
            <AboutPage />
            <ProjectPage />
            <ContactPage />
          </div>
  )
}
