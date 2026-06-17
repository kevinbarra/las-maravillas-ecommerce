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
                La lealtad tiene un sabor excepcional. Regístrate en nuestro <span style={{ color: '#C5A059' }} className="font-medium">Club Digital Las Maravillas</span> y acumula puntos automáticamente con cada compra en línea o sucursal. Sube de nivel y desbloquea acceso anticipado a lanzamientos exclusivos de nuestra Línea Reserva.
              </p>
              
              <ul className="space-y-5 mb-10 text-left inline-block lg:block">
                {[
                  '1 punto por cada $100 MXN de compra.',
                  'Acceso a ventas exclusivas (Members Only).',
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
                  Mi Dashboard
                </button>
                <button 
                  className="px-8 py-4 text-sm uppercase tracking-widest font-bold rounded-sm border transition-all hover:bg-[#C5A059] hover:text-black cursor-pointer"
                  style={{ borderColor: '#C5A059', color: '#C5A059' }}
                >
                  Crear Cuenta Digital
                </button>
              </div>
            </div>

            {/* Gamified Loyalty Dashboard Preview */}
            <div className="flex-1 w-full max-w-lg mt-8 lg:mt-0 flex justify-center relative">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-[#1A1A1A] rounded-2xl shadow-2xl border border-gray-800 p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-white text-xl font-bold font-serif">Hola, Alejandro</h3>
                    <p className="text-gray-400 text-sm">Nivel Actual: <span className="text-gray-200 font-bold">Plata</span></p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#C5A059]">4,250</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">Puntos Disponibles</div>
                  </div>
                </div>

                {/* Progress Bar to Gold */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs text-gray-400 mb-2 font-bold uppercase tracking-wider">
                    <span>Nivel Plata</span>
                    <span className="text-[#C5A059]">Nivel Oro</span>
                  </div>
                  <div className="h-3 w-full bg-black rounded-full overflow-hidden border border-gray-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#8B6E3C] to-[#C5A059] rounded-full relative"
                    >
                      {/* Shine effect */}
                      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full transform -skew-x-12 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">Faltan 750 puntos para alcanzar Nivel Oro y desbloquear envíos gratis.</p>
                </div>

                {/* Digital Card */}
                <div className="bg-gradient-to-br from-[#2a2a2a] to-[#111] rounded-xl p-5 border border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <div className="flex justify-between items-center relative z-10">
                    <div className="font-serif text-lg tracking-widest text-white">LAS MARAVILLAS</div>
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                  </div>
                  <div className="mt-8 relative z-10">
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">ID de Miembro</div>
                    <div className="text-gray-300 font-mono tracking-[0.3em]">**** **** **** 8429</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
