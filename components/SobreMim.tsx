"use client";
import { motion } from "framer-motion";
import { FiUser, FiCode, FiTrendingUp } from "react-icons/fi";

import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

const stats = [
  { icon: FiUser, number: "1+", text: "Ano de Experiência" },
  { icon: FiCode, number: "30+", text: "Projetos Entregues" },
  { icon: FiTrendingUp, number: "30+", text: "Clientes Satisfeitos" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

const SobreMim = () => {
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
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e expertise
          </p>
        </motion.div>

        {/* Sobre + avatar */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 relative">
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou Desenvolvedor full-stack apaixonado por criar soluções
              digitais que elevam o seu negócio. Com mais de 1 ano de
              experiência, tenho expertise em tecnologias modernas e sempre
              busco estar atualizado com as últimas tendências do mercado.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha especialidade está no desenvolvimento de aplicações web
              robustas, desde o front-end responsivo até APIs escaláveis no
              back-end. Proeminência em React, Node.js e Bancos de Dados
              relacionais.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Tecnologias que Domino
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 px-6 py-3 rounded-full text-gray-200 font-medium hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-200"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

export default SobreMim;
