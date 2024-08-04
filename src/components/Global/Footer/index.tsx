import "./footer.scss";

import bikcraft from "../../../assets/imgs/bikcraft.svg";

import instagram from "../../../assets/imgs/redes/instagram.svg";
import facebook from "../../../assets/imgs/redes/facebook.svg";
import youtube from "../../../assets/imgs/redes/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer container">
        <img src={bikcraft} width="136" height="32" alt="Bikcraft" />
        <div className="footer-contato">
          <h3 className="titleContato ">Contato</h3>
          <ul className="textContato ">
            <li>
              <a href="#">+55 21 9999-9999</a>
            </li>
            <li>
              <a href="#">contato@bikcraft.com</a>
            </li>
            <li>Rua Ali Perto, 42 - Botafogo</li>
            <li>Rio de Janeiro - RJ</li>
          </ul>
          <div className="footer-redes">
            <a href="./">
              <img src={instagram} width="32" height="32" alt="Instagram" />
            </a>
            <a href="./">
              <img src={facebook} width="32" height="32" alt="Facebook" />
            </a>
            <a href="./">
              <img src={youtube} width="32" height="32" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="footer-informacoes">
          <h3 className="titleContato ">Informações</h3>
          <nav>
            <ul className="textContato ">
              <li>
                <a href="./bicicletas.html">Bicicletas</a>
              </li>
              <li>
                <a href="./seguros.html">Seguros</a>
              </li>
              <li>
                <a href="./contato.html">Contato</a>
              </li>
              <li>
                <a href="./termos.html">Termos e Condições</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="footer-copy ">Bikcraft © Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
