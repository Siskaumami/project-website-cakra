import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.jpg'; // pastikan file ada di src/logo.jpg

// ✅ Ikon TikTok dengan path SVG lengkap
const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.065 2c.406 1.37 1.56 3.07 3.224 3.17v2.62a6.08 6.08 0 0 1-3.221-.89v6.08a4.2 4.2 0 1 1-4.2-4.2c.22 0 .43.02.64.06v2.7a1.49 1.49 0 1 0 1.49 1.49V2h2.07Zm5.33 2.25c-.34-.24-.66-.52-.95-.84-.7-.78-1.06-1.61-1.23-2.39h2.09c.13.56.45 1.11.94 1.57.25.23.53.44.82.61v1.05a5.9 5.9 0 0 1-1.77-.01Z" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/cakra.id_official?igsh=MWtpdHQ2ZnEwNnpucw==',
      label: 'Instagram',
    },
    {
      icon: TikTokIcon,
      href: 'https://www.tiktok.com/@cakraproductionindonesia?_t=ZS-8zlzMbdsjPl&_r=1',
      label: 'TikTok',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@cakraproductionindonesiayt?si=tEuyCtaGL4QUjbGz',
      label: 'YouTube',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Product', path: '/product' },
    { name: 'Cakra Xperience', path: '/cakra-xperience' },
    { name: 'Social Media', path: '/social-media' },
    { name: 'Contact', path: '/contact' },
  ];

  const phoneNumber = '6281515125277';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Halo Cakra Production, saya tertarik dengan layanan Anda.'
  )}`;

  const handleLocationClick = () => {
    navigate('/contact', { state: { scrollToMap: true } });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* === Company Info === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-black/0 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Cakra Production Logo"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                  />
                </div>
              </div>

              <div>
                <span className="text-lg font-bold text-gradient font-display">
                  Cakra Production
                </span>
                <p className="text-xs text-gray-400">
                  Sound, Lighting & Education
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Menyediakan layanan rental sound system dan lighting profesional,
              produk dengan kualitas terbaik, dan kursus lighting mulai dari nol.
            </p>
          </motion.div>

          {/* === Quick Links === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-yellow-400">
              Quick Links
            </span>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* === Contact Info === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-yellow-400">
              Contact Info
            </span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                <span
                  onClick={handleLocationClick}
                  className="text-gray-300 text-sm hover:text-yellow-400 cursor-pointer transition-colors"
                >
                  Sidoarjo, Indonesia
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                >
                  +62 815-1512-5277
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a
                  href="mailto:info@cakraproduction.com"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                >
                  info@cakraproduction.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* === Social Media === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-yellow-400">
              Follow Us
            </span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Ikuti media sosial kami untuk update terbaru dan inspirasi acara!
            </p>
          </motion.div>
        </div>

        {/* === Bottom Bar === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Brightmind Technology. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
