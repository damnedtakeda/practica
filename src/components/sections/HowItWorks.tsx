import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: 1,
      title: 'Датчики',
      description: 'Пьезоэлектрические датчики, встроенные в стельку, измеряют давление стопы',
      icon: '📊',
    },
    {
      number: 2,
      title: 'Сбор данных',
      description: 'Данные собираются в реальном времени во время обычной активности пациента',
      icon: '📡',
    },
    {
      number: 3,
      title: 'ИИ-анализ',
      description: 'Облачная платформа анализирует данные и выявляет аномалии или прогресс',
      icon: '🧠',
    },
    {
      number: 4,
      title: 'Отчет',
      description: 'Врач получает подробный отчет для корректировки лечения',
      icon: '📝',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div 
          className="text-center mb-16"
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Как это работает
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            OrthoFlow обеспечивает полный цикл анализа, от сбора данных до готовых отчетов
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, 10, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center">
            <motion.div 
              className="h-0.5 w-full bg-primary-100"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            ></motion.div>
          </div>
          <div className="relative flex justify-around">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="flex-grow"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks; 