import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Volume2, Lightbulb, Mic, Camera, Star, ArrowRight, ShieldCheck, MessageSquare as MessageSquareQuote, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('sound');

  const categories = [
    { id: 'sound', name: 'Sound System', icon: Volume2 },
    { id: 'lighting', name: 'Lighting', icon: Lightbulb },
    { id: 'audio', name: 'Audio Equipment', icon: Mic },
    { id: 'visual', name: 'Visual Equipment', icon: Camera }
  ];

  const products = {
    sound: [
      {
        name: 'Line Array Speaker System',
        description: 'Sistem speaker line array profesional untuk venue besar dengan kualitas suara crystal clear',
        specs: ['Power: 2000W RMS', 'Frequency: 45Hz-20kHz', 'SPL: 135dB', 'Coverage: 90° x 15°'],
        image: 'Professional line array speaker system setup for large venues',
        rating: 5,
        price: 'Mulai dari Rp 5.000.000/hari'
      },
      {
        name: 'Mixing Console Digital',
        description: 'Console mixing digital 32 channel dengan fitur lengkap untuk kontrol audio profesional',
        specs: ['32 Input Channels', 'Built-in Effects', 'USB Recording', 'Wireless Control'],
        image: 'Professional digital mixing console with multiple channels and controls',
        rating: 5,
        price: 'Mulai dari Rp 2.500.000/hari'
      },
      {
        name: 'Subwoofer Array',
        description: 'Array subwoofer berkekuatan tinggi untuk bass yang dalam dan powerful',
        specs: ['Power: 3000W RMS', 'Frequency: 25Hz-200Hz', 'SPL: 140dB', 'Cardioid Pattern'],
        image: 'Powerful subwoofer array system for deep bass response',
        rating: 5,
        price: 'Mulai dari Rp 3.000.000/hari'
      }
    ],
    lighting: [
      {
        name: 'LED Moving Head',
        description: 'Moving head LED dengan beam yang tajam dan warna yang vibrant untuk efek lighting spektakuler',
        specs: ['LED: 300W', 'Colors: 16.7 Million', 'Pan: 540°', 'Tilt: 270°'],
        image: 'Professional LED moving head lights with colorful beam effects',
        rating: 5,
        price: 'Mulai dari Rp 800.000/hari'
      },
      {
        name: 'LED Par Light',
        description: 'LED Par light RGBW untuk wash lighting dengan kontrol warna yang presisi',
        specs: ['LED: 18x12W RGBW', 'Beam Angle: 25°', 'DMX Control', 'IP65 Rated'],
        image: 'Colorful LED Par lights creating vibrant wash lighting effects',
        rating: 5,
        price: 'Mulai dari Rp 300.000/hari'
      },
      {
        name: 'Laser Light System',
        description: 'Sistem laser profesional untuk efek visual yang memukau dan atmosfer yang dramatis',
        specs: ['Power: 5W RGB', 'Patterns: 200+', 'DMX Control', 'Auto/Sound Mode'],
        image: 'Professional laser light system creating spectacular visual effects',
        rating: 5,
        price: 'Mulai dari Rp 1.500.000/hari'
      }
    ],
    audio: [
      {
        name: 'Wireless Microphone System',
        description: 'Sistem mikrofon wireless dengan kualitas transmisi yang stabil dan jernih',
        specs: ['Frequency: UHF', 'Range: 100m', 'Battery: 8 Hours', 'Diversity Receiver'],
        image: 'Professional wireless microphone system with handheld and bodypack transmitters',
        rating: 5,
        price: 'Mulai dari Rp 500.000/hari'
      },
      {
        name: 'Monitor Speaker',
        description: 'Speaker monitor aktif untuk monitoring audio yang akurat di atas panggung',
        specs: ['Power: 500W', 'Frequency: 50Hz-18kHz', 'SPL: 125dB', 'XLR/TRS Input'],
        image: 'Professional stage monitor speakers for accurate audio monitoring',
        rating: 5,
        price: 'Mulai dari Rp 400.000/hari'
      },
      {
        name: 'Audio Interface',
        description: 'Interface audio multi-channel untuk recording dan playback berkualitas tinggi',
        specs: ['8 Input/Output', '24-bit/192kHz', 'USB 3.0', 'Zero Latency'],
        image: 'Professional audio interface with multiple inputs and outputs',
        rating: 5,
        price: 'Mulai dari Rp 600.000/hari'
      }
    ],
    visual: [
      {
        name: 'LED Video Wall',
        description: 'LED video wall modular dengan resolusi tinggi untuk display visual yang menakjubkan',
        specs: ['Pixel Pitch: 3.9mm', 'Brightness: 5000 nits', 'Refresh: 3840Hz', 'Modular Design'],
        image: 'High-resolution LED video wall display showing vibrant content',
        rating: 5,
        price: 'Mulai dari Rp 8.000.000/hari'
      },
      {
        name: 'Projector 4K',
        description: 'Proyektor 4K dengan brightness tinggi untuk presentasi dan display berkualitas cinema',
        specs: ['Resolution: 4K UHD', 'Brightness: 8000 Lumens', 'Contrast: 10000:1', 'Laser Light'],
        image: 'Professional 4K projector setup for high-quality presentations',
        rating: 5,
        price: 'Mulai dari Rp 3.500.000/hari'
      },
      {
        name: 'Camera System',
        description: 'Sistem kamera profesional untuk live streaming dan recording acara',
        specs: ['4K Recording', 'Live Streaming', 'Multi-Camera Setup', 'Remote Control'],
        image: 'Professional camera system setup for live streaming and recording',
        rating: 5,
        price: 'Mulai dari Rp 2.000.000/hari'
      }
    ]
  };

  const handleGetQuote = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Produk Cakra Production - Jual Sound System & Lighting</title>
        <meta name="description" content="Jelajahi produk sound system dan lighting profesional yang dijual oleh Cakra Production. Kualitas terjamin dan rekomendasi terbaik untuk kebutuhan Anda." />
        <link rel="canonical" href="https://www.cakraproduction.com/product" />
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
              <span className="text-gradient">Produk</span> Unggulan
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Koleksi lengkap peralatan sound system dan lighting profesional dengan teknologi terdepan untuk acara Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
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
                className={`px-6 py-4 flex items-center space-x-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black gold-glow'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[selectedCategory].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:gold-glow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    alt={product.image}
                   src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gradient font-display">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-yellow-400">Spesifikasi:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {product.specs.map((spec, i) => (
                        <li key={i}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-lg font-bold text-gradient mb-4">{product.price}</div>
                    <div className="flex flex-col space-y-2">
                      <Link to="/contact">
                        <Button
                          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                        >
                          Beli Sekarang
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        onClick={handleGetQuote}
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                      >
                        Minta Penawaran
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Mengapa Memilih <span className="text-gradient">Produk Kami</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kualitas Premium',
                description: 'Semua peralatan menggunakan brand ternama dengan standar internasional',
                icon: Award
              },
              {
                title: 'Produk Terjamin',
                description: 'Cakra telah memverifikasi setiap produk yang di display',
                icon: ShieldCheck
              },
              {
                title: 'Rekomendasi Terbaik',
                description: 'Kami dapat memberikan rekomendasi produk yang tersedia sesuai dengan kebutuhan customer',
                icon: MessageSquareQuote
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center gold-glow">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gradient font-display">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
              Butuh <span className="text-gradient">Konsultasi</span> Produk?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda memilih peralatan yang tepat sesuai kebutuhan acara Anda.
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

export default Product;