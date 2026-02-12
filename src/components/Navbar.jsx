import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo-vinc.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Hakkımızda', path: '/about' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'İletişim', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-secondary/95 backdrop-blur-md text-white shadow-2xl sticky top-0 z-50 border-b border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo Image */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src={logo}
                            alt="Yalçın Vinç Logo"
                            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">YALÇIN</span>
                            <span className="text-md md:text-lg font-bold tracking-tighter text-primary leading-none">VİNÇ</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm lg:text-base font-bold transition-all duration-300 hover:text-primary relative group ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                            </Link>
                        ))}
                        <a
                            href="tel:+905530653257"
                            className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-xl font-black shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:shadow-[0_0_25px_rgba(230,57,70,0.5)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5 active:scale-95"
                        >
                            <div className="bg-white/20 p-1.5 rounded-lg">
                                <Phone size={18} fill="currentColor" stroke="none" />
                            </div>
                            <span className="uppercase text-sm tracking-wide">Hemen Ara</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
                        >
                            {isOpen ? (
                                <X size={32} className="text-primary" />
                            ) : (
                                <Menu size={32} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-t border-white/5 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col px-6 py-8 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl font-black transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+905530653257"
                            className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-5 rounded-2xl font-black text-center shadow-xl flex items-center justify-center gap-4 text-lg active:scale-95 transition-transform"
                        >
                            <Phone size={24} fill="currentColor" stroke="none" />
                            <span>Hemen Ara</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
