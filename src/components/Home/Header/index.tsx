import bikcraft from "../../../assets/imgs/bikcraft.svg";
import "./header.scss";
import LinkList from "./LinkList";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="container">
        <div className="header">
          <div>
            <a href="#">
              <img src={bikcraft} alt={"Logo Bikcraft"} />
            </a>
          </div>
          <nav>
            <ul>
              <LinkList href="./bicicletas" label="Bicicletas" />
              <LinkList href="./seguros" label="Seguros" />
              <LinkList href="./contato" label="Contato" />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
