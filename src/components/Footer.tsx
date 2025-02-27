import React from 'react';
import { Shield, Twitter, Facebook, Instagram, Youtube, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-green pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-primary-green" />
              <span className="text-2xl font-bold text-gradient">
                Trezor
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              The original and most trusted hardware wallet for secure crypto storage and transactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-green transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-green transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Trezor Model T</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Trezor Model One</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Trezor Safe</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Merchandise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">User Manual</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Ambassador Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Trezor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;