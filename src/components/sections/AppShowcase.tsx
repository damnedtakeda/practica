import React from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppShowcase: React.FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animationVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Наше приложение</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Интуитивный интерфейс для врачей и пациентов</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <motion.div
            ref={ref1}
            variants={animationVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="rounded-xl overflow-hidden shadow-xl w-64 sm:w-72"
          >
            <img
              src="/images/app1.jpg"
              alt="OrthoFlow - Экран мониторинга давления стопы"
              className="w-full h-auto object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-gray-900">Мониторинг давления стопы</h3>
              <p className="text-gray-600">Визуализация нагрузки в реальном времени</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            variants={animationVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            className="rounded-xl overflow-hidden shadow-xl w-64 sm:w-72"
          >
            <img
              src="/images/app2.jpg"
              alt="OrthoFlow - График интенсивности ходьбы"
              className="w-full h-auto object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-gray-900">Анализ интенсивности ходьбы</h3>
              <p className="text-gray-600">Подробные графики активности в течение дня</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AppShowcase;
