import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'E-commerce', 'Company Websites', 'School Systems', 'Portfolio Sites'];

const projects = [
  {
    id: 1,
    title: 'Nairobi Market Online',
    client: 'Local Retailers',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    description: 'A fully functional modern e-commerce platform with payment integration and inventory tracking.',
    tech: ['React', 'Node.js', 'Stripe']
  },
  {
    id: 2,
    title: 'TechVision Corporate',
    client: 'TechVision Ltd',
    category: 'Company Websites',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'A professional corporate identity site featuring dynamic services routing and investor relations portals.',
    tech: ['Next.js', 'Tailwind', 'CMS']
  },
  {
    id: 3,
    title: 'Elimu Academy Portal',
    client: 'Elimu Schools',
    category: 'School Systems',
    image: '/images/62.jpg', // ✅ UPDATED IMAGE HERE
    description: 'A comprehensive school management system for student grading, attendance, and parent communication.',
    tech: ['React', 'Firebase', 'Express']
  },
  {
    id: 4,
    title: 'Sarah Jane Photography',
    client: 'Sarah Jane',
    category: 'Portfolio Sites',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800',
    description: 'A minimalist, highly visual portfolio site designed to showcase high-res photography with fluid transitions.',
    tech: ['React', 'Framer Motion']
  },
  {
    id: 5,
    title: 'AgriTech Store',
    client: 'FarmTech Solutions',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    description: 'A B2B e-commerce platform bridging local farmers with large scale distributors.',
    tech: ['React', 'MongoDB', 'Tailwind']
  },
  {
    id: 6,
    title: 'Apex Financial',
    client: 'Apex Group',
    category: 'Company Websites',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    description: 'A fast, secure, and modern website for a financial advisory firm.',
    tech: ['TypeScript', 'React', 'Styled Components']
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[100px] -z-10" />
          
          <h1 className="text-5xl lg:text-[70px] leading-[0.9] font-black uppercase tracking-tighter mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>

          <p className="text-lg text-brand-gray">
            Explore some of our recent projects. We take pride in delivering robust, beautiful, and functional applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === category
                  ? 'bg-brand-blue text-white shadow-[0_0_15px_rgba(10,132,255,0.4)]'
                  : 'bg-brand-navy border border-brand-blue/20 text-brand-gray hover:text-white hover:border-brand-blue/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-navy border border-brand-blue/10 rounded-2xl overflow-hidden group hover:border-brand-cyan/50 transition-colors"
              >
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-colors" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-brand-dark/80 backdrop-blur-md rounded-full text-brand-cyan border border-brand-cyan/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-brand-gray">
                        Client: {project.client}
                      </p>
                    </div>
                  </div>

                  <p className="text-brand-gray text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs text-brand-light/60 bg-white/5 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-dark border border-brand-blue/20 text-brand-cyan text-xs font-bold uppercase tracking-widest group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                    Live Preview <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}