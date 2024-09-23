import "./App.css";
import Index from "./pages/Index/index";
import Login from "./pages/Login/login";
import Registro from "./pages/Registro/registro";
import Servicios from "./pages/Servicios/servicios";
import Productos from "./pages/Productos/productos";
import { Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section>
        <Route path="/" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/productos" component={Productos} />
      </section>
    </div>
  );
}
