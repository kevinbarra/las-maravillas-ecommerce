'use client';

import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import HeroSlider from "./components/HeroSlider";
import LogisticsSection from "./components/LogisticsSection";
import LoyaltySection from "./components/LoyaltySection";
import { useCart } from "./context/CartContext";
import { useState } from 'react';
import { motion } from 'framer-motion';

const meatProducts = [
  {
    id: "ribeye-premium",
    name: "Ribeye Reserva",
    description: "Marmoleo excepcional y jugosidad inigualable de nuestra Línea Reserva.",
    price: 1250.00,
    unit: "kg",
    image: "/las-maravillas-ecommerce/product_ribeye.png",
    badge: "Línea Reserva",
    pairing: "Salsa de Habanero Tatemado"
  },
  {
    id: "tomahawk-reserva",
    name: "Tomahawk Reserva",
    description: "El rey de la parrilla. Corte insignia de nuestro Rancho en Los Tuxtlas.",
    price: 1850.00,
    unit: "pza",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2970&auto=format&fit=crop",
    badge: "Línea Reserva",
    pairing: "Carbón de Mezquite"
  },
  {
    id: "picana-brangus",
    name: "Picaña Brangus",
    description: "La joya de nuestra genética Brangus. Capa de grasa generosa y sabor local.",
    price: 950.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    badge: "Línea Premium",
    pairing: "Sal Ahumada"
  },
  {
    id: "arrachera",
    name: "Arrachera Marinada",
    description: "Suave, jugosa y lista para el asador con nuestra calidad de origen.",
    price: 420.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop",
    badge: "Línea Hogar",
    pairing: "Salsa Verde Rústica"
  }
];

const accessoryProducts = [
  {
    id: "salsa-habanero",
    name: "Salsa de Habanero",
    description: "Nuestra receta de la casa, el complemento perfecto.",
    price: 95.00,
    unit: "pza",
    image: "/las-maravillas-ecommerce/product_salsa_habanero.png",
    badge: null
  },
  {
    id: "set-cuchillos",
    name: "Set Cuchillos Asador",
    description: "Corte perfecto para tus mejores momentos.",
    price: 2450.00,
    unit: "set",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=2940&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "carbon-mezquite",
    name: "Carbón de Mezquite",
    description: "Sabor ahumado tradicional e intenso para tu carne.",
    price: 180.00,
    unit: "saco",
    image: "/las-maravillas-ecommerce/product_carbon.png",
    badge: null
  },
  {
    id: "asador-weber",
    name: "Asador Premium Kettle",
    description: "La experiencia completa de asado en casa.",
    price: 4500.00,
    unit: "pza",
    image: "/las-maravillas-ecommerce/product_asador.png",
    badge: null
  }
];

export default function Home() {
  const { addToCart, openSidebar } = useCart();
  const [isButcherOpen, setIsButcherOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    openSidebar();
  };

  const ProductCard = ({ product }: { product: any }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(197, 160, 89, 0.15)" }}
      transition={{ duration: 0.4 }}
      className="bg-[#111] group rounded-lg overflow-hidden border border-gray-800 hover:border-[#C5A059]/40 transition-colors flex flex-col"
    >
      <div className="relative h-64 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
        {product.badge && (
          <div className={`absolute top-4 right-4 text-[10px] uppercase tracking-widest px-4 py-1.5 font-bold rounded-sm ${
            product.badge === 'Línea Reserva' ? 'bg-[#1A1A1A] border border-[#C5A059] text-[#C5A059]' : 'bg-[#6B1D2A] text-white'
          }`}>
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-8 text-center flex flex-col flex-grow relative">
        <h3 className="font-serif text-2xl mb-3 text-white">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2 font-light leading-relaxed">{product.description}</p>
        
        {/* Cross-Selling Engine */}
        {product.pairing && (
          <div className="mb-4 text-[11px] uppercase tracking-wider text-[#C5A059] font-medium opacity-80 bg-[#C5A059]/10 py-2 px-3 rounded inline-block mx-auto">
            💡 Maridaje: {product.pairing}
          </div>
        )}

        <div className="text-xl font-bold font-sans text-[#C5A059] mb-8 mt-auto">
          ${product.price.toFixed(2)} <span className="text-xs font-normal text-gray-500 tracking-widest uppercase">MXN / {product.unit}</span>
        </div>
        <button 
          onClick={() => handleAddToCart(product)}
          className="w-full border border-[#C5A059] text-[#C5A059] py-3 uppercase text-xs font-bold tracking-widest hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors rounded-sm"
        >
          Agregar al Carrito
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-[#C5A059] selection:text-black">
      <Header />
      <CartSidebar />
      
      <main className="pt-20 overflow-hidden">
        <HeroSlider />
        
        {/* Trust Bar (Rancho Las Maravillas Authentic) */}
        <section className="bg-[#1A1A1A] py-12 border-y border-[#C5A059]/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/10">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
                <svg className="w-8 h-8 text-[#C5A059] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                <h3 className="font-serif text-lg tracking-wide text-white mb-2">Certificación TIF</h3>
                <p className="text-xs text-gray-400 font-light tracking-wide uppercase">El máximo estándar de inocuidad en México</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
                <svg className="w-8 h-8 text-[#C5A059] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="font-serif text-lg tracking-wide text-white mb-2">Trazabilidad Total</h3>
                <p className="text-xs text-gray-400 font-light tracking-wide uppercase">Ciclo completo: Del rancho a tu mesa</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
                <svg className="w-8 h-8 text-[#C5A059] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="font-serif text-lg tracking-wide text-white mb-2">Orgullo Veracruzano</h3>
                <p className="text-xs text-gray-400 font-light tracking-wide uppercase">Nacidos y criados en Los Tuxtlas, Veracruz</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meat Catalog */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Nuestros Cortes</h2>
              <div className="w-20 h-1 bg-[#C5A059] mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 font-light tracking-wide">Pide en Línea para Pick-up en Sucursal o Envío a Domicilio</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {meatProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Butcher's Block Guide */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#C5A059] opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The Butcher's Block</h2>
              <p className="text-xl text-gray-400 font-light tracking-wide mb-12">Descubre nuestra genética Brangus. Navega por la guía interactiva para conocer el origen y perfil de nuestra Línea Reserva.</p>
              
              <div className="relative w-full aspect-[2/1] border border-[#C5A059]/30 bg-black/50 rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden backdrop-blur-sm" onClick={() => setIsButcherOpen(true)}>
                <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2940&auto=format&fit=crop')" }}></div>
                <div className="z-10 bg-black/80 px-8 py-4 rounded-full border border-[#C5A059] text-[#C5A059] font-bold tracking-widest uppercase text-sm hover:bg-[#C5A059] hover:text-black transition-colors">
                  Abrir Guía Brangus
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subscription Box Banner */}
        <section className="py-16 bg-[#6B1D2A] relative overflow-hidden border-y border-[#8B2536]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Arma tu Caja Mensual</h2>
              <p className="text-white/80 text-lg font-light max-w-xl">Suscríbete y recibe tus cortes favoritos directamente en tu puerta cada mes. Ahorra un 15% y asegura tu inventario de fin de semana.</p>
            </div>
            <div>
              <button className="px-8 py-4 bg-white text-[#6B1D2A] font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors shadow-2xl rounded-sm whitespace-nowrap">
                Configurar mi Caja
              </button>
            </div>
          </div>
        </section>

        {/* Accessories Catalog */}
        <section className="py-24 bg-[#111] border-y border-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Complementos y Asadores</h2>
              <div className="w-20 h-1 bg-[#C5A059] mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 font-light tracking-wide">Todo lo que necesitas para la parrilla perfecta</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <LogisticsSection />
        
        {/* Alianzas Estratégicas */}
        <section className="py-16 bg-[#0a0a0a] border-t border-[#111]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Nuestras Alianzas Estratégicas</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center">
                <span className="text-xl font-serif text-white font-bold">FC BEEF</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-sans text-white font-black tracking-tighter">CIASA</span>
                <span className="text-[8px] text-gray-400 tracking-widest">AGROPECUARIA TIF 353</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-serif text-white font-medium border-2 border-white rounded-full px-4 py-1">GRUPO VERACARNE</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-serif text-[#C5A059] font-bold">MEXICAN BEEF</span>
              </div>
            </div>
          </div>
        </section>

        <LoyaltySection />

        <footer className="bg-black py-12 border-t border-gray-900">
          <div className="container mx-auto px-6 text-center text-gray-600 text-sm tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Carnes Las Maravillas. Puebla y Veracruz.<br/>Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
}
