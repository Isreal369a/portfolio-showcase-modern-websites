import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-6 bg-background border-b border-border">
      <Link href="/portfolio" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
        Portfolio
      </Link>
      <div className="flex space-x-6">
        <Link href="/" className="text-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
          All Projects
        </Link>
      </div>
    </nav>
  );
}
