import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Lightbulb, HardHat, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CakraXperience = () => {
  const classes = [
    {
      level: 1,
      title: 'Dasar Kelistrikan & DMX',
      icon: '⚡️',
      image: 'Basic stage lighting setup with simple console',
      description: 'Pondasi utama untuk menjadi lighting designer. Memahami kelistrikan dasar, sistem DMX, dan pengenalan berbagai jenis lighting panggung.',
      curriculum: [
        'Belajar kelistrikan dasar',
        'Pengenalan sistem DMX & jenis-jenis lighting panggung',
        'Fungsi dan penggunaan lighting',
        'Menghubungkan lighting ke console basic (Pilot 2000)',
        'Memahami lighting plot dasar untuk wedding event'
      ]
    },
    {
      level: 2,
      title: 'Lighting Rigging & Software Avolites',
      icon: '💡',
      image: 'Stage with rigging and Avolites software interface',
      description: 'Naik level dengan memahami lighting plot di panggung rigging dan mulai menggunakan software profesional seperti Avolites.',
      curriculum: [
        'Memahami lighting plot dasar di panggung rigging',
        'Penerapan lighting plot pada panggung',
        'Pengenalan software Avolites dan sejenisnya',
        'Belajar Time Code & 3D Visual pada software Avolites'
      ]
    },
    {
      level: 3,
      title: 'GrandMA2 & Skala Konser',
      icon: '🎶',
      image: 'Large concert stage with complex lighting design and GrandMA2 console',
      description: 'Masuki dunia konser skala besar dengan software standar industri, GrandMA2, dan pahami sistem kelistrikan yang kompleks.',
      curriculum: [
        'Pengenalan basic software GrandMA 2 & Time Code',
        'Memahami lighting plot pada panggung besar/konser',
        'Memahami kelistrikan pada skala panggung besar/konser'
      ]
    },
    {
      level: 4,
      title: 'GrandMA3 Basic',
      icon: '🚀',
      image: 'Modern stage lighting setup with GrandMA3 software interface',
      description: 'Kuasai teknologi lighting terbaru dengan pengenalan dasar software GrandMA3 yang menjadi standar masa depan industri.',
      curriculum: [
        'Pengenalan basic software GrandMA 3'
      ]
    },
    {
      level: 5,
      title: '3D Visualization (MA & Capture)',
      icon: '🎨',
      image: '3D visualization of a stage lighting design on a computer screen',
      description: 'Visualisasikan desain lighting Anda secara real-time dengan software 3D MA dan Capture, alat wajib bagi desainer profesional.',
      curriculum: [
        'Pengenalan 3D MA software',
        'Pengenalan Capture software'
      ]
    }
  ];

  const mentors = [
    {
      name: 'Putro Nur Cahyo',
      title: 'Founder & CEO Cakra Production',
      experience: '10+ tahun di industri lighting & sound system',
      image: 'Portrait of Putro Nur Cahyo, Founder of Cakra Production'
    },
    {
      name: 'Budi',
      title: 'Operator Cakra Production',
      experience: 'Spesialis GrandMA & Avolites',
      image: 'Portrait of Budi, Operator at Cakra Production'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cakra Xperience - Kursus Lighting Profesional dari Nol</title>
        <meta name="description" content="Gabung Cakra Xperience, kursus lighting dari nol hingga mahir. Belajar kelistrikan, software Avolites, GrandMA, dan 3D visual dari mentor profesional." />
        <link rel="canonical" href="https://www.cakraproduction.com/cakra-xperience" />
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
              <span className="text-gradient">Cakra Xperience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Wujudkan mimpimu menjadi Lighting Designer profesional. Belajar dari nol hingga mahir bersama para ahli di industri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Mengapa Bergabung dengan <span className="text-gradient">Cakra Xperience</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Memahami Kelistrikan Lighting',
              },
              {
                icon: Lightbulb,
                title: 'Memahami Jenis Lighting dan Pengaplikasian di Stage',
              },
              {
                icon: HardHat,
                title: 'Memahami berbagai jenis software lighting & lighting Console',
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center gold-glow">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gradient font-display">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Program <span className="text-gradient">Kelas Lighting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pilih kelas yang sesuai dengan level Anda dan mulailah perjalanan Anda menjadi Lighting Designer.
            </p>
          </motion.div>

          <div className="space-y-12">
            {classes.map((cls, index) => (
              <motion.div
                key={cls.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`relative order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative z-10">
                    <img
                      className="w-full h-auto rounded-2xl shadow-2xl gold-glow"
                      alt={cls.image}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                   <div className={`absolute -top-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl -z-10 ${index % 2 === 0 ? '-right-4' : '-left-4'}`} />
                </div>

                <div className={`space-y-6 order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl gold-glow">
                      {cls.icon}
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-yellow-400">KELAS {cls.level}</span>
                      <h3 className="text-3xl font-bold font-display text-gradient">{cls.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{cls.description}</p>
                  <div className="space-y-3">
                    {cls.curriculum.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button
                      className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    >
                      Daftar Kelas Ini
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
       {/* Mentors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Meet Our <span className="text-gradient">Mentors</span>
            </h2>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Belajar langsung dari para ahli yang telah menangani ratusan event dan konser berskala nasional.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="relative w-40 h-40 mx-auto">
                    <img
                      className="w-full h-full rounded-full object-cover border-4 border-yellow-400 gold-glow"
                      alt={mentor.image}
                     src="https://images.unsplash.com/photo-1534298435681-3fd5153b0b7c" />
                </div>
                <h3 className="text-2xl font-bold text-gradient font-display">{mentor.name}</h3>
                <p className="text-yellow-400 font-semibold">{mentor.title}</p>
                <p className="text-gray-300 text-sm">{mentor.experience}</p>
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
              Siap Menjadi <span className="text-gradient">Pro</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk belajar dan berkarir di industri event. Daftarkan diri Anda sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-6 text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 gold-glow"
                >
                  Daftar Sekarang
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

export default CakraXperience;