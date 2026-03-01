import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MapAnimation = () => {
  const svgRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white romantic-font glow-text mb-4">
            Our Love Knows No Distance
          </h2>
          <p className="text-xl text-white opacity-80">From Egypt to Philippines, connected by love</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="relative">
            <svg
              ref={svgRef}
              viewBox="0 0 800 400"
              className="w-full h-auto max-w-4xl mx-auto"
            >
              {/* Background gradient */}
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f5576c" />
                  <stop offset="50%" stopColor="#f093fb" />
                  <stop offset="100%" stopColor="#667eea" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Egypt Location */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <circle cx="150" cy="200" r="8" fill="#f5576c" filter="url(#glow)" />
                <text x="150" y="180" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                  Egypt
                </text>
                <text x="150" y="230" textAnchor="middle" fill="white" fontSize="12">
                  🇪🇬
                </text>
              </motion.g>

              {/* Philippines Location */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <circle cx="650" cy="200" r="8" fill="#667eea" filter="url(#glow)" />
                <text x="650" y="180" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                  Philippines
                </text>
                <text x="650" y="230" textAnchor="middle" fill="white" fontSize="12">
                  🇵🇭
                </text>
              </motion.g>

              {/* Connection Line */}
              <motion.path
                d="M 150 200 Q 400 100 650 200"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset={isAnimating ? 0 : 1000}
                transition={{ duration: 3, delay: 0.5 }}
                filter="url(#glow)"
              />

              {/* Moving Heart */}
              {isAnimating && (
                <motion.circle r="6" fill="#ff69b4">
                  <motion.path
                    d="M 150 200 Q 400 100 650 200"
                    stroke="transparent"
                strokeWidth="12"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset="0"
                animate={{
                  strokeDashoffset: [-1000, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                onUpdate={(latest) => {
                  const path = svgRef.current?.querySelector('path');
                  if (path) {
                    const point = path.getPointAtLength(
                      ((latest.strokeDashoffset + 1000) / 1000) * 1000
                    );
                    // Update circle position based on path point
                  }
                }}
              />
                </motion.circle>
              )}

              {/* Distance Label */}
              <motion.text
                x="400"
                y="120"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                opacity="0.8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 0.8 : 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                8,000 km apart
              </motion.text>

              {/* Heart in the middle */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isAnimating ? 1 : 0, 
                  scale: isAnimating ? 1 : 0 
                }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <text x="400" y="200" textAnchor="middle" fontSize="40" filter="url(#glow)">
                  ❤️
                </text>
              </motion.g>
            </svg>

            {/* Distance Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : 20 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="text-center mt-8"
            >
              <p className="text-white text-lg romantic-font">
                "Distance means so little when someone means so much"
              </p>
              <div className="flex justify-center gap-8 mt-4">
                <div className="text-center">
                  <div className="text-2xl">📍</div>
                  <p className="text-white text-sm mt-1">Egypt</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl">💕</div>
                  <p className="text-white text-sm mt-1">Connected</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl">📍</div>
                  <p className="text-white text-sm mt-1">Philippines</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300 opacity-20"
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${10 + (i * 15)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <div className="text-xl">✨</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapAnimation;
