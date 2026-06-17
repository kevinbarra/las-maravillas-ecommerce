'use client';

import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { openSidebar, cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  // Duplicate openSidebar removed
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Veracruz');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md text-black border-gray-200 py-3 shadow-md' 
          : 'bg-black text-white border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Section: Menu & Store Selector */}
        <div className="flex items-center gap-6">
          <button onClick={toggleMenu} className="p-2 hover:bg-gray-800/10 rounded-full transition-colors" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Omnichannel Store Selector */}
          <div className="hidden md:flex items-center gap-2 group relative cursor-pointer">
            <svg className={`w-5 h-5 ${isScrolled ? 'text-[#C5A059]' : 'text-[#C5A059]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Sucursal Actual</span>
              <span className={`text-sm font-medium flex items-center gap-1 ${isScrolled ? 'text-black' : 'text-white'}`}>
                {selectedCity}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
            </div>

            {/* Dropdown menu */}
            <div className={`absolute top-full left-0 mt-2 w-48 py-2 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto border ${isScrolled ? 'bg-white border-gray-100' : 'bg-[#111] border-gray-800'}`}>
              <div 
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#C5A059]/10 ${selectedCity === 'Veracruz' ? 'text-[#C5A059] font-bold' : ''}`}
                onClick={() => setSelectedCity('Veracruz')}
              >
                📍 Veracruz - Costa Verde
              </div>
              <div 
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#C5A059]/10 ${selectedCity === 'Puebla' ? 'text-[#C5A059] font-bold' : ''}`}
                onClick={() => setSelectedCity('Puebla')}
              >
                📍 Puebla - Plaza Elysee
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo */}
        <div className="flex-1 flex justify-center absolute left-1/2 -translate-x-1/2">
          <div className="text-2xl md:text-3xl font-serif tracking-[0.2em] font-medium text-center">
            LAS MARAVILLAS
          </div>
        </div>

        {/* Right Section: Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <button className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors rounded-sm ${isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white hover:bg-white hover:text-black'}`}>
              Iniciar Sesión
            </button>
          </div>
          
          <button 
            className="p-2 relative hover:scale-110 transition-transform"
            aria-label="Carrito"
            onClick={openSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#6B1D2A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    <!-- Mobile Off-canvas Menu -->
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur" onClick={closeMenu}>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="absolute right-0 top-0 h-full w-64 bg-[#111] p-6"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={closeMenu} className="p-2 mb-4 text-white" aria-label="Close menu">
              ✕
            </button>
            <nav className="flex flex-col space-y-4 text-white">
              <a href="#" className="hover:text-[#C5A059]">Inicio</a>
              <a href="#catalog" className="hover:text-[#C5A059]">Catálogo</a>
              <a href="#raices" className="hover:text-[#C5A059]">Nuestras Raíces</a>
              <a href="#contact" className="hover:text-[#C5A059]">Contacto</a>
            </nav>
          </motion.div>
        </div>
      )}
    </header>
  );
}
