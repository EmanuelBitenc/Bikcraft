import bikcraft from "../../assets/imgs/bikcraft.svg";
import "./header.scss";
import "../../styles/global.scss";
import LinkList from "./LinkList";

const Header = () => {
  return (
    <div className="bg-black ">
      <div className="container">
        <div className=" header py-5 flex justify-between flex-wrap gap-5 items-center">
          <div>
            <a href="#">
              <img src={bikcraft} alt={"Logo Bikcraft"} />
            </a>
          </div>
          <nav>
            <ul className="flex gap-5 flex-wrap">
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
