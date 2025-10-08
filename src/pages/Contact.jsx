import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  
  const mapRef = useRef(null);
  const location = useLocation();
  const SIDOARJO_COORDS = [-7.3492, 112.7201];
  const phoneNumber = "6288211699073"; // format WA valid (tanpa +, spasi, strip)

  useEffect(() => {
    if (location.state?.scrollToMap && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location.state]);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      details: ['Jl. Pattimura IV No.239, Menyanggong, Kletek, Kec. Taman, Kabupaten Sidoarjo, Jawa Timur 61257'],
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 882-1169-9073', 'WhatsApp Available'],
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@cakraproduction.com'],
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Sabtu: 09:00 - 17:00', 'Minggu & Hari Libur: Tutup'],
      color: 'text-purple-400'
    }
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Concert/Music Event',
    'Festival',
    'Conference',
    'Exhibition',
    'Private Party',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, eventType, eventDate, message } = formData;
    const waMessage = `Halo Cakra Production,
Nama: ${name}
Email: ${email}
Telepon: ${phone}
Jenis Acara: ${eventType}
Tanggal Acara: ${eventDate}
Pesan: ${message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickContact = () => {
    const message = "Halo Cakra Production, saya tertarik dengan layanan Anda.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Kontak Cakra Production - Konsultasi Gratis Sound & Lighting</title>
        <meta name="description" content="Hubungi Cakra Production di Sidoarjo untuk konsultasi gratis rental sound system dan lighting. Tim kami siap membantu wujudkan acara impian Anda." />
        <link rel="canonical" href="https://www.cakraproduction.com/contact" />
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
              <span className="text-gradient">Hubungi</span> Kami
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Siap mewujudkan acara impian Anda? Tim profesional kami siap memberikan konsultasi gratis dan solusi terbaik untuk kebutuhan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <WhatsAppIcon />
            </div>
            <h3 className="text-xl font-bold text-gradient font-display mb-2">WhatsApp Chat</h3>
            <p className="text-gray-300 text-sm mb-4">Chat langsung dengan tim kami untuk respon cepat</p>
            <Button
              onClick={handleQuickContact}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              Chat Sekarang
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Kirim <span className="text-gradient">Pesan</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ceritakan kebutuhan acara Anda dan kami akan memberikan solusi terbaik dengan penawaran yang kompetitif.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="+62 882-1169-9073"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Jenis Acara *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    >
                      <option value="">Pilih jenis acara</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tanggal Acara
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Detail Kebutuhan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Ceritakan detail acara Anda, jumlah tamu, venue, dan kebutuhan khusus lainnya..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-4 text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 gold-glow"
                >
                  Kirim Pesan
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Informasi <span className="text-gradient">Kontak</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Kami siap melayani Anda dengan berbagai cara komunikasi yang mudah dan responsif.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gradient font-display mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-300 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 glass-effect rounded-xl overflow-hidden gold-glow"
          >
            <MapContainer center={SIDOARJO_COORDS} zoom={15} scrollWheelZoom={false} className="h-[500px] w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={SIDOARJO_COORDS}>
                <Popup>
                  Cakra Production Headquarter <br /> Jl. Pattimura IV No.239, Sidoarjo.
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
