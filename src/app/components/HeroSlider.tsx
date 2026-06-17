'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'La Excelencia en Cada Corte',
    subtitle: 'Nuestra boutique ofrece selección Prime y Reserva para tu parrilla.',
    image: '/las-maravillas-ecommerce/hero_asador.png',
    cta: 'Pedir Ahora'
  },
  {
    id: 2,
    title: 'Beneficios Exclusivos',
    subtitle: 'Acumula puntos en cada compra de nuestros cortes prime.',
    image: '/las-maravillas-ecommerce/hero_asador.png',
    cta: 'Ver Recompensas'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
              {slide.subtitle}
            </p>
            <button 
              className="px-8 py-3 text-lg font-semibold rounded shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#6B1D2A', color: '#C5A059' }}
            >
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#C5A059]' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
