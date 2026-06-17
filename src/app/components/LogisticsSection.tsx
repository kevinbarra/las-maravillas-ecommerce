import React from 'react';

export default function LogisticsSection() {
  const steps = [
    {
      number: '01',
      title: 'Compra en Línea',
      description: 'Explora nuestra selección de cortes premium y haz tu pedido desde la comodidad de tu hogar.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      )
    },
    {
      number: '02',
      title: 'Elige Pick-up o Envío',
      description: 'Recoge en nuestras sucursales de Veracruz o Puebla, o recibe directamente en tu domicilio.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      number: '03',
      title: 'Disfruta',
      description: 'Prepara tus cortes y vive la excelencia de Las Maravillas en cada bocado.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
          <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#6B1D2A' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#6B1D2A', color: '#C5A059' }}
              >
                {step.icon}
              </div>
              <div 
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
                style={{ backgroundColor: '#C5A059' }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
