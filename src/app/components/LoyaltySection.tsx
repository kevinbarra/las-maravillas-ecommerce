'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LoyaltySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800"
          style={{ backgroundColor: '#111' }}
        >
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B1D2A] opacity-20 blur-3xl rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059] opacity-10 blur-3xl rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-20 gap-16">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#C5A059]/30" style={{ color: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
                Programa de Recompensas
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Beneficios Exclusivos
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                La lealtad tiene un sabor excepcional. Inicia sesión en tu portal web y <span style={{ color: '#C5A059' }} className="font-medium">vincula tu tarjeta física de cliente frecuente</span>. Acumula puntos en cada pedido en línea o en sucursal.
              </p>
              
              <ul className="space-y-5 mb-10 text-left inline-block lg:block">
                {[
                  '1 punto por cada $100 MXN de compra.',
                  'Vincula tu tarjeta física actual fácilmente.',
                  'Canjea puntos por cortes y accesorios premium.'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 font-light">
                    <svg className="w-6 h-6 mr-4 flex-shrink-0" style={{ color: '#C5A059' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="px-8 py-4 text-sm uppercase tracking-widest font-bold rounded-sm shadow-xl transition-all hover:bg-white hover:text-black"
                  style={{ backgroundColor: '#C5A059', color: '#1A1A1A' }}
                >
                  Inicia Sesión
                </button>
                <button 
                  className="px-8 py-4 text-sm uppercase tracking-widest font-bold rounded-sm border transition-all hover:bg-white/5"
                  style={{ borderColor: '#C5A059', color: '#C5A059' }}
                >
                  Vincular Tarjeta
                </button>
              </div>
            </div>

            {/* Loyalty App Visual */}
            <div className="flex-1 w-full max-w-lg mt-8 lg:mt-0 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-20 bottom-0 h-1/4"></div>
              <motion.img 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                src="/las-maravillas-ecommerce/loyalty_app.png" 
                alt="Portal de Recompensas Las Maravillas" 
                className="w-full h-auto max-w-sm rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:-rotate-3 border border-gray-800"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
