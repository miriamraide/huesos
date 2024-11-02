import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: " Pet Shop",
  Image: "https://i.ibb.co/hyYmMCZ/barkery-logo.jpg",
  description: "Pet Shop - Tienda online para Mascotas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
