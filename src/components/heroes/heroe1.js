import "./heroe1.css";
import { Link } from "wouter";

export default function Heroe1() {
  return (
    <div className="heroes">
      <section className="hero">
        <div className="hero-text">
          <h1>Todo para tu mascota</h1>
          <p>Descubre nuestras ofertas y servicios exclusivos.</p>
          <Link to="/Servicios" className="cta-button">
            Conoce más
          </Link>
        </div>
      </section>
    </div>
  );
}
