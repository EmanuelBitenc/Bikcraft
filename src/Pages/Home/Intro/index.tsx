import introducao from "../../../assets/imgs/fotos/introducao.jpg";
import "../../../styles/global.scss";
import "./intro.scss";
import PainelText from "./PainelText";
import { useSpring, animated } from "@react-spring/web";

const Intro: React.FC = () => {
  const fade = useSpring({
    y: 0,
    opacity: 1,
    from: { y: -100, opacity: 0 },
    delay: 200,
  });

  return (
    <main className="intro-bg ">
      <div className="container ">
        <animated.div style={fade} className="intro">
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
        </animated.div>
      </div>
    </main>
  );
};
export default Intro;
