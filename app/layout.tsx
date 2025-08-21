import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INOVATECH - Soluções em Gestão e Controle de Acesso",
  description:
    "A InovaTech oferece sistemas modernos de gestão e controle de acesso para empresas que buscam eficiência, segurança e inovação tecnológica.",
  keywords:
    "InovaTech, gestão empresarial, controle de acesso, tecnologia, sistemas de gestão, software corporativo, segurança, inovação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark overflow-x-hidden">
      <body
        className={`${inter.className} bg-gray-900 text-white min-h-screen overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
