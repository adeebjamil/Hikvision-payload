'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Simplified interface - direct image field instead of heroImage
interface Item {
  id?: string
  title: string
  image: {
    id?: string
    filename?: string
    url?: string
  }
}

export default function ItemCarousel({ items = [] }: { items: Item[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  
  // Simple responsive handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Navigation functions
  const nextItems = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerView
      return nextIndex >= items.length ? 0 : nextIndex
    })
  }
  
  const prevItems = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev - itemsPerView
      return nextIndex < 0 ? Math.max(0, items.length - itemsPerView) : nextIndex
    })
  }
  
  // Show placeholder if no items
  if (!items.length) {
    return (
      <div className="my-16 px-6">
        <h2 className="text-2xl font-bold text-white mb-6">Security Solutions</h2>
        <div className="bg-black p-8 text-center rounded-lg border border-gray-800">
          <p className="text-gray-400">No items available</p>
        </div>
      </div>
    )
  }
  
  // Get current visible items
  const visibleItems = items.slice(
    currentIndex,
    Math.min(currentIndex + itemsPerView, items.length)
  )

  return (
    <div className="my-16 py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Simple header */}
        <div className="relative mb-10 flex items-center">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className="w-1.5 h-8 bg-red-600 mr-3"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Security Solutions</h2>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={prevItems}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-red-600 transition-all duration-300 border border-gray-800"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextItems}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-red-600 transition-all duration-300 border border-gray-800"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Item grid */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence initial={false}>
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-black rounded-lg overflow-hidden shadow-lg h-full flex flex-col border border-gray-800">
                    {/* DIRECT IMAGE FIELD ACCESS */}
                    <div className="relative h-64 bg-black">
                      {renderImage(item)}
                    </div>
                    
                    {/* ITEM TITLE */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// SIMPLIFIED image rendering function for direct image field access
function renderImage(item: Item) {
  // Check if we have image data
  if (!item.image) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <span className="text-gray-500">No image</span>
      </div>
    );
  }
  
  // Get image URL - direct from url property or construct from filename
  let imageUrl = item.image.url;
  if (!imageUrl && item.image.filename) {
    imageUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/media/${item.image.filename}`;
  }
  
  // Render image with error handling
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={item.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Failed to load image:', imageUrl);
          // Simple fallback - show a placeholder
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const fallback = document.createElement('div');
            fallback.className = "w-full h-full flex items-center justify-center bg-black";
            fallback.innerHTML = '<span class="text-gray-500">Image unavailable</span>';
            parent.appendChild(fallback);
          }
        }}
      />
    );
  }
  
  // Fallback
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <span className="text-gray-500">No image URL</span>
    </div>
  );
}