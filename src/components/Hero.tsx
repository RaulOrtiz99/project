import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/158268/water-bach-river-stones-158268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: '50% 30%' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0"></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Bienvenidos a <span className="text-celestial-400">Río Nuevo</span>
          </h1>
          <p 
            className={`text-xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Una iglesia comprometida con la palabra de Dios y la transformación de vidas a través de su poder.
          </p>
          <div 
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link 
              to="/servicios" 
              className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Nuestros Servicios
            </Link>
            <Link 
              to="/grupos-crecimiento" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
            >
              Encuentra tu Grupo <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-20 w-full text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,34,0,48C0,65.52,0,78.45,0,90.79a135.81,135.81,0,0,0,41.8,10.61c35,6.5,68.66,1.79,101.18-7.72C191.47,82.38,246.35,63.2,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;