"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black/80 backdrop-blur-md border-t border-white/20 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-gray-300">
            © 2025 <span className="font-semibold text-white">INOVA</span>
            <span className="text-blue-400 font-semibold">TECH</span> — Todos os
            direitos reservados
          </p>

          <a
            href="https://luankayo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-gray-400 hover:decoration-blue-400"
          >
            Desenvolvido por INOVATECH
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
