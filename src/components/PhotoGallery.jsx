import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample romantic images - replace with actual photos
  const photos = [
    { id: 1, caption: "Our First Moment 💕", placeholder: "📷" },
    { id: 2, caption: "Forever Together 💑", placeholder: "📷" },
    { id: 3, caption: "Love Across Distance 🌍", placeholder: "📷" },
    { id: 4, caption: "My Everything ❤️", placeholder: "📷" },
    { id: 5, caption: "Beautiful Memories 🌹", placeholder: "📷" },
    { id: 6, caption: "Always in My Heart 💖", placeholder: "📷" },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white romantic-font glow-text mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-white opacity-80">Every moment with you is precious</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 10 - 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="polaroid group">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-6xl opacity-50">{photo.placeholder}</div>
                  {/* Add actual images here */}
                  {/* <img src={`/photos/photo${photo.id}.jpg`} alt={photo.caption} className="w-full h-full object-cover rounded-lg" /> */}
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 romantic-font">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-8xl opacity-50">{selectedImage.placeholder}</div>
                    {/* Add actual image here */}
                    {/* <img src={`/photos/photo${selectedImage.id}.jpg`} alt={selectedImage.caption} className="w-full h-full object-cover rounded-lg" /> */}
                  </div>
                  <h3 className="text-2xl text-center romantic-font text-gray-800">
                    {selectedImage.caption}
                  </h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative Elements */}
        <div className="mt-16 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="inline-block text-4xl mx-2"
          >
            🌹
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="inline-block text-4xl mx-2"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="inline-block text-4xl mx-2"
          >
            🎀
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
