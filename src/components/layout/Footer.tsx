import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { LogoIcon } from '../Logo';

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-blue/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <LogoIcon className="w-8 h-8 text-brand-blue drop-shadow-[0_0_10px_rgba(10,132,255,0.4)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold uppercase tracking-tighter text-white leading-none">
                  NEX<span className="text-brand-cyan">GEN</span>
                </span>
              </div>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              We create modern, responsive, and high-performance websites that help businesses stand out and grow online.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gray hover:text-brand-cyan hover:bg-brand-blue/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gray hover:text-brand-cyan hover:bg-brand-blue/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gray hover:text-brand-cyan hover:bg-brand-blue/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gray hover:text-brand-cyan hover:bg-brand-blue/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-brand-gray text-sm hover:text-brand-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-cyan transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Website Development', 'Responsive Design', 'SEO Optimization', 'WiFi Solutions', 'Computer Services'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-brand-gray text-sm hover:text-brand-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-cyan transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-brand-gray text-sm">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-brand-gray text-sm">0756568674</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:info@nexgendigital.com" className="text-brand-gray text-sm hover:text-brand-cyan transition-colors">
                    info@nexgendigital.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blue/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} NEXGEN Digital Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-brand-gray text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-brand-gray text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
