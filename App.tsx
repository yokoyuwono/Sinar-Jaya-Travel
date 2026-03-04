import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from './components/Icons';
import { WhatsAppButton } from './components/UI';
import Hero from './components/Hero';
import Services from './components/Services';
import { WhyChooseUs, PopularRoutes } from './components/Features';
import { Schedule, Fleet } from './components/InfoSection';
import { BookingSteps, Testimonials } from './components/Booking';

// Floating WhatsApp Component
const FloatingWA = () => (
  <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2 animate-bounce-slow">
    <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-gray-700 mb-1 border border-gray-100 hidden md:block">
      Butuh Travel? Chat disini 👇
    </div>
    <WhatsAppButton size="lg" text="Chat WhatsApp" />
  </div>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Rute", href: "#rute" },
    { name: "Cara Pesan", href: "#cara-pesan" },
    { name: "Kontak", href: "#footer" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-black text-2xl tracking-tighter ${scrolled ? 'text-tosca-dark' : 'text-white text-shadow'}`}>
          SINAR JAYA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold hover:text-tosca-accent transition ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <WhatsAppButton size="sm" text="Pesan Tiket" variant={scrolled ? 'primary' : 'white'} />
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-tosca-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 md:hidden animate-fade-in-down">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <WhatsAppButton fullWidth text="Chat WhatsApp Sekarang" />
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer id="footer" className="bg-tosca-dark text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="bg-tosca rounded-3xl p-8 md:p-12 text-center shadow-xl transform -translate-y-24 mb-[-3rem]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">SIAP BERANGKAT?</h2>
        <p className="text-xl mb-8 opacity-90">Jangan ragu menghubungi kami untuk info jadwal dan harga terbaru.</p>
        <WhatsAppButton size="xl" text="HUBUNGI KAMI SEKARANG" variant="white" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24 border-t border-white/20 pt-12">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-4">SINAR JAYA TRAVEL</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sahabat perjalanan Anda dari Wlingi - Blitar. Melayani dengan hati, mengantar sampai tujuan dengan aman dan nyaman.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-tosca-accent uppercase tracking-wider">Layanan Kami</h4>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">• Travel Reguler</li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">• Carter Mobil</li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">• Tiket Pesawat</li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">• Tiket Kapal Laut</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-tosca-accent uppercase tracking-wider">Kontak Kami</h4>
            <div className="flex items-start gap-3 mb-4 text-gray-300 group">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-tosca-accent group-hover:scale-110 transition-transform" />
              <span className="leading-relaxed">
                Lingkungan Tejo, RT.001/RW.009, Tejo, Babadan, Kec. Wlingi, Kabupaten Blitar, Jawa Timur 66184
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 group">
              <Phone className="w-5 h-5 flex-shrink-0 text-tosca-accent group-hover:scale-110 transition-transform" />
              <span className="font-bold">0857-8484-6494</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden h-[300px] lg:h-full min-h-[300px] shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5390600111086!2d112.33529237588975!3d-8.046363780367699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78911f54c723b3%3A0x91be372b569c8875!2sSinar%20Jaya%20Travel%20Blitar%20Juanda!5e0!3m2!1sen!2sid!4v1772596507627!5m2!1sen!2sid"
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Sinar Jaya Travel Blitar Juanda"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-12 pt-8 border-t border-white/10">
        &copy; {new Date().getFullYear()} Sinar Jaya Travel Wlingi. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden selection:bg-tosca selection:text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />

      {/* Popular Routes with ID for anchor */}
      <div id="rute">
        <PopularRoutes />
      </div>

      <Schedule />
      <Fleet />
      <BookingSteps />
      <Testimonials />
      <Footer />
      <FloatingWA />
    </div>
  );
};

export default App;
