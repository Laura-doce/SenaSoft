import "./formulario.css";
import { Link } from "wouter";

export default function Formulario() {
  return (
    <div className="container" id="container">
      <div className="form-container sign-in">
        <form>
          <h1>Inicio Sesión</h1>
          <input type="email" placeholder="Correo" required />
          <input type="password" placeholder="Contraseña" min={8} required />
          <Link to="/Registro">¿Olvidaste tu contraseña?</Link>
          <button>Inicio Sesión</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Hola de nuevo!</h1>
            <p>
              Ingrese sus datos personales para utilizar todas las funciones del
              sitio
            </p>
            <button className="hidden" id="login">
              Inicio Sesión
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="letra">Hola!</h1>
            <p>
              Regístrese con sus datos personales para utilizar todas las
              funciones del sitio{" "}
            </p>
            <Link className="btn btn-outline-light hidden" to="/Registro">
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
