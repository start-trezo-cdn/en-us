import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary-green" />
                <span className="text-2xl font-bold text-gradient">
                  Trezor
                </span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary-green transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-primary-green transition-colors">Features</a>
              <a href="#" className="text-gray-700 hover:text-primary-green transition-colors">Support</a>
              <a href="#" className="text-gray-700 hover:text-primary-green transition-colors">Learn</a>
              <a 
                href="#" 
                className="px-5 py-2 btn-primary rounded-full text-white font-medium"
              >
                Shop Now
              </a>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary-green"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white z-40 border-t border-gray-100 shadow-medium"
          >
            <div className="px-4 py-8 space-y-6">
              <a href="#" className="block text-lg text-gray-700 hover:text-primary-green transition-colors">Products</a>
              <a href="#" className="block text-lg text-gray-700 hover:text-primary-green transition-colors">Features</a>
              <a href="#" className="block text-lg text-gray-700 hover:text-primary-green transition-colors">Support</a>
              <a href="#" className="block text-lg text-gray-700 hover:text-primary-green transition-colors">Learn</a>
              <a 
                href="#" 
                className="block px-5 py-3 btn-primary rounded-full text-white font-medium text-center"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;