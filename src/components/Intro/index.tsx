import introducao from "../../assets/imgs/intro/introducao.jpg";
import "../../styles/global.scss";
import "./intro.scss";

const Intro: React.FC = () => {
  return (
    <main className="introBg ">
      <div className="container  text-white">
        <div className="grid grid-cols-2 gap-5 ">
          <div className="self-end pb-72 w-3/5">
            <h1 className="title text-5xl font-bold ">
              Bicicletas feitas sob medida
              <span style={{ color: "#ffbb00" }}>.</span>
            </h1>
            <p>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para você. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <a href="">Escolha a sua</a>
          </div>
          <picture>
            <img src={introducao} width={"1280px"} height={"1600px"} />
          </picture>
        </div>
      </div>
    </main>
  );
};
export default Intro;
