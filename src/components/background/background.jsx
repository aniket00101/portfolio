import React, { useState, useEffect } from 'react';

const DarkSpaceBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 4,
          twinkleDuration: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Generate shooting stars periodically
  useEffect(() => {
    const generateShootingStar = () => {
      const newShootingStar = {
        id: Date.now(),
        startX: Math.random() * 50,
        startY: Math.random() * 50,
        endX: Math.random() * 100 + 50,
        endY: Math.random() * 100 + 50,
        duration: Math.random() * 2 + 1,
      };
      
      setShootingStars(prev => [...prev, newShootingStar]);
      
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, newShootingStar.duration * 1000);
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        generateShootingStar();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ 
      background: 'radial-gradient(ellipse at center, #0f0f23 0%, #050505 50%, #000000 100%)' 
    }}>
      {/* Deep space nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/6 left-1/5 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(75, 0, 130, 0.4) 0%, rgba(25, 25, 112, 0.2) 40%, transparent 70%)',
            animationDuration: '8s'
          }}
        ></div>
        <div 
          className="absolute bottom-1/5 right-1/6 w-80 h-80 rounded-full blur-3xl opacity-25 animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 0, 139, 0.3) 0%, rgba(72, 61, 139, 0.15) 40%, transparent 70%)',
            animationDelay: '2s',
            animationDuration: '12s'
          }}
        ></div>
        <div 
          className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-15 animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, rgba(75, 0, 130, 0.1) 40%, transparent 70%)',
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        ></div>
      </div>

      {/* Distant galaxy glow */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full blur-2xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            animation: 'pulse 15s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full blur-2xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(173, 216, 230, 0.08) 0%, transparent 70%)',
            animation: 'pulse 18s ease-in-out infinite',
            animationDelay: '6s'
          }}
        ></div>
      </div>

      {/* Main stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `moveStar ${star.twinkleDuration * 3 + 10}s linear infinite, pulse ${star.twinkleDuration}s ease-in-out infinite`,
            animationDelay: `${star.twinkleDelay}s`,
            boxShadow: star.size > 2 ? '0 0 4px rgba(255, 255, 255, 0.8)' : 'none'
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
            boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8), 0 0 12px 4px rgba(255, 255, 255, 0.4)',
            animation: `shootingStar ${shootingStar.duration}s linear forwards`,
          }}
        />
      ))}

      {/* Additional twinkling stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `moveStar ${Math.random() * 8 + 15}s linear infinite, twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes moveStar {
          0% {
            transform: translateX(-100vw) translateY(0);
          }
          100% {
            transform: translateX(100vw) translateY(-50vh);
          }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(${200}px) translateY(${150}px);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>

      {/* Content area - you can place your content here */}
      <div className="relative z-10 flex items-center justify-center h-full">
        
      </div>
    </div>
  );
};

export default DarkSpaceBackground;
