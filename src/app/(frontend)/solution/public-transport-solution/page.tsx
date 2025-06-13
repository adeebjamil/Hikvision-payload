import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Bus, 
  Shield, 
  Camera, 
  Users, 
  MapPin, 
  Brain, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Route,
  Settings,
  BarChart3,
  Monitor,
  Wifi,
  AlertTriangle,
  Navigation,
  Eye,
  Smartphone,
  Radio
} from 'lucide-react'

// SEO Metadata
export const metadata = {
  title: 'Public Transport Security Solutions | Smart Transit Systems | Hikvision UAE',
  description: 'Advanced security and monitoring solutions for public transportation. AI-powered surveillance, passenger safety systems, and smart transit management for buses, trains, and transport hubs.',
  keywords: 'public transport security, transit surveillance, passenger safety, smart transportation, bus security, train monitoring, transport hub security, AI transport systems',
  openGraph: {
    title: 'Public Transport Security Solutions | Hikvision UAE',
    description: 'Transform public transportation with intelligent security and monitoring solutions',
    images: ['/public-transport-solution/img1.webp'],
  },
}

export default function PublicTransportSolutionPage() {
  const transportSolutions = [
    {
      icon: <Bus className="h-8 w-8" />,
      title: "Vehicle Security Systems",
      description: "Comprehensive security solutions for buses, trains, and other public transport vehicles.",
      features: ["In-Vehicle Surveillance", "Driver Monitoring", "Passenger Safety"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Station & Hub Security",
      description: "Advanced monitoring for transport stations, terminals, and interchange hubs.",
      features: ["Perimeter Security", "Crowd Management", "Emergency Response"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Traffic Analytics",
      description: "Intelligent traffic flow analysis and passenger behavior monitoring systems.",
      features: ["Flow Optimization", "Incident Detection", "Predictive Analytics"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Fleet Management",
      description: "Real-time tracking and management of entire public transport fleets.",
      features: ["GPS Tracking", "Route Optimization", "Maintenance Alerts"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Passenger Safety",
      description: "Comprehensive security coverage for passengers and transport staff"
    },
    {
      icon: <Eye className="h-6 w-6 text-green-600" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance with instant alerts for security incidents"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Operational Insights",
      description: "Data analytics to improve efficiency and service quality"
    },
    {
      icon: <Settings className="h-6 w-6 text-orange-600" />,
      title: "Centralized Control",
      description: "Unified platform to manage entire transport network"
    }
  ];

  const applications = [
    {
      title: "City Buses",
      description: "Complete security and monitoring solutions for urban bus networks",
      image: "/public-transport-solution/bus.jpg",
      features: ["Driver Fatigue Detection", "Passenger Counting", "Route Monitoring"]
    },
    {
      title: "Metro & Rail Systems",
      description: "Advanced security systems for subway and railway transportation",
      image: "/public-transport-solution/metro.jpg",
      features: ["Platform Surveillance", "Train Car Monitoring", "Track Security"]
    },
    {
      title: "Transport Hubs",
      description: "Comprehensive monitoring for airports, bus stations, and terminals",
      image: "/public-transport-solution/hub.jpg",
      features: ["Baggage Screening", "Crowd Control", "Access Management"]
    }
  ];

  const features = [
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Mobile Surveillance",
      description: "High-definition cameras designed for moving vehicles",
      stats: "4K Quality"
    },
    {
      icon: <Navigation className="h-12 w-12" />,
      title: "GPS Tracking",
      description: "Real-time location monitoring for entire fleet",
      stats: "Real-time"
    },
    {
      icon: <Radio className="h-12 w-12" />,
      title: "Communication Systems",
      description: "Integrated voice and data communication solutions",
      stats: "24/7 Connected"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Integration",
      description: "Smartphone apps for drivers and control center staff",
      stats: "iOS & Android"
    }
  ];

  const statistics = [
    {
      number: "10M+",
      label: "Daily Passengers Protected",
      icon: <Users className="h-8 w-8" />
    },
    {
      number: "50+",
      label: "Cities Worldwide",
      icon: <MapPin className="h-8 w-8" />
    },
    {
      number: "99.8%",
      label: "System Uptime",
      icon: <Clock className="h-8 w-8" />
    },
    {
      number: "24/7",
      label: "Technical Support",
      icon: <Settings className="h-8 w-8" />
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/public-transport-solution/img1.webp"
            alt="Public Transport Security Solutions"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Bus className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Smart Transport Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
              Safe Public
              <span className="block text-4xl md:text-6xl mt-2">Transportation</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Revolutionize public transportation with AI-powered security, real-time monitoring, 
              and intelligent fleet management solutions that ensure passenger safety and operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Route className="h-5 w-5" />
                Explore Solutions
              </Link>
              <Link
                href="#contact"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Get Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all">
                  <div className="text-white mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </div>
            ))}
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
              Comprehensive Transport Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vehicle security to fleet management, our integrated solutions cover every aspect of public transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportSolutions.map((solution, index) => (
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Key Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Transport Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art technology designed specifically for public transportation challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-blue-500 to-green-600 p-6 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform text-white">
                  {React.cloneElement(feature.icon, { className: "h-12 w-12 mx-auto" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Key Benefits</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Our Transport Solutions?
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
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
              <div className="bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Bus className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Fleet Control Center</h3>
                      <p className="text-blue-100">Real-time transport monitoring</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">150</div>
                      <div className="text-sm text-blue-100">Active Vehicles</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Operations</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Fleet Status</span>
                      <span className="text-sm font-bold">Operational</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 rounded-full h-2 w-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Applications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Every Transport Mode
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systems adapt to different types of public transportation infrastructure
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
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform Your Transport System?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join cities worldwide that have enhanced their public transportation with our intelligent 
              security and monitoring solutions. Experience safer, smarter public transport.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Schedule Demo
              </Link>
              
              <Link
                href="/products"
                className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Eye className="h-5 w-5" />
                View Products
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Vehicles Monitored</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                <div className="text-gray-300">System Reliability</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}