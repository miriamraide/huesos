import "./globals.css";

import { Montserrat } from "next/font/google";
import Navbar from "./Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: " Pet Shop",
  Image: "https://i.ibb.co/hyYmMCZ/barkery-logo.jpg",
  description: "Pet Shop - Tienda online para Mascotas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
