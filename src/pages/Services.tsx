import { motion } from 'motion/react';
import { Monitor, Smartphone, Search, Server, Wifi, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    image: '/images/51.jpg',
    icon: <Monitor className="w-8 h-8 text-brand-cyan" />,
    title: 'Website Development',
    description:
      'We build professional, responsive, and high-performance websites tailored to your specific business needs. From simple portfolios to complex e-commerce platforms.',
    features: ['Business websites', 'Portfolio websites', 'School websites', 'E-commerce websites']
  },
  {
    image: '/images/52.jpg',
    icon: <Smartphone className="w-8 h-8 text-brand-cyan" />,
    title: 'Responsive Design',
    description:
      'Every layout we create is fully responsive, ensuring your digital presence looks and functions perfectly across all devices and screen sizes.',
    features: ['Mobile optimized', 'Tablet friendly', 'Desktop scaling', 'Cross-browser compatible']
  },
  {
    image: '/images/53.jpg',
    icon: <Search className="w-8 h-8 text-brand-cyan" />,
    title: 'SEO Optimization',
    description:
      'Increase your visibility on search engines. We implement the latest SEO strategies to help your business rank higher and attract organic traffic.',
    features: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Performance tuning']
  },
  {
    icon: <Cpu className="w-8 h-8 text-brand-cyan" />,
    title: 'Computer Services',
    description:
      'Reliable hardware and software support to keep your operations running smoothly with minimal downtime.',
    features: ['Computer maintenance', 'Software installation', 'System upgrades', 'Data recovery']
  },
  {
    icon: <Wifi className="w-8 h-8 text-brand-cyan" />,
    title: 'WiFi & Internet Solutions',
    description:
      'Robust networking infrastructure designed to provide stable, fast, and secure internet connectivity for your home or business.',
    features: ['Network setup', 'Router installation', 'Internet troubleshooting', 'Security configuration']
  },
  {
    icon: <Server className="w-8 h-8 text-brand-cyan" />,
    title: 'Digital Business Solutions',
    description:
      'Holistic digital strategies to establish, manage, and scale your brand identity in the modern digital marketplace.',
    features: ['Branding', 'Social media setup', 'Online business support', 'Analytics & tracking']
  }
];

export function Services() {
  return (
    <div className="py-20 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl lg:text-[70px] leading-[0.9] font-black uppercase tracking-tighter mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-brand-gray">
            Comprehensive digital, IT, and networking solutions designed to accelerate your growth and simplify your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient p-8 rounded-2xl flex flex-col h-full hover:border-brand-blue/30 transition-colors group"
            >
              {/* IMAGE (only for first 3 services) */}
              {service.image && (
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="w-16 h-16 rounded-xl bg-brand-dark border border-brand-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
                {service.title}
              </h3>

              <p className="text-brand-gray leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 border-t border-brand-blue/10 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-brand-light/90">
                    <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="card-gradient rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-5 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">
              Ready to start your project?
            </h2>
            <p className="text-brand-gray mb-8 max-w-2xl mx-auto">
              Whether you need a new website, a network upgrade, or a complete digital overhaul, our team is ready to deliver.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}