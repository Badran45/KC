import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LockScreen from './components/LockScreen';
import HeroSection from './components/HeroSection';
import LoveLetter from './components/LoveLetter';
import LoveGallery from './components/LoveGallery';
import SurpriseSection from './components/SurpriseSection';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // For testing purposes, unlock immediately
    // In production, this would be handled by LockScreen component
    const timer = setTimeout(() => {
      setIsUnlocked(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <div className="relative">
      {/* Global background - Using new color system */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50" />
      <div className="fixed inset-0 bg-gradient-to-tr from-pink-50 via-rose-50 to-purple-50 opacity-60 animate-pulse" />
      
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <LockScreen key="lockscreen" onUnlock={handleUnlock} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Hero Section */}
            <HeroSection />
            
            {/* Love Gallery - New Premium Design */}
            <div id="love-gallery">
              <LoveGallery />
            </div>
            
            {/* Love Letter Section */}
            <LoveLetter />
            
            {/* Surprise Section - New 3D Gift Box */}
            <SurpriseSection />
            
            {/* Footer */}
            <footer className="relative z-10 py-16 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="glass-card p-8">
                  <p 
                    className="text-2xl md:text-3xl mb-4 text-gray-800 elegant-font"
                    style={{
                      textShadow: '0 2px 8px rgba(255, 77, 141, 0.2)',
                    }}
                  >
                    Made with all my love for Claire 💕
                  </p>
                  <p 
                    className="text-lg md:text-xl text-gray-600"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    From Egypt to Philippines, forever and always 🌍❤️
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <motion.span 
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ❤️
                    </motion.span>
                    <motion.span 
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    >
                      💕
                    </motion.span>
                    <motion.span 
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                    >
                      💖
                    </motion.span>
                    <motion.span 
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                    >
                      💗
                    </motion.span>
                    <motion.span 
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
                    >
                      💝
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
