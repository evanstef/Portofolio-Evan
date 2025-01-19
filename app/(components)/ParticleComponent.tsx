/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = ({className, isActive = false }: {className? : string, isActive : boolean}) => {


  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container : any) => {
    console.log(container);
  };


  const options : any = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#0d0d0d",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'grab',
            
            parallax: {
              enable: true,
              force: 70,
              smooth: 10
            }
          },
        },
        modes: {
          push: {
            quantity: 5,
            distance: 500,
            duration: 5,
          },
          grab: {
            distance: 250,
          },
        },
      },
      particles: {
        color: {
          value: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFFF33"], // Warna variatif
        },
        links: {
          color: ["#FF33A1"],
          distance: 200,
          enable: true,
          opacity: 0.6,
          width: 1.2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: { min: 1, max: 3 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "image",
          options: {
            image : [
              { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" },
              { src: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png?f=webp" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png"},
              { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"},
              { src: "https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png" },
              { src: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"},
              { src: "https://miro.medium.com/v2/resize:fit:1200/1*WA_9JsyqFkge2HwYKcdJQw.png"},
              { src: "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png" },
              { src: "https://blogs.powercode.id/wp-content/uploads/2022/06/java-logo-vector.png" },
              { src: "https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" }
            ]
          } 
        },
        size: {
          value: { min: 5, max: 10 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!isActive) return null;

  return <Particles className={className} options={options} />; 
  
};

export default ParticlesComponent;