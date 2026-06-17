import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Las Maravillas | Carnes Boutique Premium",
  description: "La excelencia en cada corte. Brangus de alta genética y certificación TIF de Los Tuxtlas, Veracruz para Puebla y Veracruz.",
  openGraph: {
    title: "Las Maravillas | Carnes Boutique Premium",
    description: "Cortes Reserva selectos, 100% de Los Tuxtlas, Veracruz. Envío a domicilio o Pick-up.",
    url: "https://kevinbarra.github.io/las-maravillas-ecommerce/",
    siteName: "Carnes Las Maravillas",
    images: [
      {
        url: "https://kevinbarra.github.io/las-maravillas-ecommerce/rancho_brangus_tuxtlas.png",
        width: 1200,
        height: 630,
        alt: "Rancho Las Maravillas - Ganado Brangus en Los Tuxtlas"
      }
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Maravillas | Carnes Boutique Premium",
    description: "Cortes Reserva selectos, 100% de Los Tuxtlas, Veracruz.",
    images: ["https://kevinbarra.github.io/las-maravillas-ecommerce/rancho_brangus_tuxtlas.png"],
  }
};

import { CartProvider } from "./context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
