import "./sections.css";
import { Link } from "wouter";
import UbiMascota from "../../pages/img/ubicacion_mascota.png";
import veterinario from "../../pages/img/veterinario_mascotas.png";
import peluqueria from "../../pages/img/peluqueria_mascota.png";
import guarderia from "../../pages/img/guarderia_mascota.png";
import spa from "../../pages/img//spa.jpg";
import capsula from "../../pages/img/capsula.jpg";

export default function Sections() {
  return (
    <div className="container3">
      <div className="service-wrapper">
        <div className="service">
          <h1 className="letra3">
            Nuestros Servicios <span></span>
          </h1>
          <div className="cards">
            <div className="card">
              <li className="nav-link icono">
                <img src={veterinario} alt="#" />
              </li>
              <h2>Veterinaria</h2>
              <p>
                En nuestra clínica veterinaria, ofrecemos un servicio integral
                diseñado para cuidar la salud y bienestar de tus mascotas.
                Nuestro equipo de veterinarios altamente capacitados y
                apasionados por los animales se dedica a proporcionar atención
                de calidad, desde chequeos de rutina hasta tratamientos
                especializados.
              </p>
              <Link to="#" className="btn btn-primary">
                Agendar
              </Link>
            </div>
            <div className="card">
              <li className="nav-link icono">
                <img src={peluqueria} alt="#" />
              </li>
              <h2>Peluquería</h2>
              <p>
                En nuestro salón de peluquería, nos especializamos en ofrecer un
                servicio de grooming completo para perros y gatos, asegurando
                que tu mascota no solo luzca bien, sino que también se sienta
                cómoda y feliz. Nuestro equipo de estilistas profesionales
                cuenta con la experiencia y las habilidades necesarias para
                atender a cada raza y tipo de pelaje.
              </p>
              <Link to="#" className="btn btn-primary">
                Agendar
              </Link>
            </div>
            <div className="card">
              <img src={guarderia} alt="#" />
              <div class="card-body">
                <h2>Guardería</h2>
                <p>
                  En nuestra guardería, ofrecemos un espacio seguro y acogedor
                  para perros y gatos, diseñado para brindarles el cuidado y la
                  atención que necesitan mientras sus dueños están fuera.
                  Nuestro equipo está compuesto por amantes de los animales,
                  comprometidos a proporcionar un ambiente divertido y
                  estimulante para tus mascotas.
                </p>
                <Link to="#" className="btn btn-primary">
                  Agendar
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={spa} alt="#" />
              <div class="card-body">
                <h2>Spa</h2>
                <p>
                  En nuestro exclusivo spa para mascotas, ofrecemos una
                  experiencia de relajación y cuidado diseñada especialmente
                  para perros y gatos. Nuestro objetivo es proporcionar un
                  ambiente tranquilo y lujoso donde tu mascota pueda disfrutar
                  de tratamientos que no solo mejoran su apariencia, sino que
                  también promueven su bienestar general.
                </p>
                <Link to="#" className="btn btn-primary">
                  Agendar
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={UbiMascota} alt="#" />
              <div className="card-body">
                <h2>Ruta de Mascotas</h2>
                <p>
                  Nuestro servicio de ruta de transporte para perros y gatos
                  está diseñado para brindar un viaje seguro, cómodo y confiable
                  para tus mascotas. Ya sea que necesites llevar a tu peludo
                  amigo al veterinario, a la guardería, o a un spa, nuestro
                  equipo está aquí para hacer que el traslado sea una
                  experiencia sin estrés.
                </p>
                <Link to="#" className="btn btn-primary">
                  Agendar
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={capsula} alt="#" />
              <div class="card-body">
                <h2>!Nuestro ¡</h2>
                <p>
                  En nuestro spa y peluqueria para mascotas, contamos con una
                  secadora felina exclusiva que transforma la experiencia de
                  acicalado en algo realmente especial. Este equipo avanzado
                  está diseñado específicamente para satisfacer las necesidades
                  de los gatos, garantizando un secado eficiente y cómodo.
                </p>
                <Link to="#" className="btn btn-primary">
                  Agendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
