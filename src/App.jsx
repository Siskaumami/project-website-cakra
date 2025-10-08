import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Product from '@/pages/Product';
import CakraXperience from '@/pages/CakraXperience';
import SocialMedia from '@/pages/SocialMedia';
import Contact from '@/pages/Contact';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <Helmet>
          <title>Cakra Production - Rental Sound System & Lighting Profesional</title>
          <meta name="description" content="Cakra Production: Solusi rental sound system, lighting, dan kursus lighting profesional di Sidoarjo. Wujudkan event impian Anda bersama kami." />
          <meta name="keywords" content="rental sound system, rental lighting, cakra production, sound system sidoarjo, lighting panggung, kursus lighting, event production" />
        </Helmet>
        
        <Navbar />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cakra-xperience" element={<CakraXperience />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;