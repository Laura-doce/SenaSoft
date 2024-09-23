import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";
import Menu2 from "../../components/menu/menu2";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <Menu2 />
      <Formulario />
      <Footer />
    </div>
  );
}
