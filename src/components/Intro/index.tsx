import introducao from "../../assets/imgs/intro/introducao.jpg";
import "./intro.scss";

const Intro: React.FC = () => {
  return (
    <main className="introBg">
      <div className="container text-white">
        <div className="grid grid-cols-2">
          <div className="self-end pb-52">
            <h1 className="size-14 ">Bicicletas feitas sob medida.</h1>
            <p>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para você. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <a href="">Escolha a sua</a>
          </div>
          <img src={introducao} width={"1280px"} height={"1600px"} />
        </div>
      </div>
    </main>
  );
};
export default Intro;
