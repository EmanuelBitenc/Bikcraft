import { Link } from "react-router-dom";
import bikcraft from "../../../assets/imgs/bikcraft.svg";
import "./header.scss";
import LinkList from "./LinkList";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="container">
        <div className="header">
          <div>
            <Link to="/">
              <img src={bikcraft} alt={"Logo Bikcraft"} />
            </Link>
          </div>
          <nav>
            <ul>
              <Link to="/bicicletas" className="linkAfter ">
                Bicicletas
              </Link>
              <LinkList href="#" label="Seguros" />
              <LinkList href="#" label="Contato" />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
