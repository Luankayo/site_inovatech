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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Avatar igual SobreMim */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto lg:mx-0 mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src="/foto-perfil.jpg"
                  alt="Foto de Luan Kayo"
                  className="w-full h-full object-cover rounded-full object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Texto e botões */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Olá, me chamo <span className="gradient-text">Luan Kayo</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Web Developer | Desenvolvedor Web
          </p>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Transformo ideias em experiências digitais incríveis. Especializado
            em desenvolvimento de Web Sites com tecnologias modernas.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
