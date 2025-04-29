import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, animationProps }) => (
  <div
    className="bg-gradient-to-br from-[#27216a] to-[#c8414e] text-white p-10 rounded-lg shadow-xl hover:shadow-blue-950 transition-all"
    {...animationProps}
  >
    <div className="w-12 h-12 backdrop-blur-sm bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
      {React.isValidElement(icon) ? React.cloneElement(icon, { size: 24 }) : icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/90">{description}</p>
  </div>
);

const Services = ({ heading = "Our Services" }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive strategies aligned with your business goals and market position.",
      icon: <img src="/images/Marketing Agency Sticker by WPWA.gif" alt="Strategy" width={45} />
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights for informed decision-making.",
      icon: <img src="/images/Going Up Sticker by Qunomedical.gif" alt="Analytics" width={55} />
    },
    {
      title: "Innovation Consulting",
      description: "Drive growth through innovative solutions and digital transformation.",
      icon: <img src="/images/Thinking Think Sticker.gif" alt="Innovation" width={45} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-950 bg-clip-text "
          >
            {heading}
          </motion.h1>
          <img src="/images/man.gif" alt="Animated Icon" width={90} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              animationProps={{
                'data-aos': 'zoom-in-up',
                'data-aos-delay': `${index * 150}`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
