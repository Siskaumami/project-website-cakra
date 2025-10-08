import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const SocialMedia = () => {
  const tiktokUrl = "https://www.tiktok.com/@cakraproductionindonesia";
  const instagramUrl = "https://www.instagram.com/cakra.id_official/";

  return (
    <>
      <Helmet>
        <title>Sosial Media Cakra Production - TikTok & Instagram</title>
        <meta name="description" content="Ikuti Cakra Production di TikTok dan Instagram untuk update terbaru, konten di balik layar, dan inspirasi acara sound & lighting." />
        <link rel="canonical" href="https://www.cakraproduction.com/social-media" />
      </Helmet>

      <section className="relative py-32 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display">
              Ikuti Kami di <span className="text-gradient">Sosial Media</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dapatkan update terbaru, konten di balik layar, dan inspirasi acara langsung dari feed Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* TikTok Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display flex items-center justify-center gap-4">
                <TikTokIcon className="w-12 h-12 text-white" />
                <span className="text-gradient">TikTok</span> Feed
              </h2>
              <p className="text-lg text-gray-400 mt-2">Konten video pendek, tips & trik, dan keseruan lainnya.</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 gold-glow">
              <blockquote 
                className="tiktok-embed" 
                cite={tiktokUrl} 
                data-unique-id="cakraproductionindonesia" 
                data-embed-type="creator" 
                style={{maxWidth: '720px', minWidth: '320px', margin: '0 auto'}}
              > 
                <section> 
                  <a target="_blank" rel="noopener noreferrer" href={tiktokUrl}>@cakraproductionindonesia</a> 
                </section> 
              </blockquote>
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
          </motion.div>

          {/* Instagram Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display flex items-center justify-center gap-4">
                <Instagram className="w-12 h-12 text-white" />
                <span className="text-gradient">Instagram</span> Feed
              </h2>
              <p className="text-lg text-gray-400 mt-2">Portfolio visual, cerita di balik acara, dan pengumuman penting.</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 gold-glow">
               <iframe
                title="Instagram Feed"
                src="https://www.instagram.com/cakra.id_official/embed"
                className="w-full h-[600px] md:h-[800px] rounded-xl border-none"
                allow="autoplay; encrypted-media;"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Jangan Ketinggalan <span className="text-gradient">Update</span>!
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Klik tombol di bawah untuk langsung mengunjungi profil kami dan tekan tombol 'Follow'.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white font-semibold px-8 py-6 text-lg hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto">
                  <TikTokIcon className="mr-2 w-5 h-5" />
                  Follow di TikTok
                </Button>
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold px-8 py-6 text-lg hover:opacity-90 transition-all duration-300 w-full sm:w-auto">
                  <Instagram className="mr-2 w-5 h-5" />
                  Follow di Instagram
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;