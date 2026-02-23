import React from 'react';
import { SectionTitle } from './UI';
import { MessageCircle, CalendarCheck, CheckCircle2, Users } from './Icons';

export const BookingSteps: React.FC = () => {
  const steps = [
    { icon: <MessageCircle className="w-10 h-10" />, title: "Chat WhatsApp", desc: "Hubungi admin kami" },
    { icon: <CalendarCheck className="w-10 h-10" />, title: "Pilih Jadwal", desc: "Tentukan tanggal & jam" },
    { icon: <CheckCircle2 className="w-10 h-10" />, title: "Konfirmasi", desc: "Data dijemput dicatat" },
    { icon: <Users className="w-10 h-10" />, title: "Berangkat", desc: "Driver menjemput Anda" },
  ];

  return (
    <section id="cara-pesan" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="CARA PEMESANAN" subtitle="Mudah, Cepat, Tanpa Ribet" />

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 -translate-y-8"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10 bg-white p-4 w-full md:w-1/4 mb-8 md:mb-0">
              <div className="w-20 h-20 bg-tosca text-white rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-white text-2xl font-bold">
                <span className="sr-only">Step {i + 1}</span>
                {step.icon}
              </div>
              <div className="bg-gray-50 p-4 rounded-xl w-full border border-gray-100 shadow-sm min-h-[120px]">
                <div className="text-tosca-dark font-black text-lg mb-1">{i + 1}. {step.title}</div>
                <p className="text-gray-500 text-sm leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Bu Siti",
      route: "Wlingi - Surabaya",
      text: "Alhamdulillah sopirnya ramah, jemputnya tepat waktu. Mobilnya juga bersih dan wangi.",
      time: "08:15"
    },
    {
      name: "Mas Agus",
      route: "Blitar - Surabaya",
      text: "Jemput di rumah, sangat praktis buat saya yang sering ke Surabaya. Drivernya sopan dan armadanya New Avanza bersih.",
      time: "10:30"
    },
    {
      name: "Mbak Rina",
      route: "Jurusan Juanda",
      text: "Makasih Sinar Jaya Travel, perjalanan ke Juanda jadi tenang. Gak perlu bingung parkir atau macet.",
      time: "14:20"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="KATA MEREKA" subtitle="Testimoni Pelanggan Lewat WhatsApp" />

        <div className="max-w-4xl mx-auto space-y-8">
          {reviews.map((rev, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-end'}`}>
              <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-tosca/20 flex-shrink-0 flex items-center justify-center text-tosca font-bold border border-tosca/10 shadow-sm mt-auto">
                  {rev.name.charAt(0)}
                </div>

                {/* Bubble */}
                <div className={`relative p-4 rounded-2xl shadow-sm border ${i % 2 === 0
                  ? 'bg-white border-gray-100 rounded-bl-none'
                  : 'bg-tosca text-white border-tosca rounded-br-none'
                  }`}>
                  <div className={`text-xs font-bold mb-1 uppercase tracking-wider ${i % 2 === 0 ? 'text-tosca' : 'text-tosca-light'}`}>
                    {rev.name} • {rev.route}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed mb-2 font-medium">
                    "{rev.text}"
                  </p>
                  <div className={`text-[10px] flex items-center justify-end gap-1 ${i % 2 === 0 ? 'text-gray-400' : 'text-tosca-light opacity-80'}`}>
                    <span>{rev.time}</span>
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};