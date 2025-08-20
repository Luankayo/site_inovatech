'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 border-t border-gray-700 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 <span className="gradient-text font-semibold">Luan Kayo</span>. 
            Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com 💙 usando Next.js e Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;