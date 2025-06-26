import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-primary-50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              OrthoFlow: Умный мониторинг стопы для точной диагностики
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Помогите пациентам быстрее восстановиться — получайте данные в реальном времени
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" href="#contact-form">Попробовать бесплатно</Button>
              <Button variant="outline" size="lg" href="#contact-form">Узнать больше</Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl w-64 sm:w-80">
              <img 
                src="/images/app1.jpg" 
                alt="OrthoFlow - Приложение для мониторинга стопы" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero; 