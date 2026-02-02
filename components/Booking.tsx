import React from 'react';
import { SectionTitle, WhatsAppButton } from './UI';
import { MessageCircle, CalendarCheck, CheckCircle2, Users, Star } from './Icons';

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
                 <span className="sr-only">Step {i+1}</span>
                 {step.icon}
              </div>
              <div className="bg-gray-50 p-4 rounded-xl w-full border border-gray-100 shadow-sm min-h-[120px]">
                <div className="text-tosca-dark font-black text-lg mb-1">{i+1}. {step.title}</div>
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
    { name: "Bu Siti", route: "Wlingi - Surabaya", text: "Alhamdulillah sopirnya ramah, jemputnya tepat waktu. Mobilnya juga bersih dan wangi." },
    { name: "Mas Agus", route: "Blitar - Juanda", text: "Langganan kalau mau ke bandara. Ga perlu bingung parkir, langsung turun di keberangkatan." },
    { name: "Mbak Rina", route: "Tiket Pesawat", text: "Beli tiket pesawat disini harganya jujur, prosesnya cepet banget langsung dikirim PDFnya." }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle title="KATA MEREKA" subtitle="Testimoni Pelanggan Setia" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col relative">
              <div className="absolute top-6 right-6 text-gray-200">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-3">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{rev.name}</div>
                  <div className="text-xs text-tosca font-semibold uppercase">{rev.route}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{rev.text}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};