import "./registro.css";
import Form_registro from "../../components/formulario/form_registro";
import Footer from "../../components/footer/footer";
import Menu2 from "../../components/menu/menu2";

export default function Registro() {
  return (
    <div className="login">
      <Menu2 />
      <Form_registro />
      <Footer />
    </div>
  );
}
