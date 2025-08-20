"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";

const Hero = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4"
    >
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Olá, me chamo <span className="gradient-text">Luan Kayo</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 h-6"
          >
            <span className="typewriter">
              Web Developer | Desenvolvedor Web
            </span>
          </motion.div>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto"
          >
            Transformo ideias em experiências digitais incríveis. Especializado
            em desenvolvimento de Web Sites com tecnologias modernas.
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("projetos")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Ver Projetos
              <FiArrowDown className="animate-bounce" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contato")}
              className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FiMail />
              Entre em Contato
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Ícone scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <FiArrowDown className="text-gray-400 text-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
