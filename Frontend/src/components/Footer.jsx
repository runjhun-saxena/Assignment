import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#27216a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold">Zylentrix</h2>
            <p className="mt-2 text-blue-200 leading-relaxed">
              Empowering Business Growth through Innovative Digital Solutions.
              We help you scale, optimize, and transform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#careers" className="hover:text-blue-400">Careers</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-blue-200 mb-2">Email: contact@zylentrix.com</p>
            <p className="text-blue-200 mb-4">Phone: +91 98765 43210</p>
            <div className="flex md:justify-end space-x-6">
              <a href="https://www.linkedin.com/company/zylentrix/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/zylentrix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg viewBox="0 0 24 24" aria-label="X" role="img" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/zylentrix/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

        </div>

       
        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Zylentrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
