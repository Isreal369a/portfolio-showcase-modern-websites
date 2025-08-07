import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function PortfolioHome() {
  const projects = [
    {
      id: 'site1',
      title: 'Modern Minimal Portfolio',
      description: 'A sleek, minimal design showcasing creative work with clean typography and elegant spacing.',
      tech: 'Next.js • TypeScript • Tailwind CSS',
      color: 'bg-gradient-to-br from-slate-50 to-slate-100'
    },
    {
      id: 'site2',
      title: 'Business Landing Page',
      description: 'Professional corporate layout designed for enterprise clients with clear value propositions.',
      tech: 'React • Responsive Design • Modern UI',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-100'
    },
    {
      id: 'site3',
      title: 'Creative Blog Layout',
      description: 'Engaging blog design with dynamic content presentation and creative visual hierarchy.',
      tech: 'Content Management • Typography • UX',
      color: 'bg-gradient-to-br from-purple-50 to-pink-100'
    },
    {
      id: 'site4',
      title: 'E-Commerce Sample',
      description: 'Modern e-commerce interface with intuitive navigation and conversion-focused design.',
      tech: 'E-commerce • Product Display • CTA',
      color: 'bg-gradient-to-br from-green-50 to-emerald-100'
    },
    {
      id: 'site5',
      title: 'Tech Startup Landing',
      description: 'Innovative and dynamic landing page for tech ventures with bold visual elements.',
      tech: 'Startup • Innovation • Modern Tech',
      color: 'bg-gradient-to-br from-orange-50 to-red-100'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Portfolio Showcase
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of five distinct websites demonstrating various design approaches, 
              from minimal portfolios to dynamic startup landings. Each project showcases 
              different aspects of modern web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="group cursor-pointer">
                  <div className={`${project.color} p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="text-sm text-primary font-medium">
                        {project.tech}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      View Project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                About This Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each website in this collection represents a different design philosophy and use case. 
                From clean minimal aesthetics to bold startup presentations, these projects demonstrate 
                versatility in modern web development, responsive design, and user experience principles.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
