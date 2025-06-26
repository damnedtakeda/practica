import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#579AE2] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/logo.png" alt="OrthoFlow" className="w-50 h-10" />
            <div>

            <p className="text-blue-100">
              Революционная технология для мониторинга и анализа давления стопы
            </p>
            </div>
          </div>
          

        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-300 text-center">
          <div className="text-blue-100 text-sm">
            © {new Date().getFullYear()} OrthoFlow. Все права защищены.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 