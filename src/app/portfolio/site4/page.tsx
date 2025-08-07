"use client";

import Navigation from '../../../components/Navigation';
import { useState } from 'react';

export default function Site4() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      category: "electronics",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Minimalist Desk Organizer",
      price: 89,
      originalPrice: null,
      category: "home",
      rating: 4.6,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 45,
      originalPrice: 65,
      category: "fashion",
      rating: 4.7,
      reviews: 203,
      badge: "Sale"
    },
    {
      id: 4,
      name: "Smart Fitness Tracker",
      price: 199,
      originalPrice: null,
      category: "electronics",
      rating: 4.5,
      reviews: 156,
      badge: null
    },
    {
      id: 5,
      name: "Handcrafted Ceramic Mug",
      price: 28,
      originalPrice: null,
      category: "home",
      rating: 4.9,
      reviews: 67,
      badge: "Trending"
    },
    {
      id: 6,
      name: "Sustainable Backpack",
      price: 129,
      originalPrice: 159,
      category: "fashion",
      rating: 4.4,
      reviews: 91,
      badge: "Eco-Friendly"
    }
  ];

  const categories = ['all', 'electronics', 'fashion', 'home'];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header with Cart */}
        <section className="bg-card border-b border-border py-4">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-foreground">ModernShop</h1>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shop</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
                  </svg>
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Free Shipping on Orders $100+
                </div>
                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                  Discover Products That
                  <span className="block text-green-600"> Enhance Your Life</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Curated collection of premium products designed for modern living. 
                  Quality, sustainability, and style in every item we offer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Shop Now
                  </button>
                  <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                    View Collections
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4ab2365-bc77-4ef7-96b3-5a6a0e28eddb.png"
                  alt="Modern e-commerce product display featuring stylish items with clean and professional presentation"
                  onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2567b17f-efd9-4d20-89bb-586ade37672f.png"; }}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Free Shipping</h3>
                <p className="text-muted-foreground">On orders over $100</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">30-day return policy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>
        </section>

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
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-background text-muted-foreground hover:text-foreground border border-border hover:border-green-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">Featured Products</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Discover our carefully selected collection of premium products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="relative aspect-square bg-muted flex items-center justify-center">
                        {product.badge && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              product.badge === 'Sale' ? 'bg-red-100 text-red-800' :
                              product.badge === 'New' ? 'bg-blue-100 text-blue-800' :
                              product.badge === 'Best Seller' ? 'bg-green-100 text-green-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {product.badge}
                            </span>
                          </div>
                        )}
                        <img
                          src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8009086-ad94-4f89-bdfb-9ca49ef91cad.png '+')}`}
                          alt={`${product.name} - Premium quality product`}
                          onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59b0cf96-4364-4e9d-b734-719d8472b1b6.png"; }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-green-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-foreground">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={addToCart}
                          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Get the latest product updates, exclusive offers, and style inspiration 
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">ModernShop</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium products for modern living. Quality, sustainability, and style.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Shop</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Electronics</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Fashion</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
