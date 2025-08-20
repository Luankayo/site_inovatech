"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    title: "Catraca com FaceID",
    description:
      "Controle de acesso moderno e seguro com reconhecimento facial.",
    price: "R$ 4.999,00",
    images: [
      "/produtos/catraca1.webp",
      "/produtos/catraca2.webp",
      "/produtos/catraca3.jpg",
    ],
  },
  {
    id: 2,
    title: "GA Fitness",
    description:
      "Sistema de Gestão Completo, Cadastro de Alunos, Modalidades, Ficha de Treino, Financeiro, Relatórios e muito mais!",
    price: "R$ 119,90/mês",
    images: ["/produtos/sistema.png"],
  },
  {
    id: 3,
    title: "Face ID",
    description:
      "IDFace, o controlador de Acesso com Reconhecimento Facial mais moderno e seguro do mercado.",
    price: "R$ 1.499,90",
    images: ["/produtos/face-id.webp"],
  },
];

export default function Solutions() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="solutions" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologias de ponta desenvolvidas para impulsionar o crescimento do
            seu negócio
          </p>
        </motion.div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-orbitron font-semibold group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full"
                  >
                    {product.price}
                  </motion.div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Ver detalhes
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal com carrossel */}
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

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center mt-4 italic">
              *Imagens meramente ilustrativas. Consulte os modelos disponíveis.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
