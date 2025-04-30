import React, { useState, useEffect } from 'react';
import Services from './Services';
import Contact from '../../components/Contact';
import About from './About';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const typewriterWords = isMobile
    ? ['Growth', 'Solutions', 'Success']
    : ['Strategic Growth', 'Complex Business Challenges', 'Scalable Solutions'];

  const gradientIntensity = windowWidth > 1024 ? 'from-[#27216a]' : 'from-[#1e1a4a]';

  return (
    <>
      <section id="home" className="relative pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-36 lg:pb-24  overflow-hidden">

        <div className={`absolute inset-0 bg-gradient-to-br ${gradientIntensity} to-[#27216a] z-0`}></div>

        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djIyaC0yVjM0aDJ6bTAtMzB2MmgtMlY0aDJ6TTE0IDE0aDJ2LTJoLTJ2MnptMTYgMTR2MmgtMnYtMmgyem0tOC0yMmgydjJoLTJ2LTJ6bTIyIDE0aC0ydjJoMnYtMnptMC0xNGgtMnYyaDJ2LTJ6bTAgMjVoLTJWMzRoMnYtMXptLTE0LTE0aDJ2LTJoLTJ2MnptMCAxNmgydi0yaC0ydjJ6bS0xMS0xNHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=")',
            opacity: isMobile ? 0.05 : 0.1
          }}
        ></div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              <span className="block mb-2 sm:mb-4">Strategic Consulting for</span>
              <div className="h-12 xs:h-16 sm:h-20 md:h-24 flex items-center justify-center">
                <Typewriter
                  words={typewriterWords}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  className="text-blue-200"
                />
              </div>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              We partner with forward-thinking organizations to identify opportunities,
              develop strategies, and implement solutions that drive sustainable growth.
            </p>


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-0">

              <a
                href="#contact"
                className="text-white text-sm sm:text-base md:text-lg inline-flex items-center justify-center bg-gradient-to-br from-purple-600 to-[#bb1c2b] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 sm:mb-2.5 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="text-white text-sm sm:text-base md:text-lg inline-flex items-center justify-center bg-gradient-to-br from-purple-600 to-[#bb1c2b] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 sm:mb-2.5  transition-all duration-300"
              >
                Our Services
              </a>
            </div>

          </div>
        </div>


        <div
          className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-white z-10"
          style={{
            clipPath: windowWidth > 768
              ? 'ellipse(75% 100% at 50% 100%)'
              : 'ellipse(100% 100% at 50% 100%)'
          }}
        ></div>
      </section>


      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;