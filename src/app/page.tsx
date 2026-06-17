'use client';

import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import HeroSlider from "./components/HeroSlider";
import LogisticsSection from "./components/LogisticsSection";
import LoyaltySection from "./components/LoyaltySection";
import { useCart } from "./context/CartContext";

const products = [
  {
    id: "ribeye-premium",
    name: "Ribeye Premium",
    description: "Marmoleo excepcional y jugosidad inigualable para tu parrilla.",
    price: 1250.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2940&auto=format&fit=crop",
    badge: "Prime"
  },
  {
    id: "tomahawk-reserva",
    name: "Tomahawk Reserva",
    description: "El rey de la parrilla, maduración perfecta y hueso francés.",
    price: 1850.00,
    unit: "pza",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2970&auto=format&fit=crop",
    badge: "Reserva"
  },
  {
    id: "picana-wagyu",
    name: "Picaña Wagyu Cross",
    description: "Capa de grasa generosa que baña la carne durante la cocción.",
    price: 950.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    badge: null
  },
  {
    id: "arrachera",
    name: "Arrachera Marinada",
    description: "Suave, jugosa y lista para el asador con nuestra receta secreta.",
    price: 420.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop",
    badge: "Best Seller"
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
    openSidebar(); // Opcional: abrir el sidebar automáticamente
  };

  return (
    <div className="min-h-screen bg-charcoal text-bone font-sans">
      <Header />
      <CartSidebar />
      
      {/* Añadir padding top para evitar solapamiento con header fixed */}
      <main className="pt-20">
        <HeroSlider />
        
        {/* Trust Bar */}
        <section className="bg-wine py-8 border-y border-gold/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <svg className="w-8 h-8 text-gold mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                <h3 className="font-serif text-lg text-bone">Calidad USDA Prime</h3>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <svg className="w-8 h-8 text-gold mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="font-serif text-lg text-bone">Cadena de Frío Garantizada</h3>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <svg className="w-8 h-8 text-gold mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="font-serif text-lg text-bone">Origen Sustentable</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers Catalog */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gold mb-4">Cortes Insignia</h2>
              <div className="w-24 h-1 bg-wine mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-graphite group rounded-sm overflow-hidden border border-gray-800 hover:border-gold/30 transition-all duration-300 flex flex-col">
                  <div className="relative h-64 overflow-hidden bg-black">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    ></div>
                    {product.badge && (
                      <div className={`absolute top-4 right-4 text-xs uppercase tracking-wider px-3 py-1 font-bold ${
                        product.badge === 'Reserva' ? 'bg-charcoal border border-gold text-gold' : 'bg-wine text-white'
                      }`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center flex flex-col flex-grow">
                    <h3 className="font-serif text-xl mb-2 text-bone">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">{product.description}</p>
                    <div className="text-xl font-bold font-sans text-gold mb-6 mt-auto">
                      ${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-500">MXN / {product.unit}</span>
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full border border-gold text-gold py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold hover:text-charcoal transition-colors"
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogisticsSection />
        
        <LoyaltySection />

        {/* Footer Minimalista */}
        <footer className="bg-black py-10 border-t border-gray-900">
          <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Carnes Las Maravillas. Puebla y Veracruz. Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
}
