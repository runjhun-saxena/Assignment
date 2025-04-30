import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                if (!section) return;

                const offsetTop = section.offsetTop;
                const offsetHeight = section.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const headerStyles = {
        backdropFilter: isScrolled ? 'none' : 'blur(8px)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.8)',
        height: '72px',
        transition: 'all 0.3s ease'
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 shadow-sm `}
            style={headerStyles}
        >
            <div className="container my-5 px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-full ">
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src="https://zylentrix.net/wp-content/uploads/2025/02/Zylentrix-Logo-Without-Tagline-e1740601873157-2048x491.png"
                            alt="Logo"
                            className="h-7 w-auto sm:h-8 md:h-9"
                        />
                    </a>

                    {/* Desktop Navigation Strats here */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 lg:space-x-8">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`px-2 py-1 text-base lg:text-xl hover:bg-gray  font-medium transition-colors rounded-md ${activeSection === item.id
                                            ? 'text-[#27216a]  bg-indigo-100 font-semibold'
                                            : isScrolled
                                                ? 'text-gray-700 hover:text-indigo-900'
                                                : 'text-gray-800 hover:text-indigo-900'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}

                        </ul>

                    </nav>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}

                <div

                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    style={{ transitionProperty: 'max-height, opacity' }}
                >
                    <ul className="bg-white rounded-lg shadow-lg mt-2 py-2 border border-gray-100">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`block px-4 py-3 text-sm transition-colors ${activeSection === item.id
                                        ? 'text-[#27216a]  bg-indigo-100 font-medium'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;