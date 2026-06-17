'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount, openSidebar } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-30 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Left Navigation: Menu Icon */}
          <div className="flex-1 flex items-center justify-start">
            <button className="p-2 -ml-2 text-gray-800 hover:text-black transition-colors rounded-full hover:bg-black/5 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <a href="/" className="text-2xl font-serif tracking-widest text-black uppercase decoration-transparent hover:opacity-80 transition-opacity">
              Las Maravillas
            </a>
          </div>

          {/* Right Navigation: Cart */}
          <div className="flex-1 flex items-center justify-end">
            <button 
              onClick={openSidebar}
              className="relative p-2 text-gray-800 hover:text-black transition-colors rounded-full hover:bg-black/5 focus:outline-none group"
              aria-label="Abrir carrito"
            >
              <svg className="w-6 h-6 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full min-w-[20px] h-[20px] shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
