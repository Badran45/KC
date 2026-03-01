import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to autoplay music (may be blocked by browser)
    const attemptAutoplay = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Autoplay blocked, user interaction required');
        setIsPlaying(false);
      }
    };

    // Add a small delay to ensure component is mounted
    const timer = setTimeout(attemptAutoplay, 1000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-full p-4 backdrop-blur-lg"
      >
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Music Note Animation */}
          {isPlaying && (
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white"
            >
              🎵
            </motion.div>
          )}
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          loop
          volume={volume}
          preload="auto"
        >
          {/* Add romantic instrumental music file here */}
          {/* <source src="/music/romantic-instrumental.mp3" type="audio/mpeg" /> */}
          {/* Fallback for different formats */}
          <source src="/music/romantic-instrumental.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        {/* Mobile Volume Indicator */}
        <div className="md:hidden mt-2">
          <div className="flex gap-1">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className={`w-1 h-4 rounded-full ${
                  volume >= level / 3 ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Music Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 1 : 0.5 }}
        className="text-center mt-2"
      >
        <p className="text-white text-sm romantic-font">Romantic Melody</p>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
