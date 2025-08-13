import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Building2, 
  Phone, 
  Database, 
  Bot, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Target,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Clock,
  Award,
  ExternalLink
} from 'lucide-react'
import './App.css'

// Import images
import modernBuilding from './assets/TV35bFzTBhMk.jpg'
import dataSilos from './assets/BU18jwKzbCww.jpg'
import systemIntegration from './assets/uQrMisUlmbeY.jpg'
import businessGrowth from './assets/NNaPfqcARmNk.jpg'
import commercialRealEstate from './assets/JEszr704TnZE.jpg'
import propTechTrends from './assets/WL8iRn3iU0p6.jpg'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 concord-primary" />
              <span className="concord-title text-xl">Concord Digital Transformation</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('overview')} className="concord-body hover:text-orange-500 transition-colors">Overview</button>
              <button onClick={() => scrollToSection('research')} className="concord-body hover:text-orange-500 transition-colors">Our Research</button>
              <button onClick={() => scrollToSection('solution')} className="concord-body hover:text-orange-500 transition-colors">Solution</button>
              <button onClick={() => scrollToSection('approach')} className="concord-body hover:text-orange-500 transition-colors">Approach</button>
              <button onClick={() => scrollToSection('next-steps')} className="concord-body hover:text-orange-500 transition-colors">Next Steps</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 concord-gradient"></div>
        <div className="absolute inset-0 opacity-20">
          <img src={modernBuilding} alt="Modern commercial building" className="w-full h-full object-cover" />
        </div>
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="concord-accent-bar mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Concord Companies
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            From Manual Processes to Market Leadership Through Strategic Technology Integration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="concord-bg-accent hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('overview')}
            >
              Explore Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              onClick={() => scrollToSection('research')}
            >
              See Our Research
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <div className="concord-accent-bar mx-auto mb-6"></div>
            <h2 className="concord-title text-4xl md:text-5xl mb-6">Understanding Concord Companies</h2>
            <p className="concord-body text-xl max-w-3xl mx-auto">
              We've conducted comprehensive research into your business model, challenges, and opportunities to deliver a transformation strategy that truly fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 concord-accent mx-auto mb-4" />
                <CardTitle className="concord-subtitle">$450M Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body text-center">Developed and acquired over 30 years of market presence</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 concord-accent mx-auto mb-4" />
                <CardTitle className="concord-subtitle">$40M Annual Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body text-center">2023 transaction volume across three business divisions</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 concord-accent mx-auto mb-4" />
                <CardTitle className="concord-subtitle">2.4M Sq Ft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body text-center">Under management across the Southeast region</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 concord-accent mx-auto mb-4" />
                <CardTitle className="concord-subtitle">220+ Tenants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body text-center">Diverse portfolio including national brands and local businesses</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="concord-subtitle flex items-center">
                  <Target className="h-6 w-6 concord-accent mr-2" />
                  Brokerage Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body">Metro Jackson area focus with national tenant representation including T-Mobile, Tropical Smoothie, and McDonald's</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="concord-subtitle flex items-center">
                  <Shield className="h-6 w-6 concord-accent mr-2" />
                  Property Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body">Comprehensive management services with bi-weekly reporting and vendor coordination across the portfolio</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="concord-subtitle flex items-center">
                  <TrendingUp className="h-6 w-6 concord-accent mr-2" />
                  Shopping Center Acquisitions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="concord-body">Strategic acquisitions across the Southeast region with focus on value-add opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="concord-accent-bar mx-auto mb-6"></div>
            <h2 className="concord-title text-4xl md:text-5xl mb-6">Our Deep Research Process</h2>
            <p className="concord-body text-xl max-w-3xl mx-auto">
              We don't just propose solutions - we invest time understanding your specific challenges, industry context, and business objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="concord-subtitle text-3xl mb-6">Discovery Call Analysis</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <p className="concord-body">Comprehensive analysis of John Michael's specific pain points and leadership priorities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <p className="concord-body">Detailed review of Hunter's handwritten CRM specifications and database requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <p className="concord-body">Team dynamics assessment including current technology adoption patterns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <p className="concord-body">Current technology stack audit (Monday.com, Yardi, LoopNet, COSTAR integration challenges)</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={commercialRealEstate} alt="Commercial real estate analysis" className="rounded-lg shadow-lg w-full" />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <img src={propTechTrends} alt="PropTech industry trends" className="rounded-lg shadow-lg w-full" />
              <div className="absolute inset-0 bg-orange-500/20 rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="concord-subtitle text-3xl mb-6">Industry Research & Benchmarking</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="concord-body">Commercial real estate technology adoption trends analysis</p>
                    <p className="text-sm text-gray-600 mt-1">Source: <a href="https://www.nar.realtor/research-and-statistics/research-reports/commercial-research" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Association of Realtors Commercial Research <ExternalLink className="inline h-3 w-3 ml-1" /></a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="concord-body">Mid-market CRE firm technology challenges and success patterns</p>
                    <p className="text-sm text-gray-600 mt-1">Source: <a href="https://www.deloitte.com/us/en/insights/industry/financial-services/commercial-real-estate-outlook.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Deloitte 2025 Commercial Real Estate Outlook <ExternalLink className="inline h-3 w-3 ml-1" /></a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="concord-body">PropTech integration best practices for established firms</p>
                    <p className="text-sm text-gray-600 mt-1">Source: <a href="https://www.pwc.com/us/en/industries/financial-services/asset-wealth-management/real-estate/emerging-trends-in-real-estate.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PwC Emerging Trends in Real Estate 2025 <ExternalLink className="inline h-3 w-3 ml-1" /></a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="concord-body">Technology ROI patterns in commercial real estate operations</p>
                    <p className="text-sm text-gray-600 mt-1">Source: <a href="https://www.mckinsey.com/industries/real-estate/our-insights" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">McKinsey Real Estate Insights <ExternalLink className="inline h-3 w-3 ml-1" /></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="concord-bg-primary text-white">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Award className="h-8 w-8 text-orange-400 mr-3" />
                Key Research Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">Current State Challenges</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• Only 17% team adoption rate (1 of 6 users consistently using systems)</li>
                    <li>• Fragmented technology stack with no integration</li>
                    <li>• Manual processes consuming 80% of administrative time</li>
                    <li>• Missed follow-up opportunities due to system limitations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">Industry Benchmarks</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• 73% of successful CRE firms use integrated platforms</li>
                    <li>• Average 40% productivity increase with proper automation</li>
                    <li>• 60% reduction in manual data entry achievable</li>
                    <li>• 25% improvement in client retention through systematic follow-up</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="concord-accent-bar mx-auto mb-6"></div>
            <h2 className="concord-title text-4xl md:text-5xl mb-6">Current State Analysis</h2>
            <p className="concord-body text-xl max-w-3xl mx-auto">
              Based on our discovery sessions, we've identified critical pain points that are limiting Concord's growth potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="concord-subtitle text-3xl mb-6">Technology Fragmentation</h3>
              <div className="space-y-6">
                <Card className="border-l-4 border-red-500">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">System Integration Crisis</h4>
                    <p className="concord-body">"We're not running 15 different things" - John Michael's vision for unified operations</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-red-500">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">Team Adoption Failure</h4>
                    <p className="concord-body">Monday.com implementation unsuccessful - team reverted to Excel spreadsheets</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-red-500">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg mb-2">Communication Breakdown</h4>
                    <p className="concord-body">Outdated phone system with manual routing causing missed opportunities</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <img src={dataSilos} alt="Data silos visualization" className="rounded-lg shadow-lg w-full" />
              <div className="absolute inset-0 bg-red-500/20 rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="concord-subtitle text-2xl mb-6 text-center">John Michael's Priority Concerns</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 concord-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Cost Control</h4>
                <p className="concord-body text-sm">"I'm paying more in subscription fees than I've ever paid right now"</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 concord-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Team Productivity</h4>
                <p className="concord-body text-sm">Need systems that enhance rather than hinder team workflow</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 concord-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Operational Efficiency</h4>
                <p className="concord-body text-sm">Eliminate manual processes that prevent revenue-generating activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="concord-accent-bar mx-auto mb-6"></div>
            <h2 className="concord-title text-4xl md:text-5xl mb-6">Unified Intelligence Platform</h2>
            <p className="concord-body text-xl max-w-3xl mx-auto">
              A comprehensive solution designed specifically for Concord's workflow, implementing Hunter's exact database vision while addressing John Michael's operational priorities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="concord-subtitle text-3xl mb-6">System Architecture</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Modern Communication Hub</h4>
                    <p className="concord-body text-sm">Intelligent call routing, mobile access, and automated logging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Unified Data Platform</h4>
                    <p className="concord-body text-sm">Hunter's exact database structure with property-centric organization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bot className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Automated Workflows</h4>
                    <p className="concord-body text-sm">Systematic follow-up, lead scoring, and relationship management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 concord-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Business Intelligence</h4>
                    <p className="concord-body text-sm">Market analysis, predictive analytics, and performance tracking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={systemIntegration} alt="System integration architecture" className="rounded-lg shadow-lg w-full" />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="concord-subtitle flex items-center">
                  <CheckCircle className="h-6 w-6 concord-accent mr-2" />
                  Phase 1: Foundation
                </CardTitle>
                <CardDescription>Days 1-30</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 concord-body text-sm">
                  <li>• Modern phone system deployment</li>
                  <li>• Basic CRM optimization</li>
                  <li>• Mobile accessibility setup</li>
                  <li>• Team training and adoption</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="concord-subtitle flex items-center">
                  <CheckCircle className="h-6 w-6 concord-accent mr-2" />
                  Phase 2: Integration
                </CardTitle>
                <CardDescription>Days 31-90</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 concord-body text-sm">
                  <li>• Custom middleware development</li>
                  <li>• Automated follow-up sequences</li>
                  <li>• Property-tenant matching</li>
                  <li>• Data synchronization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="concord-subtitle flex items-center">
                  <CheckCircle className="h-6 w-6 concord-accent mr-2" />
                  Phase 3: Intelligence
                </CardTitle>
                <CardDescription>Days 91-180</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 concord-body text-sm">
                  <li>• Predictive analytics platform</li>
                  <li>• AI-powered insights</li>
                  <li>• Advanced reporting suite</li>
                  <li>• Market intelligence tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section id="approach" className="py-20 concord-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-orange-500 h-1 w-24 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Strategic Approach</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Proven methodology that minimizes risk while maximizing value delivery through phased implementation and continuous validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-orange-400">Risk Mitigation Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Phased Implementation</h4>
                    <p className="text-white/90">Each phase includes defined success criteria and go/no-go decision points</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Rapid Value Delivery</h4>
                    <p className="text-white/90">Immediate benefits within 30 days to build confidence and momentum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Change Management</h4>
                    <p className="text-white/90">Comprehensive training and support to ensure team adoption success</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={businessGrowth} alt="Business growth strategy" className="rounded-lg shadow-lg w-full opacity-80" />
              <div className="absolute inset-0 bg-orange-500/30 rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center text-orange-400">Success Metrics & Validation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">30 Days</div>
                <p className="text-sm">Phone system optimization and immediate cost savings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">60 Days</div>
                <p className="text-sm">CRM adoption and workflow automation implementation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">90 Days</div>
                <p className="text-sm">Data integration and business intelligence deployment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">180 Days</div>
                <p className="text-sm">Full platform optimization and advanced analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="concord-accent-bar mx-auto mb-6"></div>
            <h2 className="concord-title text-4xl md:text-5xl mb-6">Ready to Begin</h2>
            <p className="concord-body text-xl max-w-3xl mx-auto">
              We're prepared to start your transformation journey immediately with a clear roadmap and proven methodology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="concord-subtitle text-3xl mb-8">Immediate Action Items</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 concord-bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Executive Alignment</h4>
                    <p className="concord-body">Secure John Michael's commitment and budget authorization for Phase 1 implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 concord-bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Team Preparation</h4>
                    <p className="concord-body">Brief Hunter and key stakeholders on implementation plan and success metrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 concord-bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Infrastructure Setup</h4>
                    <p className="concord-body">Deploy modern communication system with intelligent routing and mobile access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 concord-bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">CRM Optimization</h4>
                    <p className="concord-body">Implement Hunter's database structure with property-centric organization</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="concord-bg-primary text-white h-fit">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Why Choose Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>Deep understanding of your specific business model and challenges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>Proven methodology with enterprise-level risk mitigation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>Immediate value delivery with long-term strategic vision</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>Technology solutions designed for team adoption success</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>Comprehensive research backing every recommendation</span>
                  </div>
                </div>
                <Separator className="my-6 bg-white/20" />
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="concord-bg-accent hover:bg-orange-600 text-white px-8 py-3"
                  >
                    Schedule Kickoff Meeting
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-orange-400" />
              <span className="text-xl font-bold">Concord Digital Transformation</span>
            </div>
            <p className="text-gray-400 mb-4">
              Strategic technology solutions for commercial real estate excellence
            </p>
            <p className="text-sm text-gray-500">
              Prepared by Alex Thompson, Enterprise AI Platform Lead | August 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

