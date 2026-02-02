import React from 'react';
import { SectionTitle, Card } from './UI';
import { Clock, Star, MapPin, Home, ArrowRight, Car } from './Icons';

export const Schedule: React.FC = () => {
  const times = [
    { label: "PAGI", icon: "🌅" },
    { label: "SIANG", icon: "☀️" },
    { label: "SORE", icon: "🌤️" },
    { label: "MALAM", icon: "🌙" }
  ];

  const facilities = ["Full AC Dingin", "Lewat Tol", "Reclining Seat", "Musik & Audio", "Charger HP"];

  return (
    <section className="py-16 bg-tosca/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          
          {/* Schedule */}
          <div className="w-full md:w-1/2">
             <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-tosca h-full">
                <h3 className="text-2xl font-extrabold text-tosca-dark mb-6 flex items-center">
                  <Clock className="mr-3 w-8 h-8" /> JAM KEBERANGKATAN
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {times.map((t, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border hover:border-tosca hover:bg-tosca/10 transition-colors">
                      <div className="text-4xl mb-2">{t.icon}</div>
                      <div className="font-bold text-gray-700">{t.label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500 text-center italic">*Jam operasional menyesuaikan kondisi lapangan</p>
             </div>
          </div>

          {/* Facilities */}
          <div className="w-full md:w-1/2">
             <div className="bg-tosca-dark text-white p-8 rounded-3xl shadow-lg h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <h3 className="text-2xl font-extrabold mb-6 flex items-center relative z-10">
                  <Star className="mr-3 w-8 h-8 text-tosca-accent" /> FASILITAS PREMIUM
                </h3>
                <ul className="space-y-4 relative z-10">
                  {facilities.map((f, i) => (
                    <li key={i} className="flex items-center text-lg font-medium">
                      <div className="bg-tosca-accent text-tosca-dark rounded-full p-1 mr-4">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Fleet: React.FC = () => {
  const cars = [
    { name: "All New Avanza", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2022_Toyota_Avanza_1.5_G_W101RE_%2820220306%29.jpg/640px-2022_Toyota_Avanza_1.5_G_W101RE_%2820220306%29.jpg" },
    { name: "Daihatsu Xenia", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2019_Daihatsu_Xenia_1.3_R_F653RV_%2820200223%29.jpg/640px-2019_Daihatsu_Xenia_1.3_R_F653RV_%2820200223%29.jpg" },
    { name: "Toyota Hiace", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2019_Toyota_HiAce_Premio_2.8_GDH322_%2820220827%29.jpg/640px-2019_Toyota_HiAce_Premio_2.8_GDH322_%2820220827%29.jpg" }
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

export const PickupUSP: React.FC = () => {
  return (
    <section className="py-20 bg-tosca text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
          <Home className="w-20 h-20 mx-auto mb-6 text-tosca-accent animate-bounce" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            TIDAK PERLU KE POOL/TERMINAL!
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Kami jemput di depan pintu rumah Anda dan antar sampai ke tujuan dengan selamat.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-tosca-dark font-bold text-lg md:text-xl bg-white/90 p-6 rounded-xl shadow-xl">
             <div className="flex items-center"><Home className="w-6 h-6 mr-2 text-tosca" /> Rumah</div>
             <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" />
             <div className="flex items-center"><Car className="w-6 h-6 mr-2 text-tosca" /> Perjalanan Nyaman</div>
             <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" />
             <div className="flex items-center"><MapPin className="w-6 h-6 mr-2 text-tosca" /> Tujuan</div>
          </div>
        </div>
      </div>
    </section>
  );
};