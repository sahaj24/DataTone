'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in-left">
            <h1 className="text-3xl font-bold">
              <span className="gradient-text">Data</span>
              <span className="text-datatone-gray-900">tone</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    index === 0 
                      ? 'text-datatone-blue' 
                      : 'text-datatone-gray-700 hover:text-datatone-blue'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-datatone-blue to-datatone-purple transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-datatone-blue to-datatone-purple text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-datatone-gray-700 hover:text-datatone-blue p-2 rounded-md transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-100">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-datatone-gray-700 hover:text-datatone-blue hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-datatone-blue to-datatone-purple text-white px-6 py-3 rounded-full text-sm font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
