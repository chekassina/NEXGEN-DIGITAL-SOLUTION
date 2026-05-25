import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* SERVICES WITH IMAGES */
const services = [
  {
    image: "/images/51.jpg",
    title: "Website Development",
    description: "Custom, high-performance websites tailored to your business needs.",
  },
  {
    image: "/images/52.jpg",
    title: "Responsive Design",
    description: "Flawless experiences across all devices—mobile, tablet, and desktop.",
  },
  {
    image: "/images/53.jpg",
    title: "SEO Optimization",
    description: "Built with the best SEO practices to help you rank higher on search engines.",
  },
  {
    image: "/images/54.jpg",
    title: "Fast Performance",
    description: "Speed-optimized websites providing the best user experience.",
  },
];

const features = [
  "Fast Performance",
  "Mobile Friendly",
  "Secure & Reliable",
  "SEO Optimized",
  "Modern UI/UX",
  "Affordable Pricing",
];

export function Home() {
  return (
    <div className="relative">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full w-[600px] h-[600px] mx-auto top-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-[60px] lg:text-[80px] font-black uppercase leading-[0.85] mb-6">
                We Build <br />
                <span className="text-gradient">Digital</span> <br />
                Experiences
              </h1>

              <p className="text-brand-gray mb-8">
                Modern websites that help your business grow online.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl"
                >
                  Get Started
                </Link>

                <Link
                  to="/portfolio"
                  className="px-8 py-4 border border-white/20 text-white rounded-xl"
                >
                  Portfolio
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:block relative"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Workspace"
                className="rounded-2xl shadow-2xl h-[500px] object-cover"
              />

              <div className="absolute -bottom-5 -left-5 bg-brand-navy p-4 rounded-xl flex items-center gap-3 border border-white/10">
                <ShieldCheck className="text-brand-cyan" />
                <div>
                  <p className="text-white font-bold text-sm">Secure & Reliable</p>
                  <p className="text-brand-gray text-xs">Top security</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-black mb-4">
          Empowering Your <span className="text-gradient">Digital Vision</span>
        </h2>

        <p className="text-brand-gray max-w-2xl mx-auto">
          We build modern, fast, and responsive websites for businesses.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="bg-white/5 p-6 rounded-2xl"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />

                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-brand-gray text-sm mb-4">
                  {service.description}
                </p>

                <Link to="/services" className="text-brand-cyan text-sm">
                  Learn more →
                </Link>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (UPDATED WITH IMAGE) */}
      <section className="py-24 bg-brand-navy/50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-black mb-6">
              Why Choose <span className="text-gradient">Us</span>
            </h2>

            <p className="text-brand-gray mb-8">
              We deliver fast, secure, and modern websites that help businesses grow.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-cyan w-5 h-5" />
                  <span className="text-white">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/10 blur-2xl rounded-2xl" />

            <img
              src="/images/53.jpg"
              alt="Why Choose Us"
              className="relative z-10 w-full h-[420px] object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto bg-white/5 p-10 rounded-2xl">
          <MessageCircle className="mx-auto mb-4 text-brand-cyan" />

          <p className="text-xl text-white italic mb-6">
            "Excellent service and professional work. Highly recommended!"
          </p>

          <h4 className="text-white font-bold">— Happy Client</h4>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-brand-dark">
        <h2 className="text-5xl font-black mb-6">
          Let’s Build Your Success
        </h2>

        <Link
          to="/contact"
          className="px-8 py-4 bg-white text-black font-bold rounded-xl"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}