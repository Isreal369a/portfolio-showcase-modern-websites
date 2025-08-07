import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-8 leading-tight">
            Welcome to My
            <span className="block text-primary"> Portfolio Showcase</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Explore a collection of five distinct websites that demonstrate various design approaches, 
            from minimal portfolios to dynamic startup landings. Each project showcases different 
            aspects of modern web development and design principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/portfolio">
              <button className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </Link>
            <button className="px-10 py-5 border-2 border-border text-foreground rounded-xl font-bold text-lg hover:bg-muted transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Modern Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clean, contemporary designs that follow current web standards and best practices.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Responsive Layout</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fully responsive designs that work seamlessly across all devices and screen sizes.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Interactive Elements</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engaging user interactions and smooth animations that enhance the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
