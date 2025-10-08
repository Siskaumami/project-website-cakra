import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HeartHandshake as Handshake, Star, Users, Award, ArrowRight, CheckCircle, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Partnership = () => {
  const partners = [
    {
      name: 'Hotel Grand Indonesia',
      category: 'Hospitality',
      description: 'Partnership eksklusif untuk semua acara di ballroom dan meeting rooms',
      image: 'Luxury hotel ballroom with professional audio visual setup',
      benefits: ['Preferred vendor status', 'Special rates', 'Priority booking']
    },
    {
      name: 'Event Organizer Prima',
      category: 'Event Management',
      description: 'Kolaborasi strategis untuk berbagai corporate events dan exhibitions',
      image: 'Professional event management team working with audio visual equipment',
      benefits: ['Joint marketing', 'Resource sharing', 'Bulk discounts']
    },
    {
      name: 'Wedding Planner Elite',
      category: 'Wedding Services',
      description: 'Kemitraan untuk memberikan layanan wedding package yang komprehensif',
      image: 'Elegant wedding setup with professional lighting and sound system',
      benefits: ['Package deals', 'Cross referrals', 'Coordinated services']
    },
    {
      name: 'Convention Center Jakarta',
      category: 'Venue',
      description: 'Mitra resmi untuk semua acara besar di convention center',
      image: 'Large convention center with professional audio visual installation',
      benefits: ['Exclusive access', 'Technical support', 'Maintenance services']
    },
    {
      name: 'Production House Media',
      category: 'Media Production',
      description: 'Kolaborasi untuk produksi konten dan live streaming events',
      image: 'Media production studio with professional audio and video equipment',
      benefits: ['Content creation', 'Live streaming', 'Post production']
    },
    {
      name: 'Corporate Training Institute',
      category: 'Education',
      description: 'Partnership untuk menyediakan fasilitas audio visual training',
      image: 'Modern training facility with advanced audio visual technology',
      benefits: ['Training programs', 'Equipment demos', 'Technical workshops']
    }
  ];

  const partnershipTypes = [
    {
      title: 'Vendor Partnership',
      description: 'Menjadi mitra vendor resmi untuk venue dan event organizer',
      icon: Handshake,
      benefits: [
        'Preferred vendor status',
        'Exclusive rates dan packages',
        'Priority dalam booking',
        'Joint marketing opportunities'
      ]
    },
    {
      title: 'Technology Partnership',
      description: 'Kolaborasi dalam pengembangan dan implementasi teknologi terbaru',
      icon: Zap,
      benefits: [
        'Access ke teknologi terdepan',
        'Training dan sertifikasi',
        'Technical support',
        'Product development collaboration'
      ]
    },
    {
      title: 'Strategic Alliance',
      description: 'Aliansi strategis untuk ekspansi pasar dan layanan',
      icon: Globe,
      benefits: [
        'Market expansion',
        'Resource sharing',
        'Cross-selling opportunities',
        'Brand collaboration'
      ]
    }
  ];

  const handleApplyPartnership = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handleLearnMore = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Partnership - Cakra Production | Kemitraan Strategis & Kolaborasi Bisnis</title>
        <meta name="description" content="Bergabunglah dengan jaringan mitra Cakra Production. Kemitraan strategis untuk venue, event organizer, dan bisnis terkait industri audio visual." />
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
              <span className="text-gradient">Partnership</span> Strategis
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan jaringan mitra terpercaya Cakra Production. Bersama-sama kita ciptakan ekosistem bisnis yang saling menguntungkan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Jenis <span className="text-gradient">Kemitraan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kami menawarkan berbagai model kemitraan yang dapat disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:gold-glow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center gold-glow">
                  <type.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gradient font-display mb-4 text-center">{type.title}</h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-3">
                  {type.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Mitra <span className="text-gradient">Terpercaya</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bergabunglah dengan jaringan mitra yang telah mempercayakan kolaborasi bisnis mereka kepada kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:gold-glow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    alt={partner.name}
                   src="https://images.unsplash.com/photo-1639168314917-53ecd2e3135c" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gradient font-display">{partner.name}</h3>
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{partner.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-yellow-400">Partnership Benefits:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Mengapa <span className="text-gradient">Bermitra</span> dengan Kami?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Reputasi Terpercaya',
                description: 'Track record yang solid dengan 500+ klien puas'
              },
              {
                icon: Users,
                title: 'Tim Profesional',
                description: 'Teknisi berpengalaman dan customer service terbaik'
              },
              {
                icon: Award,
                title: 'Kualitas Premium',
                description: 'Peralatan berkualitas tinggi dengan standar internasional'
              },
              {
                icon: Zap,
                title: 'Inovasi Berkelanjutan',
                description: 'Selalu mengikuti perkembangan teknologi terbaru'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center gold-glow">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gradient font-display">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Proses <span className="text-gradient">Kemitraan</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Discussion',
                description: 'Diskusi awal untuk memahami kebutuhan dan potensi kemitraan'
              },
              {
                step: '02',
                title: 'Proposal & Terms',
                description: 'Penyusunan proposal kemitraan dengan terms yang saling menguntungkan'
              },
              {
                step: '03',
                title: 'Agreement Signing',
                description: 'Penandatanganan kontrak kemitraan resmi'
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Implementasi kemitraan dan monitoring berkelanjutan'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xl gold-glow">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gradient font-display">{process.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
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
              Siap Memulai <span className="text-gradient">Kemitraan</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Mari diskusikan peluang kemitraan yang saling menguntungkan. Tim kami siap membantu mewujudkan kolaborasi yang sukses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleApplyPartnership}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-6 text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 gold-glow"
              >
                Apply Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-6 text-lg transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partnership;