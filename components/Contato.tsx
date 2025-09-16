"use client";
import { motion } from "framer-motion";
import { FiMail, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const contatos = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-green-400 text-4xl mb-4" />,
    link: "https://wa.me/5598988370147",
    text: "Fale conosco direto no WhatsApp",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500 text-4xl mb-4" />,
    link: "https://instagram.com/inovatechma",
    text: "Siga a Inovatech no Instagram",
  },
];

// mesmos variants usados em SobreNos e Solutions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contato = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jaimesantos2801@yahoo.com.br";
  };

  return (
    <section
      id="contato"
      className="relative py-20 px-6 sm:px-12 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background igual da hero/solutions */}
      <div className="absolute inset-0">
        <img
          src="/hero/inova-solutions.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 -z-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Título + Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-white">
            Vamos Conversar?
          </h2>
          <p className="text-x2 md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto">
            Quer saber mais sobre nossas soluções ou precisa de uma proposta
            para sua Academia ou Empresa?
          </p>
          <p className="text-2x text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar a modernizar e transformar o seu
            negócio!
          </p>
        </motion.div>

        {/* Card principal do email */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12 shadow-lg shadow-black/30"
        >
          <FiMessageCircle className="text-5xl text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Solicite um orçamento
          </h3>
          <p className="text-gray-200 mb-8">
            Clique no botão abaixo e envie-nos um e-mail ou entre em contato por
            um dos canais abaixo.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg shadow-blue-600/30"
          >
            <FiMail className="text-xl" />
            Enviar Email
          </motion.button>
        </motion.div>

        {/* Outros contatos animados em grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {contatos.map((contato, i) => (
            <motion.a
              key={i}
              href={contato.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-200 shadow-lg shadow-black/25"
            >
              {contato.icon}
              <h4 className="text-lg font-semibold text-white mb-2">
                {contato.name}
              </h4>
              <p className="text-sm text-gray-200">{contato.text}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
