"use client";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";

const stats = [
  {
    icon: FiUsers,
    number: "150+",
    text: "Clientes no Maranhão, Acre, Macapá, Piauí e Pará",
  },
  { icon: FiAward, number: "20+", text: "Anos no Mercado" },
  {
    icon: FiTrendingUp,
    number: "Pacote Completo",
    text: "Software + Hardware + Suporte",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SobreNos = () => {
  return (
    <section
      id="sobre"
      className="py-20 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/inova-solutions.jpg')" }}
    >
      {/* Gradient por cima da imagem pra escurecer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre a <span className="text-blue-500">INOVATECH</span>
          </h2>
          <p className="text-x3 text-gray-300 max-w-xl mx-auto">
            Desde 2003, transformando academias em negócios mais organizados,
            seguros e tecnológicos.
          </p>
        </motion.div>

        {/* Texto institucional */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-300 text-lg leading-relaxed mb-16 text-justify"
        >
          <p>
            A <span className="font-semibold text-white">INOVATECH</span>{" "}
            iniciou sua jornada em São Luís do Maranhão no ano de 2003, com o
            propósito de informatizar e modernizar academias da região.
          </p>
          <p>
            Hoje já são mais de{" "}
            <span className="font-bold text-white">150 clientes</span> que
            confiam em nossa experiência para gerir e controlar o acesso dos
            seus alunos, garantindo mais segurança, eficiência e organização.
          </p>
          <p>
            Nosso pacote completo inclui:{" "}
            <span className="font-semibold text-white">
              software de gestão, computadores, monitores, catracas e suporte
              especializado
            </span>
            . Tudo para oferecer a solução ideal em controle de acesso e gestão.
          </p>
        </motion.div>

        {/* Estatísticas com estilo “cards brabos” */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-10 text-center shadow-lg shadow-black/30 hover:shadow-black/50 transition-all duration-300"
            >
              <stat.icon className="text-5xl text-red-500 mx-auto mb-6" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNos;
