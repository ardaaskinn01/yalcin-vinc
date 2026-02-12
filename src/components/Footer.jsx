import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import footerLogo from '../assets/logo-vinc.png';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-400 pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={footerLogo} alt="Yalçın Vinç" className="h-12 w-auto" />
                            <div className="flex flex-col">
                                <span className="text-xl font-black text-white tracking-tighter leading-none">YALÇIN</span>
                                <span className="text-xs font-bold text-primary tracking-[0.2em] leading-none">VİNÇ</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Karaburun ve çevresinde, tekne kurtarma ve vinç hizmetlerinde 5 yıllık tecrübe ile güvenilir ve profesyonel çözümler sunuyoruz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Kurumsal</h4>
                        <ul className="space-y-4 font-bold text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary transition-colors">Operasyon Galeri</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Bize Ulaşın</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Hizmetlerimiz</h4>
                        <ul className="space-y-4 font-bold text-sm text-gray-500">
                            <li>Tekne Taşıma</li>
                            <li>Denizden Kurtarma</li>
                            <li>Oto Kurtarma</li>
                            <li>Ağır Yük Kaldırma</li>
                            <li>Sepetli Vinç</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">İletişim</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 bg-white/5 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">7/24 Telefon</p>
                                    <a href="tel:+905530653257" className="text-white font-black hover:text-primary transition-colors group-hover:text-primary">+90 553 065 32 57</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 bg-white/5 text-primary rounded-lg">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Çalışma Saatleri</p>
                                    <p className="text-white font-black">7/24 Kesintisiz Hizmet</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-bold text-gray-600 tracking-widest">
                        &copy; {new Date().getFullYear()} Yalçın Vinç & Kurtarma. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6 text-xs font-bold text-gray-600 uppercase tracking-widest">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors font-bold text-xs">Gizlilik Politikası</Link>
                        <Link to="/terms-of-use" className="hover:text-white transition-colors font-bold text-xs">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
