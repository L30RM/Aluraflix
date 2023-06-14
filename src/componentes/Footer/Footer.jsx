import logo from "./Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a className="logo__footer">
        <img src={logo} />
      </a>
    </div>
  );
};

export default Footer;
