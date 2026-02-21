import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Wallet, Anchor, Phone } from 'lucide-react';
import heroBg from '../assets/(15).jpeg'; // Use the requested image

const Home = () => {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
                {/* Background Image with parallax-like feel */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Yalçın Vinç"
                        className="w-full h-full object-cover transform scale-105"
                    />
                    {/* Dark overlay for better text contrast - more balanced */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 py-20">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
                            Yalçın Vinç <br />
                            <span className="text-primary drop-shadow-[0_0_15px_rgba(230,57,70,0.5)]">& Kurtarma</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed font-bold drop-shadow-md">
                            İzmir, Balıklıova, Mordoğan ve Karaburun'un her noktasında; Tekne Kurtarma ve Vinç hizmetlerinde profesyonel güvence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="tel:+905530653257" onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion('tel:+905530653257'); }} className="group bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl text-center shadow-[0_20px_40px_rgba(230,57,70,0.3)] hover:shadow-[0_25px_50px_rgba(230,57,70,0.5)] transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-4">
                                <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white group-hover:text-primary transition-all">
                                    <Phone size={24} fill="currentColor" stroke="none" />
                                </div>
                                Bizi Arayın
                            </a>
                            <Link to="/gallery" className="bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xl text-center hover:bg-white hover:text-secondary transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center shadow-2xl">
                                Operasyonları Gör
                            </Link>
                        </div>
                    </div>
                </div>


            </section>

            {/* Services Highlight Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-center mb-16 text-secondary">Profesyonel Hizmetlerimiz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition duration-500">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500">
                                <Anchor size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Tekne Taşıma ve Kurtarma</h3>
                            <p className="text-gray-600 leading-relaxed">Tekne, yat ve deniz araçlarınızın güvenli bir şekilde taşınması ve kurtarılması işlemleri.</p>
                        </div>
                        <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition duration-500">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500">
                                <Shield size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Vinç ile Kurtarma</h3>
                            <p className="text-gray-600 leading-relaxed">Yolda kalan, batan veya devrilen araçlarınızın profesyonel ekipmanlarla hasarsız kurtarılması.</p>
                        </div>
                        <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition duration-500">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500">
                                <Clock size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">7/24 Yol Yardım</h3>
                            <p className="text-gray-600 leading-relaxed">Günün her saati, Karaburun ve çevresindeki tüm köylere acil vinç ve kurtarıcı desteği.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-[#fafafa] py-20 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-6">
                            <Clock size={48} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-secondary mb-3">Hızlı Hizmet</h3>
                            <p className="text-gray-600">Bölgeyi iyi bilen ekibimizle, acil durumlarda en kısa sürede yanınızdayız.</p>
                        </div>
                        <div className="p-6">
                            <Shield size={48} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-secondary mb-3">Güvenli Operasyon</h3>
                            <p className="text-gray-600">5 yıllık tecrübe ve bakımlı araçlarımızla risk almadan, güvenle çalışıyoruz.</p>
                        </div>
                        <div className="p-6">
                            <Wallet size={48} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-secondary mb-3">Uygun Fiyat</h3>
                            <p className="text-gray-600">Bütçe dostu fiyat politikamız ve şeffaf hizmet anlayışımızla yanınızdayız.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Mobile Call Button */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a
                    href="tel:+905530653257"
                    onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion('tel:+905530653257'); }}
                    className="bg-gradient-to-r from-primary to-primary/80 text-white w-full py-4 rounded-xl shadow-2xl font-bold text-lg flex items-center justify-center gap-3 border border-white/20 animate-pulse shadow-primary/40"
                >
                    <Phone size={24} fill="currentColor" stroke="none" />
                    <span>Hemen Ara: 0553 065 32 57</span>
                </a>
            </div>
        </div>
    );
};

export default Home;
