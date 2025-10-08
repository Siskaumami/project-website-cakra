import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 0 .14.02.2.04.07.02.13.05.19.07.38.12.74.27 1.09.47.35.2.68.44.98.72.3.28.57.6.8.95.23.35.42.72.57 1.1.15.38.27.77.35 1.17.08.4.12.8.15 1.2.03.4.05.8.06 1.2.01.42.01.83.01 1.25 0 .41 0 .82-.01 1.23-.01.42-.03.83-.06 1.24-.03.4-.07.8-.15 1.18-.08.4-.2.78-.35 1.16-.15.38-.34.75-.57 1.1-.23.35-.5.68-.8.95-.3.27-.63.5-1 .7-.35.2-.72.35-1.1.45-.38.1-.77.18-1.17.24-.4.06-.8.1-1.2.13-.4.03-.8.05-1.2.06-.42.01-.83.01-1.25.01-.41 0-.82 0-1.23-.01-.42-.01-.83-.03-1.24-.06-.4-.03-.8-.07-1.18-.15-.4-.08-.78-.2-1.16-.35-.38-.15-.75-.34-1.1-.57-.35-.23-.68-.5-.95-.8-.27-.3-.5-.63-.7-1-.2-.35-.35-.72-.45-1.1-.1-.38-.18-.77-.24-1.17-.06-.4-.1-.8-.13-1.2-.03-.4-.05-.8-.06-1.2-.01-.42-.01-.83-.01-1.25 0-.41 0-.82.01-1.23.01-.42.03-.83.06-1.24.03-.4.07-.8.15-1.18.08-.4.2-.78-.35-1.16.15-.38.34-.75.57-1.1.23-.35.5-.68.8-.95.3-.27.63-.5 1-.7.35-.2.72-.35 1.1-.45.38-.1.77-.18-1.17-.24.4-.06.8-.1 1.2-.13.4-.03.8-.05 1.2-.06.42-.01.83-.01 1.25-.01zM7.65 18.41c.38 0 .75.01 1.13.01.02 0 .04 0 .06-.01.33-.02.66-.04 1-.07.33-.03.66-.07 1-.12.33-.05.66-.1.98-.17.32-.07.64-.15.95-.24.31-.09.62-.2.92-.32.3-.12.6-.25.88-.4.28-.15.55-.32.8-.5.25-.18.48-.38.7-.6.22-.22.42-.45.6-.7.18-.25.35-.52.48-.8.13-.28.25-.57.35-.87.1-.3.18-.6.25-.9.07-.3.13-.6.18-.9.05-.3.08-.6.12-.9.04-.3.06-.6.08-.9.02-.3.03-.6.04-.9.01-.3.01-.6.01-.9s0-.6-.01-.9c0-.3-.01-.6-.02-.9-.02-.3-.04-.6-.08-.9-.04-.3-.08-.6-.12-.9-.05-.3-.1-.6-.18-.9-.07-.3-.15-.6-.25-.9-.1-.3-.22-.59-.35-.87-.13-.28-.28-.55-.48-.8-.18-.25-.38-.5-.6-.7-.22-.22-.45-.42-.7-.6-.25-.18-.52-.35-.8-.5-.28-.15-.58-.28-.88-.4-.3-.12-.6-.23-.92-.32-.31-.09-.63-.17-.95-.24-.32-.07-.65-.12-.98-.17-.34-.05-.67-.09-1.01-.12-.33-.03-.66-.05-1-.07-.02 0-.04-.01-.06-.01-.38 0-.75 0-1.13.01-3.86.06-6.93 3.15-6.93 7.02 0 3.87 3.07 6.96 6.93 7.02zM12.13 10.41v6.37c-.01.42.33.77.75.77.42 0 .77-.34.77-.76v-6.38a.76.76 0 0 0-.76-.76c-.42.01-.76.34-.76.76zM15.53 10.41a.76.76 0 0 0-.76.76v6.38c0 .42.34.76.76.76.42 0 .77-.34.77-.76v-6.38a.76.76 0 0 0-.77-.76zM8.73 10.41a.76.76 0 0 0-.76.76v6.38c0 .42.34.76.76.76s.77-.34.77-.76v-6.38a.76.76 0 0 0-.77-.76z"></path>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const socialLinks = [{
    icon: Instagram,
    href: 'https://www.instagram.com/cakra.id_official?igsh=MWtpdHQ2ZnEwNnpucw==',
    label: 'Instagram'
  }, {
    icon: TikTokIcon,
    href: 'https://www.tiktok.com/@cakraproductionindonesia?_t=ZS-8zlzMbdsjPl&_r=1',
    label: 'TikTok'
  }, {
    icon: Youtube,
    href: 'https://youtube.com/@cakraproductionindonesiayt?si=tEuyCtaGL4QUjbGz',
    label: 'YouTube'
  }];
  const quickLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Product',
    path: '/product'
  }, {
    name: 'Cakra Xperience',
    path: '/cakra-xperience'
  }, {
    name: 'Social Media',
    path: '/social-media'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const phoneNumber = "6281515125277";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Halo Cakra Production, saya tertarik dengan layanan Anda.")}`;
  const handleLocationClick = () => {
    navigate('/contact', {
      state: {
        scrollToMap: true
      }
    });
  };
  return <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <img src="https://horizons-cdn.hostinger.com/abdf383b-97e8-4a5c-91a9-ed7c93944dcd/80926566b519fbce3141a0b849352dc4.png" alt="Cakra Production Logo" className="w-8 h-8" />
              </div>
              <div>
                <span className="text-lg font-bold text-gradient font-display">Cakra Production</span>
                <p className="text-xs text-gray-400">Sound, Lighting & Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Menyediakan layanan rental sound system dan lighting profesional, produk dengan kualitas terbaik, dan kursus lighting mulai dari nol.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="space-y-4">
            <span className="text-lg font-semibold text-yellow-400">Quick Links</span>
            <div className="space-y-2">
              {quickLinks.map(link => <Link key={link.name} to={link.path} className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  {link.name}
                </Link>)}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-4">
            <span className="text-lg font-semibold text-yellow-400">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                <span onClick={handleLocationClick} className="text-gray-300 text-sm hover:text-yellow-400 cursor-pointer transition-colors">Sidoarjo, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-yellow-400 transition-colors">+62 815‑1512‑5277</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@cakraproduction.com" className="text-gray-300 text-sm hover:text-yellow-400 transition-colors">info@cakraproduction.com</a>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-4">
            <span className="text-lg font-semibold text-yellow-400">Follow Us</span>
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:scale-110 transition-all duration-300" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
            <p className="text-gray-400 text-sm">
              Ikuti media sosial kami untuk update terbaru dan inspirasi acara!
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Brightmind Technology. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;