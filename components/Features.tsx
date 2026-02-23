import React from 'react';
import { SectionTitle, WhatsAppButton } from './UI';
import { Home, MapPin, Car, Users } from './Icons';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Car className="w-10 h-10" />,
      title: "Armada Terbaru",
      desc: "New Avanza & New Xenia yang bersih, wangi, dan terawat."
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Door to Door Service",
      desc: "Antar jemput depan pintu rumah Anda sesuai alamat."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Driver Profesional",
      desc: "Sopir berpengalaman, ramah, dan selalu tepat waktu."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="KENAPA MEMILIH KAMI?" subtitle="Keunggulan Layanan Sinar Jaya Travel" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-tosca/10 text-tosca rounded-2xl flex items-center justify-center mb-6 group-hover:bg-tosca group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PopularRoutes: React.FC = () => {
  const routes = [
    "BLITAR - MALANG",
    "MALANG - SURABAYA",
    "BLITAR - SURABAYA",
    "BLITAR - JUANDA",
    "SURABAYA - BLITAR",
    "JUANDA - BLITAR"
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