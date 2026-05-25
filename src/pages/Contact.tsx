import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl lg:text-[70px] leading-[0.9] font-black uppercase tracking-tighter mb-6">Contact <span className="text-gradient">Us</span></h1>
          <p className="text-lg text-brand-gray">
            Have a project in mind or need technical support? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="card-gradient p-8 rounded-2xl flex items-start gap-4"
             >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tighter text-white mb-1">Call Us</h4>
                  <p className="text-brand-gray mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:0756568674" className="text-brand-cyan font-medium hover:underline">0756568674</a>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="card-gradient p-8 rounded-2xl flex items-start gap-4"
             >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tighter text-white mb-1">Email Us</h4>
                  <p className="text-brand-gray mb-1">We're here to help.</p>
                  <a href="mailto:info@nexgendigital.com" className="text-brand-cyan font-medium hover:underline break-all">info@nexgendigital.com</a>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="card-gradient p-8 rounded-2xl flex items-start gap-4"
             >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tighter text-white mb-1">Visit Us</h4>
                  <p className="text-brand-gray mb-1">Our headquarters.</p>
                  <span className="text-brand-light font-medium">Nairobi, Kenya</span>
                </div>
             </motion.div>
             
             <motion.a 
               href="https://wa.me/254756568674" 
               target="_blank" 
               rel="noopener noreferrer"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="block w-full py-4 text-center rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all"
             >
               Chat on WhatsApp
             </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="lg:col-span-2 card-gradient p-8 lg:p-10 rounded-2xl"
          >
             <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Send us a message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-brand-light">Your Name</label>
                     <input type="text" className="w-full bg-brand-dark/50 border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-brand-light">Email Address</label>
                     <input type="email" className="w-full bg-brand-dark/50 border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="john@example.com" />
                   </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-brand-light">Phone Number</label>
                     <input type="tel" className="w-full bg-brand-dark/50 border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="+254..." />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-brand-light">Service Needed</label>
                     <select className="w-full bg-brand-dark/50 border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none">
                       <option value="" disabled selected>Select a service...</option>
                       <option value="web">Website Development</option>
                       <option value="seo">SEO Optimization</option>
                       <option value="wifi">WiFi Solutions</option>
                       <option value="other">Other</option>
                     </select>
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-light">Message</label>
                  <textarea rows={4} className="w-full bg-brand-dark/50 border border-brand-blue/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-brand-blue hover:bg-brand-cyan text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(10,132,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                  Send Message <Send className="w-4 h-4" />
                </button>
             </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className="mt-16 h-96 rounded-2xl overflow-hidden border border-brand-blue/20 relative w-full bg-brand-navy">
           {/* Placeholder for iframe map */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.54518742517!2d36.732973715103444!3d-1.3032034947932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
