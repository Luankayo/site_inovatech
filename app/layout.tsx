import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Kayo - Web Developer | Full-Stack Engineer",
  description:
    "Portfólio pessoal de Luan Kayo - Desenvolvedor Full-Stack especializado em React, TypeScript, Node.js e tecnologias modernas.",
  keywords:
    "desenvolvedor, full-stack, react, typescript, node.js, web developer",
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
