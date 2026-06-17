import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-bone">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-graphite">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-gold transition-colors">Res</a>
            <a href="#" className="hover:text-gold transition-colors">Cerdo</a>
            <a href="#" className="hover:text-gold transition-colors">Nosotros</a>
          </nav>
          <div className="text-3xl font-serif text-gold font-bold tracking-wider">
            LAS MARAVILLAS
          </div>
          <div className="flex space-x-6 items-center">
            <button aria-label="Search" className="hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <button aria-label="Cart" className="hover:text-gold transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="absolute -top-2 -right-2 bg-wine text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-graphite">
          {/* Placeholder for Hero Image */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=3131&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-bone mb-6 leading-tight drop-shadow-lg">
            La Excelencia en Cada Corte
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-sans max-w-2xl mx-auto">
            Selección Prime para paladares exigentes. Descubre la verdadera experiencia boutique de carnes en Puebla y Veracruz.
          </p>
          <button className="bg-gold text-charcoal px-8 py-4 uppercase tracking-wider font-bold text-sm hover:bg-white transition-colors duration-300">
            Descubrir Selección Prime
          </button>
        </div>
      </section>

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
            {/* Product Card 1 */}
            <div className="bg-graphite group rounded-sm overflow-hidden border border-gray-800 hover:border-gold/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"></div>
                <div className="absolute top-4 right-4 bg-wine text-xs uppercase tracking-wider px-3 py-1 font-bold">Prime</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl mb-2 text-bone">Ribeye Premium</h3>
                <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">Marmoleo excepcional y jugosidad inigualable para tu parrilla.</p>
                <div className="text-xl font-bold font-sans text-gold mb-6">$1,250.00 <span className="text-sm font-normal text-gray-500">MXN / kg</span></div>
                <button className="w-full border border-gold text-gold py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
                  Agregar
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-graphite group rounded-sm overflow-hidden border border-gray-800 hover:border-gold/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2970&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"></div>
                <div className="absolute top-4 right-4 bg-charcoal border border-gold text-gold text-xs uppercase tracking-wider px-3 py-1 font-bold">Reserva</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl mb-2 text-bone">Tomahawk Reserva</h3>
                <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">El rey de la parrilla, maduración perfecta y hueso francés.</p>
                <div className="text-xl font-bold font-sans text-gold mb-6">$1,850.00 <span className="text-sm font-normal text-gray-500">MXN / pza</span></div>
                <button className="w-full border border-gold text-gold py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
                  Agregar
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-graphite group rounded-sm overflow-hidden border border-gray-800 hover:border-gold/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl mb-2 text-bone">Picaña Wagyu Cross</h3>
                <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">Capa de grasa generosa que baña la carne durante la cocción.</p>
                <div className="text-xl font-bold font-sans text-gold mb-6">$950.00 <span className="text-sm font-normal text-gray-500">MXN / kg</span></div>
                <button className="w-full border border-gold text-gold py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
                  Agregar
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-graphite group rounded-sm overflow-hidden border border-gray-800 hover:border-gold/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"></div>
                <div className="absolute top-4 right-4 bg-wine text-xs uppercase tracking-wider px-3 py-1 font-bold">Best Seller</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl mb-2 text-bone">Arrachera Marinada</h3>
                <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">Suave, jugosa y lista para el asador con nuestra receta secreta.</p>
                <div className="text-xl font-bold font-sans text-gold mb-6">$420.00 <span className="text-sm font-normal text-gray-500">MXN / kg</span></div>
                <button className="w-full border border-gold text-gold py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-gold mb-6">Únete al Club Las Maravillas</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Recibe 10% de descuento en tu primera compra y entérate de la llegada de cortes exclusivos.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input type="email" placeholder="Tu correo electrónico" className="bg-graphite text-bone border border-gray-700 px-4 py-3 flex-grow focus:outline-none focus:border-gold" />
            <button className="bg-wine text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-900 transition-colors">Suscribir</button>
          </div>
          <div className="mt-16 text-gray-600 text-sm">
            &copy; 2026 Carnes Las Maravillas. Puebla y Veracruz. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
