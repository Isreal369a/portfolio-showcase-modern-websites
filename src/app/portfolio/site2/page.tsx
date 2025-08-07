"use client";

import Navigation from '../../../components/Navigation';
import { useState } from 'react';

export default function Site2() {
  const [activeTab, setActiveTab] = useState('solutions');

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' },
    { number: '15+', label: 'Years Experience' }
  ];

  const services = [
    {
      title: 'Strategic Consulting',
      description: 'Expert guidance to transform your business operations and drive sustainable growth.',
      features: ['Market Analysis', 'Process Optimization', 'Digital Transformation']
    },
    {
      title: 'Technology Solutions',
      description: 'Cutting-edge technology implementations tailored to your specific business needs.',
      features: ['Cloud Migration', 'System Integration', 'Cybersecurity']
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights to make informed decisions and stay ahead of the competition.',
      features: ['Analytics Dashboard', 'Reporting Tools', 'Predictive Modeling']
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Enterprise Solutions
                </div>
                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                  Transform Your Business with 
                  <span className="text-primary"> Expert Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We partner with forward-thinking companies to deliver innovative solutions 
                  that drive growth, efficiency, and competitive advantage in today's digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b08daa81-cdac-4c58-8a94-43dd5ad9d59a.png"
                  alt="Professional business team meeting in modern office environment with laptops and strategic planning charts"
                  onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5141c716-ad4e-46db-ba80-28d55961ea49.png"; }}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Comprehensive Business Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our integrated approach combines strategic thinking, cutting-edge technology, 
                  and deep industry expertise to deliver measurable results.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Proven Process
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A systematic approach that ensures successful project delivery and long-term value.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your business challenges and objectives' },
                  { step: '02', title: 'Strategy', desc: 'Developing tailored solutions and implementation roadmap' },
                  { step: '03', title: 'Execution', desc: 'Implementing solutions with precision and expertise' },
                  { step: '04', title: 'Optimization', desc: 'Continuous improvement and performance monitoring' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card border border-border rounded-3xl p-12">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fc26c34-6392-4a50-9d58-9e99c0c1d244.png"
                  alt="Professional CEO headshot in business attire with confident and approachable expression"
                  onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27006c53-660e-4d06-b81c-3ed6fef2d328.png"; }}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <blockquote className="text-2xl text-foreground mb-6 leading-relaxed italic">
                  "The transformation of our operations exceeded all expectations. Their strategic approach 
                  and technical expertise delivered results that directly impacted our bottom line."
                </blockquote>
                <div className="text-primary font-semibold">Sarah Johnson</div>
                <div className="text-muted-foreground">CEO, TechCorp Industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Let's discuss how our solutions can drive your company's growth and success. 
                Schedule a consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
