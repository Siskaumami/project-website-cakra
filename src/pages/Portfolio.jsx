import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'concert', name: 'Concert' },
    { id: 'festival', name: 'Festival' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Wedding Elegant di Ballroom Hotel',
      category: 'wedding',
      date: '15 Januari 2024',
      location: 'Jakarta',
      guests: '300 Tamu',
      image: 'Elegant wedding reception with professional lighting and sound setup',
      description: 'Pernikahan mewah dengan sistem audio dan pencahayaan yang menciptakan suasana romantis dan elegan.'
    },
    {
      id: 2,
      title: 'Corporate Event Annual Meeting',
      category: 'corporate',
      date: '22 Februari 2024',
      location: 'Surabaya',
      guests: '500 Peserta',
      image: 'Professional corporate event with stage lighting and sound system',
      description: 'Acara perusahaan dengan presentasi multimedia dan sistem audio yang jernih untuk semua peserta.'
    },
    {
      id: 3,
      title: 'Concert Music Festival',
      category: 'concert',
      date: '10 Maret 2024',
      location: 'Bandung',
      guests: '2000 Penonton',
      image: 'Large outdoor concert with professional stage lighting and sound equipment',
      description: 'Konser musik dengan sistem sound berkualitas tinggi dan lighting spektakuler.'
    },
    {
      id: 4,
      title: 'Festival Budaya Nusantara',
      category: 'festival',
      date: '5 April 2024',
      location: 'Yogyakarta',
      guests: '1500 Pengunjung',
      image: 'Cultural festival with traditional stage setup and modern lighting',
      description: 'Festival budaya dengan perpaduan teknologi modern dan nuansa tradisional.'
    },
    {
      id: 5,
      title: 'Wedding Garden Party',
      category: 'wedding',
      date: '20 April 2024',
      location: 'Bali',
      guests: '200 Tamu',
      image: 'Outdoor garden wedding with romantic lighting and sound setup',
      description: 'Pernikahan outdoor dengan konsep garden party yang romantis dan natural.'
    },
    {
      id: 6,
      title: 'Product Launch Event',
      category: 'corporate',
      date: '12 Mei 2024',
      location: 'Jakarta',
      guests: '400 Undangan',
      image: 'Modern product launch event with dynamic lighting and professional audio',
      description: 'Peluncuran produk dengan teknologi audio visual terdepan dan lighting dinamis.'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleViewDetails = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio Cakra Production - Galeri Event Sound & Lighting</title>
        <meta name="description" content="Lihat portfolio lengkap Cakra Production. Galeri acara sukses dari wedding, corporate event, konser, hingga festival yang telah kami tangani di Sidoarjo dan sekitarnya." />
        <link rel="canonical" href="https://www.cakraproduction.com/portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display">
              <span className="text-gradient">Portfolio</span> Kami
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Jelajahi berbagai acara spektakuler yang telah kami wujudkan. Setiap proyek adalah bukti komitmen kami untuk memberikan yang terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black gold-glow'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={handleViewDetails}
              >
                <div className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:gold-glow">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      alt={item.image}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-yellow-400/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gradient font-display">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{item.guests}</span>
                      </div>
                    </div>
                  </div>
                </div>
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
              Ingin Acara Anda <span className="text-gradient">Seperti Ini</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Mari diskusikan konsep acara impian Anda. Tim profesional kami siap membantu mewujudkannya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-6 text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 gold-glow"
                >
                  Konsultasi Gratis
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

export default Portfolio;