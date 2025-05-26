import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  children 
}: SectionTitleProps) => {
  return (
    <AnimatedSection className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
      
      {children}
    </AnimatedSection>
  );
};

export default SectionTitle;