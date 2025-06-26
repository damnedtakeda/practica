import React from 'react';
import Container from '../ui/Container';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Проблема → Решение
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Пациенты пропускают диагностику. Врачи не видят прогресса. OrthoFlow меняет это.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Проблема</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-1">✕</span>
                <p className="text-gray-700">Ортопеды не могут отслеживать динамику лечения между визитами</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-1">✕</span>
                <p className="text-gray-700">Низкая эффективность терапии из-за поздних диагнозов</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-1">✕</span>
                <p className="text-gray-700">Только 6% пациентов проходят регулярную диагностику</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-1">✕</span>
                <p className="text-gray-700">83% пациентов бросают лечение из-за отсутствия прогресса</p>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Решение</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                <p className="text-gray-700">Непрерывный мониторинг давления стопы с помощью специальных датчиков</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                <p className="text-gray-700">Облачная платформа с ИИ-аналитикой для врачей</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                <p className="text-gray-700">Автоматические отчеты о прогрессе лечения</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                <p className="text-gray-700">Удобное, незаметное устройство, которое не мешает повседневной жизни</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution; 