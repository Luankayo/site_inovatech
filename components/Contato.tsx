"use client";
import { motion } from "framer-motion";
import { FiMail, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contato = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jaimesantos2801@yahoo.com.br";
  };

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
    {
      name: "Email",
      icon: <FiMail className="text-blue-400 text-4xl mb-4" />,
      link: "mailto:jaimesantos2801@yahoo.com.br",
      text: "Envie-nos um email",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Quer saber mais sobre nossas soluções? Precisa de uma proposta para
            sua Academia ou Empresa?
          </p>
          <p className="text-lg text-gray-700 mb-12">
            Estamos prontos para ajudar a modernizar e transformar o seu
            negócio!
          </p>
        </motion.div>

        {/* Card principal do email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-700 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 mb-12"
        >
          <FiMessageCircle className="text-5xl text-gray-100 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Solicite um orçamento
          </h3>
          <p className="text-gray-100 mb-8">
            Clique no botão abaixo e envie-nos um e-mail ou entre em contato por
            um dos canais abaixo.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg shadow-blue-500/25"
          >
            <FiMail className="text-xl" />
            Enviar Email
          </motion.button>
        </motion.div>

        {/* Outros contatos */}
        <div className="grid sm:grid-cols-3 gap-6">
          {contatos.map((contato, i) => (
            <motion.a
              key={i}
              href={contato.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 backdrop-blur-sm border border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-700/50 transition-all duration-200"
            >
              {contato.icon}
              <h4 className="text-lg font-semibold text-white mb-2">
                {contato.name}
              </h4>
              <p className="text-sm text-gray-80">{contato.text}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-600 mt-12"
        ></motion.div>
      </div>
    </section>
  );
};

export default Contato;
