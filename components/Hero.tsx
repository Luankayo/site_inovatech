"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

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
      className="min-h-screen flex items-center justify-center 
             bg-gradient-to-br from-blue-500 to-blue-600 
             px-4 sm:px-6 lg:px-12 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Texto institucional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Título responsivo */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                     font-orbitron font-bold leading-tight text-white"
          >
            <TypeAnimation
              sequence={[
                "INOVATECH",
                1000,
                "Sistema de Gestão e Controle de Acesso",
                1000,
                "Pacote Completo\nSoftware + Hardware + Suporte",
                1000,
              ]}
              wrapper="span"
              cursor={false}
              speed={18}
              className="whitespace-pre-line"
              repeat={Infinity}
            />
          </h1>

          {/* Texto institucional */}
          <p
            className="text-sm sm:text-base md:text-lg text-white leading-relaxed 
                   max-w-xl mx-auto lg:mx-0 font-semibold"
          >
            Desde 2003 transformando empresas com tecnologia de ponta. Soluções
            que trazem segurança, eficiência e organização para o seu negócio.
          </p>

          {/* Botões responsivos */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("solutions")}
              className="bg-blue-600 hover:bg-blue-700 text-white 
                     px-6 py-3 rounded-lg 
                     text-sm sm:text-base font-semibold 
                     flex items-center gap-2 
                     w-full sm:w-auto justify-center 
                     shadow-lg shadow-blue-500/20"
            >
              Ver Produtos
              <FiArrowDown className="animate-bounce" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contato")}
              className="border-2 border-gray-200 text-gray-100 
                     hover:bg-blue-600 hover:text-white 
                     px-6 py-3 rounded-lg 
                     text-sm sm:text-base font-semibold 
                     flex items-center gap-2 
                     w-full sm:w-auto justify-center"
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
