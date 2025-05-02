'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: string
  title: string
  image: {
    url?: string
    filename?: string
    id?: string
  }
  category: {
    id: string
    title: string
  } | string
  description?: string
}

interface GalleryCategory {
  id: string
  title: string
}

interface GalleryProps {
  items: GalleryItem[]
  categories: GalleryCategory[]
  title?: string
}

export default function Gallery({ items = [], categories = [], title = 'Security Installation Gallery' }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(items)

  // Filter items when category selection changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(items)
    } else {
      setFilteredItems(
        items.filter((item) => {
          // Handle both string ID and object with ID
          const categoryId = typeof item.category === 'string' ? item.category : item.category?.id
          return categoryId === selectedCategory
        })
      )
    }
  }, [selectedCategory, items])

  // Extract category title for display
  const getCategoryTitle = (item: GalleryItem) => {
    if (typeof item.category === 'object' && item.category !== null) {
      return item.category.title
    }
    
    // If it's just an ID, find the matching category
    if (typeof item.category === 'string') {
      const foundCategory = categories.find(cat => cat.id === item.category)
      return foundCategory?.title || 'Uncategorized'
    }
    
    return 'Uncategorized'
  }

  return (
    <div className="py-16 bg-black"> {/* Changed from bg-gray-900 to bg-black */}
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="w-1.5 h-8 bg-red-600 mr-3"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
            </div>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Browse our collection of security solutions and installations
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-[200px] bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="h-48 relative">
                    {item.image && (item.image.url || item.image.filename) ? (
                      <img 
                        src={
                          item.image.url || 
                          `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/media/${item.image.filename}`
                        } 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            const fallback = document.createElement('div')
                            fallback.className = "w-full h-full flex items-center justify-center bg-gray-800"
                            fallback.innerHTML = '<span class="text-gray-400">Image unavailable</span>'
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                    
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
                      {getCategoryTitle(item)}
                    </div>
                  </div>
                  
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-lg">No items found in this category</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}