import React, { useEffect, useState } from "react";
import { Search, Users, MapPin, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface GrupoCrecimiento {
  id: number;
  name: string;
  location: string;
  day: string;
  time: string;
  leader: string;
  phone: string;
  description: string;
  members: number | null;
  image: Array<{
    id: number;
    url: string;
    alternativeText?: string | null;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  }>;
}

interface ApiResponse {
  data: GrupoCrecimiento[];
}

const GruposCrecimiento: React.FC = () => {
  const { ref,} = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [groups, setGroups] = useState<GrupoCrecimiento[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Iglesia Río Nuevo - Grupos de Crecimiento";

    const fetchGroups = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/grupocrecimientos?populate=image"
        );
        const json: ApiResponse = await res.json();
        setGroups(json.data);
      } catch (error) {
        console.error("Error cargando grupos:", error);
      }
    };

    fetchGroups();
  }, []);

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.day.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getImageUrl = (imageArray: GrupoCrecimiento["image"]) => {
    if (!imageArray || imageArray.length === 0) return "";
    return `http://localhost:1337${imageArray[0].url}`;
  };

  return (
    <div className="pt-16" ref={ref}>
      {/* Hero section */}
      <div className="relative bg-celestial-800 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7162162/pexels-photo-7162162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grupos de Crecimiento
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Encuentra tu comunidad perfecta para crecer en fe y construir
              relaciones significativas.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
              <Search size={20} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Buscar por ubicación, día o nombre..."
                className="w-full bg-transparent text-gray-800 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-celestial-500 hover:bg-celestial-600 text-white px-4 py-2 rounded-md ml-2">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">¿Qué son los Grupos de Crecimiento?</h2>
            <p className="text-gray-600 mt-6">
              Los Grupos de Crecimiento son comunidades pequeñas donde los
              miembros de Iglesia Río Nuevo se reúnen semanalmente en hogares
              para estudiar la Biblia, orar juntos, desarrollar amistades
              genuinas y apoyarse mutuamente en su caminar cristiano.
            </p>
            <p className="text-gray-600 mt-4">
              Estos grupos son fundamentales para nuestra visión de iglesia, ya
              que creemos que el verdadero crecimiento espiritual ocurre en
              comunidad, donde podemos compartir nuestras vidas y aplicar las
              enseñanzas bíblicas de manera práctica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Comunidad</h3>
              <p className="text-gray-600">
                Construye relaciones significativas y encuentra apoyo en tu
                caminar espiritual.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Crecimiento</h3>
              <p className="text-gray-600">
                Profundiza en la palabra de Dios y crece en tu fe a través del
                estudio bíblico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Cercanía</h3>
              <p className="text-gray-600">
                Encuentra un grupo cerca de tu hogar y que se ajuste a tu
                horario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groups section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Encuentra tu Grupo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-anim">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    {group.image && group.image.length > 0 ? (
                      <img
                        src={getImageUrl(group.image)}
                        alt={group.image[0].alternativeText || group.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        Sin imagen
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {group.name}
                      </h3>
                      <span className="bg-celestial-100 text-celestial-800 text-xs px-2 py-1 rounded-full">
                        {group.members ?? 0} miembros
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2 text-celestial-500" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar
                        size={16}
                        className="mr-2 text-celestial-500"
                      />
                      <span>
                        {group.day} • {group.time}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm">
                      {group.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        Líder:
                      </h4>
                      <div className="flex justify-between items-center">
                        <span>{group.leader}</span>
                        <a
                          href={`tel:${group.phone}`}
                          className="text-celestial-600 hover:text-celestial-700 font-medium text-sm"
                        >
                          {group.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 rounded-md transition duration-300">
                      Contactar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-600">
                No se encontraron grupos.
              </p>
            )}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              ¿No encuentras un grupo que se adapte a tus necesidades? Contáctanos
              y te ayudaremos a encontrar el grupo perfecto para ti.
            </p>
            <a href="#" className="btn-outline">
              Contactar a Coordinador de Grupos
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Testimonios</h2>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-md p-8 relative">
              <div className="text-celestial-500 text-6xl font-serif absolute top-4 left-4 opacity-20">
                "
              </div>
              <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                Unirme a un Grupo de Crecimiento fue una de las mejores
                decisiones que tomé. Encontré una familia que me apoya en los
                momentos difíciles y celebra conmigo los momentos de alegría. Mi
                fe ha crecido enormemente gracias a las enseñanzas y la
                comunidad.
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Testimonio"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">Laura Sánchez</h4>
                  <p className="text-sm text-gray-500">Miembro desde 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GruposCrecimiento;
