import React, { useState } from "react";
import "./form.css";
import { Link } from "wouter";
//import Swal from "sweetalert2";

export default function Form_registro() {
  const [tipoDocUsuaiorio, setTipoDocUsuaiorio] = useState("");
  const [numDocUsuario, setNumDocUsuario] = useState();
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setapellidoUsuario] = useState("");
  const [telefonoUsuario, settelefonoUsuario] = useState();
  const [direccionUsuario, setdireccionUsuario] = useState("");
  const [correoUsuario, setcorreoUsuario] = useState("");
  const [claveUsuario, setclaveUsuario] = useState("");

  const handSumit = async () => {
    const requiestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        tipoDocUsuaiorio,
        numDocUsuario,
        nombreUsuario,
        apellidoUsuario,
        telefonoUsuario,
        direccionUsuario,
        correoUsuario,
        claveUsuario,
      }),
    };

    const url = "";
    const response = await fetch(url, requiestOptions);
    const data = await response.json();

    if (!response.ok) {
      //setmessage(data);
    } else {
      //setmessage(data);
    }
  };

  return (
    // {message && Swal.fire("SweetAlert2 is working!");}
    <div className="container-sm">
      <div className="row ">
        <div className="col-3"> </div>
        <div className="col-7">
          <div className="c" id="c">
            <div className="form-c sign-in2">
              <form>
                <h1>Registrar</h1>
                <input
                  type="text"
                  placeholder="Tipo de documento"
                  value={tipoDocUsuaiorio}
                  onChange={(e) => {
                    e.preventDefault();
                    setTipoDocUsuaiorio(e.target.value);
                  }}
                  required
                />
                <input
                  type="number"
                  placeholder="Numero de documento"
                  value={numDocUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    setNumDocUsuario(e.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombreUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    setNombreUsuario(e.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={apellidoUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    setapellidoUsuario(e.target.value);
                  }}
                  required
                />
                <input
                  type="number"
                  placeholder="Telefono"
                  value={telefonoUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    settelefonoUsuario(e.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Direccion"
                  value={direccionUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    setdireccionUsuario(e.target.value);
                  }}
                  required
                />
                <input
                  type="email"
                  placeholder="Correo"
                  value={correoUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    setcorreoUsuario(e.target.value);
                  }}
                  required
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  min={8}
                  value={claveUsuario}
                  onChange={(e) => {
                    e.preventDefault();
                    setclaveUsuario(e.target.value);
                  }}
                  required
                />
                <button>Resgistrar</button>
              </form>
            </div>{" "}
            <div className="toggle-c">
              <div className="toggle2">
                <div className="toggle-panel2 toggle-right2">
                  <h1 className="letra2">Hola de nuevo!</h1>
                  <p>
                    Ingrese sus datos personales para utilizar todas las
                    funciones del sitio
                  </p>
                  <Link className="btn btn-outline-light hidden2" to="/login">
                    Inicio Sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
