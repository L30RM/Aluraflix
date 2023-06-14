import { useState } from "react";
import logo from "./Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [swtch, setSwtch] = useState(false);

  const activarBoton = () => {
    setSwtch((swtch) => !swtch);
  };
  const visualizar = () => {
    if (swtch) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };

  return (
    <div className="header">
      <Link to={"/"} className="logo__head">
        <img src={logo} alt="Logo de Aluraflix" />
      </Link>

      <div className="menu">
        <div>
          <button className="agregar-video" onClick={activarBoton}>
            +
          </button>
        </div>

        <Link
          to={"/agregarnuevovideo"}
          style={visualizar()}
          className="nuevo-video__boton"
        >
          Nuevo vídeo
        </Link>
      </div>
    </div>
  );
};

export default Header;
