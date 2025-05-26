import React, { useEffect, useState } from 'react';
import { Play, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface PastorInfo {
  id: number;
  rol: string;
  nombre: string;
}

interface RichTextChild {
  type: string;
  text: string;
}

interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

interface Predica {
  id: number;
  titulo: string;
  descripcion: RichTextBlock[];
  fecha: string;
  duracion: string;
  videoUrl: string;
  imagen: string | null; 
  pastorInfo?: PastorInfo | null;
}

interface ApiResponse {
  data: Predica[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const LatestSermon: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const [predica, setPredica] = useState<Predica | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDescripcionTexto = (blocks: RichTextBlock[]) => {
    return blocks
      .map(block => block.children.map(child => child.text).join(''))
      .join('\n');
  };

  const fetchPredica = async () => {
    try {
      const res = await fetch('http://localhost:1337/api/predicas');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: ApiResponse = await res.json();
      if (data.data.length === 0) {
        setPredica(null);
      } else {
        setPredica(data.data[0]);
      }
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error desconocido');
      }
      setPredica(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPredica(); // Fetch inicial

    const interval = setInterval(() => {
      fetchPredica();
    }, 30000); // Cada 30 segundos

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 text-center">
          <p>Cargando prédica...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600 font-semibold">Error: {error}</p>
        </div>
      </section>
    );
  }

  if (!predica) {
    return (
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">No hay prédica disponible.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Última Prédica</h2>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">

              {/* Video thumbnail */}
              <div className="relative group">
                {predica.imagen ? (
                  <img
                    src={predica.imagen}
                    alt={predica.titulo}
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '300px' }}
                  />
                ) : (
                  <div className="w-full h-72 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Sin imagen</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={predica.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-celestial-500 hover:bg-celestial-600 w-16 h-16 rounded-full flex items-center justify-center transition duration-300 transform group-hover:scale-110"
                  >
                    <Play size={30} className="text-white ml-1" />
                  </a>
                </div>
              </div>

              {/* Sermon info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-celestial-600 mb-3">
                  <Calendar size={18} />
                  <span className="text-sm">
                    {new Date(predica.fecha).toLocaleDateString('es-ES', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <Clock size={18} />
                  <span className="text-sm">{predica.duracion}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{predica.titulo}</h3>
                <p className="text-gray-600 mb-6">{getDescripcionTexto(predica.descripcion)}</p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">{predica.pastorInfo?.nombre ? predica.pastorInfo.nombre.charAt(0) : ''}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{predica.pastorInfo?.nombre ?? 'Nombre no disponible'}</h4>
                      <p className="text-sm text-gray-500">{predica.pastorInfo?.rol ?? 'Rol no disponible'}</p>
                    </div>
                  </div>
                </div>
                <a
                  href={predica.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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

export default LatestSermon;
