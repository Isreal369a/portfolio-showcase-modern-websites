"use client";

import Navigation from '../../../components/Navigation';
import { useState } from 'react';

export default function Site3() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Visual Storytelling in Digital Media",
      excerpt: "Exploring how compelling narratives shape our digital experiences and create lasting emotional connections with audiences.",
      category: "design",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Minimalism in Modern Web Design",
      excerpt: "Why less is more when it comes to creating impactful user experiences that truly resonate.",
      category: "design",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      featured: false
    },
    {
      id: 3,
      title: "Creative Process: From Concept to Creation",
      excerpt: "A deep dive into the creative workflow that transforms abstract ideas into tangible digital experiences.",
      category: "process",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      featured: false
    },
    {
      id: 4,
      title: "The Psychology of Color in Brand Identity",
      excerpt: "Understanding how color choices influence perception and drive emotional responses in branding.",
      category: "branding",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      featured: false
    },
    {
      id: 5,
      title: "Typography That Speaks: Choosing the Right Voice",
      excerpt: "How typography becomes the voice of your brand and communicates personality before words are read.",
      category: "design",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      featured: false
    },
    {
      id: 6,
      title: "Building Authentic Brand Connections",
      excerpt: "Strategies for creating genuine relationships between brands and their audiences in the digital age.",
      category: "branding",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      featured: false
    }
  ];

  const categories = ['all', 'design', 'branding', 'process'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
                Creative Insights
              </div>
              <h1 className="text-6xl font-bold text-foreground mb-8 leading-tight">
                Stories That
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Inspire Creation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                A creative blog exploring the intersection of design, technology, and human experience. 
                Discover insights, processes, and stories that fuel innovation and artistic expression.
              </p>
              
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/01a5739c-5a64-431d-aff2-3a8a9dd382ee.png"
                alt="Creative workspace featuring colorful design materials, sketches, and modern digital tools spread across a designer's desk"
                onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e8e7dfd6-3d76-4453-9743-b3640fde5b83.png"; }}
                className="w-full rounded-3xl shadow-2xl mb-8"
              />
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Featured Story</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="text-muted-foreground text-sm">{featuredPost.date}</span>
                        <span className="text-muted-foreground text-sm">{featuredPost.readTime}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <button className="self-start px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Read Full Story
                      </button>
                    </div>
                    <div className="relative">
                      <img
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ea97477-d111-4ca0-99ea-bcdf9969aff2.png"
                        alt="Visual storytelling concept featuring creative elements and digital media design composition"
                        onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1a3313e-b161-422a-9311-e6a61cff466c.png"; }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-background text-muted-foreground hover:text-foreground border border-border hover:border-purple-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className="group cursor-pointer">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
                        <img
                          src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce85c424-bb95-48bd-a68a-da5fb14c5cd6.png 30).replace(/\s+/g, '+')}`}
                          alt={`${post.title} - Blog post illustration`}
                          onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/473d52cc-41bf-4a7d-95b6-5bea6174aea4.png"; }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground text-sm">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                            Read More
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Stay Inspired
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Get the latest creative insights, design trends, and inspiring stories 
                delivered directly to your inbox. Join our community of creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-foreground bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card border border-border rounded-3xl p-12">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0770193-bfbc-4199-92f2-b36cbc16bf09.png"
                  alt="Creative blogger portrait with artistic background and warm professional lighting"
                  onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1c8b380-ccc1-4aac-aa59-158ce93dd1c0.png"; }}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold text-foreground mb-4">About the Author</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A passionate creative exploring the boundaries between art, technology, and human experience. 
                  Through this blog, I share insights from my journey in design, the creative process, 
                  and the stories that inspire meaningful work.
                </p>
                <button className="px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
