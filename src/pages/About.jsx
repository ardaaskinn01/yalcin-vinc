import React from 'react';
import { Shield, MapPin, Award, Users } from 'lucide-react';
import aboutImg from '../assets/(5).jpeg';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-dark opacity-90"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Hakkımızda</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">Karaburun ve çevresinde 5 yıllık tecrübe ile güvenli kurtarma hizmeti.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 aspect-video group">
                            <img
                                src={aboutImg}
                                alt="Yalçın Vinç Çalışma"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-black text-secondary mb-8 leading-tight">Yalçın Vinç: Bölgenizin Güvenilir Hizmeti</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Yalçın Vinç olarak, İzmir'in incisi Karaburun ve çevresinde; Balıklıova, Karareis, Küçükbahçe, Mordoğan ve tüm köy bölgelerinde denizden kurtarma, tekne taşıma ve Oto Kurtarma, Ağır Yük Kaldırma, Sepetli Vinç hizmetleri sunuyoruz.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            5 yıllık sektör tecrübemizle, zorlu arazi koşullarında ve hassas yüklerde uzmanlaştık. Önceliğimiz her zaman can ve mal güvenliğidir. Tüm operasyonlarımızı iş güvenliği standartlarına uygun olarak gerçekleştiriyoruz.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition duration-300 group">
                                <h4 className="font-black text-3xl text-primary mb-2 group-hover:scale-105 transition-transform origin-left">5+</h4>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Yıl Tecrübe</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition duration-300 group">
                                <h4 className="font-black text-3xl text-primary mb-2 group-hover:scale-105 transition-transform origin-left">7/24</h4>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Kesintisiz Hizmet</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Us Section */}
                <div className="bg-[#fafafa] rounded-3xl p-10 lg:p-16 border border-gray-100">
                    <h2 className="text-3xl font-black text-center text-secondary mb-16">Neden Bizi Tercih Etmelisiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-white shadow-lg text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition duration-500 border border-gray-100 hover:border-primary/20">
                                <Shield size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Güvenilir Hizmet</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Söz verdiğimiz saatte iş başlangıcı ve ekipman güvenliği konusunda hassasız.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-white shadow-lg text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition duration-500 border border-gray-100 hover:border-primary/20">
                                <MapPin size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Yerel Uzmanlık</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Karaburun ve çevresinin coğrafi yapısını iyi biliyor, en zor noktalara ulaşıyoruz.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-white shadow-lg text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition duration-500 border border-gray-100 hover:border-primary/20">
                                <Award size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Ekonomik Çözümler</h3>
                            <p className="text-gray-600 leading-relaxed">
                                İşinize en uygun aracı seçerek, gereksiz maliyetlerden sizi koruyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
