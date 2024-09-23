import "./menu2.css";
import logo from "../../pages/img/logo-dark.png";
import { Link } from "wouter";

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand menu" to="/">
            <img
              src={logo}
              alt=""
              className="d-inline-block align-text-top logo"
            />{" "}
            <h1 className="site-title"> Clauw </h1>{" "}
            <span className="my-span"> Guardians </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link item" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link item" to="/servicios">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
