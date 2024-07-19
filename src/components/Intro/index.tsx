import introducao from "../../assets/imgs/intro/introducao.jpg";
import "../../styles/global.scss";
import "./intro.scss";
import PainelText from "./PainelText";

const Intro: React.FC = () => {
  return (
    <main className="intro-bg ">
      <div className="container ">
        <div className="intro">
          <PainelText />
          <div className="image">
            <img src={introducao} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Intro;
