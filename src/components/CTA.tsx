'use client'

import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-datatone-blue/90 via-datatone-purple/90 to-datatone-blue/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-40 w-20 h-20 bg-white/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-medium text-white bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            Limited Time Offer
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to build your{' '}
            <span className="relative">
              <span className="text-yellow-300">AI advantage</span>
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                <path d="M2 6c49.7-2 99.3-2 149 0 16.3 0.7 32.7 0.7 49 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-yellow-300"/>
              </svg>
            </span>
            ?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact our professional team for <span className="font-semibold text-white">pricing discussions</span> and discover how we can help transform your startup with custom AI solutions powered by enterprise-grade GPUs.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">Free</div>
              <div className="text-blue-100">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">48hr</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">Custom</div>
              <div className="text-blue-100">Pricing Plans</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white text-datatone-blue px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-50 hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us for Pricing
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="group bg-transparent text-white px-10 py-5 rounded-full text-lg font-bold border-2 border-white hover:bg-white hover:text-datatone-blue transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0h-8m8 0h4a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h4" />
              </svg>
              Schedule Call
            </button>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-blue-100">hello@datatone.xyz</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Response Time</div>
                  <div className="text-blue-100">Within 48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
