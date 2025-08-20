"use client";
import { motion } from "framer-motion";
import { FiMail, FiMessageCircle } from "react-icons/fi";

const Contato = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:luankayo181@gmail.com";
  };

  return (
    <section id="contato" className="py-20 bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tem um projeto em mente? Está procurando por um desenvolvedor para
            sua equipe? Ou apenas quer bater um papo sobre tecnologia?
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Ficarei feliz em ouvir de você! Vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-700/30 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 mb-8"
        >
          <FiMessageCircle className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-gray-300 mb-8">
            Envie-me um email e vamos discutir como posso ajudar você a
            transformar suas ideias em realidade.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg shadow-blue-500/25"
          >
            <FiMail className="text-xl" />
            Me mande um email
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400"
        >
          <p>📧 luankayo181@gmail.com</p>
          <p className="mt-2 text-sm">Respondo em até 24 horas!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
