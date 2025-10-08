import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../logo.jpg'; // pastikan file ada di src/logo.jpg

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'PRODUCT', path: '/product' },
    { name: 'CAKRA XPERIENCE', path: '/cakra-xperience' },
    { name: 'SOCIAL MEDIA', path: '/social-media' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* Outer ring + glow */}
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_8px_30px_rgba(250,204,21,0.18)] flex items-center justify-center">
              {/* Inner wrapper ensures perfect circle + overflow-hidden */}
              <div className="w-full h-full rounded-full overflow-hidden bg-black/0 flex items-center justify-center">
                {/* 
                  object-contain menjaga logo tidak ter-crop,
                  rounded-full + overflow-hidden membuatnya benar-benar bundar.
                  Jika ingin memaksa crop bulat terlepas dari content,
                  gunakan style mask (komentar di bawah).
                */}
                <img
                  src={logo}
                  alt="Cakra Production Logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                  // Optional: uncomment the styles below to force a circular mask on the image (works cross-browser with -webkit- prefix)
                  // style={{
                  //   WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 61%)',
                  //   maskImage: 'radial-gradient(circle at center, black 60%, transparent 61%)'
                  // }}
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient font-display">Cakra Production</h1>
              <p className="text-xs text-gray-300">Sound System & Lighting</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-yellow-400 ${
                  location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-yellow-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
