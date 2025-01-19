/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useState } from 'react'

const StarEffect = () => { 
   // State untuk posisi awal bintang
   const [stars, setStars] = useState(
    Array.from({ length: 150 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  // Fungsi untuk mengubah posisi saat dihover
  const handleHover = (index : any) => {
    setStars((prevStars) =>
      prevStars.map((star, i) =>
        i === index
          ? {
              top: Math.random() * 100, // Posisi baru acak
              left: Math.random() * 100,
            }
          : star
      )
    );
  };


  return (
    <div className="starfield">
    {stars.map((star, index) => {
      const size = Math.random() * 5 + 1; // Ukuran acak
      const delay = Math.random() * 1; // Delay acak
      return (
        <div
          key={index}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay : `${delay}s`,
          }}
          onMouseEnter={() => handleHover(index)} // Trigger saat hover
        ></div>
      );
    })}
  </div>
  )
}

export default StarEffect
