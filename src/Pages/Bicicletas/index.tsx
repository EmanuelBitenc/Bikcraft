import "./bicicletas.scss";
import bicicletasData from "./bicicletasData";
import eletricaIcon from "../../assets/icons/eletrica.svg";
import carbonoIcon from "../../assets/icons/carbono.svg";
import velocidadeIcon from "../../assets/icons/velocidade.svg";
import rastreadorIcon from "../../assets/icons/rastreador.svg";
import { Link } from "react-router-dom";

const Bicicletas = () => {
  return (
    <>
      <div className="titulo-bg">
        <div className=" container">
          <p className="uperText">Escolha a melhor para você</p>
          <h1 className="titleBicicletas">
            nossas bicicletas<span className="destaque">.</span>
          </h1>
        </div>
      </div>
      {bicicletasData &&
        bicicletasData.map((bicicleta) => (
          <div className="bicicletas container">
            <div className="bicicletas-imagem">
              <img src={bicicleta.src} alt="Bicicleta preta" />
              <span className="font-2-m cor-0">{bicicleta.price}</span>
            </div>
            <div className="bicicletas-conteudo">
              <h2 className="font-1-xl">{bicicleta.name}</h2>
              <p className="font-2-s cor-8">{bicicleta.description}</p>
              <ul className="font-1-m cor-8">
                <li>
                  <img src={eletricaIcon} alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src={carbonoIcon} alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src={velocidadeIcon} alt="" />
                  50 km/h
                </li>
                <li>
                  <img src={rastreadorIcon} alt="" />
                  Rastreador
                </li>
              </ul>
              <Link to={bicicleta.href} className="botao seta">
                Mais Sobre
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};
export default Bicicletas;
