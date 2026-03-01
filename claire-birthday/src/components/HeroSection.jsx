import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [rosePetals, setRosePetals] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [lightBlobs, setLightBlobs] = useState([]);
  const [butterflies, setButterflies] = useState([]);
  const [stars, setStars] = useState([]);
  const [titleSparkles, setTitleSparkles] = useState([]);

  useEffect(() => {
    // Generate falling rose petals from top (sides only)
    const newRosePetals = [];
    for (let i = 0; i < 15; i++) {
      newRosePetals.push({
        id: i,
        left: Math.random() * 20, // Left side only
        animationDuration: 20 + Math.random() * 15,
        animationDelay: Math.random() * 20,
        size: 15 + Math.random() * 20,
        swayAmount: 40 + Math.random() * 30,
      });
    }
    // Add some from right side
    for (let i = 15; i < 30; i++) {
      newRosePetals.push({
        id: i,
        left: 80 + Math.random() * 20, // Right side only
        animationDuration: 20 + Math.random() * 15,
        animationDelay: Math.random() * 20,
        size: 15 + Math.random() * 20,
        swayAmount: 40 + Math.random() * 30,
      });
    }
    setRosePetals(newRosePetals);

    // Generate floating hearts moving upward slowly (sides only)
    const newHearts = [];
    for (let i = 0; i < 10; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 15, // Left side
        animationDuration: 30 + Math.random() * 20,
        animationDelay: Math.random() * 25,
        size: 20 + Math.random() * 25,
      });
    }
    for (let i = 10; i < 20; i++) {
      newHearts.push({
        id: i,
        left: 85 + Math.random() * 15, // Right side
        animationDuration: 30 + Math.random() * 20,
        animationDelay: Math.random() * 25,
        size: 20 + Math.random() * 25,
      });
    }
    setHearts(newHearts);

    // Generate sparkles appearing and fading randomly (avoid center)
    const newSparkles = [];
    for (let i = 0; i < 20; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      // Avoid center area
      if (!((left > 25 && left < 75) && (top > 25 && top < 75))) {
        newSparkles.push({
          id: i,
          left,
          top,
          animationDuration: 3 + Math.random() * 4,
          animationDelay: Math.random() * 6,
          size: 2 + Math.random() * 5,
        });
      }
    }
    setSparkles(newSparkles);

    // Generate soft glowing light blobs moving slowly (background only)
    const newLightBlobs = [];
    for (let i = 0; i < 5; i++) {
      newLightBlobs.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: 40 + Math.random() * 25,
        animationDelay: Math.random() * 20,
        size: 200 + Math.random() * 150,
      });
    }
    setLightBlobs(newLightBlobs);

    // Generate small butterflies (sides only)
    const newButterflies = [];
    for (let i = 0; i < 6; i++) {
      newButterflies.push({
        id: i,
        left: Math.random() * 20, // Left side
        top: Math.random() * 100,
        animationDuration: 12 + Math.random() * 6,
        animationDelay: Math.random() * 8,
        size: 18 + Math.random() * 20,
      });
    }
    for (let i = 6; i < 12; i++) {
      newButterflies.push({
        id: i,
        left: 80 + Math.random() * 20, // Right side
        top: Math.random() * 100,
        animationDuration: 12 + Math.random() * 6,
        animationDelay: Math.random() * 8,
        size: 18 + Math.random() * 20,
      });
    }
    setButterflies(newButterflies);

    // Generate tiny stars (avoid center)
    const newStars = [];
    for (let i = 0; i < 15; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      // Avoid center area
      if (!((left > 30 && left < 70) && (top > 30 && top < 70))) {
        newStars.push({
          id: i,
          left,
          top,
          animationDuration: 5 + Math.random() * 4,
          animationDelay: Math.random() * 7,
          size: 10 + Math.random() * 12,
        });
      }
    }
    setStars(newStars);

    // Generate title sparkles (around title, not over it)
    const newTitleSparkles = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 150 + Math.random() * 50;
      newTitleSparkles.push({
        id: i,
        left: 50 + Math.cos(angle) * radius / window.innerWidth * 100,
        top: 40 + Math.sin(angle) * radius / window.innerHeight * 100,
        animationDuration: 2 + Math.random() * 2,
        animationDelay: Math.random() * 3,
        size: 4 + Math.random() * 4,
      });
    }
    setTitleSparkles(newTitleSparkles);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Romantic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 via-pink-100 to-rose-100 opacity-60 animate-pulse" />
        
        {/* BACKGROUND ANIMATION LAYER - All decorative elements */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          {/* Soft glowing light blobs */}
          {lightBlobs.map((blob) => (
            <motion.div
              key={blob.id}
              className="absolute rounded-full blur-3xl"
              style={{
                left: `${blob.left}%`,
                top: `${blob.top}%`,
                width: `${blob.size}px`,
                height: `${blob.size}px`,
                background: `radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)`,
              }}
              animate={{
                x: [0, 40, -30, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.15, 0.9, 1],
              }}
              transition={{
                duration: blob.animationDuration,
                delay: blob.animationDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Falling rose petals from top */}
          {rosePetals.map((petal) => (
            <motion.div
              key={petal.id}
              className="absolute text-rose-200/25 blur-sm"
              style={{
                left: `${petal.left}%`,
                fontSize: `${petal.size}px`,
                top: '-50px',
              }}
              animate={{
                y: [0, window.innerHeight + 150],
                x: [0, petal.swayAmount, -petal.swayAmount/2, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: petal.animationDuration,
                delay: petal.animationDelay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              🌹
            </motion.div>
          ))}

          {/* Floating hearts moving upward slowly */}
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute text-pink-200/30 blur-md"
              style={{
                left: `${heart.left}%`,
                fontSize: `${heart.size}px`,
                bottom: '-50px',
              }}
              animate={{
                y: [0, -(window.innerHeight + 150)],
                x: [0, (Math.random() - 0.5) * 40],
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: heart.animationDuration,
                delay: heart.animationDelay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              💕
            </motion.div>
          ))}

          {/* Small butterflies */}
          {butterflies.map((butterfly) => (
            <motion.div
              key={butterfly.id}
              className="absolute text-purple-200/40 blur-sm"
              style={{
                left: `${butterfly.left}%`,
                top: `${butterfly.top}%`,
                fontSize: `${butterfly.size}px`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, -8, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: butterfly.animationDuration,
                delay: butterfly.animationDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🦋
            </motion.div>
          ))}

          {/* Tiny stars */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute text-yellow-200/35 blur-sm"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                fontSize: `${star.size}px`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: star.animationDuration,
                delay: star.animationDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Background sparkles */}
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute bg-yellow-200/30 rounded-full blur-sm"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: sparkle.animationDuration,
                delay: sparkle.animationDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* HERO CONTENT - Always on top */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 max-w-7xl mx-auto w-full">
        {/* Soft radial light behind title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl"></div>
        
        {/* Title sparkles around title */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          {titleSparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute bg-yellow-300/60 rounded-full blur-sm"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: sparkle.animationDuration,
                delay: sparkle.animationDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main title with glowing gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2.5, 
            delay: 0.3, 
            ease: "easeOut",
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center leading-tight mb-6 md:mb-8"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #a855f7, #f43f5e, #ec4899)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontFamily: 'Playfair Display, serif',
            filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.4))',
            animation: 'gradientShift 4s ease infinite',
          }}
        >
          Happy Birthday
        </motion.h1>

        {/* Animated divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="w-32 md:w-48 h-1 mb-6 md:mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, #ec4899, #a855f7, transparent)',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 3s ease infinite',
          }}
        />

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight mb-8 md:mb-12"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #a855f7, #f43f5e)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontFamily: 'Playfair Display, serif',
            filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))',
            animation: 'gradientShift 4s ease infinite',
          }}
        >
          My Love    Claire 💖
        </motion.h2>

        {/* Small elegant subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center leading-relaxed max-w-3xl mx-auto px-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          From Egypt to the Philippines, my heart crosses oceans just to reach you
        </motion.p>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
