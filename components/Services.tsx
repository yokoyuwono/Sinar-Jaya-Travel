import React from 'react';
import { SectionTitle, Card, WhatsAppButton } from './UI';
import { Ship, Plane, Car, Box, CheckCircle2 } from './Icons';

const Services: React.FC = () => {
  const services = [
    {
      title: "TIKET KAPAL LAUT",
      icon: <Ship className="w-16 h-16 text-tosca" />,
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop",
      desc: "Pelni & Swasta Seluruh Indonesia",
      items: ["Semua Jurusan", "Cetak Tiket Langsung", "Harga Resmi"]
    },
    {
      title: "TIKET PESAWAT",
      icon: <Plane className="w-16 h-16 text-tosca" />,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
      desc: "Domestik & Internasional",
      items: ["Semua Maskapai", "Booking Cepat", "Harga Bersaing"]
    },
    {
      title: "TRAVEL & CARTER",
      icon: <Car className="w-16 h-16 text-tosca" />,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
      desc: "Blitar - Surabaya - Juanda",
      items: ["Reguler (Perorangan)", "Carter Drop / PP", "Titipan Kilat (Paket)"]
    }
  ];

  return (
    <section id="layanan" className="py-16 md:py-24 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <SectionTitle title="LAYANAN KAMI" subtitle="Apa yang Anda butuhkan?" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-2xl">
              <div className="h-48 overflow-hidden relative group">
                <div className="absolute inset-0 bg-tosca-dark/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute -bottom-8 right-4 bg-white p-3 rounded-full shadow-lg z-20 border-4 border-gray-100">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 pt-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-tosca font-semibold mb-4 border-b pb-2 border-gray-200">{service.desc}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <WhatsAppButton text="Tanya Dulu" size="sm" variant="outline" fullWidth message={`Halo, saya mau tanya tentang ${service.title}`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Extra Feature: Paket Kilat */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md border-l-8 border-tosca flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-tosca/10 p-4 rounded-full">
               <Box className="w-10 h-10 text-tosca" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">BUTUH KIRIM PAKET KILAT?</h3>
              <p className="text-gray-600">Titipan barang dokumen, makanan, atau paket sampai dalam hitungan jam.</p>
            </div>
          </div>
          <WhatsAppButton text="Kirim Paket" size="md" message="Halo, saya mau kirim paket..." />
        </div>
      </div>
    </section>
  );
};

export default Services;
