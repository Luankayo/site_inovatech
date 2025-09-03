"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 border-t border-gray-100 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-800">
            © 2025{" "}
            <span className="gradient-text font-semibold">INOVATECH </span>
            Todos os direitos reservados
          </p>
          <a
            href="https://luankayo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-sm mt-2 underline decoration-gray-800 hover:decoration-blue-500 transition"
          ></a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
