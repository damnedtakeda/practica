import React, { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`py-4 bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/logo.png" alt="OrthoFlow" className="w-50 h-10" />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#how-it-works"
              className="text-gray-700 hover:text-primary-500"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Как это работает
            </motion.a>
            <motion.a
              href="#benefits"
              className="text-gray-700 hover:text-primary-500"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Преимущества
            </motion.a>
            <Button size="sm" href="#contact-form">
              Попробовать
            </Button>
          </nav>

          <button type="button" className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 py-4 bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-primary-500 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Как это работает
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-primary-500 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Преимущества
              </a>
              <div className="flex flex-col space-y-2 mt-2">
                <Button className="w-full" href="#contact-form" onClick={() => setIsMenuOpen(false)}>
                  Попробовать
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </Container>
    </motion.header>
  );
};

export default Header;
