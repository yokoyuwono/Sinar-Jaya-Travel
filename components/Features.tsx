import React from 'react';
import { SectionTitle, WhatsAppButton } from './UI';
import { ShieldCheck, Home, MapPin, Smile, Zap } from './Icons';

export const TrustStrip: React.FC = () => {
  const trusts = [
    { icon: <ShieldCheck />, text: "8 TAHUN BEROPERASI" },
    { icon: <Home />, text: "JEMPUT DEPAN RUMAH" },
    { icon: <Smile />, text: "ARMADA NYAMAN" },
    { icon: <Zap />, text: "FAST RESPONSE WA" },
  ];

  return (
    <div className="bg-tosca-dark text-white py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trusts.map((t, i) => (
            <div key={i} className="flex flex-col items-center justify-center space-y-2 group cursor-default">
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-tosca-accent group-hover:text-tosca-dark transition-colors duration-300">
                {React.cloneElement(t.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <span className="font-bold text-sm md:text-base tracking-wide">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PopularRoutes: React.FC = () => {
  const routes = [
    "BLITAR - SURABAYA",
    "BLITAR - JUANDA",
    "BLITAR - PERAK",
    "SURABAYA - BLITAR",
    "JUANDA - BLITAR",
    "PERAK - BLITAR"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="RUTE POPULER" subtitle="Tujuan Favorit Pelanggan Kami" />
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {routes.map((route, i) => (
            <div key={i} className="group relative">
               <div className="absolute inset-0 bg-tosca rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
               <div className="relative bg-white border-2 border-tosca/20 hover:border-tosca text-gray-700 hover:text-white hover:bg-tosca px-6 py-4 rounded-lg font-bold text-lg md:text-xl transition-all duration-200 flex items-center shadow-sm cursor-pointer">
                 <MapPin className="w-5 h-5 mr-2 inline-block" />
                 {route}
               </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Ingin ke tujuan lain? Tanyakan admin kami.</p>
          <WhatsAppButton text="Cek Jadwal & Rute Lain" variant="primary" />
        </div>
      </div>
    </section>
  );
};
