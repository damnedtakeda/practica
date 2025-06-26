import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const CTA: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {

      await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          
        },
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-primary-500">
      <Container>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{color:'black'}}>
              Заинтересованы в новой технологии мониторинга стопы?
            </h2>
            <p className="mt-4 text-xl text-primary-100">
              Оставьте свои контакты, чтобы узнать больше о технологии OrthoFlow и как она может помочь вам или вашим близким
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                className="bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700"
                size="lg"
                href="#contact-form"
              >
                Заполнить форму
              </Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
            
            {formStatus === 'success' ? (
              <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-md">
                Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.
              </div>
            ) : formStatus === 'error' ? (
              <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
                Произошла ошибка. Пожалуйста, попробуйте еще раз или напишите нам напрямую.
              </div>
            ) : null}
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Иван Петров"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="ivan@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Расскажите, чем вас заинтересовала технология..."
                  required
                />
              </div>
              <Button 
                className="w-full" 
                type="submit"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Отправка...' : 'Отправить'}
              </Button>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA; 