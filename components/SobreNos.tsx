"use client";
import { motion } from "framer-motion";
import { FiUsers, FiCpu, FiTrendingUp } from "react-icons/fi";
import { FaBuilding, FaServer } from "react-icons/fa";

const stats = [
  {
    icon: FiUsers,
    number: "150+",
    text: "Clientes no Maranhão, Acre, Macapá, Piauí e Pará",
  },
  { icon: FiCpu, number: "20+", text: "Anos de Mercado" },
  {
    icon: FiTrendingUp,
    number: "Pacote Completo",
    text: "Software + Hardware + Suporte",
  },
];

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

const SobreNos = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre a <span className="gradient-text">INOVATECH</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Desde 2003, transformando academias em negócios mais organizados,
            seguros e tecnológicos.
          </p>
        </motion.div>

        {/* Texto institucional */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              A <span className="font-bold text-white">INOVATECH</span> iniciou
              sua jornada em
              <span className="text-blue-400"> São Luís - Maranhão</span> no ano
              de 2003, com o propósito de informatizar e modernizar academias da
              região.
            </p>
            <p>
              Hoje já são mais de{" "}
              <span className="font-bold text-white">150 clientes </span>
              que confiam em nossa experiência para gerir e controlar o acesso
              dos seus alunos, garantindo mais segurança, eficiência e
              organização.
            </p>
            <p>
              Nosso pacote completo inclui:{" "}
              <span className="text-blue-400 font-semibold">
                software de gestão, computadores, monitores, catracas, e suporte
                especializado
              </span>
              . Tudo para oferecer a solução ideal em controle de acesso e
              gestão.
            </p>
          </motion.div>
        </div>

        {/* Estatísticas */}
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
              className="bg-gray-700/30 backdrop-blur-sm border border-gray-600 rounded-xl p-8 text-center hover:bg-gray-700/50 transition-all duration-200"
            >
              <stat.icon className="text-4xl text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNos;
