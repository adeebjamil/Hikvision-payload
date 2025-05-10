'use client'

import React from 'react'
import Link from 'next/link'

interface FooterProps {
  footerLogo?: {
    url?: string
    filename?: string
    alt?: string
  }
  description?: string
  contactInfo?: {
    address?: string
    phone?: string
    email?: string
    workingHours?: string
  }
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  copyrightText?: string
  navLinks?: Array<{
    label: string
    url: string
  }>
  columns?: Array<{
    title: string
    links: Array<{
      label: string
      url: string
    }>
  }>
}

export default function ModernFooter({
  footerLogo,
  description = 'Leading provider of advanced security solutions and CCTV systems, with a focus on quality, reliability, and customer satisfaction.',
  contactInfo = {
    address: 'wcdiwdcIe',
    phone: '7894561230',
    email: 'a@GMAIL.COM',
    workingHours: '09:30-06:30'
  },
  socialLinks = [],
  copyrightText = 'Hikvision© 2025 Security Solutions. All rights reserved.',
  navLinks = [],
  columns = []
}: FooterProps) {
  // Social icons mapping
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
          </svg>
        )
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
          </svg>
        )
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03z" />
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        )
      case 'youtube':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer className="bg-white text-gray-800 shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.1)]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo section */}
          <div>
            <div className="mb-6">
              {footerLogo ? (
                <img
                  src={
                    footerLogo.url ||
                    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/media/${footerLogo.filename}`
                  }
                  alt={footerLogo.alt || 'Hikvision UAE'}
                  className="h-10"
                />
              ) : (
                <h2 className="text-xl font-bold text-red-600">HIKVISION UAE</h2>
              )}
            </div>

            <p className="text-gray-600 mb-8">
              {description}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 shadow-sm flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 text-red-600"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic columns */}
          {columns.slice(0, 2).map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-900 mb-6 relative pb-2">
                {column.title}
                <span className="absolute left-0 bottom-0 w-16 h-0.5 bg-red-600"></span>
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.url}
                      className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center"
                    >
                      <svg className="w-3 h-3 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-red-50 opacity-50"></div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative pb-2">
              Contact Us
              <span className="absolute left-0 bottom-0 w-16 h-0.5 bg-red-600"></span>
            </h3>
            
            <div className="space-y-4 relative z-10">
              {contactInfo?.address && (
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{contactInfo.address}</span>
                </div>
              )}
              
              {contactInfo?.phone && (
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{contactInfo.phone}</span>
                </div>
              )}
              
              {contactInfo?.email && (
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{contactInfo.email}</span>
                </div>
              )}
              
              {contactInfo?.workingHours && (
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{contactInfo.workingHours}</span>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Certification section */}
      <div className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center text-gray-700 group">
              <div className="mr-3 p-2 rounded-full bg-white shadow-sm group-hover:bg-red-50 transition-colors duration-300">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">ISO 9001:2015 Certified</span>
            </div>
            
            <div className="flex items-center text-gray-700 group">
              <div className="mr-3 p-2 rounded-full bg-white shadow-sm group-hover:bg-red-50 transition-colors duration-300">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">24/7 Monitoring</span>
            </div>
            
            <div className="flex items-center text-gray-700 group">
              <div className="mr-3 p-2 rounded-full bg-white shadow-sm group-hover:bg-red-50 transition-colors duration-300">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-white py-5 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              {copyrightText}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.url}
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}