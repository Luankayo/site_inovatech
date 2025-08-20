"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { FaRocket } from "react-icons/fa";
import { Rocket } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto institucional Inovatech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Nome da empresa com digitação */}
          {/* Nome da empresa animado */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-bold leading-tight text-blue-500 flex items-center justify-center lg:justify-start gap-3">
            <TypeAnimation
              sequence={[
                "INOVATECH", // texto
                4000, // espera
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              speed={50} // extremamente lento
            />
            <Rocket size={64} className="text-white animate-pulse" />
          </h1>

          {/* Subtítulo com animação */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-inter"
          >
            <span className="text-gray-300">Sistema de </span>
            <span className="text-blue-400 font-semibold">Gestão</span>
            <span className="text-gray-300"> e </span>
            <span className="text-purple-400 font-semibold">
              Controle de Acesso
            </span>
          </motion.p>

          {/* Texto institucional */}
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Desde 2003 transformando empresas com tecnologia de ponta. Soluções
            que trazem segurança, eficiência e organização para o seu negócio.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("solutions")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue-500/20"
            >
              Ver Produtos
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
