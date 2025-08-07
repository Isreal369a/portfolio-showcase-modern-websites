"use client";

import Navigation from '../../../components/Navigation';
import { useState } from 'react';

export default function Site1() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Digital Art Collection",
      description: "A curated collection of digital artworks exploring modern themes",
      year: "2024"
    },
    {
      title: "Brand Identity System",
      description: "Complete visual identity for a sustainable fashion brand",
      year: "2023"
    },
    {
      title: "Interactive Web Experience",
      description: "Immersive web platform for creative storytelling",
      year: "2023"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-light text-foreground mb-8 tracking-tight">
              Creative
              <span className="block font-bold">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Minimalist design meets creative expression. A carefully curated collection 
              of work that speaks through simplicity and purposeful design.
            </p>
            
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae056731-e3d5-4e47-9b75-4adfe81936d5.png"
              alt="Minimalist creative workspace featuring a clean desk with natural lighting and modern design elements"
              onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/009a97b2-9bc2-4bba-9b67-910d3dba5a79.png"; }}
              className="w-full rounded-3xl shadow-2xl mb-12"
            />
            
            <button className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
              Explore Work
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light text-foreground mb-8">
                  Design Philosophy
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every project begins with understanding. Understanding the problem, 
                  the audience, and the story that needs to be told. Through minimal 
                  design principles, I create experiences that are both beautiful and functional.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The intersection of art and technology provides endless possibilities 
                  for creative expression while maintaining the clarity and purpose 
                  that great design demands.
                </p>
              </div>
              <div className="space-y-8">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Visual Design</h3>
                  <p className="text-muted-foreground">Creating compelling visual narratives through typography, color, and composition.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">User Experience</h3>
                  <p className="text-muted-foreground">Designing intuitive interactions that feel natural and purposeful.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Creative Direction</h3>
                  <p className="text-muted-foreground">Leading projects from concept to completion with strategic thinking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-light text-foreground mb-16 text-center">
                Selected Work
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeProject === index ? 'transform scale-105' : ''
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                      <div className="aspect-square bg-muted rounded-xl mb-6 flex items-center justify-center">
                        <img
                          src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32a99682-d3d9-40d2-a938-91634deb0c65.png '+')}`}
                          alt={`${project.title} - Creative project showcase`}
                          onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58162ca1-a481-4d42-adc0-88a11fc891e5.png"; }}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="text-sm text-primary font-medium mb-2">{project.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-foreground text-background py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-light mb-8">
                Let's Create Something Beautiful
              </h2>
              <p className="text-xl opacity-90 mb-12 leading-relaxed">
                Interested in collaborating? I'm always open to discussing new projects 
                and creative opportunities.
              </p>
              <button className="px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-muted transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
