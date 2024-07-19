import introducao from "../../assets/imgs/intro/introducao.jpg";
import "../../styles/global.scss";
import "./intro.scss";

const Intro: React.FC = () => {
  return (
    <main className="intro-bg ">
      <div className="container ">
        <div className="intro">
          <div className="painelText">
            <h1>
              Bicicletas feitas sob medida
              <span>.</span>
            </h1>
            <p>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para você. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <a href="">Escolha a sua</a>
          </div>
          <div className="image">
            <img src={introducao} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Intro;
