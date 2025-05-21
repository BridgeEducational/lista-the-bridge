import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Bridge - Lista de Asistencia",
  description: "Sistema de asistencia para grupos de The Bridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
