'use client';

import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import HeroSlider from "./components/HeroSlider";
import LogisticsSection from "./components/LogisticsSection";
import LoyaltySection from "./components/LoyaltySection";
import { useCart } from "./context/CartContext";
import { motion } from "framer-motion";

const meatProducts = [
  {
    id: "ribeye-premium",
    name: "Ribeye Premium",
    description: "Marmoleo excepcional y jugosidad inigualable para tu parrilla.",
    price: 1250.00,
    unit: "kg",
    image: "/las-maravillas-ecommerce/product_ribeye.png",
    badge: "Prime",
    pairing: "Salsa de Habanero Tatemado"
  },
  {
    id: "tomahawk-reserva",
    name: "Tomahawk Reserva",
    description: "El rey de la parrilla, maduración perfecta y hueso francés.",
    price: 1850.00,
    unit: "pza",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2970&auto=format&fit=crop",
    badge: "Reserva",
    pairing: "Carbón de Mezquite"
  },
  {
    id: "picana-wagyu",
    name: "Picaña Wagyu Cross",
    description: "Capa de grasa generosa que baña la carne durante la cocción.",
    price: 950.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    badge: null,
    pairing: "Sal Ahumada"
  },
  {
    id: "arrachera",
    name: "Arrachera Marinada",
    description: "Suave, jugosa y lista para el asador con nuestra receta secreta.",
    price: 420.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop",
    badge: "Best Seller",
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
            product.badge === 'Reserva' || product.badge === 'Premium' ? 'bg-[#1A1A1A] border border-[#C5A059] text-[#C5A059]' : 'bg-[#6B1D2A] text-white'
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
        
        {/* Trust Bar */}
        <section className="bg-[#1A1A1A] py-12 border-y border-[#C5A059]/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/10">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <svg className="w-8 h-8 text-[#C5A059] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                <h3 className="font-serif text-lg tracking-wide text-white">Calidad USDA Prime</h3>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <svg className="w-8 h-8 text-[#C5A059] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="font-serif text-lg tracking-wide text-white">Cadena de Frío Garantizada</h3>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <svg className="w-8 h-8 text-[#C5A059] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="font-serif text-lg tracking-wide text-white">Origen Sustentable</h3>
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
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Cortes Insignia</h2>
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
              <p className="text-xl text-gray-400 font-light tracking-wide mb-12">Navega por nuestra guía interactiva de cortes para encontrar el perfil de sabor perfecto para tu próxima parrillada.</p>
              
              <div className="relative w-full aspect-[2/1] border border-[#C5A059]/30 bg-black/50 rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2940&auto=format&fit=crop')" }}></div>
                <div className="z-10 bg-black/80 px-8 py-4 rounded-full border border-[#C5A059] text-[#C5A059] font-bold tracking-widest uppercase text-sm hover:bg-[#C5A059] hover:text-black transition-colors">
                  Abrir Guía Interactiva
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
