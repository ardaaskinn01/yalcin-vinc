import React from 'react';
import { Phone, Clock, MapPin, Shield } from 'lucide-react';
import contactImg from '../assets/(7).jpeg';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimalist Header */}
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">İletişime Geçin</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Karaburun yarımadasında 7/24 kesintisiz destek.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Status Cards */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-secondary mb-8">Hızlı Erişim Kanalları</h2>

                            {/* Phone Card - High Priority */}
                            <a href="tel:+905530653257" className="block group">
                                <div className="bg-primary p-8 rounded-[2rem] shadow-2xl shadow-primary/20 transform transition-all duration-300 hover:-translate-y-2 flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all">
                                        <Phone size={32} fill="currentColor" stroke="none" />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-1">Hemen Arayın</p>
                                        <p className="text-2xl md:text-3xl font-black text-white">+90 553 065 32 57</p>
                                    </div>
                                </div>
                            </a>

                            {/* info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-bold">
                                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <Clock className="text-primary mb-4" size={28} />
                                    <h4 className="text-secondary text-sm uppercase mb-1">Çalışma Saatleri</h4>
                                    <p className="text-gray-600">7/24 Kesintisiz Hizmet</p>
                                </div>
                            </div>

                            <div className="bg-secondary/5 p-8 rounded-3xl border border-secondary/5">
                                <MapPin className="text-secondary mb-4" size={28} />
                                <h4 className="text-secondary text-sm uppercase mb-1">Hizmet Noktaları</h4>
                                <p className="text-gray-600 leading-relaxed font-bold">
                                    Karaburun, Mordoğan, Balıklıova, Karareis, Küçükbahçe ve Tüm Karaburun Köyleri.
                                </p>
                            </div>
                        </div>

                        {/* Aesthetic Image Side */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                                <img
                                    src={contactImg}
                                    alt="Yalçın Vinç Operasyon"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="text-white text-2xl font-black leading-tight drop-shadow-lg">
                                        Zorlu Koşullarda <br />
                                        <span className="text-primary">Profesyonel Çözümler</span>
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block animate-bounce">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                    </div>
                                    <p className="font-black text-secondary text-sm leading-none">Şu An Müsait <br /><span className="text-gray-400 font-bold text-xs uppercase">7/24 Aktif</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
