import React from 'react';
import { WhatsAppButton } from './UI';
import { ShieldCheck, MapPin, Car, Plane, Ship, CheckCircle2, Star } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-[90vh] flex items-center bg-gradient-to-br from-tosca-dark via-tosca to-emerald-600 overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-10">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Copywriting */}
        <div className="text-white text-center lg:text-left space-y-4 lg:space-y-6 order-1">
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-base font-medium text-yellow-300 animate-fade-in-up">
            <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>Travel Resmi & Terpercaya Sejak 2016</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-sm">
            SINAR JAYA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 relative">
              TRAVEL
              <svg className="absolute w-full h-2 lg:h-3 -bottom-1 left-0 text-yellow-500 opacity-70" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7483 3.99998 83.9926 2.01633 197.996 2.00015" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-100 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Solusi perjalanan <span className="text-yellow-300 font-bold">Wlingi - Blitar - Surabaya</span>. 
            Layanan antar jemput sampai depan rumah.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2 lg:pt-4">
             <WhatsAppButton size="lg" text="PESAN SEKARANG" message="Halo Sinar Jaya, saya mau pesan travel..." />
             <a href="#rute" className="px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all text-base lg:text-lg flex items-center justify-center">
                Lihat Rute
             </a>
          </div>

          <div className="pt-4 lg:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-6 text-xs lg:text-sm font-semibold text-gray-200">
             <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg"><CheckCircle2 className="text-yellow-400 w-4 h-4"/> Door to Door</div>
             <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg"><CheckCircle2 className="text-yellow-400 w-4 h-4"/> Via Tol</div>
             <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg"><CheckCircle2 className="text-yellow-400 w-4 h-4"/> Tiap Hari</div>
          </div>

        </div>

        {/* Right Column: Visual Composition */}
        <div className="relative h-[350px] md:h-[500px] lg:h-[600px] pointer-events-none select-none order-2 flex items-center justify-center mt-4 lg:mt-0">
           {/* Centerpiece: The "Card" Container */}
           <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-100">
             
             {/* Main Travel Card */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 lg:w-80 lg:h-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl transform -rotate-3 z-10 shadow-2xl flex flex-col overflow-hidden">
                <div className="h-1/2 bg-gray-200 relative">
                   <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&fit=crop" className="w-full h-full object-cover" alt="Travel Car" />
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-tosca-dark to-transparent p-3 lg:p-4">
                      <p className="text-white font-bold flex items-center text-xs lg:text-sm"><Car className="w-3 h-3 lg:w-4 lg:h-4 mr-2"/> Armada Nyaman</p>
                   </div>
                </div>
                <div className="h-1/2 p-4 lg:p-6 flex flex-col justify-between bg-white text-gray-800 relative">
                   <div>
                      <div className="flex justify-between items-center mb-1 lg:mb-2">
                         <span className="text-[10px] lg:text-xs font-bold text-gray-400 tracking-wider">RUTE POPULER</span>
                         <div className="flex text-yellow-400"><Star className="w-2 h-2 lg:w-3 lg:h-3 fill-current"/><Star className="w-2 h-2 lg:w-3 lg:h-3 fill-current"/><Star className="w-2 h-2 lg:w-3 lg:h-3 fill-current"/><Star className="w-2 h-2 lg:w-3 lg:h-3 fill-current"/><Star className="w-2 h-2 lg:w-3 lg:h-3 fill-current"/></div>
                      </div>
                      <div className="text-xl lg:text-2xl font-black text-tosca-dark leading-none mb-0.5 lg:mb-1">BLITAR</div>
                      <div className="text-[10px] lg:text-xs font-bold text-gray-400 pl-0.5 mb-0.5 lg:mb-1">via TOL PANJANG</div>
                      <div className="text-xl lg:text-2xl font-black text-tosca-dark leading-none">SURABAYA</div>
                   </div>
                   <div className="w-full h-1.5 lg:h-2 bg-gray-100 rounded-full overflow-hidden mt-1 lg:mt-2">
                      <div className="w-2/3 h-full bg-tosca rounded-full"></div>
                   </div>
                   <div className="absolute -right-4 -bottom-4 opacity-10">
                      <Car size={80} className="text-tosca-dark" />
                   </div>
                </div>
             </div>

             {/* Floating Element 1: Plane Ticket */}
             <div className="absolute top-0 right-4 md:right-16 lg:top-16 lg:right-12 bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl animate-float-delayed z-20 w-40 lg:w-56 transform rotate-6 hover:rotate-0 transition-transform border border-gray-100">
                <div className="flex items-center gap-2 lg:gap-3 border-b border-dashed border-gray-200 pb-2 lg:pb-3 mb-2 lg:mb-3">
                   <div className="bg-sky-100 p-2 rounded-lg lg:rounded-xl text-sky-600 shadow-sm"><Plane className="w-4 h-4 lg:w-6 lg:h-6"/></div>
                   <div className="flex flex-col">
                      <span className="text-[10px] lg:text-xs font-bold text-gray-400">TIKET ONLINE</span>
                      <span className="text-xs lg:text-sm font-extrabold text-gray-700">PESAWAT</span>
                   </div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 font-medium leading-tight">Tiket pesawat murah semua maskapai.</div>
             </div>

             {/* Floating Element 2: Ship Ticket */}
             <div className="absolute bottom-4 left-4 md:left-16 lg:bottom-24 lg:left-4 bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl animate-float z-20 w-40 lg:w-56 transform -rotate-6 hover:rotate-0 transition-transform border border-gray-100">
                <div className="flex items-center gap-2 lg:gap-3 border-b border-dashed border-gray-200 pb-2 lg:pb-3 mb-2 lg:mb-3">
                   <div className="bg-blue-100 p-2 rounded-lg lg:rounded-xl text-blue-600 shadow-sm"><Ship className="w-4 h-4 lg:w-6 lg:h-6"/></div>
                   <div className="flex flex-col">
                      <span className="text-[10px] lg:text-xs font-bold text-gray-400">TIKET RESMI</span>
                      <span className="text-xs lg:text-sm font-extrabold text-gray-700">KAPAL LAUT</span>
                   </div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 font-medium leading-tight">Tiket kapal laut Pelni & Swasta.</div>
             </div>

             {/* Floating Element 3: USP Badge */}
             <div className="absolute top-10 left-0 md:left-10 lg:top-1/3 lg:left-10 animate-float-fast z-0">
                <div className="w-20 h-20 lg:w-28 lg:h-28 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl border-[4px] lg:border-[6px] border-white/20 transform -rotate-12">
                   <div className="text-center leading-none text-tosca-dark">
                      <span className="block text-[10px] lg:text-xs font-bold mb-0.5 opacity-80">SIAP</span>
                      <span className="block text-sm lg:text-xl font-black text-white drop-shadow-md">ANTAR</span>
                      <span className="block text-sm lg:text-xl font-black text-white drop-shadow-md">JEMPUT</span>
                   </div>
                </div>
             </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;