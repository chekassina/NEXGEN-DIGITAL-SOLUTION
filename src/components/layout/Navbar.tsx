import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoIcon } from '../Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-blue/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-transparent group-hover:scale-110 transition-transform duration-300">
            <LogoIcon className="w-9 h-9 text-brand-blue drop-shadow-[0_0_10px_rgba(10,132,255,0.4)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold uppercase tracking-tighter text-white leading-none">
              NEX<span className="text-brand-blue">GEN</span>
            </span>
            <span className="text-[10px] text-brand-gray tracking-widest uppercase mt-1">Digital Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-widest transition-colors hover:text-white relative ${
                  isActive ? 'text-white' : 'text-brand-gray'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-cyan rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-brand-cyan text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-[0_0_15px_rgba(10,132,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-light/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-brand-blue/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest ${
                    isActive ? 'bg-brand-blue/10 text-white' : 'text-brand-gray hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
