
import { Link } from 'react-router-dom';
import { Telegram, Twitter, Github, Linkedin, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <div className="w-8 h-8 rounded-lg bg-gabby flex items-center justify-center text-white font-bold">
                G
              </div>
              <span>Gabby AI</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              $Gabby is transforming conversational AI by uniquely combining blockchain technology 
              with monetized interactions.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://t.me/RealitySpiral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gabby transition-colors"
                aria-label="Telegram"
              >
                <Telegram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-gabby transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-gabby transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-gabby transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-gabby transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  About Gabby
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-gabby transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gabby transition-colors"
                >
                  Whitepaper PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Join our community on Telegram:
            </p>
            <a 
              href="https://t.me/RealitySpiral" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gabby hover:underline mb-6"
            >
              <Telegram className="h-4 w-4" />
              @RealitySpiral
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2">
              Send Message
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Gabby AI. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 max-w-2xl mx-auto">
            $GABBY is a utility token. Nothing on this website constitutes financial advice. Cryptocurrency investments involve risk.
            Always do your own research.
          </p>
        </div>
      </div>
    </footer>
  );
}
