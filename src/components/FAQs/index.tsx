'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

interface FAQsProps {
  items: FAQ[]
  title?: string
}

export default function FAQs({ items = [], title = 'Frequently Asked Questions' }: FAQsProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  
  const openItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: true
    }))
  }

  const closeItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: false
    }))
  }

  // Group FAQs by category if categories exist
  const hasCategories = items.some(item => item.category)
  
  const groupedItems = hasCategories 
    ? items.reduce((acc, item) => {
        const category = item.category || 'General'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(item)
        return acc
      }, {} as Record<string, FAQ[]>)
    : { 'All Questions': items }

  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center mb-3">
            <div className="w-1.5 h-8 bg-red-600 mr-3"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          </div>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Find answers to common questions about our security solutions
          </p>
        </div>
        
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="mb-10">
            {hasCategories && category !== 'All Questions' && (
              <h3 className="text-xl font-semibold mb-6 text-red-600">{category}</h3> 
            )}
            
            <div className="space-y-4">
              {categoryItems.map((item) => (
                <div 
                  key={item.id} 
                  className="border border-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    onMouseEnter={() => openItem(item.id)}
                    onMouseLeave={() => closeItem(item.id)}
                    className="w-full px-6 py-4 flex justify-between items-center bg-black hover:bg-red-900 transition-colors text-left"
                  >
                    <h4 className="text-lg font-medium">{item.question}</h4>
                    <svg 
                      className={`transition-transform duration-300 w-5 h-5 ${openItems[item.id] ? 'rotate-180' : ''} text-red-600`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {openItems[item.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black"
                      >
                        <div className="px-6 py-4 text-gray-300 border-t border-gray-800">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}