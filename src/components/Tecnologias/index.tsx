import "./tecnologias.scss";

import eletrica from "../../assets/icons/eletrica.svg";
import rastreador from "../../assets/icons/rastreador.svg";
import tecnologia from "../../assets/imgs/fotos/tecnologia.jpg";

const Tecnologias = () => {
  return (
    <article className="tecnologiaBg">
      <div className="tecnologia container">
        <div className="tecnologiaConteudo">
          <span className="uperText">Tecnologia Avançada</span>
          <h2 className="titleTec">
            você escolhe as suas cores e componentes
            <span className="destaque">.</span>
          </h2>
          <p className="paragrafoMain">
            Cada Bikcraft é única e possui a sua identidade. As medidas serão
            exatas para o seu corpo e altura, garantindo maior conforto e
            ergonomia na sua pedalada. Você pode também personalizar
            completamente as suas cores.
          </p>
          <a className="EscolhaBicicleta" href="./bicicletas.html">
            Escolha um modelo
          </a>
          <div className="tecnologiaVantagens">
            <div>
              <img src={eletrica} width="24" height="24" alt="" />
              <h3 className="tituloTec ">Motor Elétrico</h3>
              <p className="descricaoTec ">
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar.
              </p>
            </div>
            <div>
              <img src={rastreador} width="24" height="24" alt="" />
              <h3 className="tituloTec ">Rastreador</h3>
              <p className="descricaoTec ">
                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                rastreadores e sistemas anti-furto para garantir o seu sossego.
              </p>
            </div>
          </div>
        </div>
        <div className="tecnologiaImagem">
          <img src={tecnologia} width="1200" height="1920" alt="" />
        </div>
      </div>
    </article>
  );
};
export default Tecnologias;
