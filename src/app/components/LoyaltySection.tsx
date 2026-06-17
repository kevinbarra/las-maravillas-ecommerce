import React from 'react';

export default function LoyaltySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6B1D2A] to-transparent opacity-20 rounded-bl-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#C5A059] to-transparent opacity-10 rounded-tr-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 gap-10">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ backgroundColor: '#6B1D2A', color: '#C5A059' }}>
                Programa de Recompensas
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Club Las Maravillas
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                La lealtad tiene un sabor excepcional. Únete a nuestro club exclusivo y <span style={{ color: '#C5A059' }} className="font-semibold">acumula puntos en cada compra</span>. Canjea tus puntos por cortes premium, accesorios de parrilla y experiencias únicas.
              </p>
              
              <ul className="space-y-4 mb-8 text-left inline-block lg:block">
                {[
                  '1 punto por cada $100 MXN de compra',
                  'Acceso anticipado a promociones especiales',
                  'Regalo exclusivo en tu mes de cumpleaños'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#C5A059' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button 
                className="w-full sm:w-auto px-8 py-4 font-bold text-lg rounded-lg shadow-xl transition-all hover:-translate-y-1 block mx-auto lg:mx-0"
                style={{ backgroundColor: '#C5A059', color: '#1A1A1A' }}
              >
                Inscríbete Hoy
              </button>
            </div>

            {/* Loyalty Card Visual */}
            <div className="flex-1 w-full max-w-md mt-8 lg:mt-0">
              <div 
                className="relative w-full aspect-[1.6/1] rounded-2xl p-6 flex flex-col justify-between shadow-2xl transform lg:-rotate-2 transition-transform hover:rotate-0"
                style={{ 
                  background: 'linear-gradient(135deg, #6B1D2A 0%, #3d1018 100%)',
                  border: '1px solid #C5A059'
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-bold tracking-widest text-lg opacity-90">LAS MARAVILLAS</h3>
                    <p style={{ color: '#C5A059' }} className="text-xs tracking-widest uppercase mt-1">Miembro Exclusivo</p>
                  </div>
                  <svg className="w-10 h-10 opacity-50" style={{ color: '#C5A059' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                
                <div className="mt-8">
                  <div className="font-mono text-white text-xl tracking-widest opacity-80 mb-2">
                    **** **** **** 4092
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white opacity-50 uppercase">Titular</p>
                      <p className="text-white font-medium tracking-wider">Cliente Premium</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white opacity-50 uppercase">Puntos</p>
                      <p style={{ color: '#C5A059' }} className="font-bold text-xl">2,450</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
