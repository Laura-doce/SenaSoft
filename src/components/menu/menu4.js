import "./menu.css";
import logo from "../../pages/img/logo-dark.png";
import { Link } from "wouter";

export default function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link item" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link item" to="/productos">
                  Productos
                </Link>
              </li>
            </ul>
            <div class="d-flex" role="search">
              <Link class="btn btn-dark" to="/login">
                Inicio Sesión
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
