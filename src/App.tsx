import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Cpu, Zap, ChevronRight, ChevronLeft, ArrowRight, Wallet, CheckCircle, RefreshCw, Layers, Key } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Slides data
const slides = [
  {
    id: 1,
    title: "Welcome to Trezor",
    subtitle: "The Future of Secure Digital Asset Management",
    description: "Begin your journey to unparalleled crypto security",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: Shield
  },
  {
    id: 2,
    title: "Advanced Protection",
    subtitle: "Military-Grade Security Technology",
    description: "Discover how our innovative hardware safeguards your assets",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: Lock
  },
  {
    id: 3,
    title: "Intuitive Interface",
    subtitle: "Simplicity Meets Innovation",
    description: "Experience our user-friendly ecosystem designed for everyone",
    image: "https://images.unsplash.com/photo-1642104704072-0b8f0b4b1b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: Cpu
  },
  {
    id: 4,
    title: "Get Started Today",
    subtitle: "Your Security Journey Begins Now",
    description: "Follow our simple setup process and secure your digital future",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: Zap
  }
];

// Feature sections
const features = [
  {
    title: "Quantum-Resistant Security",
    description: "Our hardware wallets utilize advanced cryptographic protocols and secure elements to ensure your private keys remain protected against even quantum computing threats.",
    icon: Shield
  },
  {
    title: "Intuitive Setup Process",
    description: "Follow our guided initialization process to set up your device in minutes, with clear instructions at every step of your security journey.",
    icon: Zap
  },
  {
    title: "Universal Asset Support",
    description: "Manage Bitcoin, Ethereum, and thousands of other cryptocurrencies from a single secure device with seamless integration.",
    icon: Wallet
  },
  {
    title: "Air-Gapped Transaction Signing",
    description: "Sign transactions completely offline, creating an impenetrable barrier against online threats, malware, and sophisticated attacks.",
    icon: Lock
  }
];

// Setup steps
const setupSteps = [
  {
    title: "Unbox Your Trezor Device",
    description: "Your journey begins with unboxing your tamper-proof Trezor device. Verify the security seals are intact before proceeding with the setup process.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    checkpoints: [
      "Inspect packaging for tampering",
      "Verify all components are included",
      "Read the quick start guide"
    ]
  },
  {
    title: "Connect and Initialize",
    description: "Connect your Trezor to your computer and visit trezor.io/start to download Trezor Suite, our comprehensive desktop application for managing your digital assets.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    checkpoints: [
      "Download Trezor Suite",
      "Connect device via USB",
      "Follow on-screen instructions"
    ]
  },
  {
    title: "Create Your Recovery Seed",
    description: "Your device will generate a unique recovery seed – a sequence of words that serves as the master key to all your assets. Record these words carefully and store them securely.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    checkpoints: [
      "Write down all seed words in order",
      "Verify seed words on device",
      "Store in a secure, private location"
    ]
  },
  {
    title: "Set Up PIN Protection",
    description: "Create a strong PIN code to protect your device from unauthorized physical access. This adds an essential layer of security to your hardware wallet.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    checkpoints: [
      "Choose a unique, memorable PIN",
      "Avoid using birthdays or simple sequences",
      "Never share your PIN with anyone"
    ]
  }
];

// FAQ items
const faqItems = [
  {
    question: "What happens if I lose my Trezor device?",
    answer: "If your Trezor is lost, stolen, or damaged, you can fully recover all your assets using your recovery seed. Simply purchase a new Trezor device and select the recovery option during setup. This is why properly securing your recovery seed is crucial – it's your ultimate backup."
  },
  {
    question: "Which cryptocurrencies does Trezor support?",
    answer: "Trezor supports thousands of cryptocurrencies, including Bitcoin, Ethereum, and all ERC-20 tokens, as well as many other blockchain ecosystems. Our development team continuously adds support for new cryptocurrencies to ensure you can manage your diverse portfolio from a single secure device."
  },
  {
    question: "Is Trezor suitable for beginners?",
    answer: "Absolutely! Trezor is designed with both beginners and experts in mind. Our intuitive interface and step-by-step setup process make it easy for anyone to secure their digital assets, regardless of technical expertise. Additionally, our comprehensive support resources and active community are always available to help you along your journey."
  },
  {
    question: "How does Trezor protect against hacking attempts?",
    answer: "Trezor employs multiple layers of security to protect your assets. Your private keys never leave the device, all transactions must be physically confirmed on the device, and the secure element is resistant to physical tampering. Additionally, the device runs on specialized firmware that is verified during each startup to prevent malicious code execution."
  }
];

// Animated section component
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

// Animated card component
const AnimatedCard = ({ children, index = 0 }: { children: React.ReactNode, index?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="card-hover"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on user interaction
  const handleManualSlideChange = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    handleManualSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleManualSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      <Navbar />
      
      {/* Hero Slider */}
      <section className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`,
                filter: 'brightness(0.9)'
              }}
            />
            
            <div className="absolute inset-0 hero-gradient opacity-90" />
            
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                {React.createElement(slides[currentSlide].icon, { size: 64, className: "mx-auto mb-6 text-primary-green" })}
              </motion.div>
              
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl font-light mb-6 text-gray-700"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <button className="px-8 py-4 btn-primary rounded-full text-lg font-medium flex items-center group">
                  Get Started Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualSlideChange(index)}
              className={`h-3 rounded-full transition-all duration-300 slide-indicator ${
                index === currentSlide ? 'active' : 'inactive'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-soft"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-primary-green" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-soft"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-primary-green" />
        </button>
      </section>
      
      {/* Main content */}
      <main>
        {/* Introduction Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8 text-gradient">
                Begin Your Trezor Journey
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Welcome to Trezor.io/start, your gateway to the world of secure cryptocurrency management. 
                In today's digital landscape, where cyber threats evolve constantly, protecting your digital 
                investments requires cutting-edge security solutions. Trezor hardware wallets represent the 
                pinnacle of cryptographic technology, designed specifically to safeguard your digital wealth 
                against sophisticated attacks.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Our intuitive initialization process ensures that everyone, from crypto newcomers to seasoned 
                investors, can establish bank-grade security for their digital assets with confidence. This 
                comprehensive guide walks you through the entire setup process, from unboxing your device to 
                securing your first transaction, empowering you to take full control of your financial future.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16 px-4 bg-light-green">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
                Why Choose Trezor?
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <AnimatedCard key={index} index={index}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft h-full">
                    {React.createElement(feature.icon, { size: 48, className: "feature-icon mb-6" })}
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Setup Process */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
                Simple Setup Process
              </h2>
            </AnimatedSection>
            
            <div className="space-y-24">
              {setupSteps.map((step, index) => (
                <AnimatedSection key={index} delay={0.2 * index}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                    <div className="md:w-1/2">
                      <div className="bg-light-green p-1 rounded-2xl border border-primary-green border-opacity-30">
                        <img 
                          src={step.image}
                          alt={step.title} 
                          className="rounded-xl w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.checkpoints.map((checkpoint, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-green mr-3 mt-0.5" />
                            <span className="text-gray-700">{checkpoint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-light-green">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
                The Trezor Advantage
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard index={0}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-light-green rounded-full flex items-center justify-center mb-6">
                    <RefreshCw size={32} className="text-primary-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Continuous Updates</h3>
                  <p className="text-gray-600">
                    Benefit from regular firmware updates that enhance security and add support for new cryptocurrencies, ensuring your device stays ahead of emerging threats.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard index={1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-light-green rounded-full flex items-center justify-center mb-6">
                    <Layers size={32} className="text-primary-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Multi-Layer Security</h3>
                  <p className="text-gray-600">
                    Experience peace of mind with multiple security layers, including PIN protection, passphrase encryption, and physical confirmation buttons.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard index={2}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-light-green rounded-full flex items-center justify-center mb-6">
                    <Key size={32} className="text-primary-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Full Ownership</h3>
                  <p className="text-gray-600">
                    Take complete control of your digital assets with self-custody. Your private keys remain in your possession, never exposed to internet-connected devices.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary-green to-secondary-green">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Secure Your Digital Future?</h2>
              <p className="text-xl text-white text-opacity-90 mb-10">
                Join thousands of users worldwide who trust Trezor to protect their digital assets. 
                Our hardware wallets combine cutting-edge security with intuitive design to provide 
                the ultimate protection for your cryptocurrency investments.
              </p>
              <button className="px-10 py-5 bg-white rounded-full text-xl font-medium text-primary-green hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                Get Your Trezor Today
              </button>
            </AnimatedSection>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>
            
            <div className="space-y-8">
              {faqItems.map((item, index) => (
                <AnimatedCard key={index} index={index}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.question}</h3>
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;