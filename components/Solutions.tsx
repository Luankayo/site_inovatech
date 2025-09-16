"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Catraca com FaceID",
    description:
      "Controle de acesso moderno e seguro com reconhecimento facial.",
    price: "R$ 4.900,00",
    images: ["/services/catraca4.webp"],
  },
  {
    id: 2,
    title: "GA Fitness",
    description:
      "Sistema de Gestão Completo, Cadastro de Alunos, Modalidades, Ficha de Treino, Financeiro, Relatórios e muito mais!",
    price: "R$ 99,90/mês",
    images: ["/services/sistema.png"],
  },
  {
    id: 3,
    title: "Face ID",
    description:
      "IDFace, o controlador de Acesso com Reconhecimento Facial mais moderno e seguro do mercado.",
    price: "R$ 1.499,90",
    images: ["/services/face-id.webp"],
  },
];

const bgImages = ["/hero/inova-hero.jpg"];

export default function Solutions() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // slideshow de fundo
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-12 sm:py-16 overflow-hidden"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {bgImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        {/* Overlay azul para leitura */}
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-white">
            Nossas Soluções
          </h2>
          <p className="text-x3 text-gray-300">
            Tecnologias de ponta desenvolvidas para impulsionar o crescimento do
            seu negócio
          </p>
        </motion.div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-6">
                {/* Título + preço */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-orbitron font-semibold text-white">
                    {product.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full text-white text-sm font-bold
               bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md shadow-blue-800"
                  >
                    {product.price}
                  </motion.div>
                </div>

                {/* Descrição */}
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Botão primário */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3 rounded-lg font-semibold text-white
             bg-gradient-to-r from-blue-600 to-indigo-600
             hover:from-blue-700 hover:to-indigo-700
             shadow-lg shadow-blue-600/20 transition"
                >
                  Ver detalhes
                </motion.button>

                {/* Botão WhatsApp - Saiba mais */}
                <a
                  href={`https://wa.me/5598988370147?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${product.title}!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold
             bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800
             text-white shadow-lg shadow-gray-500/20 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  Saiba mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal com carrossel */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-6 rounded-xl max-w-5xl w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-8 text-white hover:text-red-400 text-lg"
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProduct.title}
            </h3>
            <p className="text-gray-400 mb-6">{selectedProduct.description}</p>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-lg"
            >
              {selectedProduct.images.map((img: string, i: number) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`screenshot-${i}`}
                    className="w-full h-[500px] object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="text-xs text-gray-500 text-center mt-4 italic">
              *Consulte os modelos disponíveis.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
