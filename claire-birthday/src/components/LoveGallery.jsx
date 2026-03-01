import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load images dynamically using import.meta.glob
    const loadImages = async () => {
      try {
        // Try to import images from /public/gallery
        const imageModules = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,gif,webp}');
        
        if (imageModules && Object.keys(imageModules).length > 0) {
          const photoFiles = Object.keys(imageModules)
            .slice(0, 4) // Only first 4 images
            .map((path, index) => {
              // Custom captions for each image
              const captions = [
                "The moment my heart chose you 💘",
                "My forever starts with you 🤍", 
                "See you soon, my love ✈️❤️",
                "Distance made our love stronger 🌏💞"
              ];
              
              return {
                id: index + 1,
                src: path.replace('/public', ''),
                caption: captions[index]
              };
            });
          
          setPhotos(photoFiles);
        } else {
          // Fallback if no images found
          const fallbackPhotos = [
            { id: 1, src: '/gallery/image1.jpeg', caption: 'The moment my heart chose you �' },
            { id: 2, src: '/gallery/image2.jpeg', caption: 'My forever starts with you 🤍' },
            { id: 3, src: '/gallery/image3.jpeg', caption: 'See you soon, my love ✈️❤️' },
            { id: 4, src: '/gallery/image4.jpeg', caption: 'Distance made our love stronger 🌏�' },
          ];
          setPhotos(fallbackPhotos);
        }
      } catch (error) {
        console.error('Error loading images:', error);
        // Fallback on error
        const fallbackPhotos = [
          { id: 1, src: '/gallery/image1.jpeg', caption: 'The moment my heart chose you �' },
          { id: 2, src: '/gallery/image2.jpeg', caption: 'My forever starts with you 🤍' },
          { id: 3, src: '/gallery/image3.jpeg', caption: 'See you soon, my love ✈️❤️' },
          { id: 4, src: '/gallery/image4.jpeg', caption: 'Distance made our love stronger 🌏�' },
        ];
        setPhotos(fallbackPhotos);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 via-rose-50 to-purple-50 opacity-60 animate-pulse" />
      </div>

      {/* Clean centered content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Romantic divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-4 text-3xl"
            >
              💞
            </motion.div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-pink-300 to-transparent"></div>
          </div>
          
          <h1 
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 elegant-font"
            style={{
              textShadow: '0 2px 8px rgba(255, 77, 141, 0.2)',
            }}
          >
            Forever Together
          </h1>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-pink-300 border-t-transparent"></div>
              <p className="text-gray-600 mt-4">Loading memories...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Clean Responsive Grid - First 4 Images */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {photos.slice(0, 4).map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 15px 30px rgba(255, 77, 141, 0.3)',
                  }}
                  className="cursor-pointer w-32 md:w-36 lg:w-40"
                  onClick={() => openModal(photo)}
                >
                  {/* Clean Square Image */}
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                    
                    {/* Fallback placeholder */}
                    <div 
                      className="w-full h-full flex items-center justify-center text-3xl md:text-4xl opacity-40 bg-gradient-to-br from-rose-50 to-pink-50"
                      style={{ display: photo.src ? 'none' : 'flex' }}
                    >
                      💕
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="text-center mt-3">
                    <p className="text-gray-700 font-medium text-sm md:text-base serif-font leading-tight">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {photos.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <div className="glass-card p-8 max-w-md mx-auto">
                  <div className="text-5xl mb-4">💖</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 elegant-font">
                    Our beautiful memories will appear here
                  </h3>
                  <p className="text-gray-600">
                    Add photos to /public/gallery
                  </p>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* Simplified Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4 }}
              className="glass-card max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Centered Image */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-2xl">
                  {selectedPhoto.src ? (
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.caption}
                      className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                    />
                  ) : null}
                  
                  {/* Fallback placeholder */}
                  <div 
                    className="w-full h-64 flex items-center justify-center text-6xl md:text-7xl bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg"
                    style={{ display: selectedPhoto.src ? 'none' : 'flex' }}
                  >
                    💕
                  </div>
                </div>
                
                {/* Caption */}
                <div className="text-center mt-6">
                  <h3 
                    className="text-xl md:text-2xl font-bold text-gray-800 mb-4 elegant-font"
                    style={{
                      textShadow: '0 2px 6px rgba(255, 77, 141, 0.1)',
                    }}
                  >
                    {selectedPhoto.caption}
                  </h3>
                </div>
                
                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-romantic mx-auto"
                >
                  <span className="flex items-center gap-2">
                    <span>💖</span>
                    <span>Close</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LoveGallery;
