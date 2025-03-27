
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  disabled?: boolean;
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
      { label: 'Meet Gabby', href: '/meet', disabled: true },
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
  { label: 'Dashboard', href: '/dashboard', disabled: true }
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
                    className={cn(
                      "nav-link flex items-center",
                      item.disabled && "opacity-50 cursor-not-allowed"
                    )}
                    disabled={item.disabled}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={item.href} 
                    className={cn(
                      "nav-link",
                      item.disabled && "opacity-50 pointer-events-none"
                    )}
                    aria-disabled={item.disabled}
                    tabIndex={item.disabled ? -1 : undefined}
                    onClick={(e) => item.disabled && e.preventDefault()}
                  >
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
                        className={cn(
                          "block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors",
                          child.disabled && "opacity-50 pointer-events-none"
                        )}
                        aria-disabled={child.disabled}
                        tabIndex={child.disabled ? -1 : undefined}
                        onClick={(e) => child.disabled && e.preventDefault()}
                      >
                        {child.label} {child.disabled && "(Coming Soon)"}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/tokenomics" className="btn-primary">
              Get $GABBY
            </Link>
            <a 
              href="https://t.me/RealitySpiral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-muted-foreground hover:text-gabby"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Contact on Telegram
            </a>
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
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-2 text-foreground hover:bg-secondary/50",
                        item.disabled && "opacity-50 cursor-not-allowed"
                      )}
                      disabled={item.disabled}
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
                            className={cn(
                              "block px-4 py-2 text-sm text-foreground hover:bg-secondary/50",
                              child.disabled && "opacity-50 pointer-events-none"
                            )}
                            aria-disabled={child.disabled}
                            tabIndex={child.disabled ? -1 : undefined}
                            onClick={(e) => child.disabled && e.preventDefault()}
                          >
                            {child.label} {child.disabled && "(Coming Soon)"}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-2 text-foreground hover:bg-secondary/50",
                      item.disabled && "opacity-50 pointer-events-none"
                    )}
                    aria-disabled={item.disabled}
                    tabIndex={item.disabled ? -1 : undefined}
                    onClick={(e) => item.disabled && e.preventDefault()}
                  >
                    {item.label} {item.disabled && "(Coming Soon)"}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t">
              <Link to="/tokenomics" className="btn-primary w-full text-center">
                Get $GABBY
              </Link>
              <a 
                href="https://t.me/RealitySpiral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-gabby"
              >
                <ExternalLink className="h-4 w-4" />
                Contact on Telegram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
