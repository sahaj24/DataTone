'use client'

import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Model Fine-Tuning",
      description: "Optimize pre-trained models for your specific datasets and use cases using NVIDIA A100 GPUs for faster convergence and better performance.",
      features: ["Custom Training Pipelines", "Hyperparameter Optimization", "Domain-Specific Adaptation", "Performance Benchmarking"],
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-datatone-blue to-datatone-purple rounded-2xl blur opacity-75"></div>
          <div className="relative bg-white p-4 rounded-2xl">
            <svg className="w-8 h-8 text-datatone-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Custom AI Development",
      description: "Build AI solutions from the ground up, tailored to your business requirements with our A100-powered infrastructure for rapid prototyping and training.",
      features: ["Requirements Analysis", "Architecture Design", "Model Development", "Integration Support"],
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-datatone-purple to-pink-500 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-white p-4 rounded-2xl">
            <svg className="w-8 h-8 text-datatone-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Training Infrastructure",
      description: "Access our NVIDIA A100 GPU clusters for your training workloads with flexible scheduling and monitoring tools for efficient resource utilization.",
      features: ["GPU Cluster Access", "Training Monitoring", "Resource Scheduling", "Cost Optimization"],
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-datatone-green to-blue-500 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-white p-4 rounded-2xl">
            <svg className="w-8 h-8 text-datatone-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-datatone-blue/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-datatone-purple/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-datatone-blue bg-blue-50 rounded-full">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2m8 0H8" />
            </svg>
            Our Services
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-datatone-gray-900 mb-6 leading-tight">
            AI Services Powered by
            <br />
            <span className="gradient-text">NVIDIA A100 GPUs</span>
          </h2>
          <p className="text-xl text-datatone-gray-600 max-w-3xl mx-auto leading-relaxed">
            From model fine-tuning to custom development, we provide specialized AI services 
            backed by enterprise-grade A100 infrastructure for faster training and better results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-datatone-blue/20 shadow-card hover:shadow-card-hover transition-all duration-500 hover:transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-datatone-blue/5 to-datatone-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-datatone-gray-900 mb-4 group-hover:text-datatone-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-datatone-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-datatone-gray-600">
                      <svg className="w-4 h-4 text-datatone-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-datatone-blue to-datatone-purple text-white py-3 px-6 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-datatone-blue to-datatone-purple p-12 rounded-3xl text-white animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-4">Ready to Leverage A100 Power?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with professional AI fine-tuning services backed by NVIDIA A100 GPUs. 
            Contact us to discuss your specific requirements and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-datatone-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Discuss Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-datatone-blue transition-all transform hover:scale-105">
              Technical Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
