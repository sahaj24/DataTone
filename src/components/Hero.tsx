'use client'

import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-datatone-blue/20 to-datatone-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-datatone-purple/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-datatone-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-datatone-blue bg-blue-50 rounded-full border border-blue-200">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by NVIDIA A100 GPUs
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-datatone-gray-900 mb-6 leading-tight">
            Fine-Tuned{' '}
            <span className="relative">
              <span className="gradient-text">AI</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 9c49.7-3 99.3-3 149 0 16.3 1 32.7 1 49 0" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}for{' '}
            <br className="hidden sm:block" />
            <span className="text-datatone-gray-700">Startups</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-datatone-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Custom models that adapt to your business. Our team specializes in fine-tuning AI models using{' '}
            <span className="font-semibold text-datatone-blue">NVIDIA A100 GPUs</span> to deliver 
            high-performance solutions for startups ready to scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-datatone-blue to-datatone-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Get Started Today
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="group bg-white text-datatone-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-datatone-blue hover:text-datatone-blue transition-all duration-300 inline-flex items-center">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              See Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">A100</div>
              <div className="text-datatone-gray-600 font-medium">NVIDIA GPUs</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">40GB</div>
              <div className="text-datatone-gray-600 font-medium">HBM2e Memory</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-datatone-gray-600 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-datatone-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
