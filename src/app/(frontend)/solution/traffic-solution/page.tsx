import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Car, 
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
  Radio,
  Activity,
  Zap,
  Target,
  Crosshair  // Use this instead of Traffic
} from 'lucide-react'

// SEO Metadata
export const metadata = {
  title: 'Intelligent Traffic Management Solutions | Smart Traffic Systems | Hikvision UAE',
  description: 'Advanced traffic management and monitoring solutions with AI-powered analytics, smart traffic lights, and real-time traffic flow optimization for safer and more efficient urban transportation.',
  keywords: 'traffic management, smart traffic systems, traffic monitoring, AI traffic control, traffic flow optimization, intelligent transportation, traffic analytics, urban mobility solutions',
  openGraph: {
    title: 'Intelligent Traffic Management Solutions | Hikvision UAE',
    description: 'Transform urban mobility with AI-powered traffic management and monitoring solutions',
    images: ['/traffic-solution/img1.webp'],
  },
}

export default function TrafficSolutionPage() {
  const trafficSolutions = [
    {
      icon: <Crosshair className="h-8 w-8" />, // Changed from Traffic to Crosshair
      title: "Smart Traffic Control",
      description: "AI-powered traffic light management and intersection control for optimal traffic flow.",
      features: ["Adaptive Signal Control", "Traffic Light Optimization", "Real-time Adjustments"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Traffic Monitoring & Analytics",
      description: "Advanced video analytics for traffic pattern analysis and incident detection.",
      features: ["Vehicle Classification", "Speed Detection", "Incident Recognition"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Traffic Intelligence",
      description: "Machine learning algorithms for predictive traffic management and optimization.",
      features: ["Predictive Analytics", "Pattern Recognition", "Flow Optimization"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Highway Management",
      description: "Comprehensive monitoring and management solutions for highways and arterial roads.",
      features: ["Speed Enforcement", "Lane Management", "Emergency Response"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: <Activity className="h-6 w-6 text-red-600" />,
      title: "Reduced Traffic Congestion",
      description: "Up to 30% improvement in traffic flow through intelligent optimization"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Road Safety",
      description: "AI-powered incident detection and automated emergency response"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics for informed traffic planning decisions"
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: "Real-time Optimization",
      description: "Dynamic traffic management adapting to changing conditions"
    }
  ];

  const applications = [
    {
      title: "Urban Intersections",
      description: "Smart traffic control systems for busy city intersections and junctions",
      image: "/traffic-solution/intersection.jpg",
      features: ["Pedestrian Detection", "Multi-phase Control", "Emergency Vehicle Priority"]
    },
    {
      title: "Highway Systems",
      description: "Comprehensive monitoring and management for highways and expressways",
      image: "/traffic-solution/highway.jpg",
      features: ["Speed Monitoring", "Incident Detection", "Dynamic Message Signs"]
    },
    {
      title: "Smart Cities",
      description: "Integrated traffic management for entire urban transportation networks",
      image: "/traffic-solution/smart-city.jpg",
      features: ["Network Optimization", "Data Integration", "Mobility Analytics"]
    }
  ];

  const features = [
    {
      icon: <Camera className="h-12 w-12" />,
      title: "AI-Powered Cameras",
      description: "Advanced video analytics for traffic monitoring and analysis",
      stats: "99% Accuracy"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "License Plate Recognition",
      description: "Automatic number plate recognition for enforcement and tracking",
      stats: "Real-time"
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Traffic Analytics",
      description: "Comprehensive data analysis for traffic pattern optimization",
      stats: "24/7 Monitoring"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Management",
      description: "Remote monitoring and control through mobile applications",
      stats: "Cloud-based"
    }
  ];

  const statistics = [
    {
      number: "30%",
      label: "Traffic Flow Improvement",
      icon: <Activity className="h-8 w-8" />
    },
    {
      number: "50+",
      label: "Cities Deployed",
      icon: <MapPin className="h-8 w-8" />
    },
    {
      number: "99.9%",
      label: "System Reliability",
      icon: <Clock className="h-8 w-8" />
    },
    {
      number: "24/7",
      label: "Monitoring Coverage",
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
            src="/traffic-solution/img1.webp"
            alt="Intelligent Traffic Management Solutions"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Crosshair className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Smart Traffic Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-yellow-100 bg-clip-text text-transparent">
              Intelligent Traffic
              <span className="block text-4xl md:text-6xl mt-2">Management</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Transform urban mobility with AI-powered traffic management, real-time monitoring, 
              and intelligent optimization systems that reduce congestion and enhance road safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all">
                  <div className="text-white mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-red-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 rounded-full px-4 py-2 mb-4">
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Traffic Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intersection control to highway management, our integrated solutions optimize traffic flow across entire urban networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trafficSolutions.map((solution, index) => (
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
              Advanced Traffic Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed to solve modern traffic management challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-2xl mx-auto w-fit mb-6 group-hover:scale-110 transition-transform text-white">
                  {React.cloneElement(feature.icon, { className: "h-12 w-12 mx-auto" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
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
                Why Choose Our Traffic Solutions?
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
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-8 text-white">
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Crosshair className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Traffic Control Center</h3>
                      <p className="text-red-100">Real-time traffic management</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">85%</div>
                      <div className="text-sm text-red-100">Traffic Efficiency</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-red-100">Monitoring</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">System Performance</span>
                      <span className="text-sm font-bold">Optimal</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 rounded-full h-2 w-[85%]"></div>
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
              Solutions for Every Traffic Scenario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our traffic management systems adapt to various urban and highway environments
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
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Optimize Your Traffic System?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join smart cities worldwide that have revolutionized their traffic management with our 
              AI-powered solutions. Reduce congestion, enhance safety, and improve urban mobility.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
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
                <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
                <div className="text-gray-300">Intersections Managed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-2">30%</div>
                <div className="text-gray-300">Traffic Improvement</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">System Operation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}