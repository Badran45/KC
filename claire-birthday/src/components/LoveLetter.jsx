import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LoveLetter = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const sectionRef = useRef(null);

  const fullText = `My dearest Claire,

On your beautiful birthday, I close my eyes and imagine I am there with you…
holding your hands, looking into your eyes, and telling you how deeply I love you.

From Egypt to the Philippines, my heart travels every second just to be near you.
Distance is only a test — and our love is stronger than any ocean.

You are not just the love of my life…
you are my peace, my happiness, my home.

Every day with you makes me dream more about our future —
the day I finally see you,
the day I finally hug you,
the day I finally whisper "I love you" while you're in my arms.

And I promise you…
that day is coming soon, insha'Allah 🤍

Until that moment,
I will keep loving you more and more with every heartbeat.

Happy Birthday to the most beautiful soul in my world.

Forever yours,
Your man from Egypt 🇪🇬❤️`;

  useEffect(() => {
    // Generate only 3 very soft floating hearts
    const hearts = [];
    for (let i = 0; i < 3; i++) {
      hearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 35 + Math.random() * 20,
        animationDelay: Math.random() * 25,
        size: 30 + Math.random() * 25,
      });
    }
    setFloatingHearts(hearts);
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      if (hasStarted) return;
      setHasStarted(true);
      
      // Show final glowing message after animation completes
      setTimeout(() => {
        setShowFinalMessage(true);
        // Play soft romantic sound
        const audio = new Audio('/music/romantic-piano.mp3');
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio play failed:', e));
        
        // Release 6 tiny floating hearts upward
        const hearts = [];
        for (let i = 0; i < 6; i++) {
          hearts.push({
            id: i,
            left: 40 + Math.random() * 20,
            animationDuration: 8 + Math.random() * 4,
            animationDelay: i * 0.2,
            size: 15 + Math.random() * 10,
          });
        }
        setFloatingHearts(prev => [...prev, ...hearts]);
      }, 8000); // After all paragraphs have appeared
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Split text into paragraphs for staggered animation
  const paragraphs = fullText.split('\n\n').filter(p => p.trim());

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Soft dreamy gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe4ec] via-[#ffd6f0] to-[#f3d1ff]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ffd6f0] via-[#ffe4ec] to-[#f3d1ff] opacity-60 animate-pulse" />
        
        {/* Subtle radial light behind letter */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-300/15 rounded-full blur-3xl"></div>
        
        {/* Very soft floating blurred hearts - ONLY 3 */}
        {floatingHearts.map((heart, index) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-200/30 blur-lg"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, (Math.random() - 0.5) * 20],
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
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            A Letter From My Heart 💌
          </motion.h2>
        </motion.div>

        {/* Centered glass letter card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            className="max-w-3xl mx-auto rounded-[40px] bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(255,105,180,0.25)] border border-white/40 p-10 md:p-16 relative overflow-hidden"
          >
            {/* Paper texture effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,182,193,0.03) 2px, transparent 4px)`,
              }}></div>
            </div>
            
            {/* Soft inner glow */}
            <div className="absolute inset-2 rounded-[36px] bg-gradient-to-br from-pink-100/20 to-purple-100/20"></div>
            
            {/* Letter content with scrollable area */}
            <div className="relative z-10 max-h-[60vh] overflow-y-auto pr-4">
              <div 
                className="text-gray-800 font-serif leading-loose text-lg md:text-xl"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  lineHeight: '2',
                  letterSpacing: '0.02em'
                }}
              >
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.8, // Small delay between paragraphs
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Signature area */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: paragraphs.length * 0.8 }}
                viewport={{ once: true }}
                className="mt-16 text-right"
              >
                <div className="text-xl md:text-2xl text-gray-800 font-serif mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Forever yours,
                </div>
                <motion.div 
                  className="text-2xl md:text-3xl text-gray-800 font-serif"
                  style={{ 
                    fontFamily: 'Dancing Script, cursive',
                  }}
                  animate={{
                    textDecorationColor: ['#ec4899', '#a855f7', '#ec4899'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span style={{
                    textDecoration: 'underline',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '4px',
                  }}>
                    Your man from Egypt 🇪🇬❤️
                  </span>
                </motion.div>
              </motion.div>

              {/* Final glowing message */}
              {showFinalMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="mt-12 text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                      filter: ['drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))', 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))', 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-2xl md:text-3xl font-bold text-center"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899, #a855f7, #f43f5e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      fontFamily: 'Playfair Display, serif',
                    }}
                  >
                    See you soon, my love ✈️🤍
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Realistic 3D wax seal */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2.5, ease: "backOut" }}
            viewport={{ once: true }}
            className="absolute -bottom-4 -right-4 w-20 h-20"
          >
            <div className="relative w-full h-full">
              {/* Shadow */}
              <div className="absolute inset-0 bg-red-600/30 rounded-full blur-md transform translate-y-2"></div>
              
              {/* Main seal */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-xl flex items-center justify-center">
                {/* Shine effect */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full blur-sm"></div>
                <div className="absolute top-1 left-3 w-2 h-2 bg-white/60 rounded-full"></div>
                
                <span className="text-white text-3xl relative z-10">💕</span>
              </div>
              
              {/* 3D edge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-700/50 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;
