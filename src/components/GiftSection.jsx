import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const GiftSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    // Generate sparkles for background
    const newSparkles = [];
    for (let i = 0; i < 25; i++) {
      newSparkles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 3 + Math.random() * 3,
        size: 2 + Math.random() * 3,
      });
    }
    setSparkles(newSparkles);

    // Generate floating hearts
    const hearts = [];
    for (let i = 0; i < 12; i++) {
      hearts.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 8,
        animationDuration: 15 + Math.random() * 10,
        size: 15 + Math.random() * 20,
      });
    }
    setFloatingHearts(hearts);
  }, []);

  const handleGiftOpen = () => {
    setIsOpen(true);
    
    // Trigger confetti explosion
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 60 * (timeLeft / duration);
      
      // Create multiple confetti bursts
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ffd700', '#ff6b6b', '#e91e63', '#9c27b0']
      });
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ffd700', '#ff6b6b', '#e91e63', '#9c27b0']
      });
    }, 250);

    // Show gift content after animation
    setTimeout(() => {
      setShowContent(true);
    }, 1200);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Enhanced Soft Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-50 via-pink-50 to-purple-50 opacity-60 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-50 via-pink-50 to-rose-50 opacity-40" />
      </div>

      {/* Enhanced Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute bg-yellow-300 rounded-full opacity-70"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
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

      {/* Floating Hearts Background */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className="absolute text-pink-400 opacity-30"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
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

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Premium Centered Content */}
        <div className="flex flex-col items-center justify-center space-y-12">
          
          {/* Elegant Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)',
              }}
            >
              A Special Gift for Claire 💖
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              A token of my eternal love across the oceans
            </motion.p>
          </motion.div>

          {/* Enhanced Gift Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              className="relative cursor-pointer group"
              onClick={!isOpen ? handleGiftOpen : undefined}
              whileHover={!isOpen ? { 
                scale: 1.08,
                filter: "brightness(1.1)",
              } : {}}
              whileTap={!isOpen ? { scale: 0.95 } : {}}
            >
              {/* Gift Box Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl"
                animate={!isOpen ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Box Lid */}
              <motion.div
                animate={isOpen ? 
                  { 
                    y: -30, 
                    rotateX: -35,
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" }
                  } : 
                  { 
                    y: 0, 
                    rotateX: 0,
                    opacity: 1,
                    transition: { duration: 0.6 }
                  }
                }
                className="relative w-64 h-16 md:w-80 md:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-t-2xl shadow-2xl"
              >
                {/* Enhanced Lid Ribbon */}
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-lg"></div>
                
                {/* Premium Bow */}
                <motion.div
                  animate={!isOpen ? { 
                    scale: [1, 1.3, 0],
                    rotate: [0, 360],
                  } : { 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: !isOpen ? Infinity : 0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
                    {/* Enhanced Bow Loops */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-10">
                      <motion.div
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute left-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"
                      />
                      <motion.div
                        animate={{ rotate: [5, -5, 5] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        className="absolute right-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Box Body */}
              <motion.div
                className="w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-red-400 to-pink-500 rounded-b-2xl shadow-2xl relative overflow-hidden"
                animate={isOpen ? 
                  { 
                    scale: 1.05,
                    opacity: 0.4,
                    transition: { duration: 1.2, ease: "easeInOut" }
                  } : 
                  { 
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.6 }
                  }
                }
              >
                {/* Enhanced Vertical Ribbon */}
                <div className="absolute left-1/2 top-0 bottom-0 w-6 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 transform -translate-x-1/2 rounded-full shadow-lg"></div>
                
                {/* Premium Gift Pattern */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-10 h-10 bg-white rounded-full"
                      style={{
                        left: `${15 + (i * 12)}%`,
                        top: `${15 + (i * 8)}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Floating Sparkles on Box */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`box-sparkle-${i}`}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${10 + (i * 12)}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Opened Gift Content */}
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.3, y: 50 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="backdrop-blur-2xl bg-white/95 rounded-3xl p-8 md:p-12 border-2 border-white/40 shadow-2xl max-w-md mx-4">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-7xl md:text-8xl mb-6 text-center"
                      >
                        💝
                      </motion.div>
                      <h3 
                        className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        You've unlocked my heart! 💖
                      </h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                        The greatest gift I can give you is my eternal love. 
                        Every day with you is a celebration, every moment a treasure.
                      </p>
                      <div className="flex justify-center gap-3 text-2xl">
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                        >
                          🎀
                        </motion.span>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                        >
                          💕
                        </motion.span>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                        >
                          ✨
                        </motion.span>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                        >
                          🌹
                        </motion.span>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
                        >
                          💖
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Glowing Message Button */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-center"
            >
              <motion.button
                onClick={handleGiftOpen}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 40px rgba(236, 72, 153, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-xl border-2 border-white/30 overflow-hidden group"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Heart Icon Animation */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10 flex items-center gap-2"
                >
                  <span className="text-xl">🎁</span>
                  <span className="text-lg md:text-xl">Open Your Gift</span>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="text-xl"
                  >
                    💕
                  </motion.span>
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
