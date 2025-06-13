import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Zap, 
  Battery, 
  Sun, 
  Gauge, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Settings,
  BarChart3,
  Leaf
} from 'lucide-react'

// SEO Metadata
export const metadata = {
  title: 'Energy Management Solutions | Smart Energy Monitoring | Hikvision UAE',
  description: 'Advanced energy management and monitoring solutions with IoT sensors, smart meters, and AI-powered analytics. Optimize energy consumption and reduce costs with Hikvision&apos;s innovative energy solutions.',
  keywords: 'energy management, smart energy monitoring, IoT energy solutions, energy efficiency, smart meters, energy analytics, renewable energy monitoring, power management systems',
  openGraph: {
    title: 'Energy Management Solutions | Hikvision UAE',
    description: 'Transform your energy management with AI-powered monitoring solutions',
    images: ['/energy-solution/img1.webp'],
  },
}

export default function EnergySolutionPage() {
  const energySolutions = [
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Smart Energy Monitoring",
      description: "Real-time monitoring of energy consumption with advanced IoT sensors and smart meters.",
      features: ["24/7 Real-time Monitoring", "Energy Usage Analytics", "Automated Reporting"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Renewable Energy Integration",
      description: "Seamlessly integrate solar, wind, and other renewable energy sources into your system.",
      features: ["Solar Panel Monitoring", "Wind Energy Tracking", "Hybrid System Management"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energy Storage Management",
      description: "Intelligent battery management systems for optimal energy storage and distribution.",
      features: ["Battery Health Monitoring", "Charge/Discharge Optimization", "Backup Power Management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Energy Analytics & AI",
      description: "AI-powered analytics to predict energy patterns and optimize consumption.",
      features: ["Predictive Analytics", "Usage Pattern Recognition", "Cost Optimization"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Up to 30% Energy Savings",
      description: "Achieve significant cost reductions through intelligent energy management"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Reliability",
      description: "Ensure continuous power supply with advanced monitoring and backup systems"
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Environmental Impact",
      description: "Reduce carbon footprint with optimized energy consumption and renewable integration"
    },
    {
      icon: <Settings className="h-6 w-6 text-purple-600" />,
      title: "Automated Control",
      description: "Smart automation reduces manual intervention and improves efficiency"
    }
  ];

  const applications = [
    {
      title: "Industrial Facilities",
      description: "Comprehensive energy management for manufacturing plants and industrial complexes",
      image: "/images/industrial-energy.jpg",
      features: ["Load Balancing", "Peak Demand Management", "Equipment Efficiency Monitoring"]
    },
    {
      title: "Commercial Buildings",
      description: "Smart building energy solutions for offices, malls, and commercial spaces",
      image: "/images/commercial-energy.jpg",
      features: ["HVAC Optimization", "Lighting Control", "Tenant Energy Billing"]
    },
    {
      title: "Renewable Energy Plants",
      description: "Monitor and manage solar farms, wind farms, and hybrid renewable installations",
      image: "/images/renewable-energy.jpg",
      features: ["Generation Forecasting", "Grid Integration", "Performance Analytics"]
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section - Updated to show image properly */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/energy-solution/img1.webp"
            alt="Energy Management Solutions"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Smart Energy Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Energy Management
              <span className="block text-4xl md:text-6xl mt-2">Revolution</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Transform your energy infrastructure with AI-powered monitoring, renewable integration, 
              and intelligent automation solutions that reduce costs and environmental impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Lightbulb className="h-5 w-5" />
                Explore Solutions
              </Link>
              <Link
                href="#contact"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From monitoring to management, our integrated solutions cover every aspect of modern energy systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {energySolutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Key Benefits</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Our Energy Solutions?
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Energy Savings Dashboard</h3>
                      <p className="text-blue-100">Real-time monitoring & analytics</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">30%</div>
                      <div className="text-sm text-blue-100">Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Monitoring</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Energy Efficiency</span>
                      <span className="text-sm font-bold">85%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Applications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Versatile Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our energy management systems adapt to various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h3>
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  
                  <ul className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Clock className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform Your Energy Management?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join hundreds of organizations already saving energy and reducing costs with our intelligent solutions. 
              Get a personalized consultation from our energy experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Schedule Consultation
              </Link>
              
              <Link
                href="/products"
                className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Gauge className="h-5 w-5" />
                View Products
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-gray-300">Average Energy Savings</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}