import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SurpriseSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const triggerSurprise = () => {
    setShowSurprise(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Full romantic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-rose-300" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-pink-300 to-rose-300 opacity-60 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Special Surprise
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">Just for you, my love</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showSurprise ? (
            <motion.div
              key="giftbox"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Soft radial glowing light behind gift */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[500px] bg-pink-400/50 rounded-full blur-3xl"></div>
                <div className="absolute w-[500px] h-[400px] bg-purple-400/40 rounded-full blur-2xl"></div>
                <div className="absolute w-[400px] h-[300px] bg-yellow-300/30 rounded-full blur-xl"></div>
              </div>
              
              {/* MAIN BIG GIFT - Dominant Element */}
              <motion.div
                onClick={triggerSurprise}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative cursor-pointer z-30 inline-block"
              >
                {/* Gift Emoji - BIG and DOMINANT */}
                <div 
                  className="relative inline-block"
                  style={{
                    fontSize: '160px', // Mobile base size
                    filter: 'drop-shadow(0 20px 40px rgba(236, 72, 153, 0.7))',
                  }}
                >
                  <span 
                    className="block"
                    style={{
                      fontSize: '160px', // Mobile
                      '@media (min-width: 768px)': {
                        fontSize: '190px', // Tablet
                      },
                      '@media (min-width: 1024px)': {
                        fontSize: '220px', // Desktop
                      },
                    }}
                  >
                    🎁
                  </span>
                </div>
                
                {/* Soft pulse glow from inside */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                    width: '120px',
                    height: '120px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Sparkles around gift */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-300"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${10 + Math.random() * 80}%`,
                        fontSize: `${16 + Math.random() * 12}px`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.4, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </div>

                {/* Opening Animation Effects */}
                <AnimatePresence>
                  {showSurprise && (
                    <>
                      {/* Gift fade out */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div 
                          style={{
                            fontSize: '160px',
                            filter: 'drop-shadow(0 20px 40px rgba(236, 72, 153, 0.7))',
                          }}
                        >
                          🎁
                        </div>
                      </motion.div>

                      {/* Massive golden light explosion */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 8, 12] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,255,255,0.9) 30%, transparent 70%)',
                          filter: 'blur(40px)',
                          width: '400px',
                          height: '400px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />

                      {/* Hearts and sparkles burst outward */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(25)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute"
                            style={{
                              top: '50%',
                              left: '50%',
                              fontSize: `${20 + Math.random() * 16}px`,
                            }}
                            initial={{ opacity: 0, scale: 0, y: 0, x: 0, rotate: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 2.5, 0.5],
                              y: [0, -400 - Math.random() * 200],
                              x: [0, (Math.random() - 0.5) * 500],
                              rotate: [0, 720],
                            }}
                            transition={{
                              duration: 3.5 + Math.random(),
                              delay: i * 0.05,
                              ease: "easeOut",
                            }}
                          >
                            {Math.random() > 0.5 ? '💕' : '✨'}
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="surprise"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="glass-effect rounded-3xl p-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-8xl mb-6"
              >
                💍
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                I love you forever
              </motion.h3>
              
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-pink-600"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Claire 💍
              </motion.h4>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-8"
              >
                <div className="flex justify-center gap-4">
                  {['❤️', '💕', '💖', '💗', '💝'].map((heart, index) => (
                    <motion.div
                      key={index}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.2 
                      }}
                      className="text-4xl"
                    >
                      {heart}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 text-xl text-gray-700 max-w-2xl mx-auto"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                You are my today, tomorrow, and forever. 
                Every moment with you is a treasure, 
                and I promise to love you for all eternity.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating decorative elements */}
        {!showSurprise && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pink-300 opacity-30"
                style={{
                  top: `${10 + (i * 12)}%`,
                  left: `${5 + (i * 12)}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <div className="text-2xl">✨</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Global keyframes for gradientShift animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default SurpriseSection;
