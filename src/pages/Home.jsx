import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Events Completed' },
    { icon: Star, number: '4.9', label: 'Rating' },
    { icon: Zap, number: '24/7', label: 'Support' }
  ];

  const services = [
    {
      title: 'Layanan Event',
      description: 'wedding, event corporate, konser, dll.',
      image: 'A dynamic wedding event with professional lighting',
      link: '/portfolio'
    },
    {
      title: 'Products Approved by Cakra',
      description: 'Produk-produk yang di jamin kualitasnya oleh Cakra.',
      image: 'High-quality lighting and sound equipment on display',
      link: '/product'
    },
    {
      title: 'Cakra Xperience',
      description: 'Kursus lighting mulai dari 0 bersama Cakra',
      image: 'A student learning lighting design on a console',
      link: '/cakra-xperience'
    }
  ];

  const galleryImages = [
    { alt: 'Singer on stage with warm lights' },
    { alt: 'Female singer in blue light' },
    { alt: 'Guitarist smiling on stage' },
    { alt: 'Female singer with braids performing' },
    { alt: 'Guitarist with sunglasses in red light' },
    { alt: 'Singer performing passionately in dark' },
    { alt: 'Singer making a heart shape with hands' },
    { alt: 'Guitarist singing into a microphone' }
  ];

  return (
    <>
      <Helmet>
        <title>Cakra Production - Rental Sound System & Lighting Profesional Sidoarjo</title>
        <meta name="description" content="Cakra Production: Solusi #1 rental sound system dan lighting profesional di Sidoarjo. Siap wujudkan event impian Anda, dari wedding hingga konser." />
        <link rel="canonical" href="https://www.cakraproduction.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold font-display"
              >
                Bersama <span className="text-gradient">Cakra</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold font-display text-white"
              >
                Kita Bahagia
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Halo teman-teman! Cakra di sini untuk membantu menyelesaikan permasalahan sound system & lighting.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-6 text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 gold-glow"
                >
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-6 text-lg transition-all duration-300"
                >
                  Lihat Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                className="w-full h-auto rounded-2xl shadow-2xl gold-glow" 
                alt="Cakra Production professional sound and lighting setup for a concert"
               src="https://images.unsplash.com/photo-1563680401337-b77b5e0be9f7" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <img alt={galleryImages[0].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <img alt={galleryImages[1].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <img alt={galleryImages[2].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <img alt={galleryImages[3].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1663106831354-b0423e30496e" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <img alt={galleryImages[4].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <img alt={galleryImages[5].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
              <img alt={galleryImages[6].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1691706389882-b5507f26d637" />
            </motion.div>
            <motion.div className="overflow-hidden rounded-xl shadow-lg gold-glow group aspect-square" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
              <img alt={galleryImages[7].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center gold-glow">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient font-display">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Apa yang bisa <span className="text-gradient">Cakra bantu?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Segala tentang event, produk, dan keilmuan yang berkualitas ada di dalam Cakra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:gold-glow h-full flex flex-col">
                    <div className="aspect-video rounded-xl overflow-hidden mb-6">
                      <img 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        alt={service.image}
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <h3 className="text-2xl font-bold text-gradient font-display mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Ingin mewujudkan <span className="text-gradient">event impian</span> Anda?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hubungi Cakra sekarang untuk konsultasi dan membuat acara Anda menjadi sempurna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-6 text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 gold-glow"
                >
                  Hubungi Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;