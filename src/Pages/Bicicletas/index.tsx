import "./bicicletas.scss";
import "../../styles/style.scss";
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
        bicicletasData.map((bicicleta) =>
          bicicleta.id === 2 ? (
            <div className="bicicletas-bg">
              <div className="bicicletas container" key={bicicleta.id}>
                <div className="bicicletas-imagem">
                  <img
                    width={"560px"}
                    src={bicicleta.src}
                    alt="Bicicleta preta"
                  />
                  <span className="price ">{bicicleta.price}</span>
                </div>
                <div className="bicicletas-conteudo">
                  <h2 className="bicicletasName white">{bicicleta.name}</h2>
                  <p className="bicicletaDescricao escura">
                    {bicicleta.description}
                  </p>
                  <ul className="bicicletasDetalhesEscuro">
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
            </div>
          ) : (
            <div className="bicicletas container" key={bicicleta.id}>
              <div className="bicicletas-imagem">
                <img
                  width={"560px"}
                  src={bicicleta.src}
                  alt="Bicicleta preta"
                />
                <span className="price ">{bicicleta.price}</span>
              </div>
              <div className="bicicletas-conteudo">
                <h2 className="bicicletasName black">{bicicleta.name}</h2>
                <p className="bicicletaDescricao clara">
                  {bicicleta.description}
                </p>
                <ul className="bicicletasDetalhesClaro">
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
          )
        )}
    </>
  );
};
export default Bicicletas;
