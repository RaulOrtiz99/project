import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface RichTextChild {
  type: string;
  text: string;
}

interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

interface Event {
  id: number;
  documentId: string;
  titulo: string;
  fecha: string;
  horaInicio: string;
  horaFin?: string | null;
  ubicacion: string;
  descripcion: RichTextBlock[];
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

interface ApiResponse {
  data: Event[];
  meta: Meta;
}

// Función para convertir Rich Text a texto plano
function richTextToPlainText(blocks: RichTextBlock[]): string {
  if (!blocks || blocks.length === 0) return '';
  return blocks
    .map(block => block.children.map(child => child.text).join(''))
    .join('\n\n');
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/eventos');
        const json: ApiResponse = await res.json();

        setEvents(json.data);
        if (json.data.length > 0) setSelectedEvent(json.data[0]);
      } catch (error) {
        console.error('Error cargando eventos:', error);
      }
    };
    fetchEvents();
  }, []);

  if (!selectedEvent) return <p className="text-center py-20">Cargando eventos...</p>;

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Calendario de Actividades</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`md:col-span-1 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <CalendarIcon size={18} className="mr-2 text-celestial-600" />
                Mayo 2025
              </h3>
              <div className="space-y-2">
                {events.map(event => {
                  const isSelected = selectedEvent.id === event.id;
                  const fechaStr = new Date(event.fecha).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: 'long',
                  });

                  return (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`p-3 rounded-md cursor-pointer transition-all ${
                        isSelected ? 'bg-celestial-500 text-white' : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{event.titulo}</h4>
                        <span className={`text-sm ${isSelected ? 'text-celestial-100' : 'text-celestial-600'}`}>
                          {fechaStr}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-celestial-600 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-celestial-600 to-celestial-400 flex items-center p-6">
                  <h3 className="text-2xl font-bold text-white">{selectedEvent.titulo}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon size={18} className="mr-2 text-celestial-500" />
                    <span>{new Date(selectedEvent.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-celestial-500" />
                    <span>{selectedEvent.horaInicio}{selectedEvent.horaFin ? ` - ${selectedEvent.horaFin}` : ''}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent.ubicacion}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{richTextToPlainText(selectedEvent.descripcion)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
