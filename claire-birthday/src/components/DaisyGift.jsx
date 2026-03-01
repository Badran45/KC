import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DaisyGift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeartMessage, setShowHeartMessage] = useState(false);

  const openGift = () => {
    setIsOpen(true);
  };

  const openHeart = () => {
    setShowHeartMessage(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200" />
      
      {/* Magical Sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 opacity-60"
          style={{
            top: `${10 + (i * 7)}%`,
            left: `${5 + (i * 8)}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          ✨
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="gift-box"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8 romantic-font">
                A Special Gift For You 💝
              </h2>
              
              {/* 3D Gift Box */}
              <motion.div
                className="relative mx-auto w-48 h-48 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openGift}
              >
                {/* Box Base */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg shadow-2xl"
                  animate={{ rotateY: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Box Lid */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-400 rounded-lg shadow-xl"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Ribbon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-8 bg-yellow-400 opacity-80" />
                  <div className="absolute w-8 h-full bg-yellow-400 opacity-80" />
                </div>
                
                {/* Bow */}
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="text-6xl">🎀</div>
                </motion.div>
                
                <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-purple-700 font-semibold">
                  Click to open! 🎁
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="daisy-flower"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="glass-effect rounded-3xl p-12"
            >
              {/* Daisy Flower */}
              <motion.div
                className="relative mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
              >
                {/* Stem */}
                <motion.div
                  className="w-2 h-32 bg-green-500 mx-auto rounded-full"
                  initial={{ height: 0 }}
                  animate={{ height: 128 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                {/* Daisy Center */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
                />
                
                {/* Petals */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-1/2 w-8 h-12 bg-white rounded-full shadow-md"
                    style={{
                      transformOrigin: 'center bottom',
                      transform: `translateX(-50%) rotate(${i * 45}deg) translateY(-20px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + (i * 0.1),
                      type: "spring",
                    }}
                  />
                ))}
                
                {/* Floating Hearts Around Daisy */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`heart-${i}`}
                    className="absolute text-pink-400"
                    style={{
                      top: `${-20 + (i % 2) * 40}px`,
                      left: `${-60 + (i * 20)}px`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + (i * 0.3),
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <div className="text-2xl">❤️</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Romantic Message with Typewriter Effect */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <div className="text-xl md:text-2xl text-purple-800 romantic-font leading-relaxed">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, delay: 1.8, ease: "easeInOut" }}
                    className="inline-block overflow-hidden whitespace-nowrap"
                  >
                    My love Claire 🌼
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }}
                    className="inline-block overflow-hidden whitespace-nowrap"
                  >
                    Like this daisy, you make my world brighter every day
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, delay: 3.2, ease: "easeInOut" }}
                    className="inline-block overflow-hidden whitespace-nowrap"
                  >
                    From Egypt to the Philippines — my heart is yours forever 💖
                  </motion.span>
                </div>
              </motion.div>

              {/* Open My Heart Button */}
              <AnimatePresence>
                {!showHeartMessage && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openHeart}
                    className="glass-effect rounded-full px-8 py-4 text-lg font-bold text-purple-800 romantic-font hover:bg-white hover:bg-opacity-30 transition-all"
                  >
                    Open my heart ❤️
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Heart Message */}
              <AnimatePresence>
                {showHeartMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mt-8"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-pink-600 romantic-font glow-text">
                      I love you forever Claire
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="mt-4 text-6xl"
                    >
                      💕
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DaisyGift;
