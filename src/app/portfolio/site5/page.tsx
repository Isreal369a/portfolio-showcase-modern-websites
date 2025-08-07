"use client";

import Navigation from '../../../components/Navigation';
import { useState } from 'react';

export default function Site5() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that provide real-time insights and predictive analytics for your business.",
      icon: "🤖"
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows through our comprehensive API and integration platform.",
      icon: "🔗"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.",
      icon: "🛡️"
    },
    {
      title: "Global Scale",
      description: "Built to handle millions of users with 99.9% uptime guarantee and global infrastructure.",
      icon: "🌍"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "CTO, TechFlow",
      content: "This platform transformed how we handle data analytics. The AI insights are incredibly accurate.",
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      role: "CEO, InnovateCorp",
      content: "The integration was seamless and the results exceeded our expectations. Highly recommended.",
      avatar: "SM"
    },
    {
      name: "David Kim",
      role: "VP Engineering, DataSync",
      content: "Outstanding performance and reliability. Our team productivity increased by 40%.",
      avatar: "DK"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      features: ["Up to 10,000 requests", "Basic analytics", "Email support", "API access"],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      features: ["Up to 100,000 requests", "Advanced analytics", "Priority support", "Custom integrations", "Team collaboration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited requests", "Custom AI models", "Dedicated support", "On-premise deployment", "SLA guarantee"],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
                🚀 Now in Beta - Join Early Access
              </div>
              <h1 className="text-6xl font-bold text-foreground mb-8 leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Intelligent Automation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
                Revolutionize your workflow with our cutting-edge AI platform. Automate complex tasks, 
                gain powerful insights, and scale your business like never before. Built for the next generation of innovators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-10 py-5 border-2 border-border text-foreground rounded-xl font-bold text-lg hover:bg-muted transition-all duration-300 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aee347bd-d297-4de4-a427-4b7fd6b67069.png"
                alt="Futuristic tech startup dashboard featuring AI analytics, data visualizations, and modern interface design"
                onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62dbff3f-5ecf-427b-aacd-3876cde1ea5c.png"; }}
                className="w-full rounded-3xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">10M+</div>
                <div className="text-muted-foreground font-medium">API Calls Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">99.9%</div>
                <div className="text-muted-foreground font-medium">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-muted-foreground font-medium">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-muted-foreground font-medium">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Powerful Features for Modern Teams
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Everything you need to automate, analyze, and accelerate your business processes
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                        activeFeature === index
                          ? 'bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-200 dark:border-orange-800'
                          : 'bg-card border border-border hover:shadow-lg'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{feature.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <img
                    src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41de353a-d42b-42fd-9b77-a0d22f891822.png].title.replace(/\s+/g, '+')}`}
                    alt={`${features[activeFeature].title} - Advanced technology feature demonstration`}
                    onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3272794-e23f-4655-8721-774c76eb9e7f.png"; }}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-xl text-muted-foreground">
                  See what our customers are saying about their experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the plan that fits your needs. Upgrade or downgrade at any time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl p-8 ${
                      plan.popular
                        ? 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-200 dark:border-orange-800 transform scale-105'
                        : 'bg-card border border-border'
                    } hover:shadow-xl transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                      <div className="mb-4">
                        {typeof plan.price === 'number' ? (
                          <>
                            <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                            <span className="text-muted-foreground">/{plan.period}</span>
                          </>
                        ) : (
                          <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transform hover:scale-105'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Join thousands of companies already using our platform to automate their workflows 
                and accelerate growth. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-10 py-5 border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm opacity-75 mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                  TechFlow AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The future of intelligent automation. Built for innovators, by innovators.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Product</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API Docs</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 TechFlow AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
