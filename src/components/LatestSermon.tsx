import React from 'react';
import { Play, Calendar, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const LatestSermon = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Última Prédica</h2>
        
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Video thumbnail */}
              <div className="relative group">
                <img 
                  src="https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/493279657_1057790153226116_9029490715877966853_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P2BxkJdHsdUQ7kNvwFdBtZh&_nc_oc=AdljAF7Yb4P6yyrr6IbvO1ar7FCcRoVneVqJUsNQh0FrBAzaGi6aANlPGgX_k_CyoGbx6rCXOeEnR9214shr5ZLf&_nc_zt=23&_nc_ht=scontent.fvvi1-1.fna&_nc_gid=qxBFBbAnBnW7psvKEqtqJQ&oh=00_AfI0Tc7-w1si5JEARFi1kSisyR3UgFSU5qiWlk9JbCbtAA&oe=683A4968" 
                  alt="Última prédica" 
                  className="w-full h-full object-cover object-center"
                  style={{ minHeight: '300px' }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="bg-celestial-500 hover:bg-celestial-600 w-16 h-16 rounded-full flex items-center justify-center transition duration-300 transform group-hover:scale-110">
                    <Play size={30} className="text-white ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Sermon info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-celestial-600 mb-3">
                  <Calendar size={18} />
                  <span className="text-sm">30 Abril, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock size={18} />
                  <span className="text-sm">45:30</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">El Poder del Espíritu Santo en Nuestras Vidas</h3>
                <p className="text-gray-600 mb-6">
                  Descubre cómo el Espíritu Santo puede guiarte, fortalecerte y transformar tu vida diaria a través de su presencia constante.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Pastor" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800">Pastor Daniel Morales</h4>
                      <p className="text-sm text-gray-500">Pastor Principal</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="mt-6 bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block text-center"
                >
                  Ver Prédica
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`text-center mt-10 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-celestial-600 hover:text-celestial-700 font-medium inline-flex items-center"
          >
            Ver mensajes anteriores <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

export default LatestSermon;