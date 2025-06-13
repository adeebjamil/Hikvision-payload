import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  GraduationCap, 
  Shield, 
  Camera, 
  Users, 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Settings,
  BarChart3,
  Monitor,
  Wifi,
  AlertTriangle,
  MapPin,
  Eye
} from 'lucide-react'

// SEO Metadata
export const metadata = {
  title: 'Education Security Solutions | Smart Campus Management | Hikvision UAE',
  description: 'Comprehensive security and management solutions for educational institutions. AI-powered surveillance, access control, and smart campus technologies to ensure student safety and enhance learning environments.',
  keywords: 'education security, smart campus, school surveillance, student safety, campus management, educational technology, AI security systems, access control schools',
  openGraph: {
    title: 'Education Security Solutions | Hikvision UAE',
    description: 'Transform your educational institution with intelligent security and management solutions',
    images: ['/education-solution/img1.webp'],
  },
}

export default function EducationSolutionPage() {
  const educationSolutions = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Campus Security & Surveillance",
      description: "Comprehensive security systems with AI-powered video analytics for enhanced campus safety.",
      features: ["24/7 Video Monitoring", "Intrusion Detection", "Emergency Response"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Access Control Systems",
      description: "Smart access management for buildings, classrooms, and restricted areas.",
      features: ["Student ID Integration", "Visitor Management", "Attendance Tracking"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analytics",
      description: "Intelligent behavior analysis for crowd management and incident prevention.",
      features: ["Crowd Density Monitoring", "Behavioral Analysis", "Incident Detection"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Smart Classroom Solutions",
      description: "Interactive learning environments with integrated security and communication systems.",
      features: ["Interactive Displays", "Audio/Video Integration", "Remote Management"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Student Safety",
      description: "Comprehensive security coverage to protect students, staff, and visitors"
    },
    {
      icon: <Eye className="h-6 w-6 text-green-600" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance with instant alerts for suspicious activities"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Data-Driven Insights",
      description: "Analytics to improve campus operations and emergency response"
    },
    {
      icon: <Settings className="h-6 w-6 text-orange-600" />,
      title: "Centralized Management",
      description: "Unified platform to manage all security and educational systems"
    }
  ];

  const applications = [
    {
      title: "K-12 Schools",
      description: "Complete security solutions for primary and secondary educational institutions",
      image: "/education-solution/school.jpg",
      features: ["Playground Monitoring", "Bus Safety Systems", "Parent Communication"]
    },
    {
      title: "Universities & Colleges",
      description: "Advanced campus-wide security and management systems for higher education",
      image: "/education-solution/university.jpg",
      features: ["Dormitory Security", "Library Management", "Research Facility Protection"]
    },
    {
      title: "Training Centers",
      description: "Specialized solutions for vocational and professional training facilities",
      image: "/education-solution/training.jpg",
      features: ["Equipment Monitoring", "Skills Assessment", "Safety Compliance"]
    }
  ];

  const features = [
    {
      icon: <Camera className="h-12 w-12" />,
      title: "AI-Powered Cameras",
      description: "Advanced surveillance with facial recognition and behavior analysis",
      stats: "99.9% Accuracy"
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      title: "IoT Integration",
      description: "Connected devices for comprehensive campus monitoring",
      stats: "24/7 Coverage"
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Emergency Response",
      description: "Rapid alert systems for immediate incident response",
      stats: "<30 Seconds"
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Location Tracking",
      description: "Real-time location services for enhanced safety",
      stats: "Campus-wide"
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/education-solution/img1.webp"
            alt="Education Security Solutions"
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
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <GraduationCap className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Smart Education Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
              Secure Learning
              <span className="block text-4xl md:text-6xl mt-2">Environments</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Transform educational institutions with AI-powered security, smart campus management, 
              and innovative learning technologies that prioritize safety and enhance education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
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

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Education Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From security to smart learning, our integrated solutions create safer and more efficient educational environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationSolutions.map((solution, index) => (
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
              Advanced Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed specifically for educational environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform text-white">
                  {React.cloneElement(feature.icon, { className: "h-12 w-12 mx-auto" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
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
                Why Choose Our Education Solutions?
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
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Campus Safety Dashboard</h3>
                      <p className="text-blue-100">Real-time security monitoring</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">100%</div>
                      <div className="text-sm text-blue-100">Campus Coverage</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Monitoring</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Security Level</span>
                      <span className="text-sm font-bold">Maximum</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-full"></div>
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
              Tailored for Every Institution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions adapt to different educational environments and requirements
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
              Ready to Secure Your Educational Institution?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of educational institutions worldwide that trust our solutions for campus security 
              and smart learning environments. Schedule a personalized demonstration today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
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
                <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-300">Schools Protected</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Reliability</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}