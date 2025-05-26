import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-celestial-300">Iglesia Río Nuevo</h3>
            <p className="text-gray-400 mb-4">
              Somos una comunidad de fe comprometida con compartir el amor de Dios y transformar vidas a través de su palabra.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/IEMRioNuevo" className="text-gray-400 hover:text-celestial-400 transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/iglesiarionuevo" className="text-gray-400 hover:text-celestial-400 transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@iglesiaevangelicamundialri4840" className="text-gray-400 hover:text-celestial-400 transition">
                <Youtube size={20} />
              </a>
              <a href="https://tiktok.com" className="text-gray-400 hover:text-celestial-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-celestial-300">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link>
              </li>
              <li>
                <Link to="/grupos-crecimiento" className="text-gray-400 hover:text-white transition">Grupos de Crecimiento</Link>
              </li>
              <li>
                <Link to="/familia-joven" className="text-gray-400 hover:text-white transition">Familia Joven</Link>
              </li>
              <li>
                <Link to="/misiones" className="text-gray-400 hover:text-white transition">Misiones</Link>
              </li>
              <li>
                <Link to="/donar" className="text-gray-400 hover:text-white transition">Donar</Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-celestial-300">Horarios de Servicio</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>10:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Miércoles:</span>
                <span>7:00 PM - 8:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Viernes:</span>
                <span>7:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-celestial-300">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
               <a href="https://www.google.com/maps/place/Iglesia+Rio+Nuevo/@-17.7930218,-63.1977534,15z/data=!4m6!3m5!1s0x93f1e80f75b95825:0x5fa69b7598c6c20d!8m2!3d-17.784313!4d-63.1901291!16s%2Fg%2F11cnbx18lg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" className="text-gray-400 hover:text-celestial-400 transition">
                 <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Av. Landivar, Ichilo#38</span>
              </li>
              </a>
        
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>contacto@rionuevo.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Iglesia Río Nuevo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;