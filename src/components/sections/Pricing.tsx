import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Базовый',
      price: '2,990₽',
      period: 'в месяц',
      description: 'Идеально для знакомства с технологией и тестирования в небольших клиниках',
      features: [
        'До 5 пациентов',
        'Базовые отчеты',
        'Мобильное приложение',
        'Email поддержка',
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '7,990₽',
      period: 'в месяц',
      description: 'Лучшее решение для практикующих ортопедов и частных клиник',
      features: [
        'До 30 пациентов',
        'Расширенная аналитика',
        'ИИ-рекомендации',
        'Приоритетная поддержка',
        'API для интеграции',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'По запросу',
      period: '',
      description: 'Масштабируемое решение для крупных медицинских центров и сетей клиник',
      features: [
        'Неограниченное число пациентов',
        'Полная интеграция с МИС',
        'Индивидуальная настройка',
        'Выделенный аккаунт-менеджер',
        'Онбординг и обучение персонала',
      ],
      recommended: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Тарифы и цены
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите план, который подходит вашей клинике
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl shadow-sm border-2 relative ${
                plan.recommended ? 'border-primary-500' : 'border-transparent'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Рекомендуемый
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="ml-2 text-gray-500">{plan.period}</span>
              </div>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button 
                  variant={plan.recommended ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.recommended ? 'Начать сейчас' : 'Подробнее'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Нужно индивидуальное решение?</p>
          <Button variant="secondary">Связаться с нами</Button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing; 