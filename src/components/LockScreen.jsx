import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const LockScreen = ({ onUnlock }) => {
  const [isBirthday, setIsBirthday] = useState(false);

  // Claire's birthday - March 1st, 2026 at midnight Philippines time
  const getBirthdayDate = () => {
    const birthday = new Date('2026-03-01T00:00:00+08:00'); // Philippines timezone
    return birthday;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl font-bold"
        >
          It's Time! 🎉💖
        </motion.div>
      );
    }

    return (
      <div className="flex gap-2 md:gap-4 text-white justify-center flex-wrap">
        <motion.div 
          className="text-center backdrop-blur-md bg-white/20 rounded-2xl p-3 md:p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-3xl md:text-5xl font-bold">{String(days).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm opacity-80">Days</div>
        </motion.div>
        <motion.div 
          className="text-center backdrop-blur-md bg-white/20 rounded-2xl p-3 md:p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-3xl md:text-5xl font-bold">{String(hours).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm opacity-80">Hours</div>
        </motion.div>
        <motion.div 
          className="text-center backdrop-blur-md bg-white/20 rounded-2xl p-3 md:p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-3xl md:text-5xl font-bold">{String(minutes).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm opacity-80">Minutes</div>
        </motion.div>
        <motion.div 
          className="text-center backdrop-blur-md bg-white/20 rounded-2xl p-3 md:p-4 border border-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-3xl md:text-5xl font-bold">{String(seconds).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm opacity-80">Seconds</div>
        </motion.div>
      </div>
    );
  };

  useEffect(() => {
    const checkBirthday = () => {
      const now = new Date();
      const philippinesTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
      const birthday = getBirthdayDate();
      
      // For testing purposes - you can remove this for production
      // setIsBirthday(true);
      // onUnlock();
      
      // In production, check if current time is past birthday
      if (philippinesTime >= birthday) {
        setIsBirthday(true);
        onUnlock();
      }
    };

    const timer = setInterval(checkBirthday, 1000);
    checkBirthday();

    return () => clearInterval(timer);
  }, [onUnlock]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-700 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8"
        >
          <div className="text-6xl md:text-8xl">🔒</div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold text-white mb-4"
          style={{
            fontFamily: 'Georgia, serif',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
          }}
        >
          Waiting for the most special day
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-6xl font-bold text-white mb-8"
          style={{
            fontFamily: 'Georgia, serif',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
          }}
        >
          of my love Claire 💖
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto border border-white/20 shadow-2xl"
        >
          <Countdown
            date={getBirthdayDate()}
            renderer={renderer}
            onComplete={() => {
              setIsBirthday(true);
              setTimeout(() => onUnlock(), 1000);
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-white text-lg md:text-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <span>🌏</span>
            <span>Philippines Time Zone</span>
            <span>🌏</span>
          </div>
          <div className="text-sm md:text-base opacity-80 mt-2">
            March 1st, 2026 - Midnight
          </div>
        </motion.div>

        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LockScreen;
