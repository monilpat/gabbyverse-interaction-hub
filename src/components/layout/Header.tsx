
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Gabby', href: '/about' },
  { 
    label: 'Overview', 
    href: '#',
    children: [
      { label: 'Industry Overview', href: '/industry' },
      { label: 'Competitive Analysis', href: '/competitive' },
      { label: 'Meet Gabby', href: '/meet' },
    ]
  },
  { 
    label: 'Tokenomics', 
    href: '#',
    children: [
      { label: 'Token Utility', href: '/utility' },
      { label: 'Tokenomics', href: '/tokenomics' },
    ]
  },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Dashboard', href: '/dashboard' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
            aria-label="Gabby AI Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gabby flex items-center justify-center text-white font-bold">
              G
            </div>
            <span>Gabby AI</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="nav-link flex items-center"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link to={item.href} className="nav-link">
                    {item.label}
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/dashboard" className="btn-secondary">
              Chat with Gabby
            </Link>
            <Link to="/tokenomics" className="btn-primary">
              Get $GABBY
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="lg:hidden glass absolute top-full left-0 right-0 py-4 animate-slide-in-top">
          <nav className="container mx-auto px-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:bg-secondary/50"
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1 border-l-2 border-gabby ml-4 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-foreground hover:bg-secondary/50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t">
              <Link to="/dashboard" className="btn-secondary w-full text-center">
                Chat with Gabby
              </Link>
              <Link to="/tokenomics" className="btn-primary w-full text-center">
                Get $GABBY
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
