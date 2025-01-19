import React, { useState } from 'react';

const ShootingStars = () => {
  // State untuk posisi awal dan arah bintang
  const [stars] = useState(
    Array.from({ length: 100 }).map(() => {
      const direction = Math.random() < 0.5 ? 'top' : 'right-top'; // Random arah
      return {
        top: direction === 'top' ? Math.random() * 100 : 0, // Jika dari atas
        left: direction === 'top' ? Math.random() * 100 : 100, // Jika dari kanan atas
        direction,
      };
    })
  );

  return (
    <div className="shooting-star-container">
      {stars.map((star, index) => {
        const delay = Math.random() * 5; // Random delay (0-5 detik)
        return (
          <div
            key={index}
            className="shooting-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${delay}s`,
              transformOrigin: star.direction === 'right-top' ? 'top right' : 'top left', // Pusat rotasi
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ShootingStars;
