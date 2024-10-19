import "./tecnologias.scss";

import tecnologia from "../../../assets/imgs/fotos/tecnologia.jpg";
import MainText from "./MainText";
import Vantagens from "./Vantagens";

const Tecnologias = () => {
  return (
    <article className="tecnologiaBg">
      <div className="tecnologia container">
        <div className="tecnologiaConteudo">
          <span className="uperText">Tecnologia Avançada</span>
          <MainText />
          <div className="tecnologiaVantagens">
            <Vantagens />
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
