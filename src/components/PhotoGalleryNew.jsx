import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGalleryNew = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  // Supported image extensions
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        // For development, we'll create a list of expected photos
        // In production, you might want to implement a proper API endpoint
        // to list directory contents
        
        const photoFiles = [];
        let photoIndex = 1;
        
        // Try to load photos dynamically (this is a simplified approach)
        // In a real app, you'd have an API endpoint to list directory contents
        for (let i = 1; i <= 20; i++) { // Check for up to 20 photos
          for (const ext of imageExtensions) {
            const photoPath = `/photos/photo${i}.${ext}`;
            
            // Create an image to test if it exists
            const img = new Image();
            img.onload = () => {
              if (!photoFiles.find(p => p.src === photoPath)) {
                photoFiles.push({
                  id: photoIndex++,
                  src: photoPath,
                  caption: `Beautiful Memory ${photoIndex - 1} 💕`
                });
                setPhotos([...photoFiles]);
              }
            };
            img.onerror = () => {
              // Photo doesn't exist, continue
            };
            img.src = photoPath;
          }
        }
        
        // Fallback photos for demonstration
        if (photoFiles.length === 0) {
          const fallbackPhotos = [
            { id: 1, src: null, caption: 'Our First Moment 💕', placeholder: '🌹' },
            { id: 2, src: null, caption: 'Forever Together 💑', placeholder: '💕' },
            { id: 3, src: null, caption: 'Love Across Distance 🌍', placeholder: '✨' },
            { id: 4, src: null, caption: 'My Everything ❤️', placeholder: '🎀' },
            { id: 5, src: null, caption: 'Beautiful Memories 🌹', placeholder: '💖' },
            { id: 6, src: null, caption: 'Always in My Heart 💖', placeholder: '🌸' },
          ];
          setPhotos(fallbackPhotos);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading photos:', error);
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  if (loading) {
    return (
      <section className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="text-white mt-4 text-lg">Loading beautiful memories...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            }}
          >
            Our Love Gallery
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto">
            Every moment with you is a treasure I'll keep forever 💖
          </p>
          <div className="mt-4 text-white opacity-80">
            <p>Drop your photos in the <span className="bg-white/20 px-3 py-1 rounded-full">/public/photos/</span> folder</p>
          </div>
        </motion.div>

        {/* Photo Grid - Improved Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 10 - 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08, 
                rotate: [0, -2, 2, 0],
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="cursor-pointer w-full max-w-xs"
              onClick={() => openModal(photo)}
            >
              {/* Polaroid Frame - Enhanced */}
              <div className="relative group">
                {/* Photo Container */}
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                  {/* Photo */}
                  <div className="relative aspect-square mb-2 md:mb-3 overflow-hidden rounded bg-gradient-to-br from-pink-50 to-purple-50">
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    {/* Fallback placeholder */}
                    <div 
                      className="w-full h-full flex items-center justify-center text-4xl md:text-6xl opacity-50"
                      style={{ display: photo.src ? 'none' : 'flex' }}
                    >
                      {photo.placeholder || '📷'}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="text-white text-sm md:text-base font-medium text-center px-2">
                        Click to view 💕
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption - Improved */}
                  <div className="text-center">
                    <p className="text-gray-700 font-medium text-xs md:text-sm lg:text-base serif-font leading-tight">
                      {photo.caption}
                    </p>
                  </div>
                </div>
                
                {/* Enhanced Decorative elements */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 rounded-sm opacity-70"></div>
                <div className="absolute -top-2 left-1/4 w-8 h-2 bg-pink-300/40 rounded-sm transform -rotate-12"></div>
                <div className="absolute -top-2 right-1/4 w-8 h-2 bg-purple-300/40 rounded-sm transform rotate-12"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 p-4">
                    {selectedPhoto.src ? (
                      <img
                        src={selectedPhoto.src}
                        alt={selectedPhoto.caption}
                        className="w-full h-auto max-h-[60vh] object-contain rounded"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="w-full h-64 flex items-center justify-center text-8xl bg-gradient-to-br from-pink-50 to-purple-50 rounded"
                      style={{ display: selectedPhoto.src ? 'none' : 'flex' }}
                    >
                      {selectedPhoto.placeholder || '📷'}
                    </div>
                  </div>
                  
                  {/* Caption and Info */}
                  <div className="md:w-1/3 p-6 flex flex-col justify-center">
                    <h3 
                      className="text-2xl font-bold text-gray-800 mb-4"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {selectedPhoto.caption}
                    </h3>
                    <div className="text-gray-600 space-y-2">
                      <p>A precious memory captured in time</p>
                      <p>Every moment with you is forever cherished</p>
                      <div className="pt-4">
                        <div className="flex gap-2 text-2xl">
                          <span>💕</span>
                          <span>🌹</span>
                          <span>✨</span>
                          <span>💖</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGalleryNew;
