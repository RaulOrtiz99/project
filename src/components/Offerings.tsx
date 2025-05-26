import { CreditCard, Gift, DollarSign } from 'lucide-react';
import Hero2 from '../components/Hero2';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Offerings = () => {
  return (
    <div>
      <Hero2 
        title="Ofrendas y Donaciones"
        subtitle="Apoya la obra de Dios a través de tu generosidad"
        backgroundImage="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Tu generosidad hace posible que continuemos compartiendo el Evangelio y 
              sirviendo a nuestra comunidad. Cada donación contribuye a la expansión 
              del Reino de Dios a través de nuestros diversos ministerios.
            </p>
            <p className="text-lg text-gray-600 italic">
              "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
              porque Dios ama al dador alegre." (2 Corintios 9:7)
            </p>
          </AnimatedSection>
          
          <SectionTitle 
            title="Formas de Ofrendar" 
            subtitle="Diferentes opciones para tu comodidad"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100} className="bg-white rounded-lg shadow-md p-8 border-t-4 border-sky-500">
              <div className="text-sky-500 mb-4 text-center">
                <CreditCard className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-sky-800">
                Transferencia Bancaria
              </h3>
              <div className="text-gray-700">
                <p className="mb-4 text-center">
                  Puedes realizar transferencias bancarias a nuestra cuenta:
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="mb-1"><span className="font-medium">Banco:</span> Banco Nacional</p>
                  <p className="mb-1"><span className="font-medium">Titular:</span> Iglesia Rio Nuevo</p>
                  <p className="mb-1"><span className="font-medium">Cuenta:</span> 1234-5678-9012-3456</p>
                  <p><span className="font-medium">Referencia:</span> Tu nombre + "Ofrenda"</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="bg-white rounded-lg shadow-md p-8 border-t-4 border-sky-500">
              <div className="text-sky-500 mb-4 text-center">
                <Gift className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-sky-800">
                En Persona
              </h3>
              <div className="text-gray-700">
                <p className="mb-4 text-center">
                  Puedes entregar tu ofrenda durante nuestros servicios regulares:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">Domingo: 10:00 AM - 12:00 PM</li>
                  <li className="mb-2">Miércoles: 7:00 PM - 8:30 PM</li>
                  <li>En la oficina de la iglesia (Lunes a Viernes, 9:00 AM - 5:00 PM)</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="bg-white rounded-lg shadow-md p-8 border-t-4 border-sky-500 lg:col-span-1 md:col-span-2 lg:col-start-auto md:mx-auto md:max-w-md lg:max-w-none">
              <div className="text-sky-500 mb-4 text-center">
                <DollarSign className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-sky-800">
                Donaciones en Línea
              </h3>
              <div className="text-gray-700">
                <p className="mb-4 text-center">
                  Próximamente tendremos disponible nuestro sistema de donaciones en línea 
                  para facilitar tus ofrendas desde cualquier lugar.
                </p>
                <div className="bg-sky-50 p-4 rounded">
                  <p className="text-center">
                    ¡Estamos trabajando para implementar este servicio pronto!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Impact of Your Giving */}
          <div className="mt-16">
            <SectionTitle 
              title="Impacto de tu Generosidad" 
              subtitle="Tu ofrenda contribuye a:"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection delay={100} className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-sky-800 mb-3">Ministerios Locales</h4>
                <p className="text-gray-700">
                  Apoya nuestros ministerios de niños, jóvenes, familias y música, permitiéndonos 
                  servir mejor a nuestra congregación y comunidad local.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-sky-800 mb-3">Proyectos Comunitarios</h4>
                <p className="text-gray-700">
                  Facilita nuestro trabajo con personas necesitadas en la comunidad a través de 
                  programas de asistencia, educación y desarrollo.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-sky-800 mb-3">Obra Misionera</h4>
                <p className="text-gray-700">
                  Contribuye a llevar el Evangelio a lugares no alcanzados, apoyando a misioneros 
                  nacionales e internacionales.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={400} className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-sky-800 mb-3">Infraestructura</h4>
                <p className="text-gray-700">
                  Ayuda a mantener y mejorar nuestras instalaciones para proporcionar un ambiente 
                  adecuado para la adoración y el servicio.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={500} className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-sky-800 mb-3">Formación y Educación</h4>
                <p className="text-gray-700">
                  Contribuye a nuestros programas de formación bíblica, capacitación de líderes y 
                  recursos educativos para todas las edades.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={600} className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-sky-800 mb-3">Eventos Especiales</h4>
                <p className="text-gray-700">
                  Apoya la realización de conferencias, retiros, campamentos y otros eventos que 
                  fortalecen nuestra comunidad de fe.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-sky-50">
        <div className="container-custom">
          <SectionTitle 
            title="Testimonios de Generosidad" 
            subtitle="Historias de bendición a través de la fidelidad"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="italic text-gray-700 mb-4">
                "He experimentado cómo Dios multiplica cuando damos con generosidad. Desde que 
                empecé a diezmar fielmente, he visto su provisión de maneras inesperadas en mi vida."
              </div>
              <div className="font-medium text-right">
                — Ana G., miembro desde 2015
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-md">
              <div className="italic text-gray-700 mb-4">
                "Dar no se trata solo de dinero, sino de confiar en Dios como nuestro proveedor. 
                He aprendido que cuando damos, no perdemos, sino que invertimos en el Reino eterno."
              </div>
              <div className="font-medium text-right">
                — Roberto M., miembro desde 2010
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Respuestas a dudas comunes sobre ofrendas y diezmos"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-sky-800">¿Qué es el diezmo?</h3>
              <p className="text-gray-700">
                El diezmo es el 10% de nuestros ingresos que devolvemos a Dios como reconocimiento 
                de que todo lo que tenemos viene de Él. Es una práctica bíblica que encontramos tanto 
                en el Antiguo como en el Nuevo Testamento.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-sky-800">¿Cuál es la diferencia entre diezmo y ofrenda?</h3>
              <p className="text-gray-700">
                El diezmo es el 10% que devolvemos a Dios, mientras que las ofrendas son donaciones 
                adicionales que damos voluntariamente según nos guíe el Espíritu Santo. Las ofrendas 
                pueden ser designadas para propósitos específicos como misiones, construcción, o 
                ayuda a necesitados.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-sky-800">¿Cómo se administran las finanzas de la iglesia?</h3>
              <p className="text-gray-700">
                Nuestra iglesia cuenta con un equipo de administración financiera que supervisa todas 
                las finanzas con integridad y transparencia. Presentamos informes financieros regulares 
                a la congregación y nos sometemos a auditorías periódicas para asegurar la correcta 
                administración de los recursos.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <h3 className="text-xl font-semibold mb-3 text-sky-800">¿Puedo designar mi ofrenda para un propósito específico?</h3>
              <p className="text-gray-700">
                Sí, puedes designar tu ofrenda para un ministerio o proyecto específico. Simplemente 
                indica en el sobre de ofrenda o en la referencia de tu transferencia bancaria el 
                destino que deseas para tu donación.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;