'use client'

import React from 'react'

const About = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Enterprise-grade GPU infrastructure for rapid model training"
    },
    {
      icon: "🎯",
      title: "Precision Tuning",
      description: "Custom models tailored to your specific business requirements"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your data stays private with enterprise security standards"
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business needs"
    }
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-datatone-blue via-datatone-purple to-datatone-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-datatone-blue bg-blue-50 rounded-full">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              About Datatone
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-datatone-gray-900 mb-6 leading-tight">
              AI Excellence for{' '}
              <span className="gradient-text">Growing Startups</span>
            </h2>

            <p className="text-lg text-datatone-gray-600 mb-8 leading-relaxed">
              At Datatone, we specialize in providing cutting-edge AI fine-tuning services 
              specifically designed for startups and small companies. Our team of experienced 
              professionals leverages <span className="font-semibold text-datatone-blue">powerful GPU infrastructure</span> to create 
              custom AI models that adapt perfectly to your unique business needs.
            </p>

            <p className="text-lg text-datatone-gray-600 mb-10 leading-relaxed">
              We understand that every startup has distinct challenges and requirements, which is why we offer 
              personalized solutions that scale with your growth. <span className="font-semibold text-datatone-purple">Contact us for pricing discussions</span> and 
              discover how our professional team can help you build your AI advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-datatone-blue to-datatone-purple text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="text-datatone-blue border-2 border-datatone-blue px-6 py-3 rounded-full font-semibold hover:bg-datatone-blue hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-datatone-blue/20 hover:shadow-card-hover transition-all duration-300 hover:transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-datatone-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-datatone-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-datatone-gray-600">GPU Hours/Day</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-datatone-blue to-datatone-purple opacity-30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5TB</div>
                  <div className="text-sm text-datatone-gray-600">Data Processed</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-datatone-blue to-datatone-purple opacity-30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-datatone-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
