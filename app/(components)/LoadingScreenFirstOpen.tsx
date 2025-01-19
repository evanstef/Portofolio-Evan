/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavContext } from "../context/navContext";

const LoadingScreenFirstOpen = () => {
  const { isLoading, setIsLoading } = useNavContext();
 
  // setting angka pada counter
  useEffect(() => {
    // counter value
    function counterValue() {
        let counter : any = document.querySelector(".counter");
        let currentValue = 0

        function updateCounter() {
            if(currentValue === 100) {
                return
            }
            
            currentValue += Math.floor(Math.random() * 10) + 1;

            if(currentValue > 100) {
                currentValue = 100
            }

            // mengisi counter element
            counter.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 50;

            setTimeout(updateCounter, delay)

        }

        updateCounter();
    }

    counterValue();

    gsap.to(".counter", {
        duration : 0.25,
        delay : 3.5,
        opacity : 0,
    })

    // gsap.to(".overlay", {
    //     duration
    // })

    gsap.to(".bar", 1.5,{
        delay : 3.5,
        height : 0,
        stagger: {
            amount : 1
        },
        onComplete: () => { 
            setIsLoading(false)
        }
       
    })



  }, [setIsLoading]);

  

  return (
    <div className={`container-loading ${isLoading ? "" : "hidden"}`}>
        <h1 className="counter fixed w-ful h-full flex justify-end items-end z-[9999] right-0 px-16 py-36 text-[80px] font-bold"></h1>
        <div className="overlay-loading flex h-screen w-screen fixed top-0 left-0 z-[1000]">
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
            <div className="bar h-[105vh] w-[10vw] bg-gradient-to-b from-secondary via-secondary to-variatif_secondary"></div>
        </div>
    </div>
    
  );
};

export default LoadingScreenFirstOpen;