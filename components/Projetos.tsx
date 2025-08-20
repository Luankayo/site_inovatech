"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiGooglesheets,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Sistema de Bar e Restaurante",
    description:
      "Sistema completo para gestão de bar e restaurante com controle de pedidos, estoque e pagamentos.",
    images: [
      "/projetos/tela-login.jpg",
      "/projetos/tela-painel.jpg",
      "/projetos/tela-servicos.jpg",
      "/projetos/tela-comandas.jpg",
      "/projetos/tela-sidebar.jpg",
      "/projetos/tela-usuarios.jpg",
      "/projetos/tela-extrato.jpg",
    ],
    technologies: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    ],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Catálogo Digital",
    description:
      "Plataforma moderna para criação e gestão de catálogos digitais interativos para empresas.",
    images: [
      "/projetos/tela-home.jpg",
      "/projetos/tela-catalogo.jpg",
      "/projetos/tela-contato.jpg",
      "/projetos/tela-foto.jpg",
      "/projetos/tela-carrinho.jpg",
      "/projetos/tela-modal.jpg",
    ],
    technologies: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      {
        name: "Google Sheets",
        icon: <SiGooglesheets className="text-green-500" />,
      },
    ],
    demo: "#",
    github: "#",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projetos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>
        </motion.div>

        {/* Grid de projetos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal com carrossel */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 p-6 rounded-xl max-w-5xl w-full relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-8 text-white hover:text-red-400 text-lg"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              {/* Carrossel Swiper */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-lg"
              >
                {selectedProject.images.map((img: string, i: number) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`screenshot-${i}`}
                      className="w-full h-[500px] object-contain rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projetos;
