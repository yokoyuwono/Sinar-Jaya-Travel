import React from 'react';
import { SectionTitle, Card, WhatsAppButton } from './UI';
import { Clock } from './Icons';

export const Schedule: React.FC = () => {
  const departureTimes = ["04.00", "07.00", "10.00", "23.00"];

  const schedules = [
    {
      route: "BLITAR - SURABAYA (PP)",
      description: "Rute via Tol Panjang, antar jemput sampai tujuan.",
      message: "Halo Sinar Jaya Travel, saya mau cek ketersediaan kursi untuk rute Blitar - Surabaya..."
    }
  ];

  return (
    <section id="jadwal" className="py-16 bg-tosca/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="JADWAL KEBERANGKATAN" subtitle="Pilih waktu yang sesuai dengan kebutuhan Anda" />

        <div className="max-w-xl mx-auto">
          {schedules.map((item, idx) => (
            <Card key={idx} className="flex flex-col h-full">
              <div className="bg-tosca-dark p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-tosca-accent" />
                  <h3 className="text-xl font-bold tracking-tight">{item.route}</h3>
                </div>
                <p className="text-tosca-light text-sm opacity-90">{item.description}</p>
              </div>

              <div className="p-8 flex-grow">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {departureTimes.map((time, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:border-tosca hover:bg-tosca/10 transition-colors group">
                      <div className="text-xs font-bold text-gray-400 mb-1 group-hover:text-tosca-dark transition-colors uppercase">Keberangkatan</div>
                      <div className="text-2xl font-black text-tosca-dark">{time}</div>
                    </div>
                  ))}
                </div>

                <WhatsAppButton
                  text="Cek Kursi Sekarang"
                  fullWidth
                  variant="primary"
                  message={item.message}
                />
                <p className="mt-4 text-[10px] text-gray-400 text-center italic">
                  *Jam operasional dapat berubah sesuai kondisi di lapangan.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Fleet: React.FC = () => {
  const cars = [
    { name: "New Avanza", img: "https://github.com/yokoyuwono/Sinar-Jaya-Travel/blob/main/avanza.webp?raw=true" },
    { name: "New Xenia", img: "https://github.com/yokoyuwono/Sinar-Jaya-Travel/blob/main/xenia.webp?raw=true" },
    { name: "Toyota Hiace", img: "https://github.com/yokoyuwono/Sinar-Jaya-Travel/blob/main/hiace.webp?raw=true" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="ARMADA KAMI" subtitle="Bersih, Wangi & Terawat" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow border border-gray-100 group">
              <div className="h-48 overflow-hidden">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-xl font-bold text-gray-800">{car.name}</h4>
                <span className="text-xs font-bold text-white bg-green-500 px-2 py-1 rounded mt-2 inline-block">NYAMAN & AMAN</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

