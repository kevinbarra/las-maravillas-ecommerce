'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: '4 Generaciones de Tradición',
    subtitle: 'Del Rancho a tu Mesa. 100% Orgullo de Los Tuxtlas, Veracruz.',
    image: '/las-maravillas-ecommerce/hero_slider_2.png',
    cta: 'Nuestra Historia'
  },
  {
    id: 2,
    title: 'La Excelencia Brangus',
    subtitle: 'Genética superior perfectamente adaptada, garantizando sabor y terneza inigualables.',
    image: '/las-maravillas-ecommerce/hero_slider_3.png',
    cta: 'Ver Catálogo'
  },
  {
    id: 3,
    title: 'Línea Reserva',
    subtitle: 'Nuestros cortes supremos con Trazabilidad Total y Certificación TIF.',
    image: '/las-maravillas-ecommerce/hero_slider_4.png',
    cta: 'Descubrir Reserva'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[650px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            <button 
              className="px-10 py-4 text-sm uppercase tracking-widest font-bold rounded-sm shadow-2xl transition-all hover:bg-white hover:text-black"
              style={{ backgroundColor: '#C5A059', color: '#1A1A1A' }}
            >
              {slides[currentSlide].cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-[#C5A059] scale-125' : 'bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
