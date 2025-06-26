import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const doctorBenefits = [
    {
      title: 'Повышение точности диагнозов',
      description: 'Получайте объективные данные о реальной нагрузке на стопу пациента',
      icon: '🎯',
    },
    {
      title: 'Снижение риска ошибок',
      description: 'Благодаря непрерывному мониторингу вы заметите проблемы раньше',
      icon: '🛡️',
    },
    {
      title: 'Повышение авторитета клиники',
      description: 'Используйте инновационные технологии для привлечения пациентов',
      icon: '⭐',
    },
  ];

  const patientBenefits = [
    {
      title: 'Удобство использования',
      description: 'Устройство не заметно и не вызывает дискомфорта при ношении',
      icon: '👟',
    },
    {
      title: 'Контроль в реальном времени',
      description: 'Отслеживайте состояние стоп через мобильное приложение',
      icon: '📱',
    },
    {
      title: 'Быстрое восстановление',
      description: 'Ускорьте процесс лечения благодаря точной диагностике',
      icon: '⚡',
    },
    {
      title: 'Предупреждение осложнений',
      description: 'Выявляйте проблемы на ранней стадии до появления боли',
      icon: '🚨',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Преимущества OrthoFlow
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Наше решение приносит пользу как врачам, так и пациентам
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.span 
              className="mr-3 text-3xl"
              animate={{ rotate: [0, 5, -5, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 2.5 
              }}
            >👨‍⚕️</motion.span> 
            Для врачей
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {doctorBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >{benefit.icon}</motion.div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <motion.span 
              className="mr-3 text-3xl"
              animate={{ 
                rotate: [0, 5, -5, 5, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 2.5 
              }}
            >🧑‍🦱</motion.span> 
            Для пациентов
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {patientBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-primary-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ delay: 0.05 * index }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >{benefit.icon}</motion.div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Benefits; 