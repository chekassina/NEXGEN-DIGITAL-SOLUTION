import { motion } from 'motion/react';
import { Target, Eye, Shield, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Reliability',
    desc: 'We deliver trusted and dependable solutions.',
    image: '/images/56.jpg',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Innovation',
    desc: 'We embrace new ideas and technology.',
    image: '/images/57.jpg',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Integrity',
    desc: 'We value honesty and transparency.',
    image: '/images/58.jpg',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Growth',
    desc: 'We are committed to growth and excellence.',
    image: '/images/59.jpg',
  },
];

export function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl lg:text-[70px] font-black uppercase tracking-tighter mb-6">
            About <span className="text-gradient">NEXGEN</span>
          </h1>
          <p className="text-lg text-brand-gray">
            Connecting People. Powering Possibilities. We build digital solutions that drive growth.
          </p>
        </div>

        {/* STORY */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img
              src="/images/55.jpg"
              alt="Our Story"
              className="rounded-2xl w-full object-cover shadow-lg border border-brand-blue/10"
            />
          </motion.div>

          <div>
            <h2 className="text-4xl font-black uppercase mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-brand-gray leading-relaxed">
              NEXGEN Digital Solutions was founded to bridge the gap between businesses and modern technology.
            </p>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">

          {/* MISSION */}
          <motion.div className="bg-brand-navy rounded-2xl overflow-hidden border border-brand-blue/10">
            <img src="/images/56.jpg" className="w-full h-56 object-cover" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-brand-cyan w-6 h-6" />
                <h3 className="text-2xl font-black uppercase">Our Mission</h3>
              </div>
              <p className="text-brand-gray">
                To deliver innovative and scalable digital solutions that empower businesses.
              </p>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div className="bg-brand-navy rounded-2xl overflow-hidden border border-brand-blue/10">
            <img src="/images/55.jpg" className="w-full h-56 object-cover" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-brand-cyan w-6 h-6" />
                <h3 className="text-2xl font-black uppercase">Our Vision</h3>
              </div>
              <p className="text-brand-gray">
                To become a leading digital solutions provider in Africa.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase">
            Our Core <span className="text-gradient">Values</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-brand-navy rounded-2xl overflow-hidden border border-brand-blue/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              {/* UNIQUE IMAGE PER VALUE */}
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-40 object-cover"
              />

              {/* CONTENT BELOW IMAGE */}
              <div className="p-6 text-center">
                <div className="flex justify-center text-brand-cyan mb-3">
                  {value.icon}
                </div>

                <h4 className="text-lg font-black uppercase mb-2">
                  {value.title}
                </h4>

                <p className="text-brand-gray text-sm">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}