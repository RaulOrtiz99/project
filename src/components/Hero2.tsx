import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttonText, 
  buttonLink 
}: HeroProps) => {
  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 to-sky-800/60"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        {buttonText && buttonLink && (
          <Link 
            to={buttonLink} 
            className="btn btn-primary group"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;