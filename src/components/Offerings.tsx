import { CreditCard, Gift, DollarSign, ChevronRight, Quote } from 'lucide-react';
import Hero2 from '../components/Hero2';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const Offerings = () => {
  return (
    <div className="overflow-hidden">
      <Hero2 
        title="Ofrendas y Donaciones"
        subtitle="Apoya la obra de Dios a través de tu generosidad"
        backgroundImage="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tu generosidad hace posible que continuemos compartiendo el Evangelio y 
              sirviendo a nuestra comunidad. Cada donación contribuye a la expansión 
              del Reino de Dios a través de nuestros diversos ministerios.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
              porque Dios ama al dador alegre." (2 Corintios 9:7)
            </motion.p>
          </AnimatedSection>
          
          <SectionTitle 
            title="Formas de Ofrendar" 
            subtitle="Diferentes opciones para tu comodidad"
            centered
          />
          
          {/* Donation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Bank Transfer */}
            <AnimatedSection delay={100}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500 h-full flex flex-col"
              >
                <div className="text-blue-500 mb-6 text-center">
                  <CreditCard className="h-14 w-14 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  Transferencia Bancaria
                </h3>
                <div className="text-gray-700 flex-grow">
                  <p className="mb-6 text-center text-lg">
                    Puedes realizar transferencias bancarias a nuestra cuenta:
                  </p>
                  <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
                    <p className="mb-2 flex items-start">
                      <span className="font-semibold min-w-[80px]">Banco:</span>
                      <span>Banco Nacional</span>
                    </p>
                    <p className="mb-2 flex items-start">
                      <span className="font-semibold min-w-[80px]">Titular:</span>
                      <span>Iglesia Rio Nuevo</span>
                    </p>
                    <p className="mb-2 flex items-start">
                      <span className="font-semibold min-w-[80px]">Cuenta:</span>
                      <span className="font-mono">1234-5678-9012-3456</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold min-w-[80px]">Referencia:</span>
                      <span>Tu nombre + "Ofrenda"</span>
                    </p>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Más información <ChevronRight className="ml-1 h-5 w-5" />
                </motion.a>
              </motion.div>
            </AnimatedSection>
            
            {/* In Person */}
            <AnimatedSection delay={200}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500 h-full flex flex-col"
              >
                <div className="text-green-500 mb-6 text-center">
                  <Gift className="h-14 w-14 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  En Persona
                </h3>
                <div className="text-gray-700 flex-grow">
                  <p className="mb-6 text-center text-lg">
                    Puedes entregar tu ofrenda durante nuestros servicios regulares:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                      <span>Domingo: 10:00 AM - 12:00 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                      <span>Miércoles: 7:00 PM - 8:30 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                      <span>En la oficina de la iglesia (Lunes a Viernes, 9:00 AM - 5:00 PM)</span>
                    </li>
                  </ul>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Ver horarios <ChevronRight className="ml-1 h-5 w-5" />
                </motion.a>
              </motion.div>
            </AnimatedSection>
            
            {/* Online Donations */}
            <AnimatedSection delay={300}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500 h-full flex flex-col"
              >
                <div className="text-purple-500 mb-6 text-center">
                  <DollarSign className="h-14 w-14 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  Donaciones en Línea
                </h3>
                <div className="text-gray-700 flex-grow">
                  <p className="mb-6 text-center text-lg">
                    Próximamente tendremos disponible nuestro sistema de donaciones en línea 
                    para facilitar tus ofrendas desde cualquier lugar.
                  </p>
                  <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-6">
                    <p className="text-center text-purple-700 font-medium">
                      ¡Estamos trabajando para implementar este servicio pronto!
                    </p>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Notificarme <ChevronRight className="ml-1 h-5 w-5" />
                </motion.a>
              </motion.div>
            </AnimatedSection>
          </div>
          
          {/* Impact Section */}
          <div className="mt-16">
            <SectionTitle 
              title="Impacto de tu Generosidad" 
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Ministerios Locales",
                  description: "Apoya nuestros ministerios de niños, jóvenes, familias y música, permitiéndonos servir mejor a nuestra congregación y comunidad local.",
                  icon: "👨‍👩‍👧‍👦"
                },
                {
                  title: "Proyectos Comunitarios",
                  description: "Facilita nuestro trabajo con personas necesitadas en la comunidad a través de programas de asistencia, educación y desarrollo.",
                  icon: "🏘️"
                },
                {
                  title: "Obra Misionera",
                  description: "Contribuye a llevar el Evangelio a lugares no alcanzados, apoyando a misioneros nacionales e internacionales.",
                  icon: "✝️"
                },
                {
                  title: "Infraestructura",
                  description: "Ayuda a mantener y mejorar nuestras instalaciones para proporcionar un ambiente adecuado para la adoración y el servicio.",
                  icon: "🏛️"
                },
                {
                  title: "Formación y Educación",
                  description: "Contribuye a nuestros programas de formación bíblica, capacitación de líderes y recursos educativos para todas las edades.",
                  icon: "📚"
                },
                {
                  title: "Eventos Especiales",
                  description: "Apoya la realización de conferencias, retiros, campamentos y otros eventos que fortalecen nuestra comunidad de fe.",
                  icon: "🎪"
                }
              ].map((item, index) => (
                <AnimatedSection 
                  key={index}
                  delay={(index + 1) * 100}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Testimonios de Generosidad" 
            subtitle="Historias de bendición a través de la fidelidad"
            centered
          />
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg h-full"
              >
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <div className="italic text-gray-700 text-lg mb-6">
                  "He experimentado cómo Dios multiplica cuando damos con generosidad. Desde que 
                  empecé a diezmar fielmente, he visto su provisión de maneras inesperadas en mi vida."
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4">
                    AG
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Ana G.</div>
                    <div className="text-sm text-gray-600">Miembro desde 2015</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg h-full"
              >
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <div className="italic text-gray-700 text-lg mb-6">
                  "Dar no se trata solo de dinero, sino de confiar en Dios como nuestro proveedor. 
                  He aprendido que cuando damos, no perdemos, sino que invertimos en el Reino eterno."
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4">
                    RM
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Roberto M.</div>
                    <div className="text-sm text-gray-600">Miembro desde 2010</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Respuestas a dudas comunes sobre ofrendas y diezmos"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "¿Qué es el diezmo?",
                answer: "El diezmo es el 10% de nuestros ingresos que devolvemos a Dios como reconocimiento de que todo lo que tenemos viene de Él. Es una práctica bíblica que encontramos tanto en el Antiguo como en el Nuevo Testamento."
              },
              {
                question: "¿Cuál es la diferencia entre diezmo y ofrenda?",
                answer: "El diezmo es el 10% que devolvemos a Dios, mientras que las ofrendas son donaciones adicionales que damos voluntariamente según nos guíe el Espíritu Santo. Las ofrendas pueden ser designadas para propósitos específicos como misiones, construcción, o ayuda a necesitados."
              },
              {
                question: "¿Cómo se administran las finanzas de la iglesia?",
                answer: "Nuestra iglesia cuenta con un equipo de administración financiera que supervisa todas las finanzas con integridad y transparencia. Presentamos informes financieros regulares a la congregación y nos sometemos a auditorías periódicas para asegurar la correcta administración de los recursos."
              },
              {
                question: "¿Puedo designar mi ofrenda para un propósito específico?",
                answer: "Sí, puedes designar tu ofrenda para un ministerio o proyecto específico. Simplemente indica en el sobre de ofrenda o en la referencia de tu transferencia bancaria el destino que deseas para tu donación."
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index}
                delay={(index + 1) * 100}
                className="mb-8 last:mb-0"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-colors border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-700 flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2 text-blue-500" />
                    {item.question}
                  </h3>
                  <p className="text-gray-700 pl-7">
                    {item.answer}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;