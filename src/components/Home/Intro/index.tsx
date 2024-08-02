import introducao from "../../../assets/imgs/fotos/introducao.jpg";
import "../../../styles/global.scss";
import "./intro.scss";
import PainelText from "./PainelText";

const Intro: React.FC = () => {
  return (
    <main className="intro-bg ">
      <div className="container ">
        <div className="intro">
          <PainelText />
          <picture className="">
            <source media="(max-width: 800px)" srcSet={introducao} />
            <img
              src={introducao}
              width="1280"
              height="1600"
              alt="Bicicleta elétrica preta."
            />
          </picture>
        </div>
      </div>
    </main>
  );
};
export default Intro;
